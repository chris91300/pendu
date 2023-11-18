import { useEffect } from "react"


export default function useSetTimeOutToCloseModal(callback: ()=>void, time: number, watcher: string[]) {

    useEffect( ()=>{
        let timeOut: ReturnType<typeof setTimeout>;
        timeOut = setTimeout(callback, time); 

        return ()=>{ clearTimeout(timeOut);}
        
    }, watcher);
} 
