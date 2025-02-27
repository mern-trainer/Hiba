import { createRoot } from "react-dom/client"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import { TodoProvider } from "./Providers/TodoProvider"
import { ToastContainer } from "react-toastify"

createRoot(
    document.getElementById("root")
).render(
    <TodoProvider>
        <App />
        <ToastContainer autoClose={2000} position="bottom-right"/>
    </TodoProvider>
)