import React from "react";
import SectionHeading from "../../components/SectionHeading";
import { Bounce, toast } from "react-toastify";
import ChildComponent from "./ChildComponent";

function PropManagement() {

  const notify = (message: string) =>
    toast(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  return (
  <>
  <SectionHeading name="Prop Management" />
  <div className="text-center">
    <ChildComponent onClick={notify} text="Props" />
  </div>
  </>
  );
}

export default PropManagement;
