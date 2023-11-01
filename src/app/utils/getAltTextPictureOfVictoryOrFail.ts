

export default function getAltTextPictureOfVictoryOrFail(userWin: boolean): string {
    const baseText = "image aléatoire symbolisant la "
    const status = userWin ? "victoire" : "défaite"
    const altText = baseText + status;

  return altText
}
