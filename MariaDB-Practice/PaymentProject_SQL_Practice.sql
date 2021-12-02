create table receiver_data(BIC varchar(50),CustomerID bigint,
RecInstitutionName varchar(50),MessageCode varchar(50),Instruction varchar(60),
CUR varchar(10),VALUE float,primary key(BIC),foreign key(CustomerID) references internal_data(CustomerID));

select * from receiver_data;
select * from internal_data;

select CustomerID,AccountHolderName,Overdraft from internal_data where Overdraft="YES" or Overdraft="yes";

select CustomerID,AccountHolderName from internal_data where ClearBalance>500000 and Overdraft="no";


select avg(ClearBalance) from internal_data;

select AccountHolderName,ClearBalance from internal_data where
ClearBalance>(Select avg(ClearBalance) from internal_data);

Select CustomerID,AccountHolderName,BIC from internal_data inner join receiver_data using(CustomerID); 

select CustomerID from receiver_data where RecInstitutionName like "A%";


