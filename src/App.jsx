import { ChecklistsWrapper } from "./components/ChecklistsWrapper"
import { Container } from "./components/Container"
import { FabButton } from "./components/FabButton"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconSchool } from "./components/icons"
import { SubHeading } from "./components/SubHeading"
import { ToDoItem } from "./components/ToDoItem"
import { ToDoList } from "./components/ToDoList"
import { Dialog } from "./components/Dialog"
import { createContext, useContext, use } from "react"
import { TodoForm } from "./components/ToDoForm"
import TodoContext from "./components/TodoProvider/TodoContext"
import { TodoGroup } from "./components/TodoGroup"


function App() {
  
  const { todos, addTodo, showDialog, openFormTodoDialog, closeFormTodoDialog, selectedTodo } = use(TodoContext)

  const handleFormSubmit = (formData) => {
    addTodo(formData)
    closeFormTodoDialog()
  }

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>
          <TodoGroup
            heading="Para estudar"
            items={todos.filter(t => !t.completed)}
          />
          <TodoGroup
            heading="Concluído"
            items={todos.filter(t => t.completed)}
          />
          <Footer>
            <Dialog isOpen={showDialog} onClose={closeFormTodoDialog}>
              <TodoForm 
              onSubmit={handleFormSubmit}
              defaultValue={selectedTodo?.descriprion}
               />
            </Dialog>
            <FabButton onClick={openFormTodoDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  )
}

export default App
