import React, { useEffect, useState } from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import db from "../firebase"

function Feed() {

    // local variable to store DB value
    const [posts, setPosts] = useState([]);

    // fetch from DB
    useEffect(()=>{
        // onSnapshot : means anything update, delete or changes in collection it gives you updated DB
        db.collection("posts")
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot=>{
            // once we get snapshot update the state
            // snapshot.docs gives you array of docs, so map through each doc
            setPosts(snapshot.docs.map(doc=>{
                // for each row return custome object
                return {id: doc.id, data: doc.data()}
            }))
        })

    },[])   //means run only when component initially render

    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>

            {/* display <Post/> component for each post */}
            {posts.map(post=>(
                <Post
                    key={post?.id}
                    profilePic={post?.data?.profilePic}
                    image={post?.data?.image}
                    username={post?.data?.username}
                    timestamp={post?.data?.timestamp}
                    message={post?.data?.message}
                />
            ))}


        </div>
    )
}

export default Feed;
