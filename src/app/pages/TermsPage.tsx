import { useState } from "react";
import styled from "styled-components";

export const TermsPage = () => {

    const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight)

    const setPhoneScreenHeight = (): void => {
      setScreenHeight(window.innerHeight)
    }
    
    window.addEventListener('resize', setPhoneScreenHeight)

    return(
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
                Nos complace anunciarle que entre el 28 y 30 de julio disfrutará de una experiencia de índole confidencial.
                <br/>
                La asistencia a dicho evento requerirá de los enseres propias del periodo estival en el que nos encontramos. Nos consta que ya cuenta con una mochila mierd... kit de supervivencia adecuado para este tipo de planes, así que le invitamos a que lo traiga.
                <br/>
                El día 28 al mediodía pasaremos a recogerla en nuestros carruajes de cuatro neumáticos y menos caballos de los que sus dueños querrían. La vuelta está prevista el domingo al mediodía también.
                <br/>
                Si tiene dudas póngase en contacto con el equipo.* Le esperamos.
                <br/>
                <br/>
                Atentamente,
                <br/>
                Bullet people.
                <br/>
                <br/>
                *El equipo no se hace responsable de no esclarecer todas sus dudas.
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

const StyledText = styled.p`
    font-family: 'SquareDotMatrix', sans-serif;
    font-size: 16px;
    color: white;

    padding: 15px;

`