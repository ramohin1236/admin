/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const CustomInput = (props) => {
  
    const {type,label,i_id,i_class,name,val,onCh,onBl}=props
    return (
        <div className="form-floating mb-3">
        <input 
        onChange={onCh}
        onBlur={onCh}
        name={name} 
        value={val} 
        type={type} 
        className={`form-control ${i_class}`}id={i_id}placeholder={label}/>
        <label htmlFor={label}>{label}</label>
      </div>
    );
};

export default CustomInput;