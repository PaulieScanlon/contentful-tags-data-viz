const materialColors = {
  red: ['#D32F2F', '#E53935', '#F44336', '#EF5350', '#E57373', '#EF9A9A'],
  pink: ['#C2185B', '#D81B60', '#E91E63', '#EC407A', '#F06292', '#F48FB1'],
  purple: ['#7B1FA2', '#8E24AA', '#9C27B0', '#AB47BC', '#BA68C8', '#CE93D8'],
  deepPurple: ['#512DA8', '#5E35B1', '#673AB7', '#7E57C2', '#9575CD', '#B39DDB'],
  indigo: ['#303F9F', '#3949AB', '#3F51B5', '#5C6BC0', '#7986CB', '#9FA8DA'],
  blue: ['#1976D2', '#1E88E5', '#2196F3', '#42A5F5', '#64B5F6', '#90CAF9'],
  lightBlue: ['#0288D1', '#039BE5', '#03A9F4', '#29B6F6', '#4FC3F7', '#81D4FA'],
  cyan: ['#0097A7', '#00ACC1', '#00BCD4', '#26C6DA', '#4DD0E1', '#80DEEA'],
  teal: ['#00796B', '#00897B', '#009688', '#26A69A', '#4DB6AC', '#80CBC4'],
  green: ['#388E3C', '#43A047', '#4CAF50', '#66BB6A', '#81C784', '#A5D6A7'],
  lightGreen: ['#7CB342', '#8BC34A', '#9CCC65', '#AED581', '#C5E1A5', '#DCEDC8'],
  lime: ['#AFB42B', '#C0CA33', '#CDDC39', '#D4E157', '#DCE775', '#E6EE9C'],
  // yellow: ['#FBC02D', '#FDD835', '#FFEB3B', '#FFEE58', '#FFF176', '#FFF59D'],
  amber: ['#FFA000', '#FFB300', '#FFC107', '#FFCA28', '#FFD54F', '#FFE082'],
  orange: ['#F57C00', '#FB8C00', '#FF9800', '#FFA726', '#FFB74D', '#FFCC80'],
  deepOrange: ['#E64A19', '#F4511E', '#FF5722', '#FF7043', '#FF8A65', '#FFAB91'],
  // blueGrey: ['#455A64', '#546E7A', '#607D8B', '#78909C', '#90A4AE', '#B0BEC5'],
  // grey: ['#616161', '#757575', '#9E9E9E', '#BDBDBD', '#E0E0E0', '#EEEEEE'],
};

// Function to perform Fisher-Yates shuffle
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const materialColorsFlat = shuffleArray(
  [].concat(...Object.values(materialColors).map((colorArray) => shuffleArray(colorArray.slice())))
);
