import {Link} from "react-router-dom";

function Post ({post}){
    return <div className="post-compnt">
        <Link to={`/post/${post.id}`}>
            <h1>{post.name}</h1>
            <h2>{post.calories} Calories</h2>
        </Link>
    </div>
}

export default Post;