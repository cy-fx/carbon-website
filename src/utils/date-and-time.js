let date = new Date()
let n = date.toLocaleTimeString()
const getHours = Number(date.getHours())
const minutes = date.getMinutes()
const year = date.getFullYear()
const month = date.getMonth()
const day = date.getDate()
let setHours = ""
let amPm = "AM"

export let activeClock = () => {
  setTime()
  setInterval(setTime, 1000)
}

export const localTime = () => {
  return n
}

export const setDate = () => {
    return String(year + " " + months[month] + " " + day)
  }

export const setTime = () => {
  setAmPm()
  return String(('0' + String(setHours)).slice(-2) + " : " + ('0' + String(minutes)).slice(-2) + " " + amPm)
}

let setAmPm = () => {
  if (getHours >= 12) {
    if (getHours !== 12) {
      setHours = getHours - 12
    }
    amPm = "PM"
  } else {
    amPm = "AM"
  }
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]
