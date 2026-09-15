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
where report_code like 'b_c%';

select * from station_data
where tornado = true and hail;

select * from station_data where not rain;

select * from STATION_DATA where rain = 0;

select * from STATION_DATA
where snow_depth is not null;

select * from STATION_DATA
where precipitation  <= 0.5 or precipitation is null;

select * from station_data
where coalesce( precipitation , 0) <= 0.5;
-- OU
select * from station_data
where CASE
          WHEN precipitation IS NOT NULL THEN precipitation
          ELSE 0
          END <= 0.5;

select * from STATION_DATA
where (rain and snow_depth > 0)
or snow_depth > 0;

PRAGMA table_info(STATION_DATA);

-- ***********************************************************************************


