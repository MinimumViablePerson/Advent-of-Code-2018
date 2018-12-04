import { parseClaim } from './helpers.js'

export default {
  baseURL: 'https://raw.githubusercontent.com/MinimumViablePerson/Advent-of-Code-2018/master/data',
  getDay1Data () {
    return this.get(this.baseURL + '/day-1.txt')
      .then(arr => arr.map(n => parseInt(n)))
  },
  getDay2Data () {
    return this.get(this.baseURL + '/day-2.txt')
  },
  getDay3Data () {
    return this.get(this.baseURL + '/day-3.txt')
      .then(data => data.map(parseClaim))
  },
  get (url) {
    return fetch(url)
      .then(resp => resp.text())
      .then(text => text.split('\n').slice(0, -1))
  }
}
