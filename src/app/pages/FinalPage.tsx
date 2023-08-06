import { useEffect, useState } from "react";
import styled from "styled-components";
import { FakeLoading } from "../components/FakeLoading";
import { ErrorGame } from "../components/ErrorGame";

import Address from '../resources/address2.svg'

export const FinalPage = () => {

    const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight);

    const [fakeLoadingCompleted, setFakeLoadingCompleted] = useState(false)
    const [gameCompleted, setGameCompleted] = useState(false)
    const [squareGameInProgress, setSquareGameInProgress] = useState(false)
    const [squareGameScore, setSquareGameScore] = useState(0)
    const [activeSquareKey, setActiveSquareKey] = useState<number | undefined>(undefined)
    const [zoomedIn, setZoomedIn] = useState(true)

    const timeoutTime = 500
    let lastNumber: number
    let squareGameTimeout: NodeJS.Timer

    const setPhoneScreenHeight = (): void => {
      setScreenHeight(window.innerHeight);
    }
    
    window.addEventListener('resize', setPhoneScreenHeight)

    const handleFakeLoadingComplete = () => {
        setFakeLoadingCompleted(true)
    }

    const handleStartSquareGame = () => {
        setSquareGameInProgress(true)
    }

    const handleGameCompleted = () => {
    }

    const handleGameSquareClicked = () => {
        setSquareGameScore(squareGameScore +1)
    }

    const squareGame = () => {
        setActiveSquareKey(10)
        clearTimeout(squareGameTimeout)

        if (!squareGameInProgress) {
            return
        }

        let randomNumber = Math.floor(Math.random() * (3))

        while (randomNumber === lastNumber) {
            randomNumber =  Math.floor(Math.random() * (3))
        }

        console.log('timeoutTime: ', timeoutTime)
        setTimeout(() => {
            setActiveSquareKey(randomNumber)
            lastNumber = randomNumber;
    
            squareGameTimeout = setTimeout(squareGame, timeoutTime)
        }, timeoutTime)
    }

    useEffect(() => {
        if (squareGameInProgress) {
            squareGame()
        } else {
            clearTimeout(squareGameTimeout)
        }
    }, [squareGameInProgress])

    useEffect(() => {
        if (squareGameScore >= 23) {
            setSquareGameInProgress(false)
            setGameCompleted(true)
            setZoomedIn(false)
        }
    }, [squareGameScore])

    return (
        <Container screenHeight={screenHeight}>
            <TopRow>
                {squareGameInProgress && activeSquareKey === 0 ?
                    <GameAlignmentPattern onClick={handleGameSquareClicked}>
                        <GameAlignmentPatternInside />
                    </GameAlignmentPattern>
                    :
                    <AlignmentPattern>
                        <AlignmentPatternInside />
                    </AlignmentPattern>
                }
                {squareGameInProgress && activeSquareKey === 1 ?
                    <GameAlignmentPattern onClick={handleGameSquareClicked}>
                        <GameAlignmentPatternInside />
                    </GameAlignmentPattern>
                    :
                    <AlignmentPattern>
                        <AlignmentPatternInside />
                    </AlignmentPattern>
                }
            </TopRow>
            <Content>
                {!fakeLoadingCompleted &&
                    <FakeLoading onLoadingComplete={handleFakeLoadingComplete} />
                }
                {(fakeLoadingCompleted && !gameCompleted) &&
                    <ErrorGame
                        onGameCompleted={handleGameCompleted}
                        onStartSquareGame={handleStartSquareGame}
                        squareGameScore={squareGameScore}
                    />
                }
                {gameCompleted &&
                <>
                    <StyledText>
                        1:00 PM
                    </StyledText>
                </>
                }
                <StyledImage src={Address} zoomedIn={zoomedIn} />
            </Content>
            <div>
                {squareGameInProgress && activeSquareKey === 2 ?
                    <GameAlignmentPattern onClick={handleGameSquareClicked}>
                        <GameAlignmentPatternInside />
                    </GameAlignmentPattern>
                    :
                    <AlignmentPattern>
                        <AlignmentPatternInside />
                    </AlignmentPattern>
                }
            </div>
        </Container>
    )
}

interface ContainerProps {
    screenHeight: number;
}

interface StyledImageProps {
    zoomedIn: boolean;
}

const StyledImage = styled.img<StyledImageProps>`
    position: absolute;
    z-index: -1;

    width: 100%;
    height: auto;

    transform: ${(props) => (props.zoomedIn ? "scale(23)" : "none")};
    transition: transform 13s ease;
`

const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: hidden;
    overflow-x: hidden;

    padding: 0;
    margin: 0;

    height: ${(props) => props.screenHeight}px;

    z-index: 1;
    position: relative;
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

const GameAlignmentPattern = styled.div`
    height: 50px;
    width: 50px;

    border: 10px solid blue;
    margin: 10px;

    cursor: pointer;
`

const GameAlignmentPatternInside = styled.div`
    height: 30px;
    width: 30px;
    
    background: blue;

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
const StyledText = styled.span`
    font-family: 'SquareDotMatrix', sans-serif;
    font-size: 1.5rem;
    color: white;
`
