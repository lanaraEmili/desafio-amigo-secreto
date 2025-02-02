//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigo = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value.trim();
    //validar entrada vazia
    if (nome === '') {
        alert('Por favor, insira um nome antes de adicionar');
        return;
    }

    amigo.push(nome)
    nome.value = '';
    criarLista();
}

//função que cria a lista de amigo no HTML para o usuário ver
function criarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigo.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigo[i];
        lista.appendChild(li);
    }
}
//função que sorteia o amigo e mostra no HTML para o usuário ver
function sortearAmigo() {
    if (amigo.length == 0) {
        alert('Precisa colocar o nome de seus amigos para sortear o amigo secreto');
    } else {
        let IndiceAleatorio = parseInt(Math.floor(Math.random() * amigo.length));
        let nomeSorteado = amigo[IndiceAleatorio];
        let amigoSecreto = document.getElementById('resultado');
        amigoSecreto.innerHTML = nomeSorteado;
    }
}