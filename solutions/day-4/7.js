// ⭐: 7
const getStrategy1 = logs => {
  const guardInfoSummary = logsToGuardInfoSummary(logs)
  const longestSleepingGuard = guardInfoSummary.sort(byTotalMinutesSlept)[0]
  return longestSleepingGuard.id * longestSleepingGuard.minute
}

export const logsToGuardInfoSummary = logs => {
  const actions = logs.map(parseLog)
  const guardInfo = getGuardInfo(actions)
  const guardInfoSummary = getGuardInfoSummary(guardInfo)
  return guardInfoSummary
}

const getGuardId = log => parseInt(log.match(/#(\d+)/)[1])
const getMinutes = log => parseInt(log.match(/:(\d{2})/)[1])
const byTotalMinutesSlept = (a, b) => b.totalMinutesSlept - a.totalMinutesSlept

const parseLog = log => {
  if (log.endsWith('begins shift')) {
    return {
      type: 'start',
      id: getGuardId(log),
      minute: getMinutes(log)
    }
  }
  if (log.endsWith('falls asleep')) {
    return {
      type: 'sleep',
      minute: getMinutes(log)
    }
  }
  if (log.endsWith('wakes up')) {
    return {
      type: 'wake',
      minute: getMinutes(log)
    }
  }
}

const addSleepEvent = nap => {
  const {currentGuardId, sleepingMinute, wakingMinute, guardInfo} = nap
  const minutes = []
  for (let minute = sleepingMinute; minute < wakingMinute; minute++) {
    minutes.push(minute)
  }
  for (const minute of minutes) {
    guardInfo[currentGuardId] = guardInfo[currentGuardId] || {}
    guardInfo[currentGuardId][minute] = guardInfo[currentGuardId][minute]
      ? guardInfo[currentGuardId][minute] + 1
      : 1
  }
}

const getGuardInfo = actions => {
  const guardInfo = {}
  let currentGuardId
  let sleepingMinute = null
  for (const action of actions) {
    switch (action.type) {
      case 'start':
        currentGuardId = action.id
        sleepingMinute = null
        break
      case 'sleep':
        sleepingMinute = action.minute
        break
      case 'wake':
        if (sleepingMinute === null) break
        const nap = {
          sleepingMinute,
          wakingMinute: action.minute,
          currentGuardId,
          guardInfo
        }
        addSleepEvent(nap)
        sleepingMinute = null
        break
    }
  }
  return guardInfo
}

const getGuardInfoSummary = guardInfo =>
  Object.entries(guardInfo).map(([id, minutes]) => {
    const totalMinutesSlept = Object.values(minutes).reduce((a, b) => a + b)
    const highestMinute = Object.entries(minutes).sort((a, b) => b[1] - a[1])[0]
    const minute = parseInt(highestMinute[0])
    const frequency = highestMinute[1]
    return {id, minute, frequency, totalMinutesSlept}
  })

export default getStrategy1
