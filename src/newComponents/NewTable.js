import React from "react";

export default function NewTable({ jsonData }) {
  return (
    <>
      <table>
        {jsonData.map((data) => {
          return (
            <tr>
              <th>{data.id}</th>
              <th>{data.name}</th>
              <th>{data.username}</th>
              <th>{data.email}</th>
            </tr>
          );
        })}
      </table>
    </>
  );
}
