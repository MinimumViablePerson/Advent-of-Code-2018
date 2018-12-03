import { anyCharAppearsNTimes } from '../../helpers.js'

// ⭐: 3
const getBoxIdChecksum = boxIds => {
  const counts = {2: 0, 3: 0}
  for (const boxId of boxIds) {
    if (anyCharAppearsNTimes(boxId, 2)) counts[2]++
    if (anyCharAppearsNTimes(boxId, 3)) counts[3]++
  }
  return counts[2] * counts[3]
}

export default getBoxIdChecksum
