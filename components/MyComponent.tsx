import React from "react";

const MyComponent = ({ data }) => {
  try {
    console.log(JSON.stringify(data)); // Check if this throws an error
  } catch (error) {
    console.error("Serialization error:", error);
  }

  return <div>{data.someValue}</div>;
};

export default MyComponent;
