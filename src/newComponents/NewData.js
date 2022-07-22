import React, {useState} from 'react'
import '../newComponents/NewTable';
import NewTable from '../newComponents/NewTable';

export default function NewData() {
    const [jsonData, newJsonData] = useState([]);
    const showData = ()=>{
        const url="https://jsonplaceholder.typicode.com/users";
        fetch(url).then((response)=>{
         return response.json();
        }).then((data)=>{
          console.log(data);
          newJsonData(data);
        });
    }
  return (
      <>
        <button className="btn btn-primary my-2" onClick={showData}>New Data</button>
        <NewTable jsonData={jsonData.slice(0,5)}/>
      </>
  )
}
