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