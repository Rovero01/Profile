export default function Topbar({ open }) {
  const topbarWords = [
    { name: "About" },
    { name: "Experience" },
    { name: "Service" },
    { name: "Projects" },
  ];

  return (
    <div className={`flex items-center justify-between ${open.topbar ? 'bg-black shadow-md shadow-white':''} py-5`}>
      <div
        className={`h-fit w-fit flex items-center transform text-start font-oswald text-6xl ${
          open.topbar ? "translate-x-40 opacity-100 " : "opacity-0"
        } duration-500 ease-in-out`}
      >
        Rochan Savero
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
