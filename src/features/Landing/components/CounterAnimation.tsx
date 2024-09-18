import { useEffect, useRef } from "react";

function CounterAnimation({
  targetNumber,
  increment = 1,
}: {
  targetNumber: number;
  increment: number;
}) {
  const countRef = useRef(0);
  const elementRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const updateCount = () => {
      if (countRef.current < targetNumber) {
        countRef.current += increment;
        if (elementRef.current) {
          elementRef.current.innerHTML = countRef.current.toString();
        }
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [targetNumber, increment]);

  return (
    <p ref={elementRef} className="sm:text-2xl">
      {countRef.current}
    </p>
  );
}

export default CounterAnimation;
