import { useEffect, useState } from "react";
import Topbar from "./topbar";
import Opener from "./opener";
import Content from "./content";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const newScrollYPosition = window.pageYOffset;
    setScrollY(newScrollYPosition);
  };

  useEffect(() => {
    setTimeout(
      () => setOpen({ ...open, opener: false, topbar: true, body1: true }),
      2500
    );

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [open, setOpen] = useState({
    opener: true,
    topbar: false,
    body1: false,
    body2: false,
    body3: false,
  });

  if (scrollY > 200 && open.body2 === false && open.opener == false) {
    setOpen({ ...open, body2: true });
  }

  if (scrollY > 900 && open.body3 === false && open.opener == false) {
    setOpen({ ...open, body3: true });
  }

  return (
    <div className="flex-col font-sans bg-[#0d011f] text-white h-[20000px] font-poppins">
      <Opener open={open} />
      <Topbar open={open} /> 
      <Content open={open} />
    </div>
  );
}
