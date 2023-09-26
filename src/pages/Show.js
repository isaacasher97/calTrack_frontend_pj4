import { Link, useLoaderData } from "react-router-dom";

function Show (props){
    const post = useLoaderData()

    const div = {
        textAlign: "center",
        border: "3px solid green",
        width: "80%",
        margin: "30px auto"
    }

    return <div style={div}>
        <h1>{post.name}</h1>
        <h2>{post.calories} Calories</h2>
        <h3>{post.carbs}g Carbs</h3>
        <h3>{post.fat}g Fat</h3>
        <h3>{post.protein}g Protein</h3>
        <h3>{post.sugar}g Sugar</h3>
        <Link to="/">Back Home</Link>
    </div>
}

export default Show;