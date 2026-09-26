USE sakila;

-- Ex1: Crie uma view chamada vw_clientes_ativos

CREATE VIEW vw_clientes_ativos AS
SELECT
    c.first_name AS nome,
    c.last_name AS sobrenome,
    c.email,
    ci.city AS cidade,
    c.active AS status
FROM customer c
JOIN address a ON a.address_id = c.address_id
JOIN city ci ON ci.city_id = a.city_id
WHERE c.active = 1;


-- Ex2: Consulta usando a view

SELECT *
FROM vw_clientes_ativos
WHERE cidade = 'London'
ORDER BY sobrenome;


-- Ex3: Function total de filmes por cliente

DELIMITER $$

CREATE FUNCTION fn_total_filmes_cliente(id_cliente INT)
RETURNS INT
DETERMINISTIC
READS SQL DATA
BEGIN
    DECLARE v_total INT;

    SELECT COUNT(*)
    INTO v_total
    FROM rental r
    JOIN inventory i ON i.inventory_id = r.inventory_id
    JOIN film f ON f.film_id = i.film_id
    WHERE r.customer_id = id_cliente;

    RETURN v_total;
END$$

DELIMITER ;

SELECT fn_total_filmes_cliente(1);


# Ex4: Procedure filmes por categoria

# Delimitar a procedure
# Cria a procedure passando um parâmetro VARCHAR de no máx 25 caracteres
# Seleciona colunas de titulo, ano de lancamento da tabela film
# Seleciona coluna de nome da categoria na tabela category
# Une as tabelas com um inner join utilizando film_id e category_id
# WHERE para filtrar pelo nome da categoria passada no parâmetro inicial

DELIMITER $$

CREATE PROCEDURE sp_filmes_categoria(IN nome_categoria VARCHAR(25))
BEGIN
    SELECT
        f.title AS titulo,
        f.release_year AS ano_lancamento,
        cat.name AS categoria
    FROM film f
    JOIN film_category fc ON fc.film_id = f.film_id
    JOIN category cat ON cat.category_id = fc.category_id
    WHERE cat.name = nome_categoria;
END$$

DELIMITER ;

CALL sp_filmes_categoria('Action');


-- Ex5: Trigger de auditoria em payment

CREATE TABLE payment_log (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    payment_id INT,
    customer_id INT,
    amount DECIMAL(10,2),
    data_inclusao DATETIME
);

DELIMITER $$

CREATE TRIGGER trg_payment_log
AFTER INSERT ON payment
FOR EACH ROW
BEGIN
    INSERT INTO payment_log (payment_id, customer_id, amount, data_inclusao)
    VALUES (NEW.payment_id, NEW.customer_id, NEW.amount, NOW());
END$$

DELIMITER ;


-- Ex6: CREATE, GRANT e REVOKE

CREATE USER 'analista'@'localhost' IDENTIFIED BY '123';

GRANT SELECT ON sakila.customer TO 'analista'@'localhost';
GRANT SELECT ON sakila.film TO 'analista'@'localhost';
GRANT SELECT ON sakila.category TO 'analista'@'localhost';

REVOKE SELECT ON sakila.film FROM 'analista'@'localhost';


-- Ex7: Questão integrada (view + function + procedure + segurança)

CREATE VIEW vw_resumo_clientes AS
SELECT
    c.customer_id,
    CONCAT(c.first_name, ' ', c.last_name) AS nome_completo,
    fn_total_filmes_cliente(c.customer_id) AS total_alugueis
FROM customer c;

GRANT SELECT ON sakila.vw_resumo_clientes TO 'analista'@'localhost';
REVOKE SELECT ON sakila.vw_resumo_clientes FROM 'analista'@'localhost';


-- Extra: Trigger para validar o valor do pagamento

DELIMITER $$

CREATE TRIGGER trg_valida_payment
BEFORE INSERT ON payment
FOR EACH ROW
BEGIN
    IF NEW.amount <= 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'O valor do pagamento deve ser maior que zero.';
    END IF;
END$$

DELIMITER ;