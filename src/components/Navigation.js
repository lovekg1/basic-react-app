import './Navigation.scss'
import { NavLink, Outlet } from 'react-router-dom'
import logo from '../assets/image/logo.svg'
import audioHome from '../assets/audio/audioHome.mp3'


export default function Nav() {
    const playMusic = () => {
        var promise = document.querySelector('.backgroundMusic').play()
        if (promise !== undefined) {
            promise.then(_ => {
                promise.play()
            }).catch(error => {
                // Autoplay was prevented.
                // Show a "Play" button so that user can start playback.
            });
        }
    }
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
            </div>
            <img src={logo} className="App-logo" alt="logo" />
            <div>Explore React Application... <br /> With HoangAnh ^^</div>
            <div className="home-container"><button className="btn" onClick={() => playMusic()}>Play music here !!</button></div>
            <audio className="backgroundMusic">
                <source src={audioHome} type="audio/mpeg" />
            </audio>
            <Outlet />
        </>
    )
}