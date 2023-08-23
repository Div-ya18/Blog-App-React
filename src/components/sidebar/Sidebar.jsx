
import "./sidebar.css"
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem"> 
    <span className="sidebarTitle"> ABOUT ME </span>
      <img src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="250px"
      alt=""
      />

      <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, velit! Similique voluptates, culpa quo eos, doloremque veritatis nulla aperiam omnis, suscipit ipsum architecto. Error deleniti doloremque laboriosam id quas nulla! 
         </p>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">
        <Link className="link" to="/posts?cat=Thriller">
          Lorem
          </Link>
          </li>
        <li className="sidebarListItem">
        <Link className="link" to="/posts?cat=Comedy">
          Ipsum
          </Link>
          </li>
        <li className="sidebarListItem">
        <Link className="link" to="/posts?cat=Romance">
          Dolor
          </Link>
          </li>

        <li className="sidebarListItem">
        <Link className="link" to="/posts?cat=Horror">
          Sit
          </Link>
          </li>

      </ul>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US </span>
      <div className="sidebarSocial"> 
      <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
    </div>
    </div>
    </div>
  )
}
