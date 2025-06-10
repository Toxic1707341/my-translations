let currentLang = 'ru'; // язык по умолчанию

// Функция загрузки перевода
function loadLanguage(lang) {
    fetch(`https://raw.githubusercontent.com/<Toxic1707341>/my-translations/main/${lang}.json`) 
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll('.lang').forEach(el => {
                const key = el.getAttribute('key');
                if (translations[key]) {
                    el.textContent = translations[key];
                }
            });
        })
        .catch(err => console.error('Ошибка загрузки перевода:', err));
}

// Слушатель изменения языка
document.getElementById('lang-select').addEventListener('change', function () {
    currentLang = this.value;
    loadLanguage(currentLang);
});

// Загрузка при старте
loadLanguage(currentLang);