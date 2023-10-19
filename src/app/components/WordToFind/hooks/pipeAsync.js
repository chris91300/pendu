

export default function pipeAsync(...args){

    return async (param) => {

        while( args.length != 0 ){       
            const func = args.shift()
            param = await func(param)
        }

        return param
        
    }

}