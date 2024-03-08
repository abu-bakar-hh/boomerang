// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(track, scores) {
    const yourTeamName = 'Бородачи';

    // Тут всё рисуем.
    console.clear();
    console.log(track.join(''));
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
    console.log(`Очки: ${scores}`);
  }
}

module.exports = View;
