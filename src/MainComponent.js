import React, { useEffect, useState } from 'react';
import { getAuth} from "firebase/auth";

const auth = getAuth();
    
function Main(){
    
    return(
        <>
        <h1>Welcome To main Page</h1>
            <br />
            <textarea placeholder="Enter Some Details"/>
            <br />
            <button >Submit</button>
        </>
    );
}

export default Main;