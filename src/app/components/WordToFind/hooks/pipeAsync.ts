
type AsyncFuncStringPromiseString = (text:string) => Promise<string>
type FuncStringString = (text: string) => string

type FuncForPipeAsync = AsyncFuncStringPromiseString[] | FuncStringString[]



export default function pipeAsync(...args: FuncForPipeAsync): AsyncFuncStringPromiseString{

    return async (param: string) => {

        while( args.length != 0 ){       
            const func = args.shift()
            if( func ){// ajout du if pour satisfaire typescript
                param = await func(param)
            }
            
        }

        return param
        
    }

}