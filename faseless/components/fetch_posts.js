import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Home.module.css"

function fetch_posts(json, topic){

    //var re = new RegExp("/(?>https?:)?\/\/(\w+\.)?imgur\.com\/(\S*)(\.[a-zA-Z]{3})/m");

    let array = [];
    //let myObject = fetch("http://127.0.0.1:8000/fetch_posts");

    //console.log(myObject);

    //let json = myObject.json();

    //var json = require("../../server/posts.json");
    let reg = /(https:\/\/i.imgur.com)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg)(\?[^\s[",><]*)?/g

        array.push(<h1>{topic}</h1>);

        for(var post in json){

            console.log(json[post]);

            if(!reg.test(json[post]["image"])){
                console.log("is image");
            array.push(
                <div>
                <h3>{json[post]["title"]}</h3>
                <h5>{json[post]["text"]}</h5>
                
                <h6>POST ID: {json[post]["_id"]}</h6>
                <Link href={"/fetch_one?id=" + json[post]["_id"]}><h6><u>view replys</u></h6></Link>
                </div>

            );

            }

            else{

                array.push(
                    <div>
                    <h3>{json[post]["title"]}</h3>
                    <h5>{json[post]["text"]}</h5>
                    <Image src={json[post]["image"]} width={200} height={200} placeholder='empty'/>
                    
                    <h6>POST ID: {json[post]["_id"]}</h6>
                    <Link href={"/fetch_one?id=" + json[post]["_id"]}><h6><u>view replys</u></h6></Link>
                    </div>
    
                );

            }

        }

        array.push(<hr className={styles.dashed} />);

    return array;

}

export{fetch_posts}