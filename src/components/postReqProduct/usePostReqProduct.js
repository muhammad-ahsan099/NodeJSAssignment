


import {useEffect, useState} from 'react';
import axios from 'axios';
export  function usePostReqProduct()
{
    

    const [errMessage , setMessage] = useState("");
 
    const [name , setName] = useState("");
    const [rollno , setRollno] = useState("");
    const [semes , setSemes] = useState("");
    const [cgpa , setCgpa] = useState("");
    const [myClass , setMyClass] = useState("")

    // setStudent(students)

    const ctaHandler = async ()=> {

        setMessage("")  
        if( name !== "" && rollno !== "" && semes !== "" && cgpa !== "" && myClass !== "")
        {  

        let student = {
        name ,
        rollno,
        semes ,
        cgpa ,
        myClass ,
        createdAt: new Date()

        }

        console.log('Student Data:  '  , student);
        let payload = student ;
        let res = await axios.post('http://localhost:5000/signup', payload);
        
        let data = res.data;

        console.log("Result after Post: " , data); 


        // let payload = { name: 'John Doe', occupation: 'gardener' };

        // let res = await axios.post('http://httpbin.org/post', payload);
    
        // let data = res.data;
        // console.log(data);


        setName("")
        setRollno("");
        setSemes("");
        setCgpa("");
        setMyClass("")
        alert("Success!!!")
    }

        else
        {
            setMessage("Some Inputs are Empty");
        }

    } 

    return [  errMessage  , name , rollno , semes , cgpa , myClass ,  setName,setRollno ,setSemes ,setCgpa , setMyClass , ctaHandler  ]

   
}
