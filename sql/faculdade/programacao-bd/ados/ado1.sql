use sakila;

CREATE VIEW vw_clientes_frequentes AS
SELECT
    c.customer_id AS id_cliente,
    CONCAT(c.first_name, ' ', c.last_name) AS nome_completo,
    c.email,
    COUNT(r.rental_id) AS total_locacoes
FROM customer c
JOIN rental r ON r.customer_id = c.customer_id
GROUP BY c.customer_id, c.first_name, c.last_name, c.email
HAVING COUNT(r.rental_id) > 20;

SELECT * FROM vw_clientes_frequentes;


DELIMITER $$

CREATE FUNCTION fn_total_gasto_cliente(cliente_id INT)
RETURNS DECIMAL(10,2)
DETERMINISTIC
READS SQL DATA
BEGIN
    DECLARE v_total DECIMAL(10,2);

    SELECT COALESCE(SUM(p.amount), 0)
    INTO v_total
    FROM payment p
    WHERE p.customer_id = cliente_id;

    RETURN v_total;
END$$

DELIMITER ;

SELECT fn_total_gasto_cliente(67) AS total_gasto;


DELIMITER $$

CREATE PROCEDURE sp_filmes_categoria(IN categoria VARCHAR(25))
BEGIN
    SELECT
        f.film_id,
        f.title AS titulo,
        f.description AS descricao,
        f.rental_rate AS valor_locacao,
        f.rating AS classificacao
    FROM film f
    JOIN film_category fc ON fc.film_id = f.film_id
    JOIN category cat ON cat.category_id = fc.category_id
    WHERE cat.name = categoria;
END$$

DELIMITER ;

CALL sp_filmes_categoria('Action');