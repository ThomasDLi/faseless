import {fetch_posts} from "../components/fetch_posts"
import { useState } from "react";
import router from "next/router";
import { server_url } from "../components/server_url";
import styles from "../styles/Home.module.css"

export default function fetch_one({data}){
    
    return(
        
        <div className={styles.center}>
            
            {fetch_posts(data, data[0]["topic"])}

        </div>

    )

}

export async function getServerSideProps({query}, context){

    const res = await fetch(`${server_url()}fetch_one?id=${query.id}`)
    const data = await res.json()
    //console.log(data);
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {data}, // will be passed to the page component as props
    }

}