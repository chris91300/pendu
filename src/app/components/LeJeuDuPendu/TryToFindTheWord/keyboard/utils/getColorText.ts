import { ColorKeyType } from "../keyboard";

function getColorText( color: ColorKeyType ) {
  
    let style;
    
    switch(color){
        
        case 'red':
            style = 'text-red-600';
            break;

        case 'green':
            style = 'text-green-600';
            break;
        
        default:
            style = 'text-[wheat]';
    }

    return style;
}

export default getColorText