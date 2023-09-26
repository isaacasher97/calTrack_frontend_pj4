import Post from "../components/Post";
import {useLoaderData} from "react-router-dom";

function Index (props){
    //fetc the loaderdata using useLoaderData hook
    const foods = useLoaderData()

    //map over the foods and create a post component for each food
    return foods.map((food) => <Post key={food.id} post={food}/>)
}

export default Index;