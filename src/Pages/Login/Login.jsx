import { Link } from "react-router-dom";
import CustomInput from "../../Components/CustomInput";


const Login = () => {
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
             <form action="">
             <CustomInput type="text" label="email address" id="email" i_class="py-4 px-2 w-full rounded-xl border-2"/>
             <CustomInput type="password" label="password" id="password" i_class="py-4 px-2 w-full  rounded-xl border-2"/>
             <div className="mb-4 text-end -mt-3" >
                <Link to="/forgot-password">Fogot-Password?</Link>
             </div>
             <Link  to="/admin"
             className="border-0 px-3 py-2 text-center  text-white font-bold w-full "
             style={{background:"#ffd333"}}
             type="submit"
             >Login</Link>
             </form>
           </div>
        </div>
    );
};

export default Login;