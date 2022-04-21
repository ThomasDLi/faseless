import { useState } from "react";
import Router from 'next/router'
import styles from '../styles/Home.module.css'
import {server_url} from "../components/server_url"

export default function delete_post(){

    const [topic, setTopic] = useState("general");
    const [post, setID] = useState("");
    const [password, setPassword] = useState("");

    const handleTopic = (e) => {

        //e.preventDefault();
        setTopic(e.target.value);

    }

    const handleID = (e) => {

        e.preventDefault();
        setID(e.target.value);

    }

    const handlePassword = (e) => {

        e.preventDefault();
        setPassword(e.target.value);

    }

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(topic + " " + post + " " + password);
        try{
        
            let serverSubmission = fetch(`${server_url()}delete_posts?post_id=${post}&topic=${topic}&password=${password}`);
            console.log(serverSubmission);
            Router.push("/home");
        }

        catch{

            alert("something went wrong go fuck you self");

        }
        

    }

    return(<div className={styles.center}>

        <h1>post deletion</h1>
        <form onSubmit={handleSubmit}>
        <h2>select topic of post:</h2>

        <div onChange={handleTopic}>
            <input type="radio" value="general" name="topic" /> general<br />
            <input type="radio" value="programming" name="topic" /> programming<br />
            <input type="radio" value="memes" name="topic" /> memes<br />
            <input type="radio" value="games" name="topic" /> games<br />
            <input type="radio" value="art" name="topic" /> art<br />
            <input type="radio" value="math/science" name="topic" /> math/science<br />
        </div>

        <h2>post ID:</h2>

        <input type="text" onChange={handleID} />

        <h2>password:</h2>

        <input type="text" onChange={handlePassword} />

        <p />

        <input type="submit" />
        </form>
        </div>)

}
