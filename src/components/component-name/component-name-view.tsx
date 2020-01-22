// src/components/component-name/component-name-view.tsx

import React from "react";
import "./component-name.scss";

export type ComponentNameProps = {
  name: string;
};

const ComponentName: React.FC<ComponentNameProps> = ({ name }) => {
  return (
    <h1 className="hello">
      Hello, <span className="name">{name}</span>!
    </h1>
  );
};

export default ComponentName;
