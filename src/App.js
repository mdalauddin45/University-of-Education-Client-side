import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import Spinner from "./Components/Spinner/Spinner";
import { router } from "./Routes/routes";

function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 7000);
  return (
    <div className="max-w-[1440px] mx-auto">
      {loading ? <Spinner /> : <RouterProvider router={router} />}
    </div>
  );
}

export default App;
