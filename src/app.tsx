import { Routes, Route } from "react-router-dom";

import Main from "@/pages/main";
import Genres from "@/pages/genres";
import Info from "@/pages/info";
import NoMatch from "@/pages/no-match";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/genres" element={<Genres />} />
      <Route path="/info" element={<Info />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default App;
