import React, { useState } from 'react'
import UserTable from './UserTable';

export default function UserData() {
    const [jsonData, setjsonData] = useState([])
    const showData = ()=>{
        const url = "https://jsonplaceholder.typicode.com/users";
        fetch(url).then((response)=>{
            return response.json();
           
        }).then((data)=>{
            console.log(data);
            setjsonData(data);
        });
    }
  return (
    <>
        <button className="btn btn-primary mx-2" onClick={showData}>Fetch Data</button>
    <UserTable jsonData={jsonData}/>
    </>
  )
}
