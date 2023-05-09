import { Table } from "antd";
import { Task } from "../models/task";
import { ColumnsType } from "antd/es/table";

export const TaskTable = ({ tasks }: { tasks: Task[] }) => {
  const columns: ColumnsType<Task> = [
    {
      title: "ID",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "完了済みか",
      key: "completed",
      dataIndex: "completed",
      render: (value: boolean) => (value ? "☑" : "☐"),
    },
    {
      title: "タスク名",
      key: "title",
      dataIndex: "title",
    },
    {
      title: "ユーザーID",
      key: "userId",
      dataIndex: "userId",
    },
  ];
  return <Table<Task> dataSource={tasks} rowKey="id" columns={columns}></Table>;
};
