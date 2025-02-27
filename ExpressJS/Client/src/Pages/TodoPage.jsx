import { useState } from "react"
import { api } from "../axios"

const TodoPage = () => {

    const [task, setTask] = useState("")
    const [taskList, setTaskList] = useState([])

    const handleAddTask = async () => {
        try {
            const { data, status } = await api.post("/todo", { title: task }) 
            if (status == 201) {
                setTaskList(task => ([...task, data.created]))
                return;
            }
            return alert(data.message)
        } catch (err) {
            return alert(err.message)
        }
    }

    return <div>
        <input type="text" onChange={(e) => setTask(e.target.value)} value={task} placeholder="Eg: Buy Groceries"/>
        <button onClick={handleAddTask}>Add Task</button>
        <div>
            {
                taskList.map((item, index) => {
                    return <div key={index}>{item.title}</div>
                })
            }
        </div>
    </div>
}

export default TodoPage