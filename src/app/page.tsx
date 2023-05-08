const FilterableTaskTable = () => {
  return (
    <>
      <h1>タスクの一覧</h1>
      <SearchBar />
      <TaskTable />
    </>
  );
};
const SearchBar = () => {
  return (
    <form>
      <label htmlFor="title">タスク名: </label>
      <input type="text" name="title" id="title" />
      <input type="submit" value="検索" />
    </form>
  );
};
const TaskTable = () => {
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
        <TaskRow />
        <TaskRow />
        <TaskRow />
      </tbody>
    </table>
  );
};
const TaskRow = () => {
  return (
    <tr>
      <td>☑</td>
      <td>鉛筆を買う</td>
      <td>太郎</td>
    </tr>
  );
};

export default function Home() {
  return (
    <main>
      <FilterableTaskTable />
    </main>
  );
}
