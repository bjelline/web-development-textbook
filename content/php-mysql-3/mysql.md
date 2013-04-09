---
title: Database Engines
order: 10
---

Achtung: während Indexes von MySQL und MariaDB immer unterstütz
werden, sind Constraints und Transaktionen nur in manchen "Database Engines"
verfügbar.

## Engines von MySQL

Mit dem Befehl `show engines` kann man die installierten Database Engines anzeigen:

| Engine     | Support  | Comment                                                        |
|:-----------|:---------|:---------------------------------------------------------------|
| MyISAM     | DEFAULT  | Default engine as of MySQL 3.23 with great performance         |
| MEMORY     | YES      | Hash based, stored in memory, useful for temporary tables      |
| InnoDB     | YES      | Supports transactions, row-level locking, and foreign keys     |
| BerkeleyDB | DISABLED | Supports transactions and page-level locking                   |
| BLACKHOLE  | NO       | /dev/null storage engine (anything you write to it disappears) |
| EXAMPLE    | NO       | Example storage engine                                         |
| ARCHIVE    | NO       | Archive storage engine                                         |
| CSV        | NO       | CSV storage engine                                             |
| ndbcluster | NO       | Clustered, fault-tolerant, memory-based tables                 |
| FEDERATED  | NO       | Federated MySQL storage engine                                 |
| MRG_MYISAM | YES      | Collection of identical MyISAM tables                          |
| ISAM       | NO       | Obsolete storage engine                                        |
{: class="table table-condensed table-bordered" style="width:auto"}

## Engines von MariaDB

| Engine     | Support  | Comment                                                         | Transactions | XA   | Savepoints |
|:-----------|:---------|:----------------------------------------------------------------|:-------------|:-----|:-----------|
| CSV                | YES     | CSV storage engine                                              | NO           | NO   | NO         |
| InnoDB             | DEFAULT | Percona-XtraDB, transactions, row-level locking, + foreign keys | YES          | YES  | YES        |
| MEMORY             | YES     | Hash based, stored in memory, useful for temporary tables       | NO           | NO   | NO         |
| MyISAM             | YES     | MyISAM storage engine                                           | NO           | NO   | NO         |
| MRG_MYISAM         | YES     | Collection of identical MyISAM tables                           | NO           | NO   | NO         |
| PERFORMANCE_SCHEMA | YES     | Performance Schema                                              | NO           | NO   | NO         |
| Aria               | YES     | Crash-safe tables with MyISAM heritage                          | NO           | NO   | NO         |
{: class="table table-condensed table-bordered" style="width:auto"}

