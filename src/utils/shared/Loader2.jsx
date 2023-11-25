import React from 'react'
import './common.css'

const Loader2 = () => {
    const loaderStyle = {
        margin: 'auto',
        border: '20px solid red',
        borderRadius: '50%',
        borderTop: '20px solid #FF7A59',        
        animation: 'spinner 4s linear infinite',
      };
    
      return (
        <div className="flex items-center justify-center h-screen">
          <div className='h-28 w-28 lg:h-48 lg:w-48' style={loaderStyle}></div>
        </div>
      );
}

export default Loader2