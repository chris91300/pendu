export type wordsListByAlphabet = {
    [index: string]: string[]
}

type WordList = string[]
type AlphabetList = {
    [index: string]: WordList,
    "A": WordList,
    "B": WordList,
    "C": WordList,
    "D": WordList,
    "E": WordList,
    "F": WordList,
    "G": WordList,
    "H": WordList,
    "I": WordList,
    "J": WordList,
    "K": WordList,
    "L": WordList,
    "M": WordList,
    "N": WordList,
    "O": WordList,
    "P": WordList,
    "Q": WordList,
    "R": WordList,
    "S": WordList,
    "T": WordList,
    "U": WordList,
    "V": WordList,
    "W": WordList,
    "X": WordList,
    "Y": WordList,
    "Z": WordList,

}


export type ListOfWord = {
    [index: number]: AlphabetList,
    6: AlphabetList,
    7: AlphabetList,
    8: AlphabetList,
    9: AlphabetList
  }