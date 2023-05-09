import { ChangeEvent } from "react";

type SearchBarProps = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
export const SearchBar = ({ handleChange }: SearchBarProps) => {
  return (
    <>
      <label htmlFor="title">タスク名: </label>
      <input type="text" name="title" id="title" onChange={handleChange} />
    </>
  );
};
