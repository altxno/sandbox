// TODO comeco slide

/* =====================================================================
   BANCO DE DADOS - NoSQL / MongoDB  (Prof. Me Rômulo Maia)
   Arquivo de estudo: conceitos do slide + todos os exemplos em código.

   COMO USAR:
   - Cole/execute no mongosh, no console MongoDB do DataGrip ou no
     playground do VS Code (nesse caso, troque a extensão para .mongodb
     e use use('aula') no lugar de db = db.getSiblingDB('aula')).
   - Para rodar só um trecho, selecione as linhas e execute.
   - Usamos um banco separado ("aula") para NÃO mexer no sakila.
   - O arquivo roda de cima para baixo: ele recria a coleção "people"
     com dados de exemplo toda vez que você executa a seção 4.
   ===================================================================== */


/* =====================================================================
   1. POR QUE NoSQL? (conceitos)
   =====================================================================
   Hoje as empresas adotam NoSQL em um número crescente de casos de uso.
   A escolha é impulsionada por quatro megatendências inter-relacionadas:

   - Big Users ........... muitíssimos usuários acessando ao mesmo tempo
   - Big Data ............ volumes enormes de dados, muitas vezes sem
                           estrutura fixa
   - Internet das Coisas . sensores/dispositivos gerando dados o tempo todo
   - Cloud Computing ..... sistemas distribuídos que precisam escalar

   Vantagem central: MODELO DE DADOS MAIS FLEXÍVEL.
   ===================================================================== */


/* =====================================================================
   2. MODELOS DE DADOS NoSQL (conceitos)
   =====================================================================
   Existem quatro categorias:

   1) Chave-valor ............ guarda pares simples (ex.: Redis)
   2) Orientados a documentos  guarda documentos tipo JSON (ex.: MongoDB)
   3) Orientados a colunas ... guarda por coluna (ex.: Cassandra)
   4) Baseados em grafos ..... nós e relações entre eles (ex.: Neo4j)

   O MongoDB é do tipo 2 (documentos).

   ---------------------------------------------------------------------
   MySQL x NoSQL (MongoDB)
   ---------------------------------------------------------------------
   MySQL (relacional):
   - Gratuito e popular
   - Impõe integridade referencial (chaves estrangeiras)
   - O esquema precisa ser definido com antecedência
   - Mais segurança
   - Pouco flexível para um novo tipo de dado (é preciso alterar o esquema)

   NoSQL (MongoDB):
   - Gratuito
   - Semelhante ao JSON
   - Documentos consistem de pares chave/valor
   - Flexível para novos tipos de dado: os documentos são autodescritivos
     (cada um carrega seus próprios campos)

   ---------------------------------------------------------------------
   Quando usar cada um
   ---------------------------------------------------------------------
   - MySQL: sistema relacional maduro, ambiente familiar para
     profissionais de TI experientes.
   - MongoDB: não relacional, bem estabelecido, com mais flexibilidade e
     escalabilidade horizontal, mas ao custo de alguns recursos dos
     relacionais, como a integridade referencial.

   ---------------------------------------------------------------------
   Facilidades do MongoDB
   ---------------------------------------------------------------------
   - Armazena documentos de vários esquemas, inclusive dados não
     estruturados.
   - Suporta as propriedades ACID em transações (atomicidade,
     consistência, isolamento e durabilidade).
   - É extremamente fácil de escalar (escalabilidade horizontal).

   ---------------------------------------------------------------------
   Vocabulário: relacional -> MongoDB
   ---------------------------------------------------------------------
   Banco de dados ... -> banco de dados (database)
   Tabela ........... -> coleção (collection)
   Linha (registro) . -> documento (document)
   Coluna ........... -> campo (field)
   Chave primária ... -> campo _id (criado automaticamente)
   ===================================================================== */


/* =====================================================================
   3. COMANDOS BÁSICOS DO BANCO NoSQL
   =====================================================================
   No terminal (mongosh) existem os atalhos:
       show databases     -> lista os bancos
       use <database>     -> escolhe/cria o banco
       show collections   -> lista as coleções
       mongosh            -> abre o MongoDB Shell (o terminal do Mongo)
   No playground do VS Code o "show" não funciona; use o equivalente
   em JavaScript, como abaixo.
   ===================================================================== */

// "use <database>": seleciona o banco. Se não existir, ele só é criado de
// verdade quando você inserir o primeiro dado.
db = db.getSiblingDB('aula');

// Equivalente do "show databases"
db.adminCommand({ listDatabases: 1 });

// Equivalente do "show collections"
db.getCollectionNames();


/* =====================================================================
   4. CRIAR TABELA (coleção)
   =====================================================================
   SQL:
     CREATE TABLE people (
       id MEDIUMINT NOT NULL AUTO_INCREMENT,
       user_id Varchar(30),
       age Number,
       status char(1),
       PRIMARY KEY (id)
     )

   MongoDB: a coleção é criada IMPLICITAMENTE na primeira operação de
   insertOne() ou insertMany(). A chave primária _id é adicionada
   automaticamente se você não informar o campo _id.
   Não existe esquema fixo: não declaramos colunas nem tipos.
   ===================================================================== */

// Limpa execuções anteriores (para o arquivo poder rodar várias vezes)
db.getCollection('people').drop();

// Criação implícita: a coleção "people" nasce com este insertOne
db.people.insertOne({
  user_id: "abc123",
  age: 55,
  status: "A"
});

// Também é possível criar explicitamente (aqui em outra coleção de teste,
// porque "people" já foi criada pelo insertOne acima)
db.createCollection("people_explicita");
db.getCollection('people_explicita').drop();


/* =====================================================================
   5. INCLUIR DADOS
   =====================================================================
   SQL:
     INSERT INTO people(user_id,age,status) VALUES ("bcd001",45,"A")
   ===================================================================== */

db.people.insertOne(
  { user_id: "bcd001", age: 45, status: "A" }
);

// insertMany: vários documentos de uma vez (usamos para ter dados de
// exemplo nas consultas abaixo)
db.people.insertMany([
  { user_id: "bcd002", age: 50, status: "A" },
  { user_id: "xyz900", age: 22, status: "B" },
  { user_id: "abc777", age: 30, status: "C" },
  { user_id: "bca010", age: 25, status: "A" },
  { user_id: "def555", age: 40, status: "D" },
  { user_id: "ghi321", age: 60, status: "B" },
  { user_id: "jkl654", age: 35, status: "A" },
  { user_id: "mno987", age: 28, status: "D" },
  { user_id: "pqr111", age: 50, status: "B" },
  { user_id: "stu222", age: 18, status: "C" },
  { user_id: "vwx333", age: 70, status: "A" }
]);


/* =====================================================================
   6. ALTERAR TABELA (ADD / DROP COLUMN)
   =====================================================================
   Em NoSQL não existe ALTER TABLE: o esquema é flexível. Mudamos a
   "estrutura" no nível do DOCUMENTO, adicionando ou removendo campos
   com updateMany().

   SQL:  ALTER TABLE people ADD join_date DATETIME
   ===================================================================== */

// { } como filtro = todos os documentos. $set cria/atualiza o campo.
db.people.updateMany(
  { },
  { $set: { join_date: new Date() } }
);

// Conferindo que o campo foi criado
db.people.find({}, { user_id: 1, join_date: 1, _id: 0 });

/* SQL:  ALTER TABLE people DROP COLUMN join_date */

// $unset remove o campo de todos os documentos
db.people.updateMany(
  { },
  { $unset: { "join_date": "" } }
);


/* =====================================================================
   7. CRIAR ÍNDICES
   =====================================================================
   Índice = estrutura que acelera buscas. 1 = ordem crescente (ASC),
   -1 = ordem decrescente (DESC).

   SQL:  CREATE INDEX idx_user_id_asc ON people(user_id)
   SQL:  CREATE INDEX idx_user_id_asc_age_desc ON people(user_id, age DESC)
   ===================================================================== */

db.people.createIndex({ user_id: 1 });

// Índice composto (user_id crescente + age decrescente)
db.people.createIndex({ user_id: 1, age: -1 });

// Lista os índices da coleção
db.people.getIndexes();


/* =====================================================================
   8. CONSULTA DE DADOS (SELECT)
   =====================================================================
   find(filtro, projeção): o 1º parâmetro é o WHERE; o 2º escolhe quais
   campos aparecem (1 = mostrar, 0 = esconder).
   ===================================================================== */

// SQL: SELECT * FROM people
db.people.find();

// SQL: SELECT id, user_id, status FROM people
// (o _id aparece por padrão, equivalente ao id)
db.people.find(
  { },
  { user_id: 1, status: 1 }
);

// SQL: SELECT user_id, status FROM people
// _id: 0 esconde o _id
db.people.find(
  { },
  { user_id: 1, status: 1, _id: 0 }
);


/* ---------------------------------------------------------------------
   8.1 Filtros com WHERE
   --------------------------------------------------------------------- */

// SQL: SELECT * FROM people WHERE status = "A"
db.people.find(
  { status: "A" }
);

// SQL: SELECT user_id, status FROM people WHERE status = "A"
db.people.find(
  { status: "A" },
  { user_id: 1, status: 1, _id: 0 }
);

// SQL: SELECT * FROM people WHERE status <> "A"
// $ne = "not equal" (diferente de)
db.people.find(
  { status: { $ne: "A" } }
);


/* ---------------------------------------------------------------------
   8.2 AND, OR e comparações
   --------------------------------------------------------------------- */

// SQL: SELECT * FROM people WHERE status = "A" AND age = 50
// Vários campos no mesmo filtro = AND implícito
db.people.find(
  { status: "A",
    age: 50 }
);

// SQL: SELECT * FROM people WHERE status = "A" OR age = 50
// $or recebe uma lista de condições
db.people.find(
  { $or: [ { status: "A" }, { age: 50 } ] }
);

// SQL: SELECT * FROM people WHERE age > 25
// $gt = greater than (maior que)
db.people.find(
  { age: { $gt: 25 } }
);

// SQL: SELECT * FROM people WHERE age < 25
// $lt = less than (menor que)
db.people.find(
  { age: { $lt: 25 } }
);

// SQL: SELECT * FROM people WHERE age > 25 AND age <= 50
// $lte = less than or equal (menor ou igual). $gte = maior ou igual.
db.people.find(
  { age: { $gt: 25, $lte: 50 } }
);


/* ---------------------------------------------------------------------
   8.3 LIKE (busca por texto com expressão regular)
   --------------------------------------------------------------------- */

// SQL: SELECT * FROM people WHERE user_id like "%bc%"
// /bc/ = contém "bc" em qualquer posição
db.people.find({ user_id: /bc/ });
// forma equivalente com $regex:
db.people.find({ user_id: { $regex: /bc/ } });

// SQL: SELECT * FROM people WHERE user_id like "bc%"
// ^ = começa com "bc"
db.people.find({ user_id: /^bc/ });
// forma equivalente com $regex:
db.people.find({ user_id: { $regex: /^bc/ } });


/* ---------------------------------------------------------------------
   8.4 ORDER BY
   --------------------------------------------------------------------- */

// SQL: SELECT * FROM people WHERE status = "A" ORDER BY user_id ASC
// sort: 1 = crescente
db.people.find({ status: "A" }).sort({ user_id: 1 });

// SQL: SELECT * FROM people WHERE status = "A" ORDER BY user_id DESC
// sort: -1 = decrescente
db.people.find({ status: "A" }).sort({ user_id: -1 });


/* ---------------------------------------------------------------------
   8.5 COUNT
   --------------------------------------------------------------------- */

// SQL: SELECT COUNT(*) FROM people
// Forma do slide: db.people.count() ou db.people.find().count()
// (count() está obsoleto nas versões novas; use countDocuments)
db.people.countDocuments();

// SQL: SELECT COUNT(user_id) FROM people
// Conta só os documentos em que o campo user_id existe
// Forma do slide: db.people.count( { user_id: { $exists: true } } )
//             ou: db.people.find( { user_id: { $exists: true } } ).count()
db.people.countDocuments({ user_id: { $exists: true } });

// SQL: SELECT COUNT(*) FROM people WHERE age > 30
// Forma do slide: db.people.count( { age: { $gt: 30 } } )
//             ou: db.people.find( { age: { $gt: 30 } } ).count()
db.people.countDocuments({ age: { $gt: 30 } });


/* ---------------------------------------------------------------------
   8.6 DISTINCT, LIMIT, SKIP e EXPLAIN
   --------------------------------------------------------------------- */

// SQL: SELECT DISTINCT(status) FROM people
db.people.aggregate([ { $group: { _id: "$status" } } ]);
// forma mais curta:
db.people.distinct("status");

// SQL: SELECT * FROM people LIMIT 1
db.people.findOne();
// ou:
db.people.find().limit(1);

// SQL: SELECT * FROM people LIMIT 5 OFFSET 10
// (no slide aparece "LIMIT 5 SKIP 10"; no SQL de verdade é OFFSET)
// skip(10) pula os 10 primeiros, limit(5) traz os 5 seguintes (paginação)
db.people.find().limit(5).skip(10);

// SQL: EXPLAIN SELECT * FROM people WHERE status = "A"
// Mostra o plano de execução (se usou índice, quantos docs leu etc.)
db.people.find({ status: "A" }).explain();


/* =====================================================================
   9. ALTERAR DADOS (UPDATE)
   =====================================================================
   updateMany(filtro, alteração): altera todos os documentos que
   casam com o filtro. ($set define valor; $inc soma ao valor atual.)
   ===================================================================== */

// SQL: UPDATE people SET status = "C" WHERE age > 25
db.people.updateMany(
  { age: { $gt: 25 } },
  { $set: { status: "C" } }
);

// SQL: UPDATE people SET age = age + 3 WHERE status = "A"
// $inc incrementa o campo numérico
db.people.updateMany(
  { status: "A" },
  { $inc: { age: 3 } }
);

// Conferindo o resultado
db.people.find({}, { user_id: 1, age: 1, status: 1, _id: 0 });


/* =====================================================================
   10. EXCLUIR DADOS (DELETE)
   =====================================================================
   Cuidado: o filtro vazio { } apaga TODOS os documentos.
   ===================================================================== */

// SQL: DELETE FROM people WHERE status = "D"
db.people.deleteMany({ status: "D" });

// SQL: DELETE FROM people
// (apaga todos os documentos, mas a coleção continua existindo)
// Descomente a linha abaixo para executar:
// db.people.deleteMany({});


/* =====================================================================
   11. EXCLUIR TABELA (coleção)
   =====================================================================
   SQL:  DROP TABLE people
   drop() apaga a coleção inteira (documentos + índices).
   Deixei comentado para você ainda poder olhar os dados depois de
   rodar o arquivo. Descomente para executar.
   ===================================================================== */

// db.people.drop();


// TODO ATIVIDADE PRATICA RANDOM

// 1) Busca o ator com actor_id igual a 76
db.getSiblingDB('sakila').actor.find({ actor_id: 76 })

// 2) Busca todos os atores com primeiro nome exatamente "NICK"
db.getSiblingDB('sakila').actor.find({ first_name: "NICK" })

// 3) Busca atores com actor_id 76 OU 44
db.getSiblingDB('sakila').actor.find({ $or: [{ actor_id: 76 }, { actor_id: 44 }] })

// 4) Busca atores cujo primeiro nome COMEÇA com "N" (^ = início do texto)
db.getSiblingDB('sakila').actor.find({ first_name: /^N/ })

// 5) Conta quantos atores têm a letra "B" em qualquer posição do primeiro nome
db.getSiblingDB('sakila').actor.countDocuments({ first_name: /.*B.*/ })

// 6) Atores com "B" no primeiro nome, ordenados de A a Z, só os 5 primeiros
db.getSiblingDB('sakila').actor.find({ first_name: /.*B.*/ }).sort({ first_name: 1 }).limit(5)

// 7) Atores com "C" no primeiro nome, ordenados de Z a A (-1 = decrescente)
db.getSiblingDB('sakila').actor.find({ first_name: /.*C.*/ }).sort({ first_name: -1 })

// TODO ATIVIDADE PRATICA PROF

// 1) Sobrenome "WILLIAMS"
db.getSiblingDB('sakila').customers.find({ "Last Name": "WILLIAMS" });

// 2) Sobrenome começa com "B"
db.getSiblingDB('sakila').customers.find({ "Last Name": /^B/ });

// 3) Primeiro nome contém "JOHN"
db.getSiblingDB('sakila').customers.find({ "First Name": /JOHN/ });

// 4) Todos ordenados por sobrenome (A a Z)
db.getSiblingDB('sakila').customers.find().sort({ "Last Name": 1 });

// 5) last_update = data atual nos clientes de primeiro nome "MARY"
db.getSiblingDB('aula06_11').customers.updateMany({ "First Name": "MARY" }, { $set: { last_update: new Date() } });

// 6) Quantos têm sobrenome "SMITH"
db.getSiblingDB('aula06_11').customers.countDocuments({ "Last Name": "SMITH" });