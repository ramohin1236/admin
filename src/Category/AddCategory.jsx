import CustomInput from "../Components/CustomInput";





const AddCategory = () => {
    return (
        <div>
           <h3 className="text-4xl mb-4 font-bold">Add Category</h3>
           <div>
            <form action="">
                <CustomInput type="text" i_class="py-4 px-2 w-full rounded-xl border-2 mb-2"  label="Enter Category"/>
                <div className="text-center items-center mt-5 ">
    <button className="btn btn-success border-0 rounded-lg px-24 uppercase">Add Category</button>
    </div>
            </form>
           </div>
        </div>
    );
};

export default AddCategory;