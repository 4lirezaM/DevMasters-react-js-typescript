import { ReactNode } from "react";
import CounterAnimation from "./CounterAnimation.tsx";

type LandingcartProps = {
  children: ReactNode;
  count: number;
  title: string;
  svgclass?: string;
};

function Landingcart({
  children,
  count,
  title,
  svgclass = "",
}: LandingcartProps) {
  return (
    <div className="flex flex-col items-center">
      <div className={svgclass}>{children}</div>
      <CounterAnimation
        targetNumber={count}
        increment={
          count > 10000 ? 100 : count > 5000 ? 50 : count > 1000 ? 5 : 1
        }
      />
      <p className="w-48 text-center sm:text-2xl">{title}</p>
    </div>
  );
}

export default Landingcart;
