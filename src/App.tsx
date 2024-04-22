import { RouterProvider } from "react-router-dom";
import router from "./router/index";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { authActions } from "./stores/auth";

interface authType {
  auth: { counter: 0; showCounter: true };
}

function App() {
  const dispatch = useDispatch();
  const auth = useSelector<authType>((state) => state.auth.counter);
  const add = () => {
    dispatch(authActions.increament());
  };

  const todoInput = useRef<HTMLInputElement>(null);

  const submitTodo = (event: React.FormEvent) => {
    event.preventDefault();
    const enterText = todoInput.current!.value;
  };

  return (
    <>
      <RouterProvider router={router} />
      <div>{auth}</div>
      <button onClick={add}>click</button>
      <span
        className="icon-[solar--airbuds-case-minimalistic-linear]"
        style={{ width: 24, height: 24 }}
      ></span>
      <form onSubmit={submitTodo}>
        <label htmlFor="text">Todo text</label>
        <input type="text" ref={todoInput} />
        <button>Add Todo</button>
      </form>
    </>
  );
}

export default App;
