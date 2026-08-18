import './todoForm.style.css'
import { TextInput } from '../TextInput'
import { Button } from '../Button'

export function TodoForm({ onSubmit }) {
    return (
        <form action={onSubmit} className='todo-Form'>
            <TextInput
                placeHolder="Digite o item que deseja adicionar"
                required
            />
            <Button>
                Salvar item
            </Button>
        </form>
    )
}