-- ======================================================================
-- EXERCÍCIOS — ENUNCIADOS GERADOS POR IA
-- ======================================================================

-- 1.
-- Usando PRODUCT, retorne os produtos cujo preço seja maior que 10.

select * from product
where price > 10;

-- 2.
-- Usando PRODUCT, retorne os produtos cujo preço esteja entre 4 e 8.

select * from product
where price between 4 and 8;

-- 3.
-- Usando PRODUCT, retorne os produtos cujo preço seja diferente de 4.

select * from product
where price != 4;

-- 4.
-- Usando PRODUCT, retorne apenas os produtos:
-- Copper, Silver e Bronze.

select * from product
where description in ('Copper','Silver','Bronze');

-- 5.
-- Usando PRODUCT, mostre description, price e uma nova coluna
-- chamada taxed_price, contendo o preço com 10% de acréscimo.

select
    description,
    price,
    (price * 1.10) as taxed_price
from product;

-- 6.
-- Usando PRODUCT, faça o exercício anterior arredondando
-- taxed_price para 2 casas decimais.

select
    description,
    price,
    round(price * 1.10, 2) as taxed_price
from product;

-- 7.
-- Usando CUSTOMER, retorne os clientes que estão na cidade
-- de Irving.

select * from customer
where city = 'Irving';

-- 8.
-- Usando CUSTOMER, retorne os clientes que estão no estado
-- do Texas (TX).

select * from customer
where state = 'TX';

-- 9.
-- Usando CUSTOMER, crie uma coluna chamada address contendo
-- city + ", " + state.

select
    *,
    (city|| ', ' ||state) as address
from customer;


-- 10.
-- Usando CUSTOMER_ORDER, retorne os pedidos cuja quantidade
-- seja maior que 400.

select * from customer_order
where order_qty > 400;

-- 11.
-- Usando CUSTOMER_ORDER, retorne os pedidos cuja quantidade
-- esteja entre 300 e 500.

select * from customer_order
where order_qty between 300 and 500;

-- 12.
-- Usando CUSTOMER_ORDER, retorne os pedidos realizados pelo
-- customer_id 3.

select * from customer_order
where customer_id = 3;

-- 13.
-- Usando CUSTOMER_ORDER, retorne os pedidos cujo product_id
-- seja 2 ou 5.

select * from customer_order
where product_id in (2, 5);

-- 14.
-- Usando CUSTOMER_ORDER, retorne os pedidos que ainda não
-- foram enviados.

select * from customer_order
where not shipped;

-- 15.
-- Usando CUSTOMER_ORDER, mostre order_id, order_qty e uma
-- nova coluna chamada doubled_qty contendo o dobro de order_qty.

select
    order_id,
    order_qty,
    (order_qty * 2) as doubled_qty
from customer_order;

-- 16.
-- Usando CUSTOMER_ORDER, retorne os pedidos realizados
-- depois de 2015-05-17.

select * from customer_order
where order_date > '2015-05-17';

-- 17.
-- Usando CUSTOMER_ORDER, retorne os pedidos realizados
-- entre 2015-05-17 e 2015-05-20, inclusive.

select * from customer_order
where ship_date between '2015-05-17' and '2015-05-20';

-- 18.
-- Usando PRODUCT, retorne os produtos cujo description
-- contenha a letra "o".

select * from product
where description like '%o%';

