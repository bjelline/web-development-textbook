---
title: Constraints 
order: 30
---

<script>document.location="/php-db-optimierung/constraints/";</script>


<sql>
SELECT * FROM `projects_roles_users` 
WHERE user_id NOT IN (SELECT id FROM users)
</sql>
