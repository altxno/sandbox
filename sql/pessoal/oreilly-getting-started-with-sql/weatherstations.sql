select name, type from sqlite_master;

select * from station_data;
select count(*) from station_data;

pragma table_info (STATION_DATA);

select * from station_data
where year = 2010;

-- "!=" e "<>" tem o mesmo valor operacional
select * from station_data
where year != 2010 and
      year <> 2011;

select * from STATION_DATA
where year between 2005 and 2006;

select * from STATION_DATA
where year >= 2005 and year < 2010;

select * from STATION_DATA
where month = 3
or month = 6
or month = 9
or month = 12;

select * from STATION_DATA
where month in (1, 2, 3)
and year not in (2009, 2010);

select * from STATION_DATA
where month % 6 = 0;

select * from STATION_DATA
where report_code in ('A38C90', '4F2A37');

-- length() conta o numero de caracteres
select * from STATION_DATA
where length(report_code) != 6;

select * from STATION_DATA
where report_code like 'b_c%'