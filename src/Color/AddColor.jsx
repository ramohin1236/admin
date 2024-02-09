import CustomInput from "../Components/CustomInput";


const AddColor= () => {
    return (
        <div>
           <h3 className="text-4xl mb-4 font-bold">Add Color</h3>
           <div>
            <form action="">
                <CustomInput type="color" i_class=" px-2 w-full rounded-xl border-2 mb-2"  label="Enter Color"/>
                <div className="text-center items-center mt-5 ">
    <button className="btn btn-success border-0 rounded-lg px-24 uppercase">Add Color</button>
    </div>
            </form>
           </div>
        </div>
    );
};

export default AddColor;