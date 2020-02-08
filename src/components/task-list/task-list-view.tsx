// src/components/task-list-view.tsx

import React from "react";
import { Task } from "..";
import { TaskType, TaskState } from "../task/task-view";

export type TaskListType = {
  loading?: boolean;
  tasks: TaskType[];
  onPinTask: (id: string) => void;
  onArchiveTask: (id: string) => void;
};

const TaskList: React.FC<TaskListType> = ({ loading, tasks, onPinTask, onArchiveTask }) => {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  const loadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="list-items">
        {loadingRow}
        {loadingRow}
        {loadingRow}
        {loadingRow}
        {loadingRow}
        {loadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  const tasksInOrder: TaskType[] = [...tasks.filter((task: TaskType) => task.state === TaskState.TASK_PINNED), ...tasks.filter((task: TaskType) => task.state !== TaskState.TASK_PINNED)];

  return (
    <div className="list-items">
      {tasksInOrder.map((task: TaskType) => {
        return <Task key={task.id} task={task} {...events} />;
      })}
    </div>
  );
};

export default TaskList;
