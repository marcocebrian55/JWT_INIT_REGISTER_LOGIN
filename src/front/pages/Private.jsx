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
                <div className="container mt-5">
                    <header className=" d-flex jsutify-content-between align-items-center border-bottom pb-3 mb-4">
                    <h1 className="display-6 fw-bold text-dark">Marco Cebrian Marirrodriga(CV)</h1>
                    <p className="text-primary mb-1">Full Stack Developer en formación</p>
                    <div>
                        <small className="text-muted ">{user?.email} | Las Palmas, España</small>
                    </div>
                    
                    <div className="ms-3">
                        <img src="https://media.licdn.com/dms/image/v2/D4E35AQGNfqbP66h-JQ/profile-framedphoto-shrink_200_200/B4EZlrqzwkKkAY-/0/1758448008895?e=1770984000&v=beta&t=jevBLj1xYqDF5pxlEvlDfiiNzjak1uf23i1kerR5syY" 
                        alt="Foto marco"
                        className="rounded-circle border border-3 border-primary shadow-sm"
                        
                        />

                    </div>
                </header>
                   <div className="border border-primary rounded p-3 mb-4">
                    <h5 className="fw-bold text-primary">ESTUDIOS</h5>
                    <p className="mb-0 fw-bold">Full Stack Web Development</p>
                    <p className="mb-0">4Geeks Academy</p>
                    <small className="text-muted">Actualmente cursando - 2025/26</small>
                </div>
                <div className="border rounded p-3 mb-4">
                    <h5 className="fw-bold text-secondary">EXPERIENCIA LABORAL</h5>
                    <div className="mb-3">
                        <p className="mb-0 fw-bold">Trabajando en el proyecto final del Bootcamp de Full stacks de 4GEEKS</p>
                        <small className="fw-bold">-2026-Actual-</small>
                        <p className="small mb-0">Gestor de ventas en Avis(Rental Car)</p>
                        <small className="text-muted">2026-Actual</small>
                        <p className="small mb-0">Vendedor en Leroy Merlin</p>
                        <small className="text-muted">2025-2026</small>
                        <p className="small mb-0">Consultor Financiero</p>
                        <small className="text-muted">2024-2025</small>
                        <p className="small mb-0">Deportista Profesional</p>
                        <small className="text-muted">2016-2022(Toda la vida)</small>
                    </div>
                </div>
                <div className="border rounded p-3 mb-4 bg-light">
                    <h5 className="fw-bold">APTITUDES</h5>
                    <div className="d-flex flex-wrap gap-2 mt-2">
                        <span className="badge bg-dark">JavaScript</span>
                        <span className="badge bg-dark">React</span>
                        <span className="badge bg-dark">Python</span>
                        <span className="badge bg-dark">Flask</span>
                        <span className="badge bg-dark">Bootstrap</span>
                        <span className="badge bg-dark">HTML:5</span>
                    </div>
                </div>
                <div className="text-end mt-5">
                    <button className="btn btn-danger" onClick={() => {
                        localStorage.removeItem("token");
                        navigate("/");
                    }}>Cerrar Sesión</button>
                </div>
                </div>
            )}



        </>

    )
}