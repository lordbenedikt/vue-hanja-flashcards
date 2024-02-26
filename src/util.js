var arrays = {
  range(min, max) { 
    return [...Array(max - min).keys()].map(i => i + min);
  },
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  },
};

export default arrays;