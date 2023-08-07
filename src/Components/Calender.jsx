import { useState, useContext } from 'react'
import { TodoContext } from '../context'
import { calendarItems } from './../constants/index'
import { CalendarDate, CaretUp } from 'react-bootstrap-icons'
import { useSpring, animated } from 'react-spring'

const Calender = () => {

    const [showMenu, setShowMenu] = useState(true)

    const { setSelectedProject } = useContext(TodoContext)

    const spin = useSpring({
        transform: showMenu ? 'rotate(0deg)' : 'rotate(180deg)',
        config: { friction: 10 }
    })

    const menuAnimation = useSpring({
        display: showMenu ? 'block' : 'none',
        lineHeight: showMenu ? 1.2 : 0,
        config: { friction: 10 }
    })

    return (
        <div className='Calendar'>
            <div className='header'>
                <div className='title'>
                    <CalendarDate size='18' />
                    <p>Calendar</p>
                </div>
                <animated.div className='btns' style={spin} onClick={() => setShowMenu(!showMenu)}>
                    <span>
                        <CaretUp size='20px' />
                    </span>
                </animated.div>
            </div>
            <animated.div className='items' style={menuAnimation}>
                {calendarItems.map((item) => (
                    <div className='item' key={item} onClick={() => setSelectedProject(item)}>
                        {item}
                    </div>
                ))}
            </animated.div>
        </div>
    )
}

export default Calender
