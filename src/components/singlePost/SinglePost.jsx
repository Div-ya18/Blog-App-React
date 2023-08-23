import React from 'react'
import { Link } from "react-router-dom";
import "./singlePost.css"
export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className='singlePostImg'/>
      <h1 className="singlePostTitle">
        Lorem ipsum
        <div className="singlePostEdit">
        <i className=" singlePostIcon fa-regular fa-pen-to-square"></i>
        <i className=" singlePostIcon fa-solid fa-trash"></i>
        </div> 
        </h1>
        <div className="singlePostInfo">
            <span className='singlePostAuthor'>Author:
            <b className="singlePostAuthor"> 
            
            <Link className="link" to="/posts?username=Divya">
                
                Divya
              </Link> 
            
            </b>
            </span>
            <span > hour ago</span>
        </div>
        <p className='singlePostDesc'>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam recusandae labore non explicabo excepturi impedit, culpa voluptatum illo dolorem? Sequi eius iure ab repudiandae quae culpa suscipit dolorum aperiam sed.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, at obcaecati ex, ipsa consequuntur vitae officia aspernatur eligendi fuga iste possimus modi debitis nostrum provident iusto. Dolores dolor aperiam officiis.Lorem
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque velit aspernatur necessitatibus fugiat recusandae vero enim, consequuntur placeat, molestiae quis saepe soluta beatae deserunt dolores eos, impedit tempora odit similique.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam recusandae labore non explicabo excepturi impedit, culpa voluptatum illo dolorem? Sequi eius iure ab repudiandae quae culpa suscipit dolorum aperiam sed.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, at obcaecati ex, ipsa consequuntur vitae officia aspernatur eligendi fuga iste possimus modi debitis nostrum provident iusto. Dolores dolor aperiam officiis.Lorem
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque velit aspernatur necessitatibus fugiat recusandae vero enim, consequuntur placeat, molestiae quis saepe soluta beatae deserunt dolores eos, impedit tempora odit similique.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam recusandae labore non explicabo excepturi impedit, culpa voluptatum illo dolorem? Sequi eius iure ab repudiandae quae culpa suscipit dolorum aperiam sed.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, at obcaecati ex, ipsa consequuntur vitae officia aspernatur eligendi fuga iste possimus modi debitis nostrum provident iusto. Dolores dolor aperiam officiis.Lorem
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque velit aspernatur necessitatibus fugiat recusandae vero enim, consequuntur placeat, molestiae quis saepe soluta beatae deserunt dolores eos, impedit tempora odit similique.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam recusandae labore non explicabo excepturi impedit, culpa voluptatum illo dolorem? Sequi eius iure ab repudiandae quae culpa suscipit dolorum aperiam sed.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, at obcaecati ex, ipsa consequuntur vitae officia aspernatur eligendi fuga iste possimus modi debitis nostrum provident iusto. Dolores dolor aperiam officiis.Lorem
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque velit aspernatur necessitatibus fugiat recusandae vero enim, consequuntur placeat, molestiae quis saepe soluta beatae deserunt dolores eos, impedit tempora odit similique.
        </p>
      </div>
    </div>
  )
}
