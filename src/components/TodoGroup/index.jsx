import { SubHeading } from "../SubHeading";
import { ToDoList } from "../TodoList";
import { ToDoItem } from "../TodoItem";

export function TodoGroup({ items, heading }) {
  return (
    <>
      <SubHeading>{heading}</SubHeading>
      <ToDoList>
        {items.map(function (t) {
          return <ToDoItem key={t.id} item={t} />
        })}
      </ToDoList>
    </>
  );
}