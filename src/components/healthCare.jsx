import { useNavigate } from "react-router-dom";
import ifrit from "../Assets/jpg/ifrit.jpg";

export default function ECommercePage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5 p-10">
      <div>
        Hospital Management Information System and Performance Management System
      </div>
      <div className="flex gap-8">
        <img width={"300px"} src={ifrit} alt="" />
        <div className="text-balance">
        A website with basic functions: <strong>user management</strong>, <strong>product listing</strong>, <strong>admin controls</strong>,
         and <strong>transactions</strong>.
         Its main feature, <strong>Warehouse</strong>, informs users where and when the products will be sent and delivered, using geo-location as a supporting feature.
        </div>
        <button onClick={() => navigate("/pms")}>Go to Checkout</button>
      </div>
    </div>
  );
}
