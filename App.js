import React, { useState, useEffect } from "react";
import Navigation from "./navigation/Navigation";
import { _retrieveData } from "./DB/storage";

const App = () => {
  const [sesion, setsesion] = useState(false);

  useEffect(() => {
    _retrieveData(setsesion);
  }, [setsesion]);
  return <Navigation users={sesion} />;
};

export default App;
