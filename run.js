// Основной файл.
// Запускает игру.
const Game = require('./src/Game');
// 111
// Инициализация игры с настройками.
const game = new Game({
  trackLength: 40,

});


// Запуск игры.
game.play();
