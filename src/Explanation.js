import React from 'react'
import styled from 'styled-components'

const StyledExplanation = styled.p`
    width: 80%;
    padding: 10px;
    text-align: left;
    font-family: Courier New;
    font-size: 18px;
    margin: 0 auto;
    line-height: 20px;
`;

function Explanation(props) {
    return <StyledExplanation className='explanation'>{props.explanation}</StyledExplanation>
}

export default Explanation