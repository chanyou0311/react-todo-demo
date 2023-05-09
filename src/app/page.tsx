"use client";
import { ChangeEvent, useState } from "react";

type Task = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
const FilterableTaskTable = ({ tasks }: { tasks: Task[] }) => {
  const [searchTitle, setSearchTitle] = useState("");
  const filteredTasks = tasks.filter((task) => task.title.match(searchTitle));

  return (
    <>
      <h1>タスクの一覧</h1>
      <SearchBar handleChange={(e) => setSearchTitle(e.target.value)} />
      <TaskTable tasks={filteredTasks} />
    </>
  );
};
type SearchBarProps = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
const SearchBar = ({ handleChange }: SearchBarProps) => {
  return (
    <>
      <label htmlFor="title">タスク名: </label>
      <input type="text" name="title" id="title" onChange={handleChange} />
    </>
  );
};
const TaskTable = ({ tasks }: { tasks: Task[] }) => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>タスク名</th>
          <th>ユーザー名</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TaskRow task={task} key={task.id} />
        ))}
      </tbody>
    </table>
  );
};
const TaskRow = ({ task }: { task: Task }) => {
  return (
    <tr>
      <td>{task.completed ? "☑" : "☐"}</td>
      <td>{task.title}</td>
      <td>{task.userId}</td>
    </tr>
  );
};

const Tasks = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
];
export default function Home() {
  return (
    <main>
      <FilterableTaskTable tasks={Tasks} />
    </main>
  );
}
