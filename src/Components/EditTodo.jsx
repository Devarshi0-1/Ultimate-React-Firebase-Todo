import { useState, useEffect, useContext } from 'react'
import TodoForm from './TodoForm'
import { TodoContext } from '../context'
import moment from 'moment'
import { parseISO } from 'date-fns'
import firebase from '../firebase'

const EditTodo = () => {
    const [text, setText] = useState('')
    const [day, setDay] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const [todoProject, setTodoProject] = useState('')

    const { selectedTodo, projects } = useContext(TodoContext)

    useEffect(() => {
        if (selectedTodo) {
            setText(selectedTodo.text)
            setDay(parseISO(moment(selectedTodo.date, 'MM/DD/YYYY').format()))
            setTime(parseISO(moment(selectedTodo.time, 'hh:mm A').toISOString()))
            setTodoProject(selectedTodo.projectName)
        }
    }, [selectedTodo])

    useEffect(() => {
        if (selectedTodo) {
            firebase
                .firestore()
                .collection('todos')
                .doc(selectedTodo.id)
                .update({
                    text,
                    date: moment(day).format('MM/DD/YYYY'),
                    day: moment(day).format('d'),
                    time: moment(time).format('hh:mm A'),
                    projectName: todoProject
                })
        }

    }, [text, day, time, todoProject])

    const handleSubmit = (e) => { }

    return (
        <div>
            {selectedTodo && (
                <div className='EditTodo backdrop-filter'>
                    <div className='header'>Edit Todo</div>
                    <div className='container'>
                        <TodoForm
                            handleSubmit={handleSubmit}
                            text={text}
                            setText={setText}
                            day={day}
                            setDay={setDay}
                            time={time}
                            setTime={setTime}
                            todoProject={todoProject}
                            setTodoProject={setTodoProject}
                            projects={projects}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default EditTodo
