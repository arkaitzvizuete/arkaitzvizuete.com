import { useState } from "react"
import styled from "styled-components"

interface ErrorGameProps {
    onGameCompleted: Function
    onStartSquareGame: Function
    squareGameScore: number
}

export const ErrorGame = (props: ErrorGameProps) => {

    const [screenWidth] = useState<number>(window.innerWidth);

    const [gameStage, setGameStage] = useState(0)
    const [kbsDownloaded, setKbsDownloaded] = useState(0)
    const [dataDownloaded, setDataDownloaded] = useState(false)
    const [dataDownloadMessage, setDataDownloadMessage] = useState('Please click to download data')
    const [progressBarMaxWidth, setProgressBarWidth] = useState(0)

    const goToNextStage = () => {
        setGameStage(gameStage +1)
    }

    const completeGame = () => {
        props.onGameCompleted()
    }

    const downloadData = () => {
        switch(kbsDownloaded) {
            case 0:
                setKbsDownloaded(1)
                setDataDownloadMessage('Click more')
                break
            
            case 1:
                setKbsDownloaded(2)
                setDataDownloadMessage("Don't stop clicking")
                break

            default:
                const nextValue = parseFloat((kbsDownloaded *1.23).toFixed(1))
                setKbsDownloaded(nextValue)


                if (nextValue > 20) {
                    setDataDownloadMessage('You can do it')
                }

                if (nextValue > 500) {
                    setDataDownloadMessage('I believe in you')
                }

                if (nextValue > 900) {
                    setDataDownloadMessage('almost')
                }

                if (nextValue === 1016.2) {
                    setDataDownloaded(true)

                    setTimeout(() => {
                        setProgressBarWidth(screenWidth)
                        setTimeout(() => {
                            goToNextStage()
                            props.onStartSquareGame()
                        }, 5000)
                    }, 1000)
                }
        }
    }

    return (
        <>
        {gameStage === 0 &&
            <>
                <StyledText>
                    Error : (
                </StyledText>
                <StyledSmallText onClick={goToNextStage}>
                    Click here to start manual load
                </StyledSmallText>
            </>
        }
        {gameStage === 1 &&
            <>
                {!dataDownloaded &&
                <>
                    <StyledText>
                        {`${kbsDownloaded}/1016.2 Kbs downloaded`}
                    </StyledText>
                    
                    <StyledSmallText onClick={downloadData}>
                        {dataDownloadMessage}
                    </StyledSmallText>
                </>
                }
                {dataDownloaded &&
                <>
                    <StyledText>
                        Download complete
                    </StyledText>
                    <StyledSmallText>
                        Unpacking data
                    </StyledSmallText>
                    <ProgressBar barMaxWidth={progressBarMaxWidth} />
                </>
                }
            </>
        }

        {gameStage === 2 &&
            <>
                <StyledText>
                    Encrypted data
                </StyledText>
                <StyledSmallText>
                    Click the squares in time to decrypt
                </StyledSmallText>
                <StyledSmallText>
                    {props.squareGameScore}/23 packages decrypted
                </StyledSmallText>
            </>
        }
        
        </>
    )
}

const StyledText = styled.span`
    font-family: 'SquareDotMatrix', sans-serif;
    font-size: 1.5rem;
    color: white;
`

const StyledSmallText = styled.span`
    font-family: 'SquareDotMatrix', sans-serif;
    font-size: 1.2rem;
    color: white;

    cursor: pointer;
`

interface ProgressBarProps {
    barMaxWidth: number;
}

const ProgressBar = styled.div<ProgressBarProps>`
    height: 23px;

    width: ${(props) => props.barMaxWidth}px;
    background-color: white;

    transition: width 5s ease-in-out;
`