import { Children } from "react"


const Input = ({type="text",className,label,prop,value,id,placeholder,onChange}) => {
  return (
    <div>
    <label htmlFor={id} className={   `$ {className}`}>{label}</label>
    <input
    type={type}
    className={ `${className}`}
    {...prop}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    />
    </div>
  )
}

export default Input