import * as EngineTypes from './types';

export const MAX_ALGORITHM_DURATION_MS = 3000;

export const MAX_TOKEN_DEPTH_PER_ITERATION = 3;
export const MAX_TOKEN_DYNAMIC_ARGS_LENGTH = 8;

export const NUMBER_RANGE_MIN = -99;
export const NUMBER_RANGE_MAX = 99;

export const STATIC_MEMORY_SIZE = 36;
export const DYNAMIC_MEMORY_SIZE = 12;
export const MEMORY_SIZE = STATIC_MEMORY_SIZE + DYNAMIC_MEMORY_SIZE;

export const VARIABLE_NUMBER_RANGES: {
	[key in EngineTypes.StandardVariableIds]: { min: number; max: number };
} = {
	is_self: { min: 0, max: 1 },
	is_opponent: { min: 0, max: 1 },
	is_empty: { min: 0, max: 1 },
	is_pawn: { min: 0, max: 1 },
	is_knight: { min: 0, max: 1 },
	is_bishop: { min: 0, max: 1 },
	is_rook: { min: 0, max: 1 },
	is_queen: { min: 0, max: 1 },
	is_king: { min: 0, max: 1 },
	is_in_check: { min: 0, max: 1 },
	is_in_checkmate: { min: 0, max: 1 },
	is_castling: { min: 0, max: 1 },
	is_draw: { min: 0, max: 1 },
	captured_piece: { min: 0, max: 1 },
	captured_pawn: { min: 0, max: 1 },
	captured_knight: { min: 0, max: 1 },
	captured_bishop: { min: 0, max: 1 },
	captured_rook: { min: 0, max: 1 },
	captured_queen: { min: 0, max: 1 },
	lost_piece: { min: 0, max: 1 },
	lost_pawn: { min: 0, max: 1 },
	lost_knight: { min: 0, max: 1 },
	lost_bishop: { min: 0, max: 1 },
	lost_rook: { min: 0, max: 1 },
	lost_queen: { min: 0, max: 1 },
	can_attack: { min: 0, max: 64 },
	can_attack_pawn: { min: 0, max: 64 },
	can_attack_knight: { min: 0, max: 64 },
	can_attack_bishop: { min: 0, max: 64 },
	can_attack_rook: { min: 0, max: 64 },
	can_attack_queen: { min: 0, max: 64 },
	can_attack_king: { min: 0, max: 1 },
	possible_moves: { min: 0, max: 64 },
	friendly_pawn_can_move_here: { min: 0, max: 64 },
	friendly_knight_can_move_here: { min: 0, max: 64 },
	friendly_bishop_can_move_here: { min: 0, max: 64 },
	friendly_rook_can_move_here: { min: 0, max: 64 },
	friendly_queen_can_move_here: { min: 0, max: 64 },
	friendly_king_can_move_here: { min: 0, max: 1 },
	opponent_pawn_can_move_here: { min: 0, max: 64 },
	opponent_knight_can_move_here: { min: 0, max: 64 },
	opponent_bishop_can_move_here: { min: 0, max: 64 },
	opponent_rook_can_move_here: { min: 0, max: 64 },
	opponent_queen_can_move_here: { min: 0, max: 64 },
	opponent_king_can_move_here: { min: 0, max: 1 },
	adjacent_empty_squares: { min: 0, max: 8 },
	adjacent_friendly_pieces: { min: 0, max: 8 },
	adjacent_friendly_pawns: { min: 0, max: 8 },
	adjacent_friendly_knights: { min: 0, max: 8 },
	adjacent_friendly_bishops: { min: 0, max: 8 },
	adjacent_friendly_rooks: { min: 0, max: 8 },
	adjacent_friendly_queens: { min: 0, max: 8 },
	adjacent_friendly_king: { min: 0, max: 1 },
	adjacent_opponent_pieces: { min: 0, max: 8 },
	adjacent_opponent_pawns: { min: 0, max: 8 },
	adjacent_opponent_knights: { min: 0, max: 8 },
	adjacent_opponent_bishops: { min: 0, max: 8 },
	adjacent_opponent_rooks: { min: 0, max: 8 },
	adjacent_opponent_queens: { min: 0, max: 8 },
	adjacent_opponent_king: { min: 0, max: 1 },
};

export const CUSTOM_VARIABLE_MIN = NUMBER_RANGE_MIN;
export const CUSTOM_VARIABLE_MAX = NUMBER_RANGE_MAX;

export const STANDARD_VARIABLE_IDS: EngineTypes.StandardVariableIds[] = [
	'is_self',
	'is_opponent',
	'is_empty',
	'is_pawn',
	'is_knight',
	'is_bishop',
	'is_rook',
	'is_queen',
	'is_king',
	'is_in_check',
	'is_in_checkmate',
	'is_castling',
	'is_draw',
	'captured_piece',
	'captured_pawn',
	'captured_knight',
	'captured_bishop',
	'captured_rook',
	'captured_queen',
	'lost_piece',
	'lost_pawn',
	'lost_knight',
	'lost_bishop',
	'lost_rook',
	'lost_queen',
	'can_attack',
	'can_attack_pawn',
	'can_attack_knight',
	'can_attack_bishop',
	'can_attack_rook',
	'can_attack_queen',
	'can_attack_king',
	'possible_moves',
	'friendly_pawn_can_move_here',
	'friendly_knight_can_move_here',
	'friendly_bishop_can_move_here',
	'friendly_rook_can_move_here',
	'friendly_queen_can_move_here',
	'friendly_king_can_move_here',
	'opponent_pawn_can_move_here',
	'opponent_knight_can_move_here',
	'opponent_bishop_can_move_here',
	'opponent_rook_can_move_here',
	'opponent_queen_can_move_here',
	'opponent_king_can_move_here',
	'adjacent_empty_squares',
	'adjacent_friendly_pieces',
	'adjacent_friendly_pawns',
	'adjacent_friendly_knights',
	'adjacent_friendly_bishops',
	'adjacent_friendly_rooks',
	'adjacent_friendly_queens',
	'adjacent_friendly_king',
	'adjacent_opponent_pieces',
	'adjacent_opponent_pawns',
	'adjacent_opponent_knights',
	'adjacent_opponent_bishops',
	'adjacent_opponent_rooks',
	'adjacent_opponent_queens',
	'adjacent_opponent_king',
];

export const CUSTOM_VARIABLE_IDS: EngineTypes.CustomVariableId[] = Array.from(
	{ length: MEMORY_SIZE },
	(_, i) => `custom_${i}` as EngineTypes.CustomVariableId,
);

export const VARIABLE_IDS: EngineTypes.VariableId[] = [
	...STANDARD_VARIABLE_IDS,
	...CUSTOM_VARIABLE_IDS,
];

export const FUNCTION_TOKEN_IDS: EngineTypes.FunctionTokenIds[] = [
	'add',
	'sub',
	'mul',
	'div',
	'sqrt',
	'mod',
	'pow',
	'round',
	'floor',
	'ceil',
	'min',
	'max',
	'abs',
	'eq',
	'neq',
	'gt',
	'gte',
	'lt',
	'lte',
	'binary',
	'and',
	'or',
	'if',
	'write',
];

export const TOKEN_IDS = [...VARIABLE_IDS, ...FUNCTION_TOKEN_IDS];

export const FITNESS_SCORES: Record<string, number> = {
	TIMEOUT: -20,
} as const;
