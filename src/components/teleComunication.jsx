import firebase from "../Assets/png/firebase.png";

export default function eCommercePage() {
  return (
    <div className="flex flex-col gap-5 p-10">
      <div>
        My first E-Commerce Website 
      </div>
      <div className="flex gap-8">
        <img width={"300px"} src={firebase} alt="" />
        <div>
        A website with basic functions: <strong>user management</strong>, <strong>product listing</strong>, <strong>admin controls</strong>,
         and <strong>transactions</strong>.
         Its main feature, <strong>Warehouse</strong>, informs users where and when the products will be sent and delivered, using geo-location as a supporting feature.
        </div>
      </div>
    </div>
  );
}
