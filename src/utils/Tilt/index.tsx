import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { MainPropTypes } from "../../shared/types";

 
function Tilt(props:{options:any,onClick?:any} & MainPropTypes ) {
    const { options,children, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
        if (!tilt.current) {
            return
        }
      VanillaTilt.init(tilt.current, options);
    }, [options,tilt]);
  
    return <div ref={tilt} {...rest} >{children}</div>;
  }
  

  export default Tilt