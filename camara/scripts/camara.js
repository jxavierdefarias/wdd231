// Menu hambúrguer
const menuButton = document.querySelector('#menuButton');
const menuItems = document.querySelector('#menuItems');
menuButton.addEventListener('click', () => {
  menuItems.classList.toggle('open');
  menuButton.textContent = menuItems.classList.contains('open') ? '✕' : '☰';
});

// Modo escuro
document.querySelector('#darkBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Ano e última modificação
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;

// Empresas destaque - 2 ou 3 aleatórias Gold/Silver do members.json
async function loadSpotlights() {
  try {
    const res = await fetch('data/members.json');
    const data = await res.json();
    const filtered = data.members.filter(m => m.membership === 3 || m.membership === 2);
    const shuffled = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);
    const container = document.querySelector('#spotlights');
    container.innerHTML = shuffled.map(m => `
      <div class="spotlight">
        <img src="images/${m.image}" alt="${m.name}">
        <h4>${m.name}</h4>
        <p>${m.tagline}</p>
        <p>EMAIL: ${m.email}<br>TELEFONE: ${m.phone}<br>SITE: ${m.website}</p>
        <span class="level">${m.membership === 3 ? 'Gold' : 'Silver'}</span>
      </div>
    `).join('');
  } catch (e) { console.log(e); }
}
loadSpotlights();
// Clima Atual + Previsão - Open-Meteo (sem chave, São Paulo)
async function loadWeather() {
  try {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current=temperature_2m,relative_humidity_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=America%2FSao_Paulo";
    const res = await fetch(url);
    const data = await res.json();

    const descMap = { 0: "Céu Limpo", 1: "Quase Limpo", 2: "Parcialmente Nublado", 3: "Nublado", 45: "Nevoeiro", 48: "Nevoeiro", 51: "Garoa", 61: "Chuva Fraca", 63: "Chuva", 65: "Chuva Forte", 71: "Neve Fraca", 80: "Pancadas de Chuva", 95: "Tempestade" };
    const desc = descMap[data.current.weather_code] || "Parcialmente Nublado";

    document.querySelector("#current-temp").textContent = Math.round(data.current.temperature_2m) + "°C";
    document.querySelector("#weather-desc").textContent = desc;
    document.querySelector("#max").textContent = Math.round(data.daily.temperature_2m_max[0]) + "°C";
    document.querySelector("#min").textContent = Math.round(data.daily.temperature_2m_min[0]) + "°C";
    document.querySelector("#humidity").textContent = data.current.relative_humidity_2m + "%";
    document.querySelector("#sunrise").textContent = data.daily.sunrise[0].slice(11);
    document.querySelector("#sunset").textContent = data.daily.sunset[0].slice(11);
    document.querySelector("#forecast-today").textContent = Math.round(data.daily.temperature_2m_max[0]) + "°C";
    document.querySelector("#forecast-day2").textContent = Math.round(data.daily.temperature_2m_max[2]) + "°C";
    document.querySelector("#forecast-day4").textContent = Math.round(data.daily.temperature_2m_max[4]) + "°C";
  } catch (e) { console.log("Erro clima:", e); }
}
loadWeather();

