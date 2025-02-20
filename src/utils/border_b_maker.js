export default function borderBMaker(input) {
  return (
    <span className="relative w-fit group">
      <span className="group-hover:font-semibold"> {input}</span>
      <span className="absolute bottom-0  h-[1px] left-0 bg-white w-0 group-hover:w-full transition-all duration-200 ease-in"></span>
    </span>
  );
}
