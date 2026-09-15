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

