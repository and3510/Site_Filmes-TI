
const likeButtons = document.querySelectorAll('.like');
let curtido = false;

likeButtons.forEach(botaoCurtir => {
    botaoCurtir.addEventListener('click', function() {
        if (curtido) {
            botaoCurtir.classList.remove('curtido');
            botaoCurtir.textContent = '👍';
            curtido = false;
        } else {
            botaoCurtir.classList.add('curtido');
            botaoCurtir.textContent = '👎';
            curtido = true;
        }
    });
});

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


function mostrarAlerta() {
    alert("Você Enviou uma Sugestão" );
}


