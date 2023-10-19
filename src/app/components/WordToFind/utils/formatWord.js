
import replaceVoyelleWithAccent from './replace'

// fonction qui au final ne sert à rien. on garde juste replaceVoyelleWithAccent
function formatWord(word) {
    word = replaceVoyelleWithAccent(word)
    return word
 
}

export default formatWord