// Враг.

class Enemy {
  constructor(position) {
    this.generateSkin();
    this.position = position;
  }

  generateSkin() {
    // const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    const skins = ['💃', '🧙‍♀️', '👰', '👸', '👩‍✈️', '👩‍🎤', '👩‍🔬', '👩‍💼'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= Math.floor(Math.random() * 3);
  }

  die() {
    this.generateSkin()
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
