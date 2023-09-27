import { Link, useLoaderData, Form } from "react-router-dom";

function Show (props){
    const post = useLoaderData()
    return (
        <div className="update-form">
            <h1>{post.name}</h1>
            <h2>{post.calories} Calories</h2>
            <h3>{post.carbs}g Carbs</h3>
            <h3>{post.fat}g Fat</h3>
            <h3>{post.protein}g Protein</h3>
            <h3>{post.sugar}g Sugar</h3>
            <div style={{textAlign: "center"}}>
                <h2>Update Your Meal</h2>
                <Form method="post" action={`/update/${post.id}`}>
                    <input type="text" name="name" placeholder="Enter Name Of Meal" defaultValue={post.name} />
                    <input type="number" name="calories" placeholder="Amount Of Calories" defaultValue={post.calories} />
                    <input type="number" name="carbs" placeholder="Amount Of Carbs(g)" defaultValue={post.carbs} />
                    <input type="number" name="fat" placeholder="Amount Of Fat(g)" defaultValue={post.fat} />
                    <input type="number" name="protein" placeholder="Amount Of Protein(g)" defaultValue={post.protein} />
                    <input type="number" name="sugar" placeholder="Amount Of Sugar(g)" defaultValue={post.sugar} />
                    <button>Update Your Meal</button>
                </Form>
                <Form method="post" action={`/delete/${post.id}`}>
                    <button>Delete Todo</button>
                </Form>
            </div>
            <Link to="/">Back Home</Link>
        </div>
    );
}

export default Show;