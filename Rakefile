desc "Compile the site"
task :compile => [:clean] do
  puts "Compiling site"
  out = `bundle exec nanoc compile`

  if $?.to_i == 0
    puts  "Compilation succeeded"
  else
    abort "Compilation failed: #{$?.to_i}\n" +
          "#{out}\n"
  end
  cp 'README.md', 'output/', :verbose => true
  sh './deploy.sh'
end

task :clean do
  FileUtils.rm_r('output') if File.exist?('output')
end

task :default => 'compile'
