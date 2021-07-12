import { countLetters } from "../helpers";

describe('countLetters tests', () => {
	it('should return a letter count', () => {
		const letters = 'look at my letters';
		const letterCount = countLetters(letters);
		expect(letterCount).toEqual({
			l: 2,
			a: 1,
			o: 2,
			k: 1,
			t: 3,
			m: 1,
			y: 1,
			e: 2,
			r: 1,
			s: 1,
			" ": 3
		});
	});
});