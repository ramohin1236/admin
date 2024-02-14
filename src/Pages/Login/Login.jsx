import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../../Components/CustomInput";
import { useFormik } from 'formik';
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from './../../features/auth/authSlice';
import { useEffect } from "react";



const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let schema = yup.object().shape({
        email: yup
          .string()
          .email("Email should be valid")
          .required("Email is Required"),
        password: yup.string().required("Password is Required"),
      });
    const formik = useFormik({
        initialValues: {
          email: '',
          password: ''
        },
        validationSchema:schema,
        onSubmit: (values) => {
            dispatch(login(values));
          },
        });
 

        const { user, isError, isSuccess, isLoading, message} =useSelector((state) => state.auth);
      
        useEffect(() => {
          if (!user== null||isSuccess) {
            navigate("admin");
          } else {
            navigate("")
          }
        }, [user, isError, isSuccess, isLoading,message,navigate]);
    return (
        <div className="py-5" style={{background : "#ffd333", minHeight: "100vh"}}>
<br />
<br />
<br />
<br />

<br />
           <div className="my-5 w-25 bg-white rounded-3 mx-[600px] p-4 ">
            <h3 className="text-2xl text-center">Login</h3>
            <p className="text-center">Login to your account to continue.</p>
             <form action="" onSubmit={formik.handleSubmit}>
             <CustomInput 
            
             name="email" 
             type="text" 
             label="email address" 
             id="email" 
             i_class="py-4 px-2 w-full rounded-xl border-2"
             val={formik.values.email}
             onCh={formik.handleChange("email")}
          
          
             />
           <div className="error mt-2 text-red-600">
                 {formik.touched.email && formik.errors.email}
          </div>
             <CustomInput 
             
             name="password" 
             type="password" 
             label="password" 
             id="password" 
             i_class="py-4 px-2 w-full  rounded-xl border-2"
             val={formik.values.password}
             onCh={formik.handleChange("password")}
            
             />
             <div className="error mt-2 text-red-600">
            {formik.touched.password && formik.errors.password}
          </div>
             <div className="mb-4 text-end -mt-3" >
                <Link to="/forgot-password">Fogot-Password?</Link>
             </div>
             <button  
             className="border-0 px-3 py-2 text-center  text-white font-bold w-full "
             style={{background:"#ffd333"}}
             type="submit"
             >Login</button>
             </form>
           </div>
        </div>
    );
};

export default Login;