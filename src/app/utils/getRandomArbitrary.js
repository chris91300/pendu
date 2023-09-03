
/**
 * function who return a random number between min and max
 * @param {Number} min fourchette basse
 * @param {Number} max fourchette haute non inclus
 * @returns 
 */
export default function getRandomArbitrary(min, max) {
  let number = Math.random() * (max - min) + min;
  return parseInt(number);
  }

  