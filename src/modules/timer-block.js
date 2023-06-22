// import {
//   getTodayDateFormat,
//   getPreciseDateDifference,
// } from '../core/utils/date'
import * as DateUtils from '../core/utils/date'

export class TimerBlock {
  #date
  #timerContainer
  #timerTextHtml

  constructor(date) {
    this.#date = date
    this.#timerContainer = document.createElement('div')
    this.#timerTextHtml = document.createElement('h2')
  }

  #getTimerContent() {
    return DateUtils.getPreciseDateDifference(new Date(), this.#date)
  }

  #enableDateUpdate() {
    setInterval(() => {
      this.#timerTextHtml.textContent = this.#getTimerContent()
    }, 1000)
  }

  render() {
    this.#timerContainer.id = 'timer'
    this.#timerTextHtml.className = 'timer-text'
    this.#timerTextHtml.textContent = this.#getTimerContent()

    const todayDateHTML = document.createElement('div')
    todayDateHTML.className = 'today-date'
    const todayDateFormat = DateUtils.getTodayDateFormat(new Date())
    todayDateHTML.textContent = `(Сегодня: ${todayDateFormat})`

    this.#timerContainer.append(this.#timerTextHtml, todayDateHTML)

    this.#enableDateUpdate()

    return this.#timerContainer
  }
}
