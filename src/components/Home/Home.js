import './Home.scss'
import React from 'react'
import logo from '../../assets/image/logo.svg'
import { useNewsContext } from '../../contexts/NewsContext'

export default function Home() {
    const { news, loading } = useNewsContext()
    return (
        <>
            <img src={logo} className="App-logo" alt="logo" />
            <div>Explore React Application... <br /> With HoangAnh ^^</div>
            <div className="home-container">
                <div className="newsFeedContainer">
                    {loading ? <div style={{ margin: '20px auto' }}>Loading!! Wait a few minutes...</div>
                        :
                        news.map((item) => {
                            return (
                                <div className="feedItem" key={item.id}>
                                    <a className="itemLink" href={item.link} target="_blank" rel="noreferrer">
                                        <div className="itemContent">
                                            <h3 className="itemTitle">{item.title}</h3>
                                            <p className="itemDesc">
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className="itemImg">
                                            <span className="itemCategory">{item.category}</span>
                                        </div>
                                    </a>
                                    <div className="itemWrapImg"><img src={item.image} alt='' /></div>
                                    <div className="itemFooter">
                                        <div className="sourceWeb">
                                            <img src={item.sourceIcon} alt='' />
                                            <div className="sourceWeb-name">{item.sourceName}</div>
                                        </div>
                                        <div className="sourceDate">{item.date}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

