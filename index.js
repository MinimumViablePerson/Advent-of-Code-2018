import API from './API.js'
import solveProblem1 from './solutions/day-1/1.js'
import solveProblem2 from './solutions/day-1/2.js'
import solveProblem3 from './solutions/day-2/3.js'
import solveProblem4 from './solutions/day-2/4.js'
import solveProblem5 from './solutions/day-3/5.js'
import solveProblem6 from './solutions/day-3/6.js'
import solveProblem7 from './solutions/day-4/7.js'
import solveProblem8 from './solutions/day-4/8.js'

(async () => {
  const frequencies = await API.getDay1Data()
  console.log('⭐1: ', solveProblem1(frequencies))
  console.log('⭐2: ', solveProblem2(frequencies))

  const boxIds = await API.getDay2Data()
  console.log('⭐3: ', solveProblem3(boxIds))
  console.log('⭐4: ', solveProblem4(boxIds))

  const claims = await API.getDay3Data()
  console.log('⭐5: ', solveProblem5(claims))
  // console.log('⭐6: ', solveProblem6(claims))

  const logs = await API.getDay4Data().then(data => data.sort())
  console.log('⭐7: ', solveProblem7(logs))
  console.log('⭐8: ', solveProblem8(logs))
})()
