import React from "react";
import PuffLoader from "react-spinners/PuffLoader";

function Loading({ loading }) {
  return (
    <div>
      <h2 className="intro-text">Working on it!</h2>
      <PuffLoader
        color="white"
        size={80}
        css="display: block; margin: 0 auto;"
        loading={loading}
      />
    </div>
  );
}

export { Loading };
