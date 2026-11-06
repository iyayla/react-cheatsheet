import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PropManagement from "./pages/Props/PropManagement";
import StateManagement from "./pages/StateManagement";
import Enviroment from "./pages/Enviroment";
import Redux from "./pages/Redux/Redux";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Api from "./pages/Api/Api";

const TailWind = lazy(() => import("./pages/TailWind"));


function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/props" element={<PropManagement />} />
          <Route path="/states" element={<StateManagement />} />
          <Route path="/tailwind" element={<TailWind />} />
          <Route path="/enviroment" element={<Enviroment />} />
          <Route path="/redux" element={<Redux />} />
          <Route path="/api" element={<Api />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
