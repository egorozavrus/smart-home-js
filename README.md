# 🎛️ Inteligentny Dom — Centralny Panel Sterowania

Aplikacja internetowa symulująca interaktywny system smart home. Projekt pozwala na sterowanie inteligentnymi urządzeniami w domu z poziomu centralnego panelu oraz synchronizację stanu między kartami przeglądarki w czasie rzeczywistym.

## 🚀 Funkcje
- **Centralny Panel:** Przycisk awaryjnego wyłączania wszystkich urządzeń systemowych.
- **Inteligentny Termostat:** Regulacja temperatury z trybem EKO (ograniczenie do 22°C) i dynamiczną zmianą koloru wskaźnika.
- **Inteligentne Oświetlenie:** Płynna zmiana jasności żarówki za pomocą suwaka.
- **Inteligentny Czajnik:** Symulacja parzenia wody с odliczaniem czasu.
- **Synchronizacja Stanu:** Wykorzystanie zdarzenia `storage` (API LocalStorage) do komunikacji między dwiema niezależnymi kartami przeglądarki.

## 🛠️ Technologie
- **HTML5** (Semantyczna struktura)
- **CSS3** (Flexbox, Grid, CSS Variables, Animations)
- **Vanilla JavaScript** (DOM Manipulation, LocalStorage API, Window Storage Event)

## 📂 Struktura projektu
```text
.
├── index.html       # Centralny Panel Sterowania
├── devices.html     # Ekran urządzeń
├── css/
│   ├── main.css
│   ├── panel.css
│   └── devices.css
└── js/
    ├── panel.js
    └── devices.js