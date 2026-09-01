use sakila2;
select * from payment;
select payment_id,
       staff_id,
       amount
       from payment;

select * from staff;
select payment.payment_id as Codigo,
       payment.staff_id as CodStaff,
       staff.first_name as Gerente,
       payment.amount as Valor,
       format((payment.amount * 0.05),2) as Comissão
       from payment
       inner join staff using(staff_id);

create View pag_comissao AS
    select payment.payment_id as Codigo,
       payment.staff_id as CodStaff,
       staff.first_name as Gerente,
       payment.amount as Valor,
       format((payment.amount * 0.05),2) as Comissão
       from payment
       inner join staff using(staff_id);

select * from pag_comissao;

-- crie uma view para mostrar os pagamentos realizados pelo cliente de codigo = 1,
-- mostre codigo do pagamento, codigo do cliente, nome do cliente, valor pago.

select payment.payment_id as 'Código Pagamento',    
        customer.customer_id as 'Código Cliente',
        concat(customer.first_name,' ',customer.last_name) as 'Nome',
        payment.amount as 'Valor Pago'
        FROM payment
        INNER JOIN customer using(customer_id)
        where customer.customer_id = 1;

CREATE  view list_pag_1 AS
  select payment.payment_id as 'Código Pagamento',    
        customer.customer_id as 'Código Cliente',
        concat(customer.first_name,' ',customer.last_name) as 'Nome',
        payment.amount as 'Valor Pago'
        FROM payment
        INNER JOIN customer using(customer_id)
        where customer.customer_id = 1;

select * from list_pag_1;

-- Gere uma view com codigo do cliente, nome do cliente, endereço completo;
select * from customer;
CREATE VIEW endereco_clientes AS

create view cli_endereco as
     select customer.customer_id as 'Código Cliente',
        concat(customer.first_name,' ',customer.last_name) as 'Nome',
        address.address as 'Rua',
        address.district as 'Estado',
        city.city as 'Cidade',
        country.country as 'País',
        address.postal_code as 'Código Postal'
        FROM customer
        INNER JOIN address USING (address_id)
        INNER JOIN city  USING (city_id)
        INNER JOIN country USING (country_id)
        order by Nome;

-- Gere uma view com codigo co cliente, nome do cliente, Titulo do filme assistido

CREATE VIEW hist_filmes AS
       select rental.customer_id as 'Código Cliente',
       concat(customer.first_name,' ',customer.last_name) as 'Nome',
       film.title as 'Título Filme'
       FROM rental
       INNER JOIN customer USING (customer_id)
       INNER JOIN inventory USING(inventory_id)
       INNER JOIN film USING(film_id)
       ORDER BY customer.first_name;
