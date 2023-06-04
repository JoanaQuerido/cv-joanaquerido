import React, { useState, useEffect } from 'react'

interface TimerCountProps {
  deadline: string
}

const TimerCount: React.FC<TimerCountProps> = ({ deadline }) => {
  const [years, setYears] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  // const [seconds, setSeconds] = useState(0);

  // const deadline = 'December, 31, 2022';

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now()
    console.log('time', time)

    setYears(Math.floor(time / (1000 * 60 * 60 * 24 * 365)))
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
    setMinutes(Math.floor((time / 1000 / 60) % 60))
    // setSeconds(Math.floor((time / 1000) % 60));
  }

  useEffect(() => {
    const interval = setInterval(getTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="timer">
      {years}y {hours}h {minutes}m
    </div>
  )
}

export default TimerCount
