
import { NextRequest, NextResponse } from "next/server"
import getListOfWord from '../../../mots/getListOfWords'
import getRandomLetter from "@/app/utils/getRandomLetter";
import getRandomNumberBetween from "@/app/utils/getRandomNumberBetween";


export async function GET( request:NextRequest, { params }: {params: {size: string}} ){

    const size = params.size;
    const allWords = getListOfWord(); 
    const words = allWords[size];
    const randomLetter = getRandomLetter();
    const randomList = words[randomLetter]
    const totalWords = randomList.length;
    const randomIndex = getRandomNumberBetween(0, totalWords);
    const word = randomList[randomIndex];
    
       
    return NextResponse.json({word})
}