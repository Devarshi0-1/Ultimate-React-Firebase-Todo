import Logo from './../images/icon.png'

const User = () => {
    return (
        <div className='User'>
            <div className='logo'>
                <img src={Logo} alt='Logo' />
            </div>
            <div className='info'>
                <p>Ultimate Todo</p>
            </div>
        </div>
    )
}

export default User
