import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
    font-family: Courier;
    font-size: 48px;
`; 

function Header(props) {
    return <StyledTitle className='header'>{props.title}</StyledTitle>
}

export default Header