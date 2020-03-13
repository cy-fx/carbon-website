export const getDate = () => {
  let date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()

  return String(year + " " + months[month] + " " + day)
}

export const getTime = (date) => {
  let getHours = Number(date.getHours())
  const minutes = date.getMinutes()
  let amPm = "AM"

  let getAmPm = () => {
    if (getHours >= 12) {
      if (getHours !== 12) {
        getHours = getHours - 12
      }
      amPm = "PM"
    } else {
      amPm = "AM"
    }
  }

  getAmPm()
  return String(
    ("0" + String(getHours)).slice(-2) +
      " : " +
      ("0" + String(minutes)).slice(-2) +
      " " +
      amPm
  )
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
