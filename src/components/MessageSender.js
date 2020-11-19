import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import React, { useState } from 'react'
import { useDataLayerValue } from '../datalayer';
import "./MessageSender.css"
import db from "../firebase"        // from our project
import firebase from "firebase"     // from firebase pkg

function MessageSender() {

    // special syntax to pull info from DataLayer, (if we need to grab anything from DataLayer, we need to put into object)
    // dispatch: to dispatch action, by which we can update datalayer 
    const [{user}, dispatch] = useDataLayerValue();

    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // save to the DB (firestore)
        db.collection('posts').add({
            profilePic: user.photoURL,
            username: user.displayName,
            message: input,
            image: imageUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        // after form submission reset the input field
        setInput("");
        setImageUrl("");
    }

    return (
        <div className="messageSender">

            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input 
                        className="messageSender__input" 
                        type="text" 
                        placeholder={`What's on your mind, ${user.displayName}?`}
                        value={input}
                        onChange={ e => setInput(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="image URL (optional)"
                        value={imageUrl}
                        onChange={ e => setImageUrl(e.target.value)}
                    />
                    <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <Videocam style={{color:'red'}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibrary style={{color:'green'}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticon style={{color:'orange'}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>

        </div>
    )
}

export default MessageSender
