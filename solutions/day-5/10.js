import { react } from './9.js'

const findBestReaction = polymer => {
  const ABC = 'abcdefghijklmnopqrstuvwxyz'
  let reactions = []

  for (const char of ABC) {
    const filteredPolymer = removeAllInstancesOf(polymer, char)
    const reactedPolymer = react(filteredPolymer)
    reactions.push({
      char,
      length: reactedPolymer.length
    })
  }

  reactions.sort(byLengthAsc)
  return reactions[0].length
}

const byLengthAsc = (a, b) => a.length - b.length

const removeAllInstancesOf = (str, char) => str.replace(new RegExp(char, 'gi'), '')

export default findBestReaction
