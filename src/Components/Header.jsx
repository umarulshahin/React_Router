import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='h-16 bg-blue-800 flex justify-center'>
        <NavLink className="p-4" to="/"><span className='text-2xl text-white font-bold'>Home</span></NavLink>
        <NavLink className="p-4" to="Usage"><span className='text-2xl text-white font-bold  ' >Usage</span></NavLink>
        <NavLink className="p-4" to="Users"><span className='text-2xl text-white font-bold '>Users</span></NavLink>
        <NavLink className="p-4" to="Settings"><span className='text-2xl text-white font-bold '>Settings</span></NavLink>

    </div>
  )
}

export default Header