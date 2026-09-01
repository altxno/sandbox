drop function nome_comp;

select * from actor;
create function nome_ator(id int)
RETURNS varchar(70)
DETERMINISTIC
begin
 declare nome VARCHAR(70);
 select concat(first_name,' ',last_name) into nome
         from actor where actor_id = id;
 RETURN nome;
end;

select nome_ator(4);

select nome_ator(actor_id) from actor;

/* crie uma função para gerar o valor da comissão do gerente
   conforme o pagamento do cliente. Sendo 5% para o gerente
   de codigo 1 e 3% para o gerente de codigo 2.
*/
select * from payment;

SELECT payment_id,customer_id,staff_id, amount,
       case staff_id
          when 1 then amount * 0.05
          when 2 then amount * 0.03
       end
       from payment;

SELECT payment_id,customer_id,staff_id, amount,
       if(staff_id = 1,amount * 0.05,amount * 0.03)
       from payment;

SELECT if(staff_id = 1,amount * 0.05,amount * 0.03)
       from payment
       where payment_id = id;

create function comissaoo(staff_id int, amount decimal(10,2))
returns decimal(10,2)
deterministic
begin
    if staff_id = 1 THEN
                 return amount *0.05;
      elseif staff_id = 2 THEN
             return amount * 0.03;
      ELSE
              return 0.00;
    end if;
end;
SELECT payment_id,customer_id,staff_id, amount,comissaoo(staff_id,amount)
       from payment;

/* Crie uma função para retornar o endereço completo do cliente */

CREATE Function endereco_comp(id int)
RETURNS varchar(1000)
DETERMINISTIC
BEGIN
DECLARE ender varchar(1000);
    select CONCAT(address.address,' ',
        address.district ,' ',
        city.city ,' ',
        country.country ,' ',
        address.postal_code,' ')
        into ender
        FROM customer
        INNER JOIN address USING (address_id)
        INNER JOIN city  USING (city_id)
        INNER JOIN country USING (country_id)
        WHERE customer_id = id;
RETURN ender;
END;

select customer_id,first_name,endereco_comp(customer_id) from customer;
