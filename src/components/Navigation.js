import './Navigation.scss'
import { NavLink, Outlet } from 'react-router-dom'


export default function Nav() {

    return (
        <>
            <div className="topnav">
                <NavLink
                    to='/basic-react-app/'
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
                <NavLink
                    to="/basic-react-app/mp3player"
                    className={({ isActive, isPending }) => {
                        return isActive ? "active" : isPending ? "pending" : "";
                    }}
                >Mp3Player</NavLink>
            </div>
            <Outlet />
        </>
    )
}