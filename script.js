console.log("Rodando o script")
// Função para captar o grupo e usar sem sacar diversos gets pelo código
function encontraGrupo(grupo){
    let grupoReferido = document.getElementById(grupo)
    console.log(grupoReferido)
    return grupoReferido
}

// Função para imprimir uma linha na tabela do grupo referido


// coloca na tabela HTML do grupo, o país que for passado na função
function alimentaGrupo(grupo,pais,pontos,partidasjogadas)  {
    let squad = encontraGrupo(grupo)
    let linha = document.createElement("tr")
    linha.insertCell(0).innerHTML = pais
    linha.insertCell(1).innerHTML = pontos
    linha.insertCell(2).innerHTML = partidasjogadas
    squad.appendChild(linha)
}




