---
title: Constraints 
order: 30
---

TODO


<sql>
SELECT * FROM `projects_roles_users` 
WHERE user_id NOT IN (SELECT id FROM users)
</sql>
