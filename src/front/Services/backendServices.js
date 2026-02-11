import { Navigate } from "react-router-dom";

export const login = async (user,navigate) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/login`,
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json"
      }
    })
  
  if (!response.ok) {
    alert(data.error)
    return;
  }
  const data = await response.json();
  


  localStorage.setItem("token",data.token)
  navigate("/private")
  return data 
  
}

export const privateCheck = async ()=>{
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/profile`,
    {
      headers: {
        Authorization : `Bearer ${localStorage.getItem("token")}`,
      },

    },
  );
  const data = await response.json();
  if (!response.ok){
    return false;
  }
  return data
};



export const signUpUser = async (email,password)=> {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        const  data = await response.json();
        if (!response.ok) {
    alert(data.error)
    return false;
}
return data
};