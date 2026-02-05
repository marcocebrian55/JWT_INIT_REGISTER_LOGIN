import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { privateCheck } from "../Services/backendServices"

export const Private = () => {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const checkToken = async () => {
        const response = await privateCheck()
        console.log(response);
        if (response) {
            setUser(response)
            setLoading(false)

        }
        else {
            localStorage.removeItem("token")
            navigate("/")
        }
    }




    console.log(user);


    useEffect(() => {
        if (!localStorage.getItem("token")) {
            setTimeout(() => {
                navigate("/")
            }, 1000)

        } else {
            checkToken()
        }


    }, [])




    return (
        <>
            {loading ? (<div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>) : (
                <h1>Hola</h1>
            )}



        </>

    )
}