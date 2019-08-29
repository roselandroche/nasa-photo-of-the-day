import React from 'react'
import styled from 'styled-components'

const StyledExplanation = styled.p`
    width: 90%;
    padding: 10px;
    text-align: left;
    font-family: Courier New;
`;

function Explanation(props) {
    return <StyledExplanation className='explanation'>{props.explanation}</StyledExplanation>
}

export default Explanation