import  "./header.css"

export default function Header() {
  return (
    
    <div className="header">
      <div className="headerTitles">
    
        <span className="headerTitlesSm" > Greetings,</span>
        <span className="headerTitlesLg" > Welcome to My Blog </span>
      </div>
      <img 
      className="headerImg" 
      src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="image"/>
    </div>

  );
}
