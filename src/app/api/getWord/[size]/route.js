
import { NextResponse } from "next/server"
import getListOfWord from '../../../mots/getListOfWords'
import getRandomLetter from "@/app/utils/getRandomLetter";
import getRandomNumberBetween from "@/app/utils/getRandomNumberBetween";


export async function GET( request, { params } ){

    /**
     * modifier dossier our avoir le param
     * récupérer le param number
     * récupérer un mot au hasard dans la liste
     * retourner mot
     */
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