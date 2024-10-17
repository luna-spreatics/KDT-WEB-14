create table instructor (
  id int primary key,
  name varchar(7),
  dept_name varchar(7),
  salary int
);

create table teaches (
  id int primary key,
  course varchar(7),
  semester varchar(7),
  year varchar(4)
);

insert into instructor values (1, 'james', '심리', 95000);
insert into instructor values (2, 'john', '컴공', 95000);

insert into teaches values (1, '운영체제', '봄', '2022');
insert into teaches values (2, '상담심리', '가을', '2023');

-- INNER JOIN
select * from instructor join teaches; -- CROSS
select * from instructor I join teaches T on I.id=T.id; -- INNER

/*
Outer Join은 공통된 부분만 결합하는 Inner Join과 다르게 공통되지 않은 row도 유지한다
이때, 왼쪽 테이블의 row를 유지하면 Left (Outer) Join,
오른쪽 테이블의 row를 유지하면 Right (Outer) Join,
양쪽 테이블의 row를 모두 유지하면 Full Outer Join
*/

delete from teaches where id <= 2;

select * from instructor;
select * from teaches;

-- LEFT OUTER JOIN
select * from instructor I left outer join teaches T on I.id=T.id;

-- RIGHT OUTER JOIN
select * from instructor I right outer join teaches T on I.id=T.id;
