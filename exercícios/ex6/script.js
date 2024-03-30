const btn_contador = document.getElementById('btn_contador');
const contador_cliques = document.getElementById('contador_cliques');

let contador = 0;

btn_contador.addEventListener('click', function() {
    contador++; // Incrementa o contador
    contador_cliques.textContent = `Cliques: ${contador}`;
});