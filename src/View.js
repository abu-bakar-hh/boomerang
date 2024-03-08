// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(track) {
    const yourTeamName = 'Бородачи';

    // Тут всё рисуем.
    console.clear();
    console.log(track.join(''));
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
    console.log(`!!!Всех прекрасных дам с праздником!!!`);
  }
}

module.exports = View;
