import Post from "../components/Post";
import { useLoaderData, Form } from "react-router-dom";

function Index (props){
    //fetch the loaderdata using useLoaderData hook
    const foods = useLoaderData()

    //map over the foods and create a post component for each food
    return <>
    <div className="create-form">
        <Form method="post" action="/create">
        <h2>Welcome To CalTrack!</h2>
        <div className="form-title">
                <h3>Name</h3>
                <input type="text" name="name" placeholder="Enter Name Of Meal" />
            </div>
            <div className="form-title">
                <h3>Calories</h3>
                <input type="number" name="calories" placeholder="Amount Of Calories" />
            </div>
            <div className="form-title">
                <h3>Carbs</h3>
                <input type="number" name="carbs" placeholder="Amount Of Carbs(g)" />
            </div>
            <div className="form-title">
                <h3>Fat</h3>
                <input type="number" name="fat" placeholder="Amount Of Fat(g)" />
            </div>
            <div className="form-title">
                <h3>Protein</h3>
                <input type="number" name="protein" placeholder="Amount Of Protein(g)" />
            </div>
            <div className="form-title">
                <h3>Sugar</h3>
                <input type="number" name="sugar" placeholder="Amount Of Sugar(g)" />
            </div>
            <div className="form-bttn">
            <button className="btn btn-primary">Add New Meal</button>
            </div>
        </Form>
    </div>
    <h2 className="meals-eaten">Meals Eaten <mark>Today</mark></h2>
    <div className="foods-map">
    {foods.map((food) => <Post key={food.id} post={food}/>)}
    </div>
    </>
}

export default Index;