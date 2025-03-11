import { toast } from "react-toastify"
import { api } from "../axios"

const Access = () => {

    const handleClick = async () => {
        try {
            const getCookie = () => {
                const cookieKey = "SAMPLE-KEY"
                const cookies = document.cookie
                const cookieList = cookies.split(";")
                for (let index = 0; index < cookieList.length; index++){
                    const res = cookieList[index].split("=")
                    if (res[0].trim() == cookieKey) {
                        return res[1]
                    }
                }
                return null
            }
            const token = getCookie()
            const { data } = await api.get("/users/access", {
                headers: {
                    Authorization: `Bearer `
                }
            })
            console.log(data);
            return toast.success(data.message)
        } catch (err) {
            return toast.error(err.response?.data.message || err.message)   
        }
    }

    return <div>
        <button onClick={handleClick}>Get Response</button>
    </div>
}

export default Access