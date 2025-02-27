import { Fragment, useState } from "react"
import { api } from "../axios"
import { FaCheckDouble, FaPen, FaTrashCan } from "react-icons/fa6"
import { useTodo } from "../Providers/TodoProvider"
import { toast } from "react-toastify"
import { useNavigate } from "react-router"

const TodoPage = () => {

    const [task, setTask] = useState("")
    const { taskList, setTaskList } = useTodo()
    const navigate = useNavigate()

    const handleAddTask = async e => {
        e.preventDefault()
        try {
            const { data, status } = await api.post("/todo", { title: task }) 
            if (status == 201) {
                setTaskList(task => ([...task, data.created]))
                setTask("")
                return toast.success("Task added successfully")
            }
            return toast.error(data.message)
        } catch (err) {
            return toast.error(err.response?.data.message || err.message)
        }
    }

    const handleRemoveTask = async (id) => {
        try {
            const { data, status } = await api.delete(`/todo/${id}`)
            if (status == 200) {
                setTaskList(task => task.filter(item => item.id !== id))
                return toast.success("Task removed successfully")
            }
            return toast.error(data.message)
        } catch (err) {
            return toast.error(err.response?.data.message || err.message)
        }
    }

    const updateTodoStatus = async item => {
        try {
            const { data, status } = await api.patch(`/todo/${item.id}`, { completed: !item.completed })
            if (status == 200) {
                setTaskList(task => task.map(task => task.id === item.id ? data.updated : task))
                return toast.success("Task updated successfully")
            }
            return toast.error(data.message)
        } catch (err) {
            return toast.error(err.response?.data.message || err.message)
        }
    }

    return <div className="d-flex justify-content-center mt-3">
        <div className="w-100" style={{maxWidth: "450px"}}>
            <form onSubmit={handleAddTask} className="d-flex flex-column gap-2">
                <input type="text" className="border-0 bg-light p-2 rounded" style={{outline: "none"}} onChange={(e) => setTask(e.target.value)} value={task} placeholder="Eg: Buy Groceries"/>
                <button className="btn btn-sm btn-success rounded-0 p-1" >Add Task</button>
            </form>
            <div className="mt-3 d-flex flex-column gap-2">
                {
                    taskList && taskList?.map((item) => {
                        return <div key={item.id} className={`bg-light p-2 rounded-1 ${item.completed && "text-decoration-line-through"}`}>
                            <div className="">Task: {item.title}</div>
                            <div>Status: {item.completed ? "Completed" : "Pending"}</div>
                            <div className="d-flex gap-3 mt-1 justify-content-end">
                                <FaTrashCan className="text-danger" cursor={"pointer"} onClick={() => handleRemoveTask(item.id)}/>
                                {!item.completed && <Fragment>
                                    <FaPen onClick={() => navigate(`/edit/${item.id}`)} className="text-primary" cursor={"pointer"} />
                                    <FaCheckDouble onClick={() => updateTodoStatus(item)} className="text-success" cursor={"pointer"} />
                                </Fragment>}
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}

export default TodoPage