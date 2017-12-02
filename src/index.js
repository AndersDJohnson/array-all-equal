const arrayAllEqual = array => {
  const value = array[0]
  return array.every(v => v === value)
}

export default arrayAllEqual
