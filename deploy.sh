#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "master" ]; then
    echo "Skipping deploy"
    exit 0
fi

# Save some useful information
REPO=git@github.com:web-development/web-development.github.io.git
SHA=`git log -1 --pretty=%h`
MESSAGE=`git log -1 --pretty=%B`
AUTHOR=`git log -1 --pretty=%an`
EMAIL=`git log -1 --pretty=%ae`
echo "will commit ${AUTHOR} <${EMAIL}>: commit ${SHA} ${MESSAGE}"
echo "to repo ${SSH_REPO}"

echo `file deploy.key.enc`
echo "openssl aes-256-cbc -K $encrypted_2361f051d5e5_key -iv $encrypted_2361f051d5e5_iv -in deploy.key.enc -out deploy.key -d"
openssl aes-256-cbc -K $encrypted_2361f051d5e5_key \
                   -iv $encrypted_2361f051d5e5_iv \
                   -in deploy.key.enc \
                   -out deploy.key -d

chmod 600 deploy.key
echo `file deploy.key`

echo "adding to ssh-agent"
eval `ssh-agent -s`
ssh-add deploy.key

# Clone the existing github pages into out/
echo "git clone $REPO out"
git clone $REPO out

# copy over built pages (done before by rake)
cp -a output/* out/

# Now let's go have some fun with the cloned repo
cd out
git config user.name "$AUTHOR via Travis CI"
git config user.email "$EMAIL"

# If there are no changes to the compiled out (e.g. this is a README update) then just bail.
if [ -z `git diff --exit-code` ]; then
    echo "No changes to the output on this build; exiting."
    exit 0
fi

echo 'Commit the "changes", i.e. the new version.'
# The delta will show diffs between new and old versions.
git add .
git commit -m "${MESSAGE} (originally ${SHA})"

# Now that we're all set up, we can push.
echo "git push origin master"
git push origin master
