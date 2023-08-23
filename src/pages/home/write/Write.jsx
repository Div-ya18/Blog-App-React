import React from 'react'
import "./write.css"
export default function Write() {
  return (
    <div className="write">
        <img  className="writeImg" src="https://images.pexels.com/photos/1520372/pexels-photo-1520372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " alt=" "/> 
        <form className='writeForm'>
            <div className='writeFormGroup'> 
            <lable htmlFor="fileInput"> 
            <i className=" writeIcon fa-solid fa-file-circle-plus"></i>
            </lable>
            <input type="file" name="" id="fileInput" style={{display:"none"}}/> 
            <input type="text" placeholder='Title'className='writeInput' autoFocus={true} />
            </div>
        <div className="writeFormGroup"> 
        <textarea 
        className="writeInput writeText"
        placeholder="Tell your story..."
        type="text"
        autoFocus={true}
        />   
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
        </form>
      
    </div>
  )
}
