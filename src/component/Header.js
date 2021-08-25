import Button from './Button'

const Header = ({title, setTasks}) => {
    const onClick = () => {
        console.log('Click')
        setTasks([])
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Hello' onClick={onClick}/>


        </header>
    )
};

Header.defaultProps = {
    title: 'Default Prop',
};

export default Header;