import { useEffect } from "react"

const useSetTimeOutToCloseModal = (callback, time, watcher) => {

    useEffect( ()=>{
        let timeOut = null;
        timeOut = setTimeout(()=>{return callback()}, time); 

        return ()=>{ clearTimeout(timeOut);}
        
    }, watcher);
} 

export default useSetTimeOutToCloseModal;