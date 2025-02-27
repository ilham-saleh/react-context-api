import { createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const AppContext = createContext()
const ThemeContext = createContext()

const getLocalStorageTheme = () => {
    let theme = localStorage.getItem('light')

    if(localStorage.getItem('theme')) {
        theme =localStorage.getItem('theme')
    }

    return theme
}

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState(getLocalStorageTheme());

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'

          localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
        <AppContext.Provider value={{tweets, setTweets, user}}>
            <div className="container">
                <Header />
                <Tweets theme={theme}  />
                <RightSide theme={theme} />
            </div>
        </AppContext.Provider>
        </ThemeContext.Provider>
    )
}

// NOTE! Instead of `export default App` we use `export { App }` here because we have
// more than one thing to export from this file.
export { App, AppContext, ThemeContext };
