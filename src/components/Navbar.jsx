import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks'; 

import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/user/userSlice';


const Navbar = () => {

    const dispatch = useDispatch();
    const handleTheme = () => {
        dispatch(toggleTheme());
    };

    const numItemsInCart = useSelector(state => state.cartState.numItemsInCart);

    return (
        <nav className='bg-base-200'>
        <div className="navbar align-element">
            <div className="navbar-start">
                <NavLink to="/" className='hidden lg:flex btn btn-secondary text-3xl items-center'>C</NavLink>
                <div className='dropdown'>
                <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                        <FaBarsStaggered className='h-6 w-6' />
                    </label> 
                    <ul tabIndex={0} className='shadow bg-gray-700 mt-3 p-2 z-[1] menu menu-sm dropdown-content rounded-box w-52'>
                        <NavLinks />
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className='menu menu-horizontal'>
                    <NavLinks />
                </ul>
            </div>
            <div className="navbar-end">
                <label className='swap swap-rotate'>
                    <input type="checkbox" onChange={handleTheme} />
                    <BsSunFill className='swap-on h-4 w-4' />
                    <BsMoonFill className='swap-off h-4 w-4' />
                </label>
                <NavLink to="/cart" className='btn btn-ghost btn-circle btn-md ml-4'>
                    <div className='indicator'>
                        <BsCart3 className='h-6 w-6' />
                        <span className='badge badge-sm badge-secondary indicator-item'>{numItemsInCart}</span>
                    </div>
                </NavLink>
            </div>
        </div>
        </nav>
    )
}

export default Navbar
