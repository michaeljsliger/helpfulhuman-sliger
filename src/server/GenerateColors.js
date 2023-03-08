// Script used to conveniently create n amount of relatively random colors, used by db.js.
// This can be used to dynamically create new colors on a refresh, page open, etc so there's new colors to 
// choose from.

const colors = [];

// Array of base colors to randomly choose from
const baseColors = ['white', 'black', 'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown'];

// Generate 100 color objects
for (let i = 0; i < 100; i++) {
  const hexValue = '#' + Math.floor(Math.random() * 16777215).toString(16); // Random hex value
  const baseColor = baseColors[Math.floor(Math.random() * baseColors.length)]; // Random base color
  const name = `${baseColor}`; // Generate name for each color
  
  colors.push({
    id: i,
    hex: hexValue,
    base: baseColor,
    name: name[0].toUpperCase() + name.slice(1)
  });
}

console.log(colors);