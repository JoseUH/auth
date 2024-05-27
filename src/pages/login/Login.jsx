import { useForm } from "react-hook-form";
import { API } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { JwtContext } from "../../context/jwtContext";
const Login = () => {
    // Estas dos funcionalidades vienen por defecto en el useForm
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const {setJwt} = useContext(JwtContext);

     const onSubmit = (formData) => {
       console.log(formData);
       API.post("users/login",formData).then((res)=>{
        //  console.log(res);
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("email", res.data.user.email)
        setJwt(localStorage.getItem("token"))
         navigate("/gallery")
       })
     };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor="email">Email:</label>
    <input
      type="email"
      id="email"
      {...register("email", { required: true })}
    />
    <label htmlFor="password">Password:</label>
    <input
      type="password"
      id="password"
      {...register("password", { required: true })}
    />
    <button type="submit"> Login</button>
  </form>
  )
}

export default Login