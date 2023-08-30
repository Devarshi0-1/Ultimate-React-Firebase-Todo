import { Bell, CalendarDay, Clock, Palette, X } from 'react-bootstrap-icons'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

const TodoForm = ({
    handleSubmit,
    heading = false,
    text,
    setText,
    day,
    setDay,
    time,
    setTime,
    todoProject,
    setTodoProject,
    projects,
    showButtons = false,
    setShowModal = false,
}) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <form onSubmit={handleSubmit} className='TodoForm'>
                <div className='text'>
                    {heading && <h3>{heading}</h3>}
                    <input
                        type='text'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder='To do...'
                        autoFocus
                    />
                </div>
                <div className='reminder'>
                    <Bell />
                    <p>Remind Me!</p>
                </div>
                <div className='pick-day'>
                    <div className='title'>
                        <CalendarDay />
                        <p>Choose a Day</p>
                    </div>
                    <DatePicker
                        value={day}
                        onChange={(day) => setDay(day)}
                    />
                </div>
                <div className='pick-time'>
                    <div className='title'>
                        <Clock />
                        <p>Choose Time</p>
                    </div>
                    <TimePicker
                        value={time}
                        onChange={(time) => {
                            console.log(time)
                            setTime(time)
                        }}
                    />
                </div>
                <div className='pick-project'>
                    <div className='title'>
                        <Palette />
                        <p>Choose a Project </p>
                    </div>
                    <div className='projects'>
                        {projects.length > 0 ? (
                            projects.map((project) => {
                                return (
                                    <div
                                        className={`project ${
                                            todoProject === project.name ? 'active' : ''
                                        }`}
                                        key={project.id}
                                        onClick={() => setTodoProject(project.name)}>
                                        {project.name}
                                    </div>
                                )
                            })
                        ) : (
                            <div style={{ color: 'red' }}>
                                Please add a project before proceeding
                            </div>
                        )}
                    </div>
                </div>
                {showButtons && (
                    <>
                        <div className='cancel' onClick={() => setShowModal(false)}>
                            <X size='40' />
                        </div>
                        <div className='confirm'>
                            <button>+ Add Todo</button>
                        </div>
                    </>
                )}
            </form>
        </LocalizationProvider>
    )
}
export default TodoForm
