import url from "./url"

// Index to load all foods
export const indexLoader = async () => {
    //make api call to backend index route
    const response = await fetch(url)
    //turn response in to js object
    const foods = await response.json()
    //return the js object
    return foods
}

//showLoader to get a single food for show route
export const showLoader = async ({params}) => {
    //grab the id
    const id = params.id
    //make api call to backen show route
    const response = await fetch(url + id)
    //turn response into js object
    const food = await response.json()
    //return the js object
    return food
}