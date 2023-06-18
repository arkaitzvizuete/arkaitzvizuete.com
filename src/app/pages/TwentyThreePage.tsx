import styled from "styled-components"

export const TwentyThreePage = () => {
    return (
        <Container>
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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;

    padding: 0;
    margin: 0;
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