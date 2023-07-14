import { useState } from "react";
import styled from "styled-components"
import { CountDown } from "../components/Coundown";

import MenuIcon from '../resources/menu.png'
import { Link } from "react-router-dom";

export const TwentyThreePage = () => {

    const luggageTargetDate = new Date(2023, 6, 15, 12, 0, 0)
    const testDate = new Date(2023, 6, 15, 1, 30, 0)
    const lastDate = new Date(2023, 6, 27, 22, 0, 0)

    const [showMenu, setShowMenu] = useState(false)
    const [countdownComplete, setCountdownComplete] = useState(false)
    const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight)

    const setPhoneScreenHeight = (): void => {
      setScreenHeight(window.innerHeight)
    }
    
    window.addEventListener('resize', setPhoneScreenHeight)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    const handleCountdownFinish = () => {
        setCountdownComplete(true)
    }

    return (
        <Container screenHeight={screenHeight}>
            <TopRow>
                <AlignmentPattern>
                    <AlignmentPatternInside>
                        <StyledMenuIcon src={MenuIcon} onClick={toggleMenu} />
                    </AlignmentPatternInside>
                </AlignmentPattern>
                {showMenu &&
                <Menu>
                    <StyledLink to='credits'>
                        <MenuText>
                            staff
                        </MenuText>
                    </StyledLink>
                </Menu>
                }
                <AlignmentPattern>
                    <AlignmentPatternInside/>
                </AlignmentPattern>
            </TopRow>
            {!countdownComplete && 
            <Content>
                <StyledSubThing>
                    <StyledTitle>
                        save the dates
                    </StyledTitle>
                    <StyledText>
                        28 - 29 - 30 / july
                    </StyledText>
                </StyledSubThing>
                <StyledSubThing>
                    <StyledText>
                        more info coming soon
                    </StyledText>
                    <StyledSubText>
                        <CountDown targetDate={luggageTargetDate} onCountdownFinish={handleCountdownFinish} />
                    </StyledSubText>
                </StyledSubThing>
            </Content>
            }
            {countdownComplete && 
            <Content>
                <StyledSubThing>
                    <StyledTitle>
                        save the dates
                    </StyledTitle>
                    <StyledText>
                        28 - 29 - 30 / july
                    </StyledText>
                </StyledSubThing>
                <StyledSubThing>
                    <StyledText>
                        required equipment
                    </StyledText>
                    <StyledSubText>
                        - Ropa y calzado manchable y mojable<br/>
                        - La mochila esa para planes sorpresa<br/>
                        - Lay's al punto de sal
                    </StyledSubText>
                </StyledSubThing>
                <StyledSubThing>
                    <StyledText>
                        more info coming soon
                    </StyledText>
                    <StyledSubText>
                        <CountDown targetDate={lastDate} onCountdownFinish={handleCountdownFinish} />
                    </StyledSubText>
                </StyledSubThing>
            </Content>
            }
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

const StyledTitle = styled.span`
    font-family: 'SquareDotMatrix', sans-serif;
    font-size: 2.8rem;
    color: white;
`

const StyledText = styled.span`
    font-family: 'SquareDotMatrix', sans-serif;
    font-size: 2rem;
    color: white;
`

const StyledSubThing = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledSubText = styled.span`
    font-family: 'SquareDotMatrix', sans-serif;
    font-size: 1%.5;
    color: white;
`

const StyledMenuIcon = styled.img`
    width: 30px;
`

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    display: flex;
    flex-grow: 1;

    margin: 10px;
    justify-content: center;
`

const MenuText = styled.p`
    font-family: 'SquareDotMatrix', sans-serif;
    font-size: 16px;
    color: black;

    text-align: center;

    margin: 0;
    padding: 5px;

    cursor: pointer;

    &:hover {
        color: white;
        background-color: black;
    }
`

const Text = styled.p`
    font-family: 'SquareDotMatrix', sans-serif;
    font-size: 1%.5;
    color: white;
`

const StyledLink = styled(Link)`
    text-decoration: none;
`
