import './Navigation.scss'
import { NavLink, Outlet } from 'react-router-dom'
import logo from '../assets/image/logo.svg'


export default function Nav() {
    return (
        <>
            <div className="topnav">
                <NavLink
                    to='/'
                    className={({ isActive, isPending }) => {
                        return isActive ? "active" : isPending ? "pending" : "";
                    }}
                >Home</NavLink>
                <NavLink
                    to="/basic-react-app/about"
                    className={({ isActive, isPending }) => {
                        return isActive ? "active" : isPending ? "pending" : "";
                    }}
                >About</NavLink>
                <NavLink
                    to="/basic-react-app/todo"
                    className={({ isActive, isPending }) => {
                        return isActive ? "active" : isPending ? "pending" : "";
                    }}
                >Todos</NavLink>
            </div>
            <img src={logo} className="App-logo" alt="logo" />
            <div>Explore React Application... <br /> With HoangAnh ^^</div>
            <Outlet />
        </>
    )
}