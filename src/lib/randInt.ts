const randInt = (min: number, max: number) =>
  Math.floor(min + Math.random() * (max - min + 1))

export default randInt
