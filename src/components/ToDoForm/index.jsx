import './todoForm.style.css'
import { TextInput } from '../TextInput'
import { Button } from '../Button'

export function TodoForm({ onSubmit }) {
    return (
        <form action={onSubmit} className='todo-Form'>
            <TextInput
                placeholder="Digite o item que deseja adicionar"
                required
                name = 'description'
            />
            <Button>
                Salvar item
            </Button>
        </form>
    )
}