CREATE TABLE Register (
    id INTEGER PRIMARY KEY,
    RegFirstName VARCHAR(50) NOT NULL,
    RegLastName VARCHAR(50) NOT NULL,
    RegEmail VARCHAR(50) NOT NULL UNIQUE,
    RegPassword VARCHAR(50) NOT NULL,
    RegDate  DATETIME NOT NULL
);


INSERT INTO Register(RegFirstName,RegLastName,RegEmail,RegPassword,RegDate)
VALUES('Ferid','kerim','feridkerim04@gmail.com','123456','02.05.2020')

SELECT * FROM ContactUs;
SELECT * FROM Register;
SELECT * FROM Login;

DROP TABLE Login

DELETE FROM Register WHERE id=1

CREATE TABLE Login (
    id INTEGER PRIMARY KEY,
    LoginEmail VARCHAR(50) NOT NULL,
    LoginPassword VARCHAR(50) NOT NULL,
    CONSTRAINT enter_login FOREIGN KEY (LoginEmail) REFERENCES Register(RegEmail),
    CONSTRAINT enter_password FOREIGN KEY (LoginPassword) REFERENCES Register(RegPassword)
);


INSERT INTO Login(LoginEmail,LoginPassword)
VALUES('feridddkerim04@gmail.com','123453')


CREATE TABLE ContactUs (
    id INTEGER PRIMARY KEY,
    UserName VARCHAR(50) NOT NULL,
    UserEmail VARCHAR(50) NOT NULL,
    Subject VARCHAR(50) NOT NULL,
    Message  VARCHAR(50) NOT NULL
);


INSERT INTO ContactUs(UserName,UserEmail,Subject,Message)
VALUES('ferid','feridkerim04@gmail.com','salam','aleykum salam');