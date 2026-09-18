-- ======================================================================
-- EXERCÍCIOS - (ENUNCIADOS GERADOS POR IA COM BASE NO CONTEÚDO)
-- ======================================================================

-- 1.
-- Usando STATION_DATA, retorne todos os registros
-- em que a temperatura seja maior ou igual a 80
-- E a precipitação seja menor ou igual a 0.5.

select * from station_data
where temperature >= 80 and precipitation <= 0.5;

-- 2.
-- Usando STATION_DATA, retorne todos os registros
-- do ano de 2010.

select * from station_data
where year = 2010;

-- 3.
-- Usando STATION_DATA, retorne todos os registros
-- dos meses 6, 7, 8 e 9.

select * from station_data
where month between 6 and 9;

-- 4.
-- Usando STATION_DATA, retorne todos os registros
-- em que a temperatura esteja entre 60 e 70.

select * from station_data
where temperature between 60 and 70;

-- 5.
-- Usando STATION_DATA, retorne todos os registros
-- em que NÃO tenha ocorrido chuva.

select * from station_data
where not rain;

-- 6.
-- Usando STATION_DATA, retorne todos os registros
-- em que tenha ocorrido chuva OU neve.

select * from station_data
where rain or snow_depth > 0;

-- 7.
-- Usando STATION_DATA, retorne todos os registros
-- em que a profundidade da neve seja maior que 0
-- e tenha ocorrido chuva.

select * from station_data
where rain and snow_depth > 0;

-- 8.
-- Usando STATION_DATA, retorne todos os registros
-- em que precipitation seja NULL.

select * from station_data
where precipitation is null;

-- 9.
-- Usando STATION_DATA, retorne todos os registros
-- em que report_code tenha exatamente 6 caracteres.

select * from station_data
where length(report_code) = 6;

-- 10.
-- Usando STATION_DATA, retorne todos os registros
-- cujo report_code comece com a letra "A".

select * from station_data
where report_code like 'A%';

-- **********************************************************

-- 1. Mostre o ano e a quantidade de registros com tornado em cada ano.
-- Ordene do ano mais recente para o mais antigo.

select year as ANO,
       sum(tornado) as TORNADO_QTD
from station_data
group by year
order by year desc;

-- 2. Para cada ano e mês, mostre a precipitação total.
-- Considere apenas registros a partir de 2000 e ordene cronologicamente.

select year as ANO,
       month as MES,
       round(sum(precipitation), 2) as PRECIPITACAO_DO_MES
from station_data
where year >= 2000
group by 1, 2
order by 1 desc, 2 desc;

-- 3. Calcule a temperatura média de cada mês considerando apenas os anos
-- a partir de 2000.

select month mes,
       round(avg(temperature), 1) temp_media,
       round(max(temperature)) temp_max, -- extra
       round(min(temperature)) temp_min  -- extra
from station_data
where year >= 2000
group by 1
order by 1;

-- 4. Para cada ano a partir de 2000, mostre a quantidade total de
-- snow_depth e a maior profundidade de neve registrada naquele ano.

select year ano,
       coalesce(round(sum(snow_depth), 1), 'N/A') soma_neve_ano,
       coalesce(round(max(snow_depth), 1), 'N/A') neve_max_dia
from station_data
group by year
order by year desc;

-- 5. Classifique cada registro como:
-- HIGH: velocidade >= 40
-- MODERATE: velocidade >= 30
-- LOW: velocidade < 30
-- Depois mostre, para cada ano, quantos registros existem em cada classificação.

select
    report_code,
    wind_speed,
    (case
         when wind_speed >= 40 then 'ta vento'
         when wind_speed >= 30 then 'um pouco vento'
         else 'nem ta vento'
        end) as wind_force
from station_data;


-- 6. Para cada ano, mostre em colunas separadas a precipitação total:
-- durante tornados
-- sem tornados

select year,
       round(sum(case when tornado then precipitation end),2)
           as total_precipitation_tornado,
       round(sum(case when not tornado then precipitation end),2)
           as total_precipitation_non_tornado
from station_data
group by year
order by year desc;


-- 7. Faça o mesmo do exercício anterior, mas separando por ano e mês.

select year,
       month,
       round(sum(case when tornado then precipitation end),2)
           as total_precipitation_tornado,
       round(sum(case when not tornado then precipitation end),2)
           as total_precipitation_non_tornado
from station_data
group by month, year
order by year desc, month desc;

-- 8. Para cada ano, mostre:
-- maior precipitação durante um tornado
-- maior precipitação sem tornado

select year,
       max(case when tornado then precipitation end) as max_prep_tornado,
       max(case when not tornado then precipitation end) as max_prep_not_tornado
from station_data
group by year
order by year desc;

-- 9. Para cada mês, calcule a temperatura média:
-- quando houve rain OU hail
-- quando não houve rain nem hail

select month,
       round(avg(case when (rain or hail) then temperature end),1)
        temp_rain_hail,
       round(avg(case when not(rain or hail) then temperature end),1)
        temp_not_rain_hail
from station_data
group by month
order by 1;

-- 10. Mostre os anos cuja precipitação total foi maior que 30.
-- Exiba também a maior precipitação registrada naquele ano.

select year,
       round(sum(precipitation),2) as total_prep,
       round(max(precipitation),2) as max_prep
from station_data
group by year
having sum(precipitation) > 30
order by year desc;

-- 11. Para cada ano, mostre:
-- quantidade de tornados
-- maior velocidade do vento durante tornado
-- maior velocidade do vento fora de tornado



-- 12. Para cada ano, mostre:
-- precipitação total com tornado
-- precipitação total sem tornado
-- diferença entre as duas


-- 13. Para cada ano a partir de 2000, mostre:
-- temperatura média
-- precipitação total
-- maior velocidade do vento
-- quantidade de registros com tornado


-- 14. Para cada ano e mês, mostre:
-- precipitação total
-- precipitação durante tornados
-- maior velocidade do vento
-- temperatura média


-- 15. DESAFIO
-- Para cada ano a partir de 2000, mostre:
-- year
-- total_precipitation
-- tornado_precipitation
-- non_tornado_precipitation
-- max_tornado_precipitation
-- max_non_tornado_precipitation
-- avg_temperature
-- max_wind_speed
--
-- Depois, mostre somente os anos cuja precipitação total seja maior que 30.