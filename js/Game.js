const cityGenerator = new CityGenerator();
const metroBuilder = new MetroBuilder();
const renderer = new Renderer('game-canvas');

let currentCity = null;
let currentMetro = null;

function generateNewCity() {
    // Генерируем новый город
    currentCity = cityGenerator.generateCity();
    
    // Строим метро
    currentMetro = metroBuilder.buildMetroLines(currentCity);
    
    // Отрисовываем
    renderer.drawCity(currentCity, currentMetro);
    
    // Показываем информацию
    showCityInfo();
}

function showCityInfo() {
    const infoPanel = document.getElementById('info-panel');
    infoPanel.innerHTML = `
        <h3>Город сгенерирован!</h3>
        <p>Линий метро: ${currentMetro.length}</p>
        <p>Всего станций: ${currentMetro.reduce((sum, line) => sum + line.stations.length, 0)}</p>
    `;
}

// Генерируем первый город при загрузке
window.onload = generateNewCity;
