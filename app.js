//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    
    //validar entrada vazia
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    
     if (amigos.includes(nome)) {
        let confirmar = confirm(`O nome "${nome}" já está na lista. Você deseja realmente adicioná-lo novamente?`);
        if (!confirmar) {
            return; // Se o usuário não confirmar, não adiciona o nome
        }
    }
    amigos.push(nome);
    limparCampo();
    criarLista();
}

//função que cria a lista de amigo no HTML para o usuário ver
function criarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++ ) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function limparCampo(){
    nome = document.querySelector('input');
    nome.value = '';
}
//função que sorteia o amigo e mostra no HTML para o usuário ver
function sortearAmigo() {
    if (amigo.length == 0) {
        alert('Precisa colocar o nome de seus amigos para sortear o amigo secreto');
    } else {
        let IndiceAleatorio = parseInt(Math.floor(Math.random() * amigos.length));
        let nomeSorteado = amigos[IndiceAleatorio];

        //Exibe o nome Sorteado
        let amigoSecreto = document.getElementById('resultado');
        amigoSecreto.innerHTML = nomeSorteado;
    }
}
