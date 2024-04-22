// Algoritmo de Like e Deslike
const likeButtons = document.querySelectorAll('.like');
let curtido = true;

likeButtons.forEach(Curtir => {
    Curtir.addEventListener('click', function() {
        if (curtido) {
            Curtir.textContent = '👍';
            curtido = false;
        } else {
            Curtir.textContent = '👎';
            curtido = true;
        }
    });
});

// Botão de ligar ou desligar o modo Noturno
const toggleThemeButton = document.getElementById('toggleThemeButton');
const bodyElement = document.body;

let currentTheme = 'light'; // Tema inicial definido como claro

toggleThemeButton.addEventListener('click', function() {
    if (currentTheme === 'light') {
        currentTheme = 'dark';
        bodyElement.classList.add('dark-mode');
    } else {
        currentTheme = 'light';
        bodyElement.classList.remove('dark-mode');
    }
});

// Botão de Alerta de envio de sugestão
function mostrarAlerta() {
    alert("Você Enviou uma Sugestão" );
}


