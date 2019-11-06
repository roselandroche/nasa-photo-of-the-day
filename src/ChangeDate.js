import React from 'react'
import styled from '@emotion/styled'

const StyledButton = styled.button`
    display: block;
    padding: 10px 20px;
    margin-left: 10%;
    margin-top: 10px;
    border-radius: 4px;
    border: 1px solid #12383F;
    color: #12383F;

    &:hover {
        background-color: #12383F;
        color: white;
    }
`;

function ChangeDate(props) {
    return <StyledButton className='changeDate'>Change the Date</StyledButton>
}

export default ChangeDate