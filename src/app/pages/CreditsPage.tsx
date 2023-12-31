import { useState } from "react";
import styled from "styled-components";


export const CreditsPage = () => {

    const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight);

    const setPhoneScreenHeight = (): void => {
      setScreenHeight(window.innerHeight);
    }
    
    window.addEventListener('resize', setPhoneScreenHeight)

    return (
        <Container screenHeight={screenHeight}>
            <TopRow>
                <AlignmentPattern>
                    <AlignmentPatternInside />
                </AlignmentPattern>
                <AlignmentPattern>
                    <AlignmentPatternInside/>
                </AlignmentPattern>
            </TopRow>
            <Content>
                <StyledText>
                    <StyledTitle>
                    producers
                    </StyledTitle>
                    NAGORE MAROTO<br/>
                    ARKAITZ VIZUETE<br/>
                    <StyledTitle>
                    Art direcction
                    </StyledTitle>
                    OIHANA BIKUÑA
                    <StyledTitle>
                    producers
                    </StyledTitle>
                    AITOR CARRASCO<br/>
                    <StyledTitle>
                    Gaffer
                    </StyledTitle>
                    ALBERTO LA ROSA<br/>
                    <StyledTitle>
                    Best Boy
                    </StyledTitle>                
                    IÑAKI BERUETE<br/>
                    <StyledTitle>
                    special thanks
                    </StyledTitle>
                    RAMÓN BILBAO<br/>
                    AYUNTAMIENTO DE LOGROÑO<br/>
                    ZUMARDI<br/>
                    ERRETA CREATIVE RAIMA<br/>
                    MARISA VIELBA<br/>
                    ORIOL SUILS<br/>
                    GITHUB<br/>
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

    justify-content: center;
    gap: 3rem;
`

const StyledTitle = styled.p`
    font-size: 23px;
`

const StyledText = styled.p`
    font-family: 'SquareDotMatrix', sans-serif;
    font-size: 15px;
    color: white;

`