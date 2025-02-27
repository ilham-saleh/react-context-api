import { useContext, useState } from "react";
import { AppContext, ThemeContext } from "../App";

const Initial_Theme = () => {
    const initialTheme = localStorage.getItem('theme')

    return {
        theme: true
    }
}



export default function Header() {
    const {user} = useContext(AppContext)
    const {theme, setTheme} = useContext(ThemeContext)

    const [checkedTheme, setCheckedTheme] = useState(Boolean)

    const handleCheckChange = (e) => {
      const {type, checked} = e.target

    //   setTheme({[type]: checked})
      if(theme === 'dark') {
        // setTheme('light');
        setTheme('light', {[type]: checked})
      } else {
        // setTheme('dark');
        setTheme('dark', {[type]: checked})
      }

      localStorage.setItem('theme', theme)
    }

    const handleButtonClick = (e) => {
       localStorage.clear()
       setTheme('light')
    }

    return (
        <header className={theme}>
            <div>
                <div className="dark-mode-container">
                    <input id="darkMode" type="checkbox" name="theme" checked={theme === 'dark'} onChange={handleCheckChange}></input>
                    <label htmlFor="darkMode">Enable Dark Mode</label>
                </div>
                <div>
                    <button className="clear-settings-btn" onClick={handleButtonClick}>Clear Locally Saved Settings</button>
                </div>
            </div>
            <div className="logo">
                <i className="fa-brands fa-twitter"></i>
            </div>

            <div className="menu-item active">
                <a href="#">
                    <i className="fa-solid fa-house"></i>
                    Home
                </a>
            </div>

            <div className="menu-item">
                <a href="#">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    Explore
                </a>
            </div>

            <div className="menu-item">
                <a href="#">
                    <i className="fa-regular fa-bell"></i>
                    Notifications
                </a>
            </div>

            <div className="menu-item">
                <a href="#">
                    <i className="fa-regular fa-envelope"></i>
                    Messages
                </a>
            </div>

            <div className="menu-item">
                <a href="#">
                    <i className="fa-solid fa-bars"></i>
                    Lists
                </a>
            </div>

            <div className="menu-item">
                <a href="#">
                    <i className="fa-regular fa-bookmark"></i>
                    Bookmarks
                </a>
            </div>

            <div className="menu-item">
                <a href="#">
                    <i className="fa-regular fa-circle-check"></i>
                    Verified
                </a>
            </div>

            <div className="menu-item">
                <a href="#">
                    <i className="fa-regular fa-user"></i>
                    Profile
                </a>
            </div>

            <div className="menu-item">
                <a href="#">
                    <i className="fa-solid fa-ellipsis"></i>
                    More
                </a>
            </div>

            <button className="tweet-btn">Tweet</button>

            <div className={theme === 'dark' ? 'profile-card dark' : 'profile-card'}>
                <div className="profile-icon"><img src={user.profileImage}/></div>

                <div className="profile-details">
                    <h4>{user.name}</h4>
                    <small>{user.handle}</small>
                </div>

                <div className="action">
                    <i className="fa-solid fa-ellipsis"></i>
                </div>
            </div>
        </header>
    )
}
