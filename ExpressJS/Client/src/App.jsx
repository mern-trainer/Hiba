import { BrowserRouter, Routes, Route } from "react-router"
import TodoPage from "./Pages/TodoPage"
import TodoEditPage from "./Pages/TodoEditPage"

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route path="" Component={TodoPage} />
                <Route path="edit/:id" Component={TodoEditPage} />
            </Route>
        </Routes>
    </BrowserRouter>
}

export default App