import { useState } from "react"
import { api } from "../axios"
import { toast } from "react-toastify"

const LoginPage = () => {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        console.log("Debugging", formData);
        try {
            const { data, status } = await api.get("/users/login", {
                params: formData
            })
            console.log(data);
            if (status != 200) {
                return toast.error(data.message)
            }
            return toast.success("User Logged in successfully")
        } catch (err) {
            console.log(err);
            return toast.error(err.response?.data.message || err.message)
        }
    }

    return <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit} style={{maxWidth: "450px"}} className="d-flex w-100 flex-column gap-2">
            <input onChange={handleChange} value={formData.username} type="text" placeholder="Username" name="username"/>
            <input onChange={handleChange} value={formData.password} type="password" placeholder="Password" name="password"/>
            <button type="submit">Login</button>
        </form>
    </div>
}

export default LoginPage