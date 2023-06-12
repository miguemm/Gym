import Navbar from "@/scenes/navbar";
import { useState } from "react";

// TODO 1:08:28

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("home");

  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
