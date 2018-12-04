import { logsToGuardInfoSummary } from './7.js'

// ⭐: 8
const getStrategy2 = logs => {
  const guardInfoSummary = logsToGuardInfoSummary(logs)
  const mostRepeatedMinuteGuard = guardInfoSummary.sort(byMostRepeatedMinute)[0]
  return mostRepeatedMinuteGuard.id * mostRepeatedMinuteGuard.minute
}

const byMostRepeatedMinute = (a, b) => b.frequency - a.frequency

export default getStrategy2
