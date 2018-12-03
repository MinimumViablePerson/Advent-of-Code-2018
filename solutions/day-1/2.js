// ⭐: 2
const findFirstRepeatedFrequency = frequencyChanges => {
  let index = 0
  let currentFrequency = 0
  const frequencies = new Set()
  while (true) {
    frequencies.add(currentFrequency)
    currentFrequency += frequencyChanges[index]

    if (frequencies.has(currentFrequency)) {
      break
    } else {
      index = index === frequencyChanges.length - 1 ? 0 : index + 1
    }
  }
  return currentFrequency
}

export default findFirstRepeatedFrequency
