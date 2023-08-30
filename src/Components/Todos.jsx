import { useContext } from 'react'
import { TodoContext } from '../context'
import Todo from './Todo'
import Next7Days from './Next7Days'

function Todos() {
    const { todos, selectedProject } = useContext(TodoContext)

    return (
        <div className='Todos backdrop-filter'>
            <div className='selected-project'>{selectedProject}</div>
            <div className='todos'>
                {selectedProject === 'next 7 days' ? (
                    <Next7Days todos={todos} />
                ) : (
                    todos.map((todo) => <Todo key={todo.id} todo={todo} />)
                )}
            </div>
        </div>
    )
}

export default Todos
