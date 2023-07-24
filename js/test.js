const actors = new Map();

actors.set ('Batman', 'Бен Аффлек');
actors.set ('Hulk', 'Марк Руффалло');
actors.set ('Dr. Strange', 'Бенедикт Камбербетч');
actors.set ('Spideman', 'Тоби Магуайр');


const heroes = new Set();

heroes.add('Batman');
heroes.add('Hulk');
heroes.add('Dr. Strange');
heroes.add('Batman');
console.log('heroes: ', heroes);