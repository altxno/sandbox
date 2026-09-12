create database estoque;

create table produto (
    cod_produto int primary key,
    descricao varchar(40),
    qtd_prod int,
    valor_prod decimal(10,1)
);

ALTER TABLE pedidos RENAME COLUMN num_pedido TO num_pedido;


create table pedidos (
    num_pedido int primary key,
    cod_prod_vend int,
    foreign key (cod_prod_vend) references produto (cod_produto),
    qtd_venda int
);

use estoque;

drop trigger baixa_estoque;

create trigger baixa_estoque after insert on pedidos for each row
    begin
        update produto set qtd_prod = qtd_prod - new.qtd_venda where cod_produto = new.cod_prod_vend;
    end;

select * from pedidos;
select * from produto;

insert into produto values (1, 'mouse', 10, 200.00);
insert into produto values (2, 'teclado', 10, 200.00);
insert into produto values (3, 'tela', 10, 200.00);
insert into pedidos values (1, 1, 5);

create trigger estorno_estoque after delete on pedidos for each row
    begin
        update produto set qtd_prod = qtd_prod+ old.qtd_venda where cod_produto = old.cod_prod_vend;
    end;

delete from pedidos where num_pedido = 1;

describe estoque;



create trigger log_estoque after update on produto for each row
    begin
        insert into registro_alter () values (
                                              cod_alter = cod_alter+1,
                                              tipo_alter=2,
                                              cod_prod = old.cod_produto
                                             )
    end;

create trig



create table log_alteracao as select * from produto where cod_produto = 1;

create table registro_alter (
    cod_alter int primary key,
    tipo_alter int,
    cod_prod int
)

