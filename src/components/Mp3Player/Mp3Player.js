import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Mp3Player.scss'
import { songs } from './Playlist'
import { useEffect, useCallback } from 'react'

export default function Mp3Player() {
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)

    const handleEvent = useCallback(() => {
        const cd = $('.dashboard .cd')
        const cdWidth = cd.offsetWidth
        const header = $('.dashboard header')

        document.onscroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop
            const newCdWidth = cdWidth - scrollY
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
            if (newCdWidth < 0) {
                header.style.fontSize = '15px'
            } else {
                header.style.fontSize = 'inherit'
            }

        }
    }, [$])

    const start = useCallback(() => {
        handleEvent()
    }, [handleEvent])

    useEffect(() => {
        start()
    }, [start])
    return (
        <div className="player">
            <div className="dashboard">
                <header>
                    <h4>Now playing:</h4>
                    <h2>String 57th & 9th</h2>
                </header>
                <div className="cd">
                    <div className="cd-thumb" style={{ backgroundImage: "url(https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/1/3/d/8/13d822afc169097a85064f156c09442c.jpg)" }}></div>
                </div>
                <div className="control">
                    <div className="btn btn-repeat">
                        <FontAwesomeIcon icon="fas fa-redo" />
                    </div>
                    <div className="btn btn-prev">
                        <FontAwesomeIcon icon="fas fa-step-backward" />
                    </div>
                    <div className="btn btn-toggle-play">
                        <FontAwesomeIcon icon="fas fa-pause" className="icon-pause" />
                        <FontAwesomeIcon icon="fas fa-play" className="icon-play" />
                    </div>
                    <div className="btn btn-next">
                        <FontAwesomeIcon icon="fas fa-step-forward" />
                    </div>
                    <div className="btn btn-random">
                        <FontAwesomeIcon icon="fas fa-random" />
                    </div>
                </div>
                <div className="timer-container">
                    <div className="progress-area">
                        <div className="progress-bar"></div>
                    </div>
                    <div className="song-timer">
                        <span className="current-time">00:00</span>
                        <span className="end-time">00:00</span>
                    </div>
                </div>
                <audio id="audio" src=""></audio>
            </div>
            <div className="playlist">
                <div className="song">
                    <div className="thumb" style={{ backgroundImage: "url(https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/1/3/d/8/13d822afc169097a85064f156c09442c.jpg)" }}></div>
                    <div className="body">
                        <h3 className="title">Music Name</h3>
                        <p className="author">Singer</p>
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon="fas fa-ellipsis-h" />
                    </div>
                </div>
                <div className="song">
                    <div className="thumb" style={{ backgroundImage: "url(https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/1/3/d/8/13d822afc169097a85064f156c09442c.jpg)" }}></div>
                    <div className="body">
                        <h3 className="title">Music Name</h3>
                        <p className="author">Singer</p>
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon="fas fa-ellipsis-h" />
                    </div>
                </div>
                <div className="song">
                    <div className="thumb" style={{ backgroundImage: "url(https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/1/3/d/8/13d822afc169097a85064f156c09442c.jpg)" }}></div>
                    <div className="body">
                        <h3 className="title">Music Name</h3>
                        <p className="author">Singer</p>
                    </div>
                    <div className="option">
                        <FontAwesomeIcon icon="fas fa-ellipsis-h" />
                    </div>
                </div>
                {songs.map(song => {
                    return (
                        <div className="song" key={song.id}>
                            <div className="thumb" style={{ backgroundImage: `url(${song.image})` }}></div>
                            <div className="body">
                                <h3 className="title">{song.name}</h3>
                                <p className="author">{song.singer}</p>
                            </div>
                            <div className="option">
                                <FontAwesomeIcon icon="fas fa-ellipsis-h" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}