import { memo } from 'react'
interface Props {
    todos: string[];
    addTodo: () => void;
}

const Todos = ({todos, addTodo} :Props) => {
    console.log("child render");
    return (
      <>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </>
    );
}

export default memo(Todos);