# Challenge ONE - Amigo Secreto

Este projeto é uma aplicação simples de sorteio de amigo secreto, desenvolvida para praticar lógica de programação com JavaScript puro.

## Como funciona

- Adicione nomes de amigos em um campo de texto.
- Cada nome adicionado aparece em uma lista na tela.
- Ao clicar em "Sortear Amigo", um nome é sorteado aleatoriamente e removido da lista.
- O resultado do sorteio é exibido na tela.


## Exemplo de uso no HTML

```html
<input type="text" id="amigo" placeholder="Digite o nome do amigo">
<button onclick="addFriend()">Adicionar Amigo</button>
<ul id="listaAmigos"></ul>
<button onclick="randomFriend()">Sortear Amigo</button>
<div id="resultadoSorteio"></div>
```
