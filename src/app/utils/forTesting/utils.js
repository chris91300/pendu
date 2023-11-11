import { render, screen, fireEvent } from '@testing-library/react'


const getHeading = (level)=>{
 const getTitlewithText = (text) => {
    return screen.getByRole("heading", {level: level, name: text});
 }
 return getTitlewithText;
}



//  for Nextjs before version 13 or with pages directory
export const renderApp = (component)=>{
    render( MyApp({ Component: component} ) );
}

export const getH1 = getHeading(1);

export const getH2 = getHeading(2);

export const getH3 = getHeading(3);

export const getH4 = getHeading(4);

export const getH5 = getHeading(5);

export const getH6 = getHeading(6);

export const isElementInDocument = element => expect(element).toBeInTheDocument();

export const isElementNotInDocument = element => expect(element).not.toBeInTheDocument();


//      START TEST FOR TITLE WITH TOBEINDOCUMENT

export const userCanReadTheH1 = (text) => {
    return isElementInDocument( getH1(text) )
}

export const userCanReadTheH2 = (text) => {
    return isElementInDocument( getH2(text) )
}

export const userCanReadTheH3 = (text) => {
    return isElementInDocument( getH3(text) )
}

export const userCanReadTheH4 = (text) => {
    return isElementInDocument( getH4(text) )
}

export const userCanReadTheH5 = (text) => {
    return isElementInDocument( getH5(text) )
}

export const userCanReadTheH6 = (text) => {
    return isElementInDocument( getH6(text) )
}


//      END TEST FOR TITLE WITH TOBEINDOCUMENT


//     START TEST FOR TEXT 

export const getText = (text) => screen.getByText(text)

export const getTexts = (text) => screen.getAllByText(text)

export const getTextByQuery = (text) => screen.queryByText(text)

export const userCanReadTheText = text => isElementInDocument( getText(text) )

// using getTextByQuery because getText doesn't work with .not. of jest
export const userCanNotReadTheText = text => isElementNotInDocument( getTextByQuery(text) )

export const userCanReadSeveralTexts = (text) => {

    const texts = getTexts(text)

    return {
        inTheNumberOf: (number) => expect(texts.length).toBe(number)
    }
}


export const findText = async (text) => await screen.findByText(text)

export const nowUserCanReadTheText = async (text) => {
    const searchedText = await findText(text)
    expect(searchedText).toBeInTheDocument()
}

export const nowUserCanNotReadTheText = async (text) => {
    const searchedText = await findText(text)
    expect(searchedText).not.toBeInTheDocument()
}

//  END TEST FOR TEXT 


//  START TEST FOR IMAGE

/*export const getImgWithAltText = (text) => {
    return screen.getByAltText(text)
}*/

export const getImgWithAltText = ( text ) => screen.getByAltText(text)

export const userCanSeeImageWithAltText = text => isElementInDocument( getImgWithAltText(text) )

export const userCanSeeAnImageWithAltAttribute = ( text ) => {

    const image = getImgWithAltText(text)

    return {
        andWithSrc: (src) => {
            expect(image.src).toMatch(src)
        }
    }
}

export const findImgWithAltText = async (text) => await screen.findByAltText(text)

//  toBeInTheDocument ne doit pas vérifier une promesse
export const nowUserCanSeeAnImageWithAltText = async (text) => {
    const img = await findImgWithAltText(text)
    expect(img).toBeInTheDocument()
}

export const nowUserCanSeeAnImageWithAltAttribute = ( text ) => {

    return {
        andWithSrc: async (src) => {
            const image = await findImgWithAltText(text)
            expect(image.src).toMatch(src)
        }
    }
}


//  END TEST FOR IMAGE

//  START TEST FOR LINK

export const getLinkWithText = (text) => {
    return screen.getByRole('link', {name: text});
}

export const getLinksWithText = (text) => {
    return screen.getAllByRole('link', {name: text});
}


//  END TEST FOR LINK


//  START TEST FOR BUTTON

export const getButton = (text) => screen.getByRole('button', {name: text})

export const userCanClickOnButton = (text) => isElementInDocument( getButton( text ) )

export const userClickOnButton = (text) => fireEvent.click( getButton( text ) )

//  END TEST FOR BUTTON

