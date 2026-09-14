-- Devido a arquitetura monobanco do SQLite, não é necessário "use <nomedobanco>"

select name, type from sqlite_master;

select * from customer;
select customer_id, name from customer;
select * from product;

select
    product_id,
    description,
    price as untaxed_price,
    price * 1.07 as taxed_price
from product;

-- round(valor, casasdecimais)
select *, round(price * 1.10, 2) as taxed_price from product;

-- o operador "||" é de concatenação
select
    name,
    city || ', ' || state as ADDRESS,
    zip
from customer;

