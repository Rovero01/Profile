import logo from '../Assets/png/logo.png'

export default function Topbar({ open }) {
  const topbarWords = [
    { name: "About" },
    { name: "Experience" },
    { name: "Service" },
    { name: "Projects" },
  ];

  return (
    <div className={`flex relative items-center justify-between bg-gray-300 text-white ${open.topbar ? 'shadow-sm shadow-orange-300':''} py-3`}>
       <div id="main" className='h-full w-full'></div>
      <div
        className={`h-fit w-fit flex items-center transform text-start font-oswald text-6xl ${
          open.topbar ? "translate-x-40 opacity-100 " : "opacity-0"
        } duration-500 ease-in-out`}
      >
        <img width={50} src={logo} alt='my logo'/>
      </div>
      <div
        className={`flex gap-16 transform ${
          open.topbar ? "-translate-x-40 opacity-100 " : "opacity-0"
        } duration-500 ease-in-out`}
      >
        {topbarWords.map((data, index) => (
          <button>{data.name}</button>
        ))}
      </div>
    </div>
  );
}
