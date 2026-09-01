select * from actor;
select * from customer;
select * from customer
        inner join address on customer.address_id = address.address_id;
select * from payment;
-- Gere uma consulta de todos os pagamentos do cliente de codigo = 1, na consulta deve ter o nome
-- completo do cliente
select customer.customer_id as Codigo,
       concat(customer.first_name," ",customer.last_name) as Nome,
         payment.amount as Valor
           from payment
           inner join customer on customer.customer_id = payment.customer_id
            where customer.customer_id = 1;

select * from payment
         INNER join customer using(customer_id)
         where payment.customer_id = 1;

-- Gere uma consulta com o endereço completo do cliente de codigo = 5
SELECT * from customer;
select customer.customer_id as 'Codigo Cliente',
        concat(customer.first_name,' ',customer.last_name) as 'Nome',
        customer.email,
        address.address as 'Endereço',
        address.district as 'Bairro',
        city.city as Cidade,
        country.country as País,
        postal_code as 'Código Postal',
        phone as 'Telefone'
        from customer
            inner join address using(address_id)
            INNER join city using(city_id)
            INNER join country USING(country_id)
            where customer.customer_id = 5;
