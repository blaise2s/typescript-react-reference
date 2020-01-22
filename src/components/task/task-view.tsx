// src/components/task/task-view.ts

import React from "react";
import "./task.scss";

export enum TaskState {
  TASK_INBOX = "TASK_INBOX",
  TASK_PINNED = "TASK_PINNED",
  TASK_ARCHIVED = "TASK_ARCHIVED",
}

export type TaskType = {
  id: string;
  title: string;
  state: string;
  updatedAt: Date;
};

const Task: React.FC<{ task: TaskType; onArchiveTask: (id: string) => void; onPinTask: (id: string) => void }> = (props) => {
  const { id, title, state } = props.task;
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input type="checkbox" defaultChecked={state === TaskState.TASK_ARCHIVED} disabled={true} name="checked" />
        <span className="checkbox-custom" onClick={() => props.onArchiveTask(id)} />
      </label>
      <div className="title">
        <input type="text" value={title} readOnly={true} placeholder="Input Title" />
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {state !== TaskState.TASK_ARCHIVED && (
          <a onClick={() => props.onPinTask(id)}>
            <span className="icon-star" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Task;
