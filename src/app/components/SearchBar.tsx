import { Input } from "antd";
import { ChangeEvent } from "react";

type SearchBarProps = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
export const SearchBar = ({ handleChange }: SearchBarProps) => {
  return (
    <Input
      type="text"
      name="title"
      placeholder="タスク名"
      onChange={handleChange}
    />
  );
};
