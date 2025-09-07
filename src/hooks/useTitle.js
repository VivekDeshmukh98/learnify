import { useEffect } from "react";



export const useTitle = (title) => {
  
  useEffect(()=>{
    document.title=`${title} - Learnify`;
  },[title]);
    return null;
}
