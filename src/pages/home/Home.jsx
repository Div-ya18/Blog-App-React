import './home.css'
import { useLocation } from "react-router";
import Header from "../../components/header/Header"
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
export default function Home() {
  const location = useLocation();
  console.log(location);
  return (
    <>
   <Header/>
    <div className="home">
        <Posts> </Posts>
        <Sidebar> </Sidebar>
      
    </div>
    </>
  );
}

