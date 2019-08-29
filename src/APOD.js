import React from 'react'
import styled from 'styled-components'

const StyledAPOD = styled.img`
    width: 80%;
    height: auto;
    border-radius: 8px;
`;

function APOD (props) {
    return <StyledAPOD src={props.picUrl} alt='The vast universe' className='APOD'></StyledAPOD>
}

export default APOD