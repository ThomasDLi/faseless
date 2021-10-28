function fetch_posts(key, json){

    let array = [];
    //let myObject = fetch("http://127.0.0.1:8000/fetch_posts");

    //console.log(myObject);

    //let json = myObject.json();

    //var json = require("../../server/posts.json");

        array.push(<h1>{key}</h1>);

        for(var post in json[key]){

            array.push(
                <div>
                <h3>{json[key][post]["title"]}</h3>
                <h6>{json[key][post]["text"]}</h6>
                <h6>POST ID: {post}</h6>
                </div>

            );

        }

    return array;

}

export{fetch_posts}