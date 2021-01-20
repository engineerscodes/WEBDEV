import React from 'react';

import  './output.css' //must be relaltive paths
const UserOutput =(props)=>{

    return(<div className='output'>
        <p>MY NAME IS {props.name}</p>
        <p>MY Age is {props.age}</p>
    </div>);
    
}

export default UserOutput;