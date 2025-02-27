import { createContext, useContext, useState } from "react";

const Context = createContext()

export const TodoProvider = ({ children }) => {
    const [taskList, setTaskList] = useState([])
    return <Context.Provider value={{ taskList, setTaskList }}>
        {children}
    </Context.Provider>
}

export const useTodo = () => useContext(Context)