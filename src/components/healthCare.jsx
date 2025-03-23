import { useNavigate } from "react-router-dom";
import pms from "../Assets/jpg/pms.png";

export default function ECommercePage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5 p-10">
      <div>
        Hospital Management Information System and Performance Management System
      </div>
      <div className="flex gap-8">
        <img width={"300px"} src={pms} alt="" />
        <div className="text-balance">
        I develop HMIS and PMS model websites, seamlessly integrating with external vendors, including clients' internal IT teams and institutions like the Ministry of Health. My solutions help hospitals streamline operations, enhance interoperability, and efficiently manage employee evaluations.
        </div>
        <button onClick={() => navigate("/pms")}>Go to Checkout</button>
      </div>
    </div>
  );
}
