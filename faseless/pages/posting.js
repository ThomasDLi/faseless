import { useState } from "react";
import Router from 'next/router'
import styles from '../styles/Home.module.css'
import {server_url} from "../components/server_url"

export default function posting() {

    const [title, setTitle] = useState("");
    const [text, setBody] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");
    const [topic, setTopic] = useState("");

    const handleTitle = (e) => {

        e.preventDefault();
        setTitle(e.target.value);

    }

    const handleText = (e) => {

        e.preventDefault();
        setBody(e.target.value);

    }

    const handlePassword = (e) => {

        e.preventDefault();
        setPassword(e.target.value);

    }

    const handleImage = (e) => {

        e.preventDefault();
        setImage(e.target.value);

    }

    const handleTopic = (e) => {

        //e.preventDefault();
        setTopic(e.target.value);

    }

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(title + " " + text + " " + password + " " + image + " " + topic);
        try{
        
            let serverSubmission = fetch(`${server_url()}posting?title=${title}&text=${text}&password=${password}&image=${image}&topic=${topic}`);
            console.log(serverSubmission);
            Router.push("/home");
        }

        catch{

            alert("something went wrong go fuck you self");

        }
        

    }

    return(

        <div className={styles.center}>
            
            <form onSubmit={handleSubmit}>
                <h1>Title (100chars max):</h1>
                <input type="text" onChange={handleTitle} />
                <h1>Message (2000chars max):</h1>
                <input type="text" onChange={handleText} />
                <h1>Password(250chars max):</h1>
                <input type="text" onChange={handlePassword} />
                <h1>Image (200char link max) (optional) (only accepts "https://i.imgur.com/???.png links"):</h1>
                <input type="text" onChange={handleImage} />
                <h1>Topic</h1>
                <div onChange={handleTopic}>
                <input type="radio" value="general" name="topic" /> general<br />
                <input type="radio" value="programming" name="topic" /> programming<br />
                <input type="radio" value="memes" name="topic" /> memes<br />
                <input type="radio" value="games" name="topic" /> games<br />
                <input type="radio" value="art" name="topic" /> art<br />
                <input type="radio" value="math/science" name="topic" /> math/science<br />
                </div>
                <h1 />
                <input type="submit" />
            </form>
        </div>

    )

}
