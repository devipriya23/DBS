select * from internal_data;
DELIMITER //

CREATE OR REPLACE PROCEDURE SampleProc()
BEGIN
Select count(*) from internal_data;
END;
//

CALL SampleProc;

DELIMITER //

CREATE OR REPLACE PROCEDURE sample(id bigint)
BEGIN
SELECT * FROM internal_data where CustomerID=id;
END;
//


DELIMITER //

CREATE OR REPLACE PROCEDURE example(ID bigint,Name varchar(50),Balance int,Tranfer varchar(50),draft varchar(5))
BEGIN
INSERT INTO internal_data(CustomerID,AccountHolderName,ClearBalance,TranferType,Overdraft)
SELECT ID,NAME,Balance,Tranfer,draft;
END;
//

CALL example(12345678987654,'DEVIPRIYA',100000,"bank transfer" ,'YES');

CALL sample(13645221972859);