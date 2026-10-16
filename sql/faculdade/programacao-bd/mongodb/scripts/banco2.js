db.getSiblingDB("banco2").createCollection("aluno");

db.getSiblingDB("banco2").aluno.insertOne({
    cod:1,
    nome:"wagner",
    telefone:"11956789123"
});

db.getSiblingDB("banco2").aluno.find();

db.aluno.find({cod:1});
db.aluno.find();

db.aluno.insertMany(
    [
    { nome: "bianca", idade: 47 },
    { nome:"gui", idade: 29 }
    ]
);

db.aluno.find(
    {idade:{$gt:25}}
)

show databases;

