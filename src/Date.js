import React from 'react'
import styled from 'styled-components'

const StyledDate = styled.p`
    font-size: 16px;
    text-align: left;
    margin-left: 10%;
`;

function Date(props) {
    return <StyledDate className='date'>{props.date}</StyledDate>
}

export default Date