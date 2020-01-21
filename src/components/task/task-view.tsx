// src/components/task.tsx

import React from "react";

export type Task = {
  id: string;
  title: string;
  state: object;
};

const Task: React.FC<Task> = ({ title }) => {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
};

export default Task;
