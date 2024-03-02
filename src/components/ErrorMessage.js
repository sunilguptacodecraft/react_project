import React from "react";

const ErrorMessage = ({title}) => {
  return (
    <>
      <span role="alert" className="text-danger " style={{fontSize:'14px', display:'flex', justifyContent:'flex-end'}}>
        {title}
      </span>
    </>
  );    
};

export default ErrorMessage;
