const { expect } = require('@jest/globals');
const functions = require('./functions');

describe('checkMainDiagonal', () => {
    test('Xwin', () => {
        const board = [['X', 'X', 'X'], ['O', 'X', '.'], ['.', '.', 'X']];
        const player = 'X';
        const result = functions.checkMainDiagonal(board, player);
        expect(result).toBe(true);
    })    
});

describe('checkMainDiagonal', () => {
    test('XnotWin', () => {
        const board = [['.', 'X', 'X'], ['O', 'X', '.'], ['.', '.', 'X']];
        const player = 'X';
        const result = functions.checkMainDiagonal(board, player);
        expect(result).toBe(false);
    })    
});

