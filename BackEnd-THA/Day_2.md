<h1>PostGresql</h1>

<h4>
<h3>General</h3>

- create user <username> with password <password> - creates new user</br></t>
- create databse <dbanme> - creates database with name </br></t>
- grant all perivileges on database <dbname> to <username> - granst permissions to user on a database </br></t>
- \c <dbname> <username> - connect to a database using username</br></t>
- \l - list all database</br></t>
- drop database <dbname> -deletes database</br></t></br></t>

<h3>Create a table</h3>
  create table company(</br></t>
id int not null,</br></t>
name char(50),</br></t>
age int not null,</br></t>
address text </br></t>
);</br></t>

- \d - displays tables </br></t>
- \d <tablename> - shows table structure</br></t>
- drop table <tablename> - deletes table</br></t>
  create table dept(</br></t>
  id int primary key not null, - making it primary key</br></t>
  dept char(50) not null,</br></t>
  emp_id int not null</br></t>
  );</br></t>

- create schema mySchema - create an empty schema</br></t>

<h3></h3>
  create table mySchema.company(</br></t>
  id int not null,</br></t>
  name varchar(20) not null,</br></t>
  age int not null,</br></t>
  address char(25),</br></t>
  salary decimal(18,4),</br></t>
  primary key(id)</br></t>
  );</br></t>

- drop schema <name> - deletes schema</br></t>
- drop schema <name> cascade - deletes tables inside too</br></t>
  insert into company(id,name,age,address,salary,join_date) </br></t>
  values(3,'kamal',21,'Jharkhand',24000,'2-02-2015');</br></t>

- select \* from <tableName> - shows whole table</br></t>
- _All commands are same as SQL_</br></t>
- 'M_rve%' - M(a-z)rve(anything) ex Marvel or Marvelinasfashfshfies </br></t>
- select \* from <name> where salary::text like '100%' - converts salary to text and checks for prefix</br></t>
- select age from company where age between 25 and 27 = age in (25,27) - range checking </br></t>
- update <name> set salary = 12000 , age =23 where id=3 - update a row value</br></t>
- delete from <tableName> where id = 2 - deletes row with condition</br></t>

<h3></h3>
create table customers(</br></t>
cust_id int not null,</br></t>
cust_name varchar(30) not null,</br></t>
primary key(cust_id)</br></t>
);</br></t>

create table contacts(</br></t>
cont_id int not null,</br></t>
cust_id int,</br></t>
cont_name varchar(30) not null,</br></t>
phone varchar(15),</br></t>
email varchar(50),</br></t>
primary key(cont_id),</br></t>
constraint fr_customer</br></t>
foreign key(cust_id)</br></t>
references customers(cust_id)</br></t>
on delete cascade</br></t>
);</br></t>
on delete cascade means if in customers table customer id is deleted then it gets deleted from here too</br></t>

</h4>
