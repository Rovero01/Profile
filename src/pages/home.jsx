import { useEffect, useState } from "react";
import Topbar from "./topbar";
import Opener from "./opener";
import Content from "./content";

export default function Home() {
  // useEffect(() => {

  //   const saveScrollPosition = () => {
  //     localStorage.setItem('scrollPosition', window.scrollY);
  //   };
  //   window.addEventListener('beforeunload', saveScrollPosition);
  
  //   return () => {
  //     window.removeEventListener('beforeunload', saveScrollPosition);
  //   };
  // }, []);


  const [doneOpener, setDoneOpener] = useState(false);
  return (
    <div className="flex-col font-sans bg-black w-screen text-white h-[20000px] font-poppins">
      <button className="fixed h-full bottom-50 top-50" onClick={()=>setDoneOpener(!doneOpener)}>click</button>
      {/* <Opener done={setDoneOpener} /> */}
      <Topbar trigger={doneOpener} />
      <Content/>
    </div>
  );
}
