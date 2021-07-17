interface freqCounterType {
	[key: string]: number
}

export const countLetters = (letters: string) => {
	const characterArray = [...letters];
	return characterArray.reduce<freqCounterType>((counter: freqCounterType, character: string) => {
		counter[character.toLowerCase()] = counter[character.toLowerCase()] ? counter[character.toLowerCase()] + 1 : 1;
		return counter;
	}, {});
};

export const filterTopTen = (chars: freqCounterType) => {
	const entries = Object.entries(chars);
	entries.sort((a, b) => b[1] - a[1]);
	const withoutSpaces = entries.filter(entry => entry[0].trim() !== "");
	return withoutSpaces.slice(0, 10);
};