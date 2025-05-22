import React from 'react'
import {MyDatabase} from '../component/listed'
import Button from '../component/Button'


 
function Home({name,age,birth,database}) {


//    const  message = [
//         {
//             "id":12,
//             'price':123
//         }
//     ]

const Man = (e)=>{
     e.preventDefault();
     alert("Man")
   
  }

    return (

        <>
       <form  action="" method="post" >
       <Button onClick={Man()} name={"Man"}/>
       </form>
        {/* <MyDatabase database={message}/> */}
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{birth}</h1>
        <div className="">
           
        </div>
        
        </>
    )
    
}

export default Home