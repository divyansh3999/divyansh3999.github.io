import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
export default function Post() {
  const notify = () =>
    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_LEFT,
    });

  const send = () => {
    const url = "https://reqres.in/api/users";
    axios
      .post(url, {
        name: "morpheus",
        job: "leader",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <button onClick={notify}>Notify !</button>
      <ToastContainer
      />
    </>
  );
}
