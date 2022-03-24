import React from "react";

export default function UserTable({ jsonData }) {
  return (
    <>
      <table>
        {jsonData.map((data) => {
          return (
            <tr>
              <th>id : {data.id}</th>
              <th>name : {data.name}</th>
              <th>username : {data.email}</th>
            </tr>
          );
        })}
      </table>
    </>
  );
}
