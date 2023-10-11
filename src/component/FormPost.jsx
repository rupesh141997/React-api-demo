import React, { useState } from "react";
import axios from "axios";
import '../component/Forms.css'


function FormPost(){

const [title, settitle]=useState("");
// const [desc, setdesc]=useState("");
const handleChange = (e) => {
    settitle(e.target.value);
    // setdesc(e.target.value);
};

const handleSubmit = (e) =>{
    axios.post('https://dummyjson.com/products/add', {
        title: title,
        // description: desc,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      e.preventDefault();
};

 

    return(

        
        <>
            <div className="m-4"> 
            <div className="m-3">
                <h1>add product</h1>
                <form className="m-3in"
                onSubmit={(e) => {
                    console.log("test click");
                    handleSubmit(e);
                    }}>

                 <label  >Title 
                    <input className="tit"
                     type="text"  
                     value={title} 
                     onChange={(e)  => {
                        handleChange(e);
                        }} /> <br />
                
                </label>
                <input className="but" type="submit" value="Submit" />
                </form>
            </div>
        
            </div>
        
        </>
    )


}

export default FormPost;