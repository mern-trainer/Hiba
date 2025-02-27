import { Navigate, useNavigate, useParams } from "react-router"
import { useTodo } from "../Providers/TodoProvider"
import { useState } from "react"
import { api } from "../axios"
import { toast } from "react-toastify"

const TodoEditPage = () => {
    
    const { id } = useParams()
    const { taskList, setTaskList } = useTodo()
    const [task, setTask] = useState(taskList.find(item => item.id === id)?.title || "")
    const navigate = useNavigate()

    if (!id) {
        return <Navigate to="/" />
    }

    const handleUpdate = async e => {
        e.preventDefault()
        try {
            const { data, status } = await api.patch(`/todo/${id}`, { title: task }) 
            if (status == 200) {
                setTaskList(task => task.map(item => item.id === id ? data.updated : item))
                toast.success("Task updated successfully")
                return navigate("/")
            }
            return toast.error(data.message)
        } catch (err) {
            return toast.error(err.response?.data.message || err.message)
        }
    }

    return <div className="d-flex justify-content-center mt-3">
        <div className="w-100" style={{ maxWidth: "450px" }}>
            <form onSubmit={handleUpdate} className="d-flex flex-column gap-2">
                <input type="text" placeholder="Eg: Buy milk" onChange={e => setTask(e.target.value)} value={task} className="p-2 w-100 bg-light rounded border-0" style={{outline: "none"}}/>
                <button className="btn btn-sm btn-primary w-100">Update Task</button>
            </form>
        </div>
    </div>
}

export default TodoEditPage