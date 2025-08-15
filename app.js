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
        }
    } else {
        alert("Por favor, insira um nome válido.");
    } 
    
    console.log(friendsList);
    document.getElementById("amigo").value = "";
};

