import { countLetters, filterTopTen } from "../helpers";

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

describe('filterTopTen tests', () => {
	it('should return an array of the top ten entries sorted by value', () => {
		const lettersCounted = {
			a: 5,
			e: 2,
			s: 12,
			g: 1,
			p: 7,
			d: 1,
			c: 8,
			b: 1,
			f: 19,
			l: 3,
			o: 9,
			u: 4,
		};
		const result = filterTopTen(lettersCounted);
		expect(result).toHaveLength(10);
		expect(result).toEqual([
			['f', 19],
			['s', 12],
			['o', 9],
			['c', 8],
			['p', 7],
			['a', 5],
			['u', 4],
			['l', 3],
			['e', 2],
			['g', 1]
		]);
	});
});