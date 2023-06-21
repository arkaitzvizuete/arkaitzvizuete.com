import { useState } from "react";
import styled from "styled-components"
import { CountDown } from "../components/Coundown";

export const TwentyThreePage = () => {

    const luggageTargetDate = new Date(2023, 6, 21, 12, 0, 0);

    const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight);

    const setPhoneScreenHeight = (): void => {
      setScreenHeight(window.innerHeight);
    }
    
    window.addEventListener('resize', setPhoneScreenHeight)

    return (
        <Container screenHeight={screenHeight}>
            <TopRow>
                <AlignmentPattern>
                    <AlignmentPatternInside/>
                </AlignmentPattern>
                <AlignmentPattern>
                    <AlignmentPatternInside/>
                </AlignmentPattern>
            </TopRow>
            <Content>
                <StyledTitle>
                    CONGRATULATIONS
                </StyledTitle>
                <StyledText>
                    Reserve the dates: 28 - 29 - 30 / JULY
                </StyledText>
                <StyledText>
                    More info coming soon
                    <br/>
                    <CountDown targetDate={luggageTargetDate} />
                </StyledText>
                
            </Content>
            <div>
                <AlignmentPattern>
                    <AlignmentPatternInside/>
                </AlignmentPattern>
            </div>
        </Container>
    )
}

interface ContainerProps {
    screenHeight: number;
}

const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: hidden;

    padding: 0;
    margin: 0;

    height: ${(props) => props.screenHeight}px;

    background-color: black;
`

const AlignmentPattern = styled.div`
    height: 50px;
    width: 50px;

    border: 10px solid white;
    margin: 10px;
`

const AlignmentPatternInside = styled.div`
    height: 30px;
    width: 30px;
    
    background: white;

    margin: 10px;
`

const TopRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    flex-grow: 1;

    justify-content: space-around;
`

const StyledTitle = styled.span`
    font-family: 'SquareDotMatrix', sans-serif;
    font-size: 5rem;
    color: white;


`

const StyledText = styled.span`
    font-family: 'SquareDotMatrix', sans-serif;
    font-size: 3rem;
    color: white;


`