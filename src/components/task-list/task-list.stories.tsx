// src/components/task-list.stories.tsx

import React from "react";
import { TaskList } from "..";
import { taskData, actionsData } from "../task/task.stories";
import { TaskType, TaskState } from "../task/task-view";

export default {
  component: TaskList,
  title: "TaskList",
  decorators: [(story: any) => <div style={{ padding: "3rem" }}>{story()}</div>],
  excludeStories: /.*Data$/,
};

export const standardTaskData: TaskType[] = [
  { ...taskData, id: "1", title: "Task 1" },
  { ...taskData, id: "2", title: "Task 2" },
  { ...taskData, id: "3", title: "Task 3" },
  { ...taskData, id: "4", title: "Task 4" },
  { ...taskData, id: "5", title: "Task 5" },
  { ...taskData, id: "6", title: "Task 6" },
];

export const withPinnedTaskData: TaskType[] = [...standardTaskData.slice(0, 5), { ...taskData, id: "6", title: "Task 6 (pinned)", state: TaskState.TASK_PINNED }];

export const standard = () => {
  return <TaskList tasks={standardTaskData} {...actionsData} />;
};

export const withPinnedTasks = () => {
  return <TaskList tasks={withPinnedTaskData} {...actionsData} />;
};
export const loading = () => {
  return <TaskList loading tasks={standardTaskData} {...actionsData} />;
};
export const empty = () => {
  return <TaskList tasks={[]} {...actionsData} />;
};
