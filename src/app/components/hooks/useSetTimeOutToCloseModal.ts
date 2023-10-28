import { useEffect } from "react"

//  VOIR COMMENT ON GÈRE SETTIMEOUT

const useSetTimeOutToCloseModal = (callback: ()=>void, time: number, watcher: string[]) => {

    useEffect( ()=>{
        let timeOut: ReturnType<typeof setTimeout>;
        timeOut = setTimeout(callback, time); 

        return ()=>{ clearTimeout(timeOut);}
        
    }, watcher);
} 

export default useSetTimeOutToCloseModal;