import Image from "next/image";

import { useState } from "react";

export default function Home() {

  const  [x,setX] =useState(0)
  const  [y,sety] =useState(0)

  return (
    <div className="flex items-center justify-center h-screen bg-slate-950 ">

      <div className=" {`h-[100vh]`} style= {{backgroundColor : `rgb(${x}, ${y/x - 50})} onMouseMove={} }">
      <h1 className="text-3xl font-bold text-center text-black ">Hello World  !</h1>
      </div>
    </div>
  );
}
