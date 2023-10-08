

function getColorBorder(color) {
  
    let style;
    
    switch(color){
        
        case 'red':
            style = 'border-red-600';
            break;

        case 'green':
            style = 'border-green-600';
            break;
        
        default:
            
    }

    return style;
}

export default getColorBorder