

import React from 'react';
import { useState } from 'react';
import { usePostReqProduct } from './usePostReqProduct';

function PostReqProduct() {

    const [errMessage, name, rollno, semes, cgpa, myClass, setName, setRollno, setSemes, setCgpa, setMyClass , ctaHandler] = usePostReqProduct();

    return (
        <div>


            <h2>Post Request</h2>
            <input
                style={{padding: 5 , width: 200 , margin:10 }}
                type="text"
                name="name"
                placeholder="Enter Your Name "
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
           
            <br />

            <input
                style={{padding: 5 , width: 200 , margin:10 }}
                type="text"
                name="rollno"
                placeholder="Enter Your Roll No "
                onChange={(e) => setRollno(e.target.value)}
                value={rollno}
            />
           
            <br />
            <input
                style={{padding: 5 , width: 200 , margin:10 }}
                type="text"
                name="semes"
                placeholder="Enter Your Semester "
                onChange={(e) => setSemes(e.target.value)}
                value={semes}
            />
            
            <br />
            <input
                style={{padding: 5 , width: 200 , margin:10 }}
                type="text"
                name="cgpa"
                placeholder="Enter Your CGPA "
                onChange={(e) => setCgpa(e.target.value)}
                value={cgpa}
            />
           
            <br />
            <input
                style={{padding: 5 , width: 200 , margin:10 }}
                type="text"
                name="myClass"
                placeholder="Enter Your Class "
                onChange={(e) => setMyClass(e.target.value)}
                value={myClass}
            />

            <br />
            <button
            style={{padding: 5 , width: 215 , margin:10 }}
            type="submit" name="submit" onClick={ctaHandler}>
                Submit
            </button>

            <h4 style={{ backgroundColor: "green", color: "white" }}>
                {errMessage}
            </h4>

        </div>
    );
}

export default PostReqProduct;