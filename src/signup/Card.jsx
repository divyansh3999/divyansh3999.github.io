import React, { useEffect, useState } from "react";

export default function Card() {
  const [fortData, newFortData] = useState([]);
  const fetchData = () => {
    const url = "https://fortnite-api.com/v2/cosmetics/br";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        newFortData(data.data.slice(0,20));
      });
  };
  useEffect(()=>{
    fetchData();
  });
  return (
    <>
      <div className="container py-5">
        <div className="row">
          {fortData.map((data,key) => {
            return (
              <div key={key + 1} className="col-lg-4 text-center myCard">
                <img src={data.images.smallIcon} alt="" />

                <h2 className="text-light">{data.name}</h2>
                <p className="text-light">
                  {data.description}
                </p>
                <hr className="bg-light"/>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
