import Post from "../components/Post";
import { useLoaderData, Form } from "react-router-dom";

function Index (props){
    //fetch the loaderdata using useLoaderData hook
    const foods = useLoaderData()

    //map over the foods and create a post component for each food
    return <>
    <div style={{textAlign: "center"}}>
        <h2>Add Your Meal</h2>
        <Form method="post" action="/create">
            <input type="text" name="name" placeholder="Enter Name Of Meal" />
            <input type="number" name="calories" placeholder="Amount Of Calories" />
            <input type="number" name="carbs" placeholder="Amount Of Carbs(g)" />
            <input type="number" name="fat" placeholder="Amount Of Fat(g)" />
            <input type="number" name="protein" placeholder="Amount Of Protein(g)" />
            <input type="number" name="sugar" placeholder="Amount Of Sugar(g)" />
            <button>Add New Meal</button>
        </Form>
    </div>
    {foods.map((food) => <Post key={food.id} post={food}/>)}
    </>
}

export default Index;