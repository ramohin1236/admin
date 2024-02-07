import CustomInput from "../../Components/CustomInput";


const ForgetPassword = () => {
    return (
        <div className="py-5" style={{background : "#ffd333", minHeight: "100vh"}}>
        <br />
        <br />
        <br />
        <br />
        
        <br />
                   <div className="my-5 w-25 bg-white rounded-3 mx-[600px] p-4 ">
                    <h3 className="text-2xl text-center">Forgot Password</h3>
                    <p className="text-center">Please Enter Your register email to get reset password mail.</p>
                     <form action="">
                     <CustomInput type="text" label="email address" id="email" i_class="py-4 px-2 w-full rounded-xl border-2"/>
                  
                     <button  
                     className="border-0 px-3 py-2  text-white font-bold w-full "
                     style={{background:"#ffd333"}}
                     type="submit"
                     >Send Link</button>
                     </form>
                   </div>
                </div>
    );
};

export default ForgetPassword;