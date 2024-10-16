import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./components/loading";

export default function App() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false); // Set loading to false after 2 seconds
    }, 1200);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div className="">
      <>{loading ? <Loading /> : <Outlet />}</>
    </div>
  );
}
