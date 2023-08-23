import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/home/single/Single";
import Write from "./pages/home/write/Write";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
      <TopBar/>

      <Switch>
        
        <Route exact path="/"> 
          <Home/>
        </Route>

        <Route path="/about"> 
          <About />
        </Route>

        <Route path="/contact"> 
          <Contact/>
        </Route>

        <Route path="/posts">
          <Home/>
        </Route>

        <Route path="/register">
        
          <Register/>

        </Route>

        <Route path="/login">
        </Route>

        <Route path="/write">{currentUser ? <Write/> : <Register />}
        </Route>

        <Route path="/settings">
          {currentUser ? <Settings /> : <Login/>}
        </Route>

        <Route path="/post/:id">
          <Single/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;