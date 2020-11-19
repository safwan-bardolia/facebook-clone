import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from '../firebase'
import "./Login.css"
import {useDataLayerValue} from "../datalayer";

function Login() {

    // state: global state object
    // dispatch: to dispatch action, by which we can update datalayer 
    const[state, dispatch] = useDataLayerValue();

    const signIn = () => {
        // sign in using all the firebase setting (see firebase.js for more)
        auth.signInWithPopup(provider)
        .then(result=>{
            console.log(result);

            //updating DataLayer (updating user property)
            dispatch({
                type: 'SET_USER',
                user: result.user
            })
        })
        .catch(error=>alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                    alt=""
                />         
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt=""
                />         
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
