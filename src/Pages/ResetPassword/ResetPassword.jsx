import CustomInput from "../../Components/CustomInput";


const ResetPassword = () => {
    return (
        <div className="py-5" style={{background : "#ffd333", minHeight: "100vh"}}>
        <br />
        <br />
        <br />
        <br />
        
        <br />
                   <div className="my-5 w-25 bg-white rounded-3 mx-[600px] p-4 ">
                    <h3 className="text-2xl text-center">Reset Password</h3>
                    <p className="text-center">Please Enter a new password.</p>
                     <form action="">
                     
                     <CustomInput type="password" label="New password" id="password" i_class="py-4 px-2 w-full text-xl  rounded-xl border-2"/>
                     <CustomInput type="password" label="Confirm password" id="confirm password" i_class="py-4 px-2 w-full text-xl  rounded-xl border-2"/>
                     <button  
                     className="border-0 px-3 py-2  text-white font-bold w-full "
                     style={{background:"#ffd333"}}
                     type="submit"
                     >Reset Password</button>
                     </form>
                   </div>
                </div>
    );
};

export default ResetPassword;