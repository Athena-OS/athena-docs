export function getLogURL(
  inputString: string,
  searchWord: string
): string | null {
  try {
    let word = searchWord.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`\\b${word}-[\\w_]+`, "g");
    const match = inputString.match(regex);
    return match ? match[0] : null;
  } catch (e) {
    console.log("Error in getLogURL happened with " + searchWord, e);
    return null;
  }
}
