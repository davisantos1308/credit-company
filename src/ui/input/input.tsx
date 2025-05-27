interface InputProps {
  type?: string,
  value?: string,
  onChange?: () => void,
  placeholder?: string,
  disabled?: boolean,
  // icon?: string,
  className?: string,
  classNameDiv?: string
}

export function Input({type = "text", value, onChange, placeholder, disabled, className, classNameDiv}: InputProps){
  return(
    <div className={classNameDiv}>
      <input 
        type={type} 
        className={className} 
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        />
    </div>
  )
}