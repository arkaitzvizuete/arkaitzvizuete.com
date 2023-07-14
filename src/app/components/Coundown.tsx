import { useEffect, useState } from "react"
import styled from "styled-components"

interface CountDownProps {
    targetDate: Date
    onCountdownFinish: Function
}

export const CountDown = (props: CountDownProps) => {

    const [days, setDays] = useState<string>()
    const [hours, setHours] = useState<string>()
    const [minutes, setMinutes] = useState<string>()
    const [seconds, setSeconds] = useState<string>()

    const getDays = (timeRemaining: number) => {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
      return days < 10 ? `0${days}` : days.toString()
    }

    const getHours = (timeRemaining: number) => {
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      return hours < 10 ? `0${hours}` : hours.toString()
    }

    const getMinutes = (timeRemaining: number) => {
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
      return minutes < 10 ? `0${minutes}` : minutes.toString()
    }

    const getSeconds = (timeRemaining: number) => {
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)
      return seconds < 10 ? `0${seconds}` : seconds.toString()
    }

    useEffect(() => {
        const interval = setInterval(() => {
          const currentTime = new Date()
          const timeRemaining = props.targetDate.getTime() - currentTime.getTime()
    
          if (timeRemaining <= 0) {
            clearInterval(interval)
            
            props.onCountdownFinish()
          }

          setDays(getDays(timeRemaining))
          setHours(getHours(timeRemaining))
          setMinutes(getMinutes(timeRemaining))
          setSeconds(getSeconds(timeRemaining))
        }, 1000)
    
        return () => clearInterval(interval)
      }, [])
    return (
        <StyledCountDown>
            {days} : {hours} : {minutes} : {seconds}
        </StyledCountDown>
    )
}

const StyledCountDown = styled.span`
    font-family: 'SquareDotMatrix', sans-serif;
    font-size: 1.3rem;
    color: white;

    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
`
