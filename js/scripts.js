const database = {
    "names" : [
        "Raça NeGra",
        "Redesign Não Gosto",
        "Rindo na Garoa",
        "Rastejando Na Grama",
        "Risoto Na Goela",
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
        "Rei Nômade Gabriel",
        "Rebolando Na Gaiola",
        "Rasteira Na Galinha",
        "Rock 'N Goró",
        "Ricardo Nascimento Gonçalves",
        "Reunião Não, Gabriel",
        "REST Não, GraphQL",
        "Remando Na Galheta",
        "Roupa No Galo",
        "ReNeGados",
        "Roda No Github",
        "Robôs Niilistas Gigantes",
        "Raio Não Gourmetizador",
        "Roedores Normalmente Gordos",
        "Rodas Naturalmente Grandes",
        "Rosbife Na Grelha",
        "Roses N Guns",
        "Rindo Nos Gazeia",
        "Reggaeton, Not Good",
        "Roda Não Giratoria",
        "React No Geral",
        "Refresh Não Gasta",
        "Racker Nem é Gente",
        "Ri Não Gente",
        "Rezei Não Ganhei",
        "Rainha Não Gracinha",
        "Rolando na Graxa",
        "Rave Noix Gosta",
        "Ratos Nascidos em Goiânia"
    ]
}

const sayMyName = () => {
    const index = Math.floor(Math.random() * database.names.length)
    document.getElementById("nomeEquipe").innerHTML = database.names[index]
}

const rollTheDice = () => {
    sayMyName()
    document.getElementById("dado").classList.remove("dado-animation")
    document.getElementById("dado").classList.remove("dado-spin")
    window.setTimeout(() => document.getElementById("dado").classList.add("dado-spin"))
}

sayMyName()
