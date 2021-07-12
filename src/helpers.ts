
interface freqCounterType {
    [key: string]: number
}
// export const countLetters = (letters: string) => {
//     const frequencyCounter: freqCounterType = {};
//     const characterArray = [...letters];
//     characterArray.forEach(character => {
//         frequencyCounter[character] = frequencyCounter[character] ? frequencyCounter[character] + 1 : 1;
//     });
//     return frequencyCounter;
// };

export const countLetters = (letters: string) => {
    const characterArray = [...letters];
    return characterArray.reduce<freqCounterType>((counter: freqCounterType, character: string) => {
        counter[character] = counter[character] ? counter[character] + 1 : 1;
        return counter;
    }, {});
};