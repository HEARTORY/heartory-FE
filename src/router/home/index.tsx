import React from "react";

import Introduction from "./components/Introduction";
import FeaturesSession from "./components/FeaturesSession";

interface Props { }

const Home: React.FC<Props> = () => {
  return (
    <div className="container mt-9">
      <Introduction />
      <FeaturesSession />
    </div>
  );
};

export default Home;
