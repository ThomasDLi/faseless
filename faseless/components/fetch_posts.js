import Image from "next/Image"

function fetch_posts(key, json){

    //var re = new RegExp("/(?>https?:)?\/\/(\w+\.)?imgur\.com\/(\S*)(\.[a-zA-Z]{3})/m");

    let array = [];
    //let myObject = fetch("http://127.0.0.1:8000/fetch_posts");

    //console.log(myObject);

    //let json = myObject.json();

    //var json = require("../../server/posts.json");
    let reg = /(https:\/\/i.imgur.com)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg)(\?[^\s[",><]*)?/g

        array.push(<h1>{key}</h1>);

        for(var post in json[key]){

            if(!reg.test(json[key][post]["image"])){
                console.log("is image");
            array.push(
                <div>
                <h3>{json[key][post]["title"]}</h3>
                <h6>{json[key][post]["text"]}</h6>
                
                <h6>POST ID: {post}</h6>
                </div>

            );

            }

            else{

                array.push(
                    <div>
                    <h3>{json[key][post]["title"]}</h3>
                    <h6>{json[key][post]["text"]}</h6>
                    <Image src={json[key][post]["image"]} width={200} height={200} placeholder='empty'/>
                    
                    <h6>POST ID: {post}</h6>
                    </div>
    
                );

            }

        }

    return array;

}

export{fetch_posts}