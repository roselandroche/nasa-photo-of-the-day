import React, { useState } from 'react'

function Header() {
    const [title] = useState('Astronomy Picture of the Day')

    return <h1 className='header'>{title}</h1>
}

export default Header