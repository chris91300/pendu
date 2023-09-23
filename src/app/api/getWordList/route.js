
import { NextResponse } from "next/server"
import getListOfWord from '../../mots/getListOfWords'


export async function GET(){
    const list = getListOfWord();    
    return NextResponse.json(list)
}