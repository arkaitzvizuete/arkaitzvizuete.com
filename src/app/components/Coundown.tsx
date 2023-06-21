import { useEffect, useState } from "react"
import styled from "styled-components"

interface CountDownProps {
    targetDate: Date
}

export const CountDown = (props: CountDownProps) => {

    const [days, setDays] = useState<number>()
    const [hours, setHours] = useState<number>()
    const [minutes, setMinutes] = useState<number>()
    const [seconds, setSeconds] = useState<number>()

    useEffect(() => {
        const interval = setInterval(() => {
          const currentTime = new Date();
          const timeRemaining = props.targetDate.getTime() - currentTime.getTime();

          
          setDays(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)))
          setHours(Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
          setMinutes(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)))
          setSeconds( Math.floor((timeRemaining % (1000 * 60)) / 1000))
    
          if (timeRemaining < 0) {
            clearInterval(interval);
            // Handle countdown completion here

          }
        }, 1000);
    
        return () => clearInterval(interval)
      }, []);
    return (
        <StyledCountDown>
            {days} : {hours} : {minutes} : {seconds}
        </StyledCountDown>
    )
}

const StyledCountDown = styled.span`
    font-family: 'SquareDotMatrix', sans-serif;
    font-size: 3rem;
    color: black;

    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
`
