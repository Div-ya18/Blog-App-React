import React from 'react'
import { Link } from "react-router-dom";
import "./post.css"

export default function Post({img}) {
  return (
    <div className='post'>
      <img  
      className="postImg" 
      src = {img}
      alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
          <Link className="link" to="/posts?cat=Thriller">
              Thriller
            </Link>
            
            </span>
          <span className="postCat">
          <Link className="link" to="/posts?cat=Comedy">
              Comedy
            </Link>
            
            </span>
        </div>
        <span className="postTitle">
          
        <Link to="/post/abc" className="link">
            Lorem ipsum dolor sit amet
          </Link>
          
          </span>
        <hr/>
        <span className="posstDate">1 hour ago </span>
      </div>
      <p className="postDesc"
      >  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, neque voluptatum consectetur vel harum similique quod iure atque officiis excepturi eaque aperiam! Magnam hic provident possimus qui saepe praesentium sint!
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis voluptate porro pariatur numquam eos. Suscipit fugit reiciendis velit obcaecati quos et, inventore amet distinctio voluptatibus iste quasi numquam totam architecto!
      </p>
    </div>
  );
}
