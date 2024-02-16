import * as EngineTypes from './types';

export const MAX_ALGORITHM_DURATION_MS = 3000;

export const MAX_TOKEN_DEPTH_PER_ITERATION = 3;
export const MAX_TOKEN_DYNAMIC_ARGS_LENGTH = 8;

export const NUMBER_RANGE_MIN = -99;
export const NUMBER_RANGE_MAX = 99;

export const STATIC_MEMORY_SIZE = 36;
export const DYNAMIC_MEMORY_SIZE = 24;
export const MEMORY_SIZE = STATIC_MEMORY_SIZE + DYNAMIC_MEMORY_SIZE;

export const CUSTOM_VARIABLE_MIN = NUMBER_RANGE_MIN;
export const CUSTOM_VARIABLE_MAX = NUMBER_RANGE_MAX;

export const BOARD_ALGORITHM_VARIABLE_IDS: Partial<EngineTypes.StandardVariableIds>[] = [
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
	'is_draw',
	'castled_king_side',
	'castled_queen_side',
	'was_captured',
	'pawn_was_captured',
	'knight_was_captured',
	'bishop_was_captured',
	'rook_was_captured',
	'queen_was_captured',
	'possible_moves',
	'can_capture',
	'can_capture_pawn',
	'can_capture_knight',
	'can_capture_bishop',
	'can_capture_rook',
	'can_capture_queen',
	'can_move_here',
	'pawn_can_move_here',
	'knight_can_move_here',
	'bishop_can_move_here',
	'rook_can_move_here',
	'queen_can_move_here',
	'king_can_move_here',
];

export const MOVEMENT_ALGORITHM: Partial<EngineTypes.StandardVariableIds>[] = [
	'is_in_check',
	'is_in_checkmate',
	'is_draw',
	'depth',
	'first_iteration_pre_move_total',
	'first_iteration_post_move_total',
	'prev_iteration_pre_move_total',
	'prev_iteration_post_move_total',
	'this_iteration_pre_move_total',
	'this_iteration_post_move_total',
];

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
	'is_draw',
	'castled_king_side',
	'castled_queen_side',
	'was_captured',
	'pawn_was_captured',
	'knight_was_captured',
	'bishop_was_captured',
	'rook_was_captured',
	'queen_was_captured',
	'possible_moves',
	'can_capture',
	'can_capture_pawn',
	'can_capture_knight',
	'can_capture_bishop',
	'can_capture_rook',
	'can_capture_queen',
	'can_move_here',
	'pawn_can_move_here',
	'knight_can_move_here',
	'bishop_can_move_here',
	'rook_can_move_here',
	'queen_can_move_here',
	'king_can_move_here',
	'depth',
	'first_iteration_pre_move_total',
	'first_iteration_post_move_total',
	'prev_iteration_pre_move_total',
	'prev_iteration_post_move_total',
	'this_iteration_pre_move_total',
	'this_iteration_post_move_total',
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
