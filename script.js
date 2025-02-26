function showSurprise() {
    const surpriseDiv = document.getElementById('surprise');
    const textBox = document.querySelector('.text-box');
    const miniMessage = document.getElementById('mini-message');

    // Показываем текст
    textBox.classList.add('show');

    // Случайное мини-сообщение
    const messages = [
        "Ты крутая! ⭐",
        "Кодь как звезда! ✨",
        "Сияй ярко! 💖",
        "Будущее за тобой! 🚀",
        "Твори чудеса! 🌸",
        "Ты — суперзвезда IT! 🌟",
        "Пиши код и покоряй мир! 💻",
        "Твои идеи — это магия! ✨",
        "Будь смелой и яркой! 💪",
        "Ты — гений технологий! ⚡",
        "Создавай свои мечты! 🌈",
        "Вселенная ждёт твоих идей! 🌍",
        "Ты — чемпионка кода! 🏆",
        "Свети как солнце! ☀️",
        "Твоя сила — в твоём коде! 💖"
    ];
    miniMessage.textContent = messages[Math.floor(Math.random() * messages.length)];
    miniMessage.classList.add('show');

    // Очищаем предыдущие частицы
    surpriseDiv.innerHTML = '';

    // Массив элементов
    const particles = ['🎉', '💖', '🌸', '✨', '🌟', '🌺'];

    for (let i = 0; i < 60; i++) {
        const particle = document.createElement('span');
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '-10vh'; // Начинаем выше экрана
        particle.style.animationDuration = Math.random() * 1 + 1 + 's'; // От 25 до 30 секунд
        particle.style.color = `hsl(${Math.random() * 360}, 80%, 60%)`;
        surpriseDiv.appendChild(particle);
    }
}
