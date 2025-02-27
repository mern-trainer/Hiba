import { BrowserRouter, Routes, Route } from "react-router"
import TodoPage from "./Pages/TodoPage"

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route path="" Component={TodoPage}/>
            </Route>
        </Routes>
    </BrowserRouter>
}

export default App