import { BrowserRouter, Routes, Route } from "react-router"
import TodoPage from "./Pages/TodoPage"
import TodoEditPage from "./Pages/TodoEditPage"
import SignupPage from "./Pages/SignupPage"
import LoginPage from "./Pages/LoginPage"

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route path="" Component={TodoPage} />
                <Route path="edit/:id" Component={TodoEditPage} />
                <Route path="signup" Component={SignupPage} />
                <Route path="login" Component={LoginPage} />
            </Route>
        </Routes>
    </BrowserRouter>
}

export default App