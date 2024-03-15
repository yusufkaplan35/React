import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const UseEffect1 = () => {

    const [message, setMessage] = useState("");
    console.log(message);

    useEffect(()=>{
        console.log("MOUNTING: Bu kodlar sadece render da calisir.")
    },[])

    return (
        <div className="text-center mt-5">
            <Button onClick={() => setMessage(Math.random())}>Set Message</Button>
        </div>
    );
};

export default UseEffect1;