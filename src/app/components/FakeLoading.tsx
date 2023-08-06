import { useEffect, useState } from "react"
import styled from "styled-components"

interface FakeLoadingProps {
    onLoadingComplete: Function
}

export const FakeLoading = (props: FakeLoadingProps) => {

    const [iterationNumber, setIterationNumber] = useState(0)
    const [timeoutTime, setTimeoutTime] = useState(1000)

    useEffect(() => {
        setTimeout(() => {
            setIterationNumber(iterationNumber +1)
        }, timeoutTime)

        if (iterationNumber >= 30 ) {
            props.onLoadingComplete()
        }
        
        if (timeoutTime > 500) {
            setTimeoutTime(timeoutTime -100)
        } else if (timeoutTime > 200) {
            setTimeoutTime(timeoutTime -50)
        } else if (timeoutTime > 100) {
            setTimeoutTime(timeoutTime -20)
        } else {
            setTimeoutTime(timeoutTime -5)
        }

    }, [iterationNumber])

    return (
        <Container>
            {[...Array(iterationNumber)].map((o, index) => {
                return (
                    <StyledText key={index}>
                        Loading
                    </StyledText>
                )
            })}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const StyledText = styled.span`
    font-family: 'SquareDotMatrix', sans-serif;
    font-size: 1.5rem;
    color: white;
`
