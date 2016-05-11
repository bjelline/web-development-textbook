---
title: Indexes
order: 20
---


<script>document.location="/php-db-optimierung/indexes/";</script>


<sql caption="Eine Abfrage die sehr lange dauert">
mysql> mysql> SELECT  `tracks`.* FROM `tracks`  WHERE (active = 1) ORDER BY likes DESC LIMIT 12 OFFSET 0;
+-------+----------------+-------+--------+---------+
| id    | trackname      | likes | active | length  |
+-------+----------------+-------+--------+---------+
|  5322 | Wild Ride      |   274 |      1 | 8.34391 | 
| 67098 | Cats of Greece |   264 |      1 | 4.40012 | 
|  7758 | Spring         |   212 |      1 | 24.7774 | 
| 13811 | ENDLESS 4.1    |   190 |      1 | 776.986 | 
| 36932 | Kreuz          |   167 |      1 | 123.597 | 
|  7953 | Devteam        |   158 |      1 | 13.1029 | 
| 13348 | twoways        |   145 |      1 |  11.734 | 
|  7535 | UPSTAIR        |   131 |      1 | 10.6878 | 
|  7775 | AIRAMX         |   101 |      1 | 343.825 | 
|    76 | goal           |    98 |      1 |  4.2665 | 
| 51980 | Haus           |    94 |      1 | 4.53178 | 
|   634 | Fly With Me    |    93 |      1 | 20.3152 | 
+-------+----------------+-------+--------+---------+
12 rows in set (35.75 sec)
</sql>

§

Warum dauert diese Abfrage so lange?  Das können wir mit dem Befehl `EXPLAIN` erforschen:

![Explain](/images/explain-1.png)

Die wichtige Information steckt in der Spalte `key`:

| id | table  | key    | key_len | rows  | Extra                         |
|---:|:-------|:-------|:--------|:------|:------------------------------+
|  1 | tracks | `NULL` | NULL    | 90776 | `Using where; Using filesort` | 
{: class="table table-bordered" style="width:auto"}

## Index erzeugen

<sql>
mysql> CREATE INDEX likes ON tracks (likes);
Query OK, 86122 rows affected (9 min 32.71 sec)
Records: 86122  Duplicates: 0  Warnings: 0
</sql>


§

![Explain](/images/explain-2.png)

| id | table  | key     | key_len | rows   | Extra                       |
|---:|:-------|:--------|:--------|:-------|:----------------------------+
|  1 | tracks | `likes` | 5       | 111170 | `Using where`               | 
{: class="table table-bordered" style="width:auto"}

§

<sql>
mysql> SELECT  `tracks`.* FROM `tracks`  WHERE (active = 1) ORDER BY likes DESC LIMIT 12 OFFSET 0;
+-------+----------------+-------+--------+---------+
| id    | trackname      | likes | active | length  |
+-------+----------------+-------+--------+---------+
|  5322 | Wild Ride      |   274 |      1 | 8.34391 | 
| 67098 | Cats of Greece |   264 |      1 | 4.40012 | 
|  7758 | Spring         |   212 |      1 | 24.7774 | 
| 13811 | ENDLESS 4.1    |   190 |      1 | 776.986 | 
| 36932 | Kreuz          |   167 |      1 | 123.597 | 
|  7953 | Devteam        |   158 |      1 | 13.1029 | 
| 13348 | twoways        |   145 |      1 |  11.734 | 
|  7535 | UPSTAIR        |   131 |      1 | 10.6878 | 
|  7775 | AIRAMX         |   101 |      1 | 343.825 | 
|    76 | goal           |    98 |      1 |  4.2665 | 
| 51980 | Haus           |    94 |      1 | 4.53178 | 
|   634 | Fly With Me    |    93 |      1 | 20.3152 | 
+-------+----------------+-------+--------+---------+
12 rows in set (0.31 sec)
</sql>

