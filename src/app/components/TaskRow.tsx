import { Task } from "../models/task";

export const TaskRow = ({ task }: { task: Task }) => {
  return (
    <tr>
      <td>{task.completed ? "☑" : "☐"}</td>
      <td>{task.title}</td>
      <td>{task.userId}</td>
    </tr>
  );
};
