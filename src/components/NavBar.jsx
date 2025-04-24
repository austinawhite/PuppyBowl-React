
import {Routes, Route, Link} from 'react-router-dom'
import Details from "./Details";
import '//App.css'

function NavBar () {

    return (
      <>
        <div className="MainMenu"> 
            Home 
            All Players
            <Link to="/new-player"> Register Player </Link>
            Tickets
        </div>
        <div className="Search"> </div>
      </>
    )
  }
  
  export default NavBar
  