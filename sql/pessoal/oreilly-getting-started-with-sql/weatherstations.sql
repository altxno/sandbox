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

-- *****************************************************************************

select count(*) as record_count from station_data
where tornado;

select year, month,
       count(*) as record_count
from station_data
where tornado is true
group by year, month;

select year, month,
       count(*) as record_count
from station_data
where tornado is true
-- 1 e 2 equivalem a posição da coluna no select
group by 1, 2
order by 1 desc, 2;

select count(snow_depth) from station_data;

select count(*) from station_data
where snow_depth is null;

-- temperatura media de cada mes a partir de 200
-- e agrupar por mes calcular media em cima do mes

select * from station_data;

select
    month,
    avg(temperature) as avg_temperature
from station_data
where year >= 2000
group by 1
order by 1;

select
    year,
    sum(snow_depth) as total_snow
from station_data
where year >= 2000
group by year;

select
    year,
    sum(snow_depth) as total_snow,
    max(precipitation) as max_precipitation
from station_data
where year >= 2000
group by year;

select
    year,
    sum(precipitation) as tornado_precipitation
from station_data
where tornado
group by year;

select
    year,
    sum(precipitation) as total_precipitation
from station_data
group by year
having total_precipitation > 30;

select report_code, year, month, day, wind_speed,
case
    when wind_speed >= 40 then 'HIGH'
    when wind_speed >= 30 then 'HIGHMODERATE'
    else 'LOW'
end as wind_severity
from station_data;

select
    year,
    case
        when wind_speed >= 40 then 'HIGH'
        when wind_speed >= 30 then 'MODERATE'
        else 'LOW'
    end as wind_severity,
    count(*) as record_count
from station_data
group by 1, 2;

select
    year,
    month,
    sum(precipitation) as tornado_precipitation
from station_data
where tornado
group by 1, 2;

select
    year,
    month,
    sum(precipitation) as tornado_precipitation
from station_data
where not tornado
group by 1, 2;

select
    year,
    month,
    sum (case when tornado then precipitation else 0 end) as tornado_precipitation,
    sum (case when not tornado then precipitation else 0 end) as not_tornado_precipitation
from station_data
group by 1, 2;


