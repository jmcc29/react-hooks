import { useEffect, useState } from "react";

interface TimerProps {
  milisegundos: number;
}
export const Timer = ({ milisegundos }: TimerProps) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, milisegundos);
    return () => clearInterval(interval);
  }, [milisegundos]);

  return (
    <>
      <h4>
        Timer <small>{seconds}</small>
      </h4>
    </>
  );
};
