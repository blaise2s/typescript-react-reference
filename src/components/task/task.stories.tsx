// src/components/task/task.stories.tsx

import React from "react";
import { action } from "@storybook/addon-actions";

import { Task } from "..";
import { TaskType, TaskState } from "./task-view";

export default {
  component: Task,
  title: "Task",
  // Exports that end in Data are not stories in this case
  excludeStories: /.*Data$/,
};

export const taskData: TaskType = {
  id: "1",
  title: "Test Task",
  state: TaskState.TASK_INBOX,
  updatedAt: new Date(2020, 1, 22, 9, 0),
};

export const actionsData = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask"),
};

export const standard = () => {
  return <Task task={{ ...taskData }} {...actionsData} />;
};

export const pinned = () => {
  return <Task task={{ ...taskData, state: TaskState.TASK_PINNED }} {...actionsData} />;
};

export const acrchived = () => {
  return <Task task={{ ...taskData, state: TaskState.TASK_ARCHIVED }} {...actionsData} />;
};
