import React from 'react'
import {Link} from 'react-router-dom'

const Splash = () => {

    return(
<div>
    <h1>Welcome to Bookworm!</h1>   
    <div className = "splashPage">
    <nav>
     <Link to='/login'>Login</Link> or
     <Link to='/signup'> Signup</Link> to continue!
    </nav>
    </div>
 </div>
    )
}

export default Splash