import React, { useState, useEffect } from "react"
import { getTime } from "../../utils/date-and-time"

const DisplayTime = () => {
  let date = new Date()
  const [displayTime, setDisplayTime] = useState(getTime(date))

  var elapsedTime = () => {
    let date = new Date()
    if (date.getSeconds() === 0) {
      setDisplayTime(getTime(date))
      console.log(getTime(date))
    } else {
      console.log(date.getSeconds())
    }
  }

  useEffect(() => {
    const interval = setInterval(elapsedTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return displayTime
}

export default DisplayTime
