import React, {useState, useEffect, useRef, createContext} from "react";
import * as SecureStore from 'expo-secure-store'
const Context = createContext()

const Provider = ({children}) => {

    

    const [domain, setDomain] = useState("https://mingabire809.pythonanywhere.com")
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [token, setToken] = useState()
    const [appsettings, setAppsettings] = useState({})

    const getToken = async (tokens) => {
        await SecureStore.setItemAsync('token', tokens)
    }
 /*   function initAppSetting(){
        fetch(`${domain}/membership/membership/`,{
            method: 'GET',
        })
        .then(res => {
            if (res.ok){
                return res.json()
            }else{
                throw res.json()
            }
        })
        .then(json =>{
            setAppsettings(json)
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        initAppSetting()
    }, [])*/


    const globalContext ={
        domain,
        isLoggedIn,
        setIsLoggedIn,
        appsettings,
        setAppsettings,
        token,
        setToken,
        getToken,
    }

    return <Context.Provider value={globalContext}>{children}</Context.Provider>
};

export {Context, Provider};