const database = {
    "names" : [
        "Raça NeGra",
        "Redesign Não Gosto",
        "Rindo na Garoa",
        "Rastejando Na Grama",
        "Risoto Na Guela",
        "Random Number Generator",
        "Roubei Não Gostei",
        "React Next Guru's",
        "React Next Generation",
        "Regras Não Globais",
        "Rolando No Guacamole",
        "Reunião Nacional dos Goiaba",
        "Radical Né Galera",
        "Revolta No GraphQL",
        "Rodopiando Na Gelatina",
        "Rússia Não Ganha",
        "Rebelião Na Garagem",
        "Rei Nomade Gabriel",
        "Rebolando Na Gaiola",
        "Rasteira Na Galinha",
        "Rock 'N Goró",
        "Ricardo Nascimento Gonçalves",
        "Reunião Não, Gabriel",
        "REST Não, GraphQL",
        "Remando Na Galheta",
        "Roupa No Galo",
        "ReNeGados"
    ]
}

const index = Math.floor(Math.random() * database.names.length)
document.getElementById("nomeEquipe").innerHTML = database.names[index]
