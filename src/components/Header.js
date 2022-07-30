import React from 'react'

const Header = ({handleToggleDarkMode}) => {
    return (

        <div className="header">
        <h1><span style={{color:"#00008B"}}>Write-it-down</span> Notes</h1>
        <button onClick={()=>handleToggleDarkMode((previousDarkMode)=>!previousDarkMode)} className="save">Change mode</button>
        </div>
    )
}

export default Header