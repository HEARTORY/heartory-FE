import React from "react";

import Introduction from "./components/Introduction";

interface Props { }

const Home: React.FC<Props> = () => {
  return (
    <div className="container">
      <Introduction />
    </div>
  );
};

export default Home;
