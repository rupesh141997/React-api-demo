
import React, { useState ,useEffect} from "react";
import './Midcontainer.css'
import axios from 'axios';
import {Link} from 'react-router-dom'



function MidContainer(){
    const [productData,setproductData]=React.useState([]);
    React.useEffect(() => {
        
        axios
        .get('https://dummyjson.com/products')
        .then(function (response) {
            // handle success
            // console.log(response.data.products,"testdata");
       
           
                
            setproductData(response.data.products);
             

        
        // console.log(x);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        
      });
    })



// ----------------------------------another way---------------------------------

    // const fetchProduct=async (url) => {
    //     try {
    //         const res=await fetch(url);
    //         const data =await res.json();
    //         console.log(data);
    //         if(data.length>0){
    //             setproductData(data);
    //         }
    //         console.log(productData);
    //     } catch (e) {
    //         console.error();
    //     }

    // }




    //  useEffect(() =>   
    //     {
    //          fetchProduct('https://dummyjson.com/products');
        
    //         },[])

    return(
            <>
            
            <div className="top">
            <h3>C.A.S Consulting Ltd</h3>
            <p>C.A.S Consulting Ltd is an independent engineering consultancy office established in 2012 specializing in Electrical, Mechanical and Energy Building Services. </p>
            <h5> About us</h5>

            </div>
            <div className="head"><h3>Engineering sector</h3></div>
        <div className="container">
            
                {
                    productData.map((currProduct) => {
                        return(
                                 
                          <Link to ="/products">   <div className="card">
                                <div className="content">
                                <h3>{currProduct.title}</h3>
                                <p>{currProduct.description}</p>
                                </div>
                                 <img src={currProduct.thumbnail} alt="" />
                            </div>
                            </Link>
                        );
                    })
                }
        
 

            
        </div>

      
        </>
    )
}




export default MidContainer;