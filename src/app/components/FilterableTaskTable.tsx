"use client";
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { TaskTable } from "./TaskTable";
import { Task } from "../models/task";
import { Space } from "antd";

export const FilterableTaskTable = ({ tasks }: { tasks: Task[] }) => {
  const [searchTitle, setSearchTitle] = useState("");
  const filteredTasks = tasks.filter((task) => task.title.match(searchTitle));

  return (
    <Space direction="vertical">
      <h1>タスクの一覧</h1>
      <SearchBar handleChange={(e) => setSearchTitle(e.target.value)} />
      <TaskTable tasks={filteredTasks} />
    </Space>
  );
};
