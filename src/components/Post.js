import {Link} from "react-router-dom";

function Post ({post}){

    const div = {
        texAlign: 'center',
        border: '3px solid',
        margin: '10px auto',
        width: '80%'
    }
    return <div style={div}>
        <Link to={`/post/${post.id}`}>
            <h1>{post.name}</h1>
            <h2>{post.calories} Calories</h2>
        </Link>
    </div>
}

export default Post;