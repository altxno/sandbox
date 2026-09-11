/* Desenvolva uma procedure p/ gerar o nome das categorias de filmes que o cliente assistiu */








# create function nome_ator (id int)
# returns varchar(70)
# deterministic
# begin
#     declare nome varchar(70);
#     select concat(first_name, ' ', last_name) into nome
#     from actor where actor_id = id;
#     return nome;
# end;
#
# select nome_ator(3);
#
# select nome_ator(actor_id) from actor;
#
# drop function nome_ator;
#
# -- CRIE UMA FUNÇÃO PARA GERAR O VALOR DA COMISSÃO DO GERENTE CONFORME O PAGAMENTO DO
# -- CLIENTE, SENDO 5% PARA O GERENTE DE CÓDIGO 1 E 3% PARA O GERENTE DE CÓDIGO 2
#
# select payment.staff_id,
#        payment.payment_id,
#        payment.amount,
#        if(staff_id=1, cast(amount*0.05 as decimal(10,2)), cast(amount*0.03 as decimal(10,2))) as comissao
# from payment;
#
#
#
# create function comissaosss (id int, wamount decimal(10,2))
# returns decimal(10,2)
# deterministic
# begin
#     declare valor decimal(10,2);
#     set valor = 0.0;
#     case id
#         when 1 then return wamount * 0.05;
#         when 2 then return wamount * 0.03;
#     return valor;
#     end case;
#     end;
#
# -- CRIE UMA FUNÇÃO PARA RETORNAR O ENDEREÇO COMPLETO DO CLIENTE
#
# select * from customer;
# select * from address;
# select * from city;
# select * from country;
#
# select
#     customer.customer_id,
#     customer.first_name,
#     concat(
#        address.address, ' ',
#        address.district, ' ',
#        city.city, ' ',
#        country.country, ' '
#     ) as endereço_completo
#
# from customer
# inner join address using (address_id)
# inner join city using (city_id)
# inner join country using (country_id)
# where customer.customer_id;
#
# create function enders (id int)
# returns varchar(1000)
# deterministic
# begin
#     declare enders varchar(1000);
#     select
#     concat(
#        address.address, ' ',
#        address.district, ' ',
#        city.city, ' ',
#        country.country, ' '
#     ) into enders
#
# from customer
# inner join address using (address_id)
# inner join city using (city_id)
# inner join country using (country_id)
# where customer.customer_id;
# return enders;
#     end;
#
#
#
#






























