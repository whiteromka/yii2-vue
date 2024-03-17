// Анимация падения и исчезновения элемента
let fallSpeed = 40; // Скорость падения в px/s
let fadeDuration = 5000; // Длительность затухания в мс
let frequencyCreation = 120; // Частота появления пикселей
let cssClassDropBlock = '.drop-chars'; // Селектор в котором они родятся

// Функция для создания случайного числа в заданном диапазоне
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Функция для создания нового элемента
function createNewElement() {
    let startTime = Date.now();
    let selector = document.querySelector(cssClassDropBlock);

    // Создание нового элемента
    let divPropPx = document.createElement('div');

    divPropPx.style.position = 'absolute';
    divPropPx.style.left = `${getRandomNumber(0, selector.offsetWidth)}px`;
    divPropPx.style.top = '0';
    //divPropPx.style.opacity = '1';
    divPropPx.style.color = 'red';
    divPropPx.classList.add('dropPx');

    // Добавление нового элемента внутрь selector
    selector.appendChild(divPropPx);

    function fallAndFade() {
        let elapsedTime = Date.now() - startTime;
        let distanceToFall = fallSpeed * (elapsedTime / 1000);
        divPropPx.style.top = `${distanceToFall}px`;

        if (elapsedTime < fadeDuration) {
            let opacity = 0.5 - (elapsedTime / fadeDuration);
            divPropPx.style.opacity = opacity;
            requestAnimationFrame(fallAndFade);
        } else {
            // Удаление элемента после завершения анимации
            selector.removeChild(divPropPx);
        }
    }
    fallAndFade();
}

// Запуск создания элементов через определенные промежутки времени
function startAnimation() {
    setInterval(createNewElement, frequencyCreation); // Создание нового элемента каждые X ms
}

//startAnimation();