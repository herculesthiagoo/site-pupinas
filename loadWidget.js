// Variável global para o intervalo do contador
let countdownInterval;

// Função para carregar o widget
function loadWidget() {
    // Cria um elemento <div> para o widget
    const widgetContainer = document.createElement('div');
    widgetContainer.id = 'widget-container';
    widgetContainer.innerHTML = `
        <div class="countdown-container">
            <div class="countdown-header">
                PROMOÇÃO DE CARNAVAL 🎊<br>
                TODO O SITE COM ATÉ 40% OFF 🔥
            </div>
            <div class="countdown-timer" id="countdown-timer">
                <div class="countdown-item">
                    <div class="countdown-value" id="days">00</div>
                    <div class="countdown-label">DIAS</div>
                </div>
                <div class="countdown-item">
                    <div class="countdown-value" id="hours">00</div>
                    <div class="countdown-label">HORAS</div>
                </div>
                <div class="countdown-item">
                    <div class="countdown-value" id="minutes">00</div>
                    <div class="countdown-label">MINUTOS</div>
                </div>
                <div class="countdown-item">
                    <div class="countdown-value" id="seconds">00</div>
                    <div class="countdown-label">SEGUNDOS</div>
                </div>
            </div>
            <button class="countdown-button" onclick="resetTimer()">Reiniciar Contador</button>
        </div>
    `;

    // Adiciona o widget ao final do <body>
    document.body.appendChild(widgetContainer);

    // Inicializa o contador
    initializeCountdown();
}

// Função para inicializar o contador
function initializeCountdown() {
    const countdownDate = new Date(2024, 1, 14, 23, 59, 59).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000;

        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown-timer').innerHTML = '<div style="font-size: 24px;">A promoção acabou!</div>';
        }
    }

    // Inicia o contador
    countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Atualiza imediatamente
}

// Função para reiniciar o contador
function resetTimer() {
    clearInterval(countdownInterval);
    initializeCountdown();
}

// Carrega o widget quando a página é carregada
window.onload = loadWidget;
