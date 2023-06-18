import { useEffect, useState } from "react";
import styled from "styled-components"

export const TwentyThreePage = () => {

    const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight);

    const setPhoneScreenHeight = (): void => {
      setScreenHeight(window.innerHeight);
    };
  
    useEffect(() => {
      const handleResize = () => {
        requestAnimationFrame(() => {
          setPhoneScreenHeight();
        });
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [])
    
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
            <AlignmentPattern>
                <AlignmentPatternInside/>
            </AlignmentPattern>
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
`

const AlignmentPattern = styled.div`
    height: 50px;
    width: 50px;

    border: 10px solid black;
    margin: 10px;
`

const AlignmentPatternInside = styled.div`
    height: 30px;
    width: 30px;
    
    background: black;

    margin: 10px;
`

const TopRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`