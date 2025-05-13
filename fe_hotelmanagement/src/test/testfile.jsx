import React from "react";
import { render } from "@testing-library/react";


const func = () => {
  const a = 1;
  const b = 2;
  const c = a + b;
  return c;
}

export const TestComponent = () => {
  const result = func();
  return <div>{result}</div>;
}