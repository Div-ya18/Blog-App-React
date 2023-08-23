import "./topbar.css";
import { Link } from "react-router-dom";


export default function TopBar() {
  const user = true;
  return (
    <div className="top" > 
       <div className="topLeft"> 
       <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
       </div>
       
       <div className="topCenter">
        <ul className="topList">

          <li className="topListItem">
          <Link to="/" style = {{textDecoration:"none", color:"inherit"}}>HOME</Link>
          </li>
      
         <li className="topListItem">
         <Link to="/about" style = {{textDecoration:"none", color:"inherit"}}>
          ABOUT</Link></li>

         <li className="topListItem">
         <Link to="/contact" style = {{textDecoration:"none", color:"inherit"}}>
          CONTACT </Link> </li>


         <li className="topListItem"> 
         <Link className='link' to="/write">WRITE</Link>
          </li>

          {user && <li className="topListItem">LOGOUT</li>}
         
       </ul>
       </div>
       <div className="topRight"> 
       {
        user ? (
      <Link className="link" to="/settings">
      <img 
      className="topImg"
       src="https://images.pexels.com/photos/1131293/pexels-photo-1131293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
       alt=""
       />
       </Link>
       
        ):(
          <ul className="topList">

            <li className="topListItem"> 
            
          <Link className="link" to="/login">
            LOGIN 
          </Link>
          </li>

          <li className="topListItem"> 
          <Link className="link" to="/register">
            REGISTER
          </Link>
            </li>
          
          </ul>
        )}
       
       <i className="topSearchIcon fas fa-search"></i>
       </div>
        
      
    </div>
  );
}
 