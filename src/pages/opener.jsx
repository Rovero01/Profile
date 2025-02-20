import { Display } from "react-7-segment-display";
import { animated, useSpring } from "react-spring";

export default function Opener({ open }) {
  const AnimatedDisplay = animated(Display);
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: 100 },
    config: { duration: 2000 },
  });

  return open?.opener ? (
    <div className="fixed flex text-5xl justify-center w-full h-full items-center">
      <AnimatedDisplay
        height={150}
        count={3}
        value={number.to((value) => Math.round(value).toString())}
        
      />
      %
    </div>
  ) : null;
}
