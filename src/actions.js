import url from "./url"
import { redirect } from "react-router-dom"


//Create action for creating Foods
export const createAction = async ({request}) => {
    //parse out form data
    const formData = await request.formData();

    //construct the body for our api call to backend url
    const newFood = {
        name: formData.get("name"),
        calories: formData.get("calories"),
        carbs: formData.get("carbs"),
        fat: formData.get("fat"),
        protein: formData.get("protein"),
        sugar: formData.get("sugar")
    }
    //make a request to create a food
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newFood)
    })

    //Redirect to the index page
    return redirect("/")
}


// Update Action for Updating Todos
export const updateAction = async({request, params}) => {
    // get the id from params
    const id = params.id
    // parse out the form data
    const formData = await request.formData();
    // construct the updated food
    const updatedFood = {
        name: formData.get("name"),
        calories: formData.get("calories"),
        carbs: formData.get("carbs"),
        fat: formData.get("fat"),
        protein: formData.get("protein"),
        sugar: formData.get("sugar")
    }

    // make a request to update a todo
    await fetch(url + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedTodo)
    })

    // redirect to the show page
    return redirect(`/post/${id}`)
}


// Delete Action for Deleting Todos
export const deleteAction = async({params}) => {
    // get the id from params
    const id = params.id

    // make a request to delete a todo
    await fetch(url + id, {
        method: "delete"
    })

    // redirect to the index page
    return redirect("/")
}