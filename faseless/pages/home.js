import {fetch_posts} from "../components/fetch_posts"
import {server_url} from "../components/server_url"
import Link from 'next/link'
import {useState} from "react"
import styles from "../styles/Home.module.css"
import { useRouter } from 'next/router'

export default function home({data}) {

  const router = useRouter();

    const [topic, setTopic] = useState("general");

    const handleTopic = (e) => {

        //e.preventDefault();
        setTopic(e.target.value);
        router.query.topic = e.target.value;
        router.push(router)

    }

    const [pagen, setPage] = useState(0);

    const handelPage = (e) => {

        e.preventDefault();
        setPage(e.target.value);
        router.query.page = e.target.value;
        router.push(router)

    }

    const [iden, setIden] = useState("");

    const handleId = (e) => {

        //e.preventDefault();
        setIden(e.target.value);
        //outer.query.id = e.target.value;
        //router.push(router)

    }

    return(<div>
    
    <Link href="/posting"><a><u>create post</u></a></Link>
    <p />
    <Link href="/delete"><a><u>delete post</u></a></Link>
    <p />
    <Link href={`/fetch_one?id=${iden}`}><a><u>post lookup by ID:</u></a></Link>
    <p />
    <input type="text" onChange={handleId} />
    
    <p />
    <p>viewing page:</p>
    <input type="number" onChange={handelPage} defaultValue={0} min={0} />
    <p />

        <div onChange={handleTopic} >
            <input type="radio" value="general" name="topic" /> general<br />
            <input type="radio" value="programming" name="topic" /> programming<br />
            <input type="radio" value="memes" name="topic" /> memes<br />
            <input type="radio" value="games" name="topic" /> games<br />
            <input type="radio" value="art" name="topic" /> art<br />
            <input type="radio" value="math/science" name="topic" /> math/science<br />
        </div>
    
    <div className={styles.center}>{fetch_posts(data, router.query.topic)}</div>
    
    
    </div>);

}

export async function getServerSideProps({query}, context) {
    console.log(query);
    //if(context.topic == null){context.topic = "memes"}
    const res = await fetch(`${server_url()}fetch_posts?topic=${query.topic}&page=${query.page}`)
    const data = await res.json()
    console.log(data);
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {data}, // will be passed to the page component as props
    }
  }
