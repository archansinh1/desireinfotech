import { Link } from "react-router-dom"

//Navigation Bar Ctreated..!!

const Menu = () =>
{
  return(
    <>
        <h1><Link to='/'>About</Link><br></br>
        <Link to='gallary'>Gallary</Link><br></br>
        <Link to='home'>Home</Link><br></br>
        <a href="home">click me</a>
        </h1>

   </>
  )
   

}

export default Menu;