import './../Styles/Register.css';
import Navbar from './Navbar';
import { ChatEngine } from 'react-chat-engine';
import React, { useRef, useState, useEffect } from "react"

import axios from 'axios'
import { useHistory } from "react-router-dom"
import { useAuth } from './AuthContext';
import { auth } from "./firebase"

//import Auth from './Auth';
export default function Messenger() {
    //states
    const didMountRef = useRef(false)
    const [loading, setLoading] = useState(true)
    const { user } = useAuth()
    const history = useHistory()

    async function getFile(url) {
        let response = await fetch(url);
        let data = await response.blob();
        return new File([data], "test.jpg", { type: 'image/jpeg' });
    }

    //useEffect to get the user
    useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true

            //return user to login page if unsuccessful
            if (!user || user === null) {
                history.push("/")
                return
            }
            // get the users information
            axios.get(
                'https://api.chatengine.io/users/me',
                {
                    headers: {
                        "project-id": "f3b1760a-c847-4c1f-8021-1c48bc5c23a4",
                        "user-name": user.email,
                        "user-secret": user.uid
                    }
                })

                .then(() => {
                    setLoading(false);
                })
                //if user doesnt exist, create one
                .catch(e => {
                    let formdata = new FormData()
                    formdata.append('email', user.email)
                    formdata.append('username', user.email)
                    formdata.append('secret', user.uid)

                    getFile(user.photoURL)
                        .then(avatar => {
                            formdata.append('avatar', avatar, avatar.name)

                            axios.post(
                                'https://api.chatengine.io/users',
                                formdata,
                                { headers: { "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY } }
                            )
                                .then(() => setLoading(false))
                                .catch(e => console.log('e', e.response))
                        })
                })
        }
    }, [user, history])


    if (!user || loading) return <div />

    return (
        <div id="login-page2">
            <Navbar />
            <ChatEngine
                height="100vh"
                projectID="f3b1760a-c847-4c1f-8021-1c48bc5c23a4"
                userName={user.email}
                userSecret={user.uid}
            />
        </div>

    );
}