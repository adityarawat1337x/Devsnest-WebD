<h1>PostGres</h1>

<h4>
<h3>General</h3>
  create user <username> with password <password> - creates new user</br></t>
  create databse <dbanme> - creates database with name </br></t>
  grant all perivileges on database <dbname> to <username> - granst permissions to user on a database </br></t>
  \c <dbname> <username> - connect to a database using username</br></t>
  \l - list all database</br></t>
  drop database <dbname> -deletes database</br></t></br></t>
<h3>Create a table</h3>
  create table company(</br></t>
id int not null,</br></t>
name char(50),</br></t>
age int not null,</br></t>
address text </br></t>
);</br></t>
\d - displays tables </br></t>
\d <tablename> - shows table structure</br></t>
drop table <tablename> - deletes table</br></t>

</h4>
