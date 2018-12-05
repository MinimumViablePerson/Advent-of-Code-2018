// ⭐: 9
const reactedPolymerSize = polymer =>
  react(polymer).length

export const react = polymer => {
  const reactedPolymer = reactOnce(polymer)

  return polymer.length === reactedPolymer.length
    ? polymer
    : react(reactedPolymer)
}

const reactOnce = polymer => {
  let result = ''

  for (let i = 1; i <= polymer.length;) {
    const currentUnit = polymer[i - 1]
    const nextUnit = polymer[i]

    if (currentUnit && nextUnit && unitsAreSameTypeAndOppositePolarity(currentUnit, nextUnit)) {
      i += 2
    } else {
      result += currentUnit
      i += 1
    }
  }
  return result
}

const unitsAreSameTypeAndOppositePolarity = (unitA, unitB) =>
  Math.abs(unitA.charCodeAt(0) - unitB.charCodeAt(0)) === 32

export default reactedPolymerSize
