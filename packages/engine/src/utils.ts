import * as EngineConstants from './constants';
import * as EngineTypes from './types';

export function isFunctionId(id: EngineTypes.AllPossibleTokenIds): id is EngineTypes.FunctionTokenIds {
	return (EngineConstants.FUNCTION_TOKEN_IDS as string[]).includes(id);
}

export function isVariableId(id: EngineTypes.AllPossibleTokenIds): id is EngineTypes.VariableId {
	return (EngineConstants.VARIABLE_IDS as string[]).includes(id);
}

export function assertUnreachable(a: never): never {
	throw new Error('Unreachable');
}

export function dangerousTokenAssertion(value: any) {
	return value as unknown as EngineTypes.Token;
}

export function dotJoin(left: string, right: string) {
	return `${left}${left.length ? '.' : ''}${right}`;
}

export function cloneAlgorithm(algorithm: EngineTypes.ChessAlgorithm): EngineTypes.ChessAlgorithm {
	return JSON.parse(JSON.stringify(algorithm)) as EngineTypes.ChessAlgorithm;
}

// Pulled from here: https://stackoverflow.com/a/49434653
export function randomBoxMuller(min: number, max: number, skew: number = 1) {
	let u = 0,
		v = 0;
	while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
	while (v === 0) v = Math.random();
	let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

	num = num / 10.0 + 0.5; // Translate to 0 -> 1
	if (num > 1 || num < 0)
		num = randomBoxMuller(min, max, skew); // resample between 0 and 1 if out of range
	else {
		num = Math.pow(num, skew); // Skew
		num *= max - min; // Stretch to fill range
		num += min; // offset to min
	}
	return num;
}

// Pulled from here: https://stackoverflow.com/a/48083382
export function shuffle<T>(array: T[]): T[] {
	let currentIndex = array.length,
		randomIndex;

	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}

	return array;
}