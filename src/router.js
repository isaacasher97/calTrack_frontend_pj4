import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { indexLoader,  showLoader } from "./loaders"
import { createAction, updateAction, deleteAction } from "./actions"
import Login from "./pages/Login"
import getToken from "../src/App"

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<Login getToken={getToken} />}>
            <Route path="" element={<Index/>}loader={indexLoader}/>
            <Route path="post/:id" element={<Show/>} loader={showLoader}/>
            <Route path="create" action={createAction}/>
            <Route path="update/:id" action={updateAction}/>
            <Route path="delete/:id" action={deleteAction}/>
        </Route>
    </>
))

export default router