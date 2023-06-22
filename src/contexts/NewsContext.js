import React, { createContext, useContext, useState, useEffect } from "react"

const NewsContext = createContext({});
const { Provider, Consumer } = NewsContext;

const NewsProvider = ({ children, ...props }) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://news-6ino.onrender.com/news')
            .then(response => response.json())
            .then((data) => {
                setNews(data);
                setLoading(false);
            });
    }, []);

    return (
        <Provider value={{ news, loading }} {...props}>
            {children}
        </Provider>
    );
};

const useNewsContext = () => {
    const state = useContext(NewsContext);
    if (state === undefined) {
        throw new Error("useNewsContext must be called within NewsProvider");
    }

    return {
        ...state,
    };
};

export { NewsProvider, Consumer as CatConsumer, useNewsContext };

export default NewsContext;