import { useState } from "react"
import { api } from "../axios"
import { toast } from "react-toastify"

const SignupPage = () => {

    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const { data, status } = await api.post("/users/signup", formData)
            if (status != 201) {
                return toast.error(data.message)
            }
            return toast.success("User created successfully")
        } catch (err) {
            return toast.error(err.response?.data.message || err.message)
        }
    }

    return <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit} style={{maxWidth: "450px"}} className="d-flex w-100 flex-column gap-2">
            <input onChange={handleChange} value={formData.email} type="text" placeholder="Email" name="email"/>
            <input onChange={handleChange} value={formData.username} type="text" placeholder="Username" name="username"/>
            <input onChange={handleChange} value={formData.password} type="password" placeholder="Password" name="password"/>
            <button type="submit">Signup</button>
        </form>
    </div>
}

export default SignupPage