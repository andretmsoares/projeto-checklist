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
import { useState, createContext, useContext, use } from "react"
import { TodoForm } from "./components/ToDoForm"
import TodoContext from "./components/TodoProvider/TodoContext"
import { TodoGroup } from "./components/TodoGroup"


function App() {
  const [showDialog, setShowDialog] = useState(false)
  const { todos, addTodo } = use(TodoContext)

  const toggleDialog = () => {
    setShowDialog(!showDialog)
  }

  const handleFormSubmit = (formData) => {
    addTodo(formData)
    toggleDialog()
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
            <Dialog isOpen={showDialog} onClose={toggleDialog}>
              <TodoForm onSubmit={handleFormSubmit} />
            </Dialog>
            <FabButton onClick={toggleDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  )
}

export default App
