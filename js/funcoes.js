let Gilherme = {
    nome: "guilherme",
    vitorias: 3,
    empates: 4,
    derrotas: 2,

}

let Julia = {
    nome: "Julia",
    vitorias: 1,
    empates: 4,
    derrotas: 2,
    pontos: 7

}

let Pedro = {
    nome: "Pedro",
    vitorias: 3,
    empates: 4,
    derrotas: 2,
    pontos: 7
}

console.log(guilherme.nome);
console.log(guilherme.vitorias);

console.log(julia.nome);
console.log(julia.vitorias);

guilherme.pontos = (calculapontos(guilherme));
guilherme.pontos = (calculapontos(julia));






function calculapontos(jogador){
    let pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}
let jogadores = [guilherme , julia , pedro ];
ExibirJogadoresNaTela(jogadores);

function ExibirJogadoresNaTela(jogadores){
    let html = "";
    for(let i = 0; i < jogadores.length; i++){
        html += "<tr><td>" + jogadores[i].nome + "</td>";
        html += "<td>" + jogadores[i].vitorias + "</td>";
        html += "<td>" + jogadores[i].empates + "</td>";
        html += "<td>" + jogadores[i].derrotas + "</td>";
        html += "<td>" + jogadores[i].pontos + "</td>";
        html += "<td><button onclick='AdicionarVitorias("+ i +")'>Vitoria</button></td>";
        html += "<td><button onclick='AdicionarEmpates("+ i +")'>Empate</button></td>";
        html += "<td><button onclick='AdicionarDerrotas("+ i +")'>Derrota</button></td>";
        html += "</tr>";
    } 
    let tabelaJogadores = document.querySelector("#tabelaJogadores");
    tabelaJogadores.innerHTML = html;
}


function AdicionarVitorias(i){
    let jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculapontos(jogador);
    ExibirJogadoresNaTela(jogadores);
}

function AdicionarEmpates(i){
    let jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculapontos(jogador);
    ExibirJogadoresNaTela(jogadores);
}

function AdicionarDerrotas(i){
    let jogador = jogadores[i];
    jogador.derrotas++;
    jogador.pontos = calculapontos(jogador);
    ExibirJogadoresNaTela(jogadores);
}

