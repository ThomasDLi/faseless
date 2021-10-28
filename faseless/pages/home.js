import {fetch_posts} from "../components/fetch_posts"
import Link from 'next/link'
import {useState} from "react"
import styles from "../styles/Home.module.css"

export default function home({data}) {

    const [topic, setTopic] = useState("general");

    const handleTopic = (e) => {

        e.preventDefault();
        setTopic(e.target.value);

    }

    return(<div>
    
    <Link href="/posting"><a><u>create post</u></a></Link>
    <p />
    <Link href="/delete"><a><u>delete post</u></a></Link>
    <p />

        <div onChange={handleTopic}>
            <input type="radio" value="general" name="topic" /> general<br />
            <input type="radio" value="programming" name="topic" /> programming<br />
            <input type="radio" value="memes" name="topic" /> memes<br />
            <input type="radio" value="games" name="topic" /> games<br />
            <input type="radio" value="art" name="topic" /> art<br />
            <input type="radio" value="math/science" name="topic" /> math/science<br />
        </div>
    
    <div className={styles.center}>{fetch_posts(topic, data)}</div>
    
    
    </div>);

}

export async function getServerSideProps(context) {
    const res = await fetch(`http://127.0.0.1:8000/fetch_posts`)
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {data}, // will be passed to the page component as props
    }
  }