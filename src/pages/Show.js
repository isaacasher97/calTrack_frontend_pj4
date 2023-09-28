import { Link, useLoaderData, Form } from "react-router-dom";

function Show (props){
    const post = useLoaderData()
    return (
        <div className="update-form">
            <div className="post-compnt-show">
                <h1>{post.name}</h1>
                <h2>{post.calories} Calories</h2>
                <h3>{post.carbs}g Carbs</h3>
                <h3>{post.fat}g Fat</h3>
                <h3>{post.protein}g Protein</h3>
                <h3>{post.sugar}g Sugar</h3>
            </div>
            <div style={{textAlign: "center"}}>
                <h2 className="meals-eaten">Update Your Meal</h2>
                <Form method="post" action={`/update/${post.id}`}>
                <div className="form-title">
                <h3>Name</h3>
                <input type="text" name="name" placeholder="Enter Name Of Meal" defaultValue={post.name} />
            </div>
            <div className="form-title">
                <h3>Calories</h3>
                <input type="number" name="calories" placeholder="Amount Of Calories" defaultValue={post.calories} />
            </div>
            <div className="form-title">
                <h3>Carbs</h3>
                <input type="number" name="carbs" placeholder="Amount Of Carbs(g)" defaultValue={post.carbs} />
            </div>
            <div className="form-title">
                <h3>Fat</h3>
                <input type="number" name="fat" placeholder="Amount Of Fat(g)" defaultValue={post.fat} />
            </div>
            <div className="form-title">
                <h3>Protein</h3>
                <input type="number" name="protein" placeholder="Amount Of Protein(g)" defaultValue={post.protein} />
            </div>
            <div className="form-title">
                <h3>Sugar</h3>
                <input type="number" name="sugar" placeholder="Amount Of Sugar(g)" defaultValue={post.sugar} />
            </div>
            <button className="btn btn-primary">Update Your Meal</button>
            <Link to="/"><button className="btn btn-warning">Go Back</button></Link>
                </Form>
                <Form method="post" action={`/delete/${post.id}`}>
                    <button className="btn btn-danger">Delete Todo</button>
                </Form>
            </div>
        </div>
    );
}

export default Show;