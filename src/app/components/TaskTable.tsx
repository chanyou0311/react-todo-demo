import { Task } from "../models/task";
import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks }: { tasks: Task[] }) => {
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
