import React from 'react'


const UserInput =(props)=>{
   const inputstyle={
         border :' 5px solid red',
         
   }
    return(
        <input type="text" onChange={props.change} value={props.Names} style={inputstyle}/>
    );
    
}

export default UserInput;