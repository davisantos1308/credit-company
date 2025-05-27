import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  classname?: string;
}

export function Button({classname = "", children, ...props}: ButtonProps){

  const classe = [classname];

  return(
    <button className={classe.join("")} {...props}>
      {children}
    </button>
  )
}