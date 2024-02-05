import React, { useEffect } from "react";

export default function CertificateCard({
    name,description,image 
}){  
    useEffect (()=>{
        // console.log(certificateData[0]);
        // console.log(certificateData[1]);
        // console.log(certificateData);
    })
    return (
        <>
            {/* <p>Certificate</p> */}
            <hr/>

            <p>Certificate Name: {name}</p>
            <p>Certificate Description: {description}</p>
            <img src={image} />
            <hr/>
        </>
    )
}