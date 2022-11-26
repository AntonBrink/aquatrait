import React, { createContext,useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = (props) =>
{
    const [theme,setTheme] = useState("light")


    useEffect(() => 
    {
        if (localStorage.getItem("theme")) 
        {
            if (localStorage.getItem("theme") == "dark") 
            {
                setTheme("dark");
            }
        }
        else if (!window.matchMedia) 
        {
            setTheme("light");
        } 
        else if (window.matchMedia("(prefers-color-scheme: dark)").matches) 
        {
            setTheme("dark");
        }

        document.createElement("data-theme");
        if(theme == "dark")
        {
            setTheme("dark")
            document.documentElement.setAttribute("data-theme", "dark");
        }
        else if(theme == "light")
        {
            setTheme("light")
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, []);

    const toggleTheme = () =>
    {
        if (localStorage.getItem("theme") == "light") 
        {
            localStorage.setItem("theme", "dark");
            document.documentElement.setAttribute("data-theme", "dark");
            setTheme("dark");
        } 
        else 
        {
            localStorage.setItem("theme", "light");
            document.documentElement.setAttribute("data-theme", "light");
            setTheme("light");
        }
    }
    
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ({element}) => (<ThemeProvider>{element}</ThemeProvider>)