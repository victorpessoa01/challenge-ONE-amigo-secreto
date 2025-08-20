//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let friendsList = [];
let friend = "";

function addFriend() { 
    friend = document.getElementById("amigo");
    friend = friend.value;

    if(friend !== "") {
        if(friendsList.includes(friend)) {
            alert("Este amigo já foi adicionado.");
        } else {
            friendsList.push(friend);
            printFriends();
        }
    } else {
        alert("Por favor, insira um nome válido.");
    } 
    
    console.log(friendsList);
    document.getElementById("amigo").value = "";
};

function printFriends() {
    const l = document.getElementById("listaAmigos");
    l.innerHTML = "";

    for(let i = 0; i < friendsList.length; i++) {
        const li = document.createElement("li");
        li.textContent = friendsList[i];
        l.appendChild(li);
    }
}

function randomFriend() {
    const result = document.getElementById("resultadoSorteio");

    if (friendsList.length === 0) {
        result.innerHTML = "Adicione amigos à lista primeiro.";
    } else {        
        const random = Math.floor(Math.random() * friendsList.length);
        const selectedFriend = friendsList[random];
        friendsList.splice(random, 1); 
        printFriends();
        
        result.innerHTML = "Amigo secreto sorteado: " + selectedFriend;
    }
}