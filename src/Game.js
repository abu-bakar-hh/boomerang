// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const Keyboard = require('./keyboard');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero(); // Герою можно аргументом передать бумеранг.
    this.bom = new Boomerang();
    this.keyboard = new Keyboard(this);
    this.enemy = new Enemy(this.trackLength-1);
    this.view = new View(this.track);
    this.track = [];
    this.regenerateTrack();
    this.score = 0;
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array(this.trackLength)).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.bom.position] = this.bom.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.trackLength] = `Счастливых женщин: ${this.score}`
    this.bom.moveRight();
  }

  check() {
    if (this.bom.position >= this.enemy.position) {
      this.enemy.die();
      this.enemy.position = this.trackLength-1;
      this.track[this.enemy.position] = this.enemy.skin;
      this.bom.position = 1;
      this.score += 1;
    }

    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
  }

  play() {
    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.enemy.moveLeft();
      this.view.render(this.track);
    }, 100);
  }
}

module.exports = Game;
