const boggle_solver = require('/home/codio/workspace/Boggle_Testing/boggle_solver.js');

/** Lowercases a string array in-place. (Used for case-insensitive string array
 *  matching).
 * @param {string[]} stringArray - String array to be lowercase.
 */
function lowercaseStringArray(stringArray) {
  for (let i = 0; i < stringArray.length; i++)
    stringArray[i] = stringArray[i].toLowerCase();
}

describe('Boggle Solver tests suite:', () => {
  describe('Normal input', () => {

    test('Test Case 1: (4x4 grid)', () => {
      // Normal input test case 1
      let grid1 =  [['T', 'W', 'Y', 'R'],
                ['E', 'N', 'P', 'H'],
                ['G', 'Z', 'Qu', 'R'],
                ['St', 'N', 'T', 'A']];
      let dictionary1 = ['art', 'ego', 'gent', 'get', 'net', 'new', 'newt', 'prat',
                      'pry', 'qua', 'quart', 'quartz', 'rat', 'tar', 'tarp',
                      'ten', 'went', 'wet', 'arty', 'egg', 'not', 'quar'];

      let expected1 = ['ten', 'wet', 'went', 'net', 'new','newt',
                    'pry', 'prat', 'get', 'gent', 'qua', 'quar',
        'quart', 'quartz', 'rat', 'tar', 'tarp', 'art'];

      let solution1 = boggle_solver.findAllSolutions(grid1, dictionary1)
      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solution1);
      lowercaseStringArray(expected1);
      expect(solution1.sort()).toEqual(expected1.sort());
    });
    
    test('Test Case 2: (4x4 grid)', () => {
      let grid2 =  [['T', 'X', 'I', 'S'],
                ['A', 'T', 'N', 'T'],
                ['T', 'N', 'J', 'V'],
                ['C', 'R', 'E', 'A']];
      let dictionary2 = ['axis', 'ant', 'inner', 'invert', 'six', 'tax', 'titan', 'rent',
                      'tint', 'invent', 'art', 'ball', 'sixer', 'tent', 'tarp',
                      'test', 'went', 'wet', 'arty', 'egg', 'lob', 'quad'];

      let expected2 = ['axis', 'ant', 'inner', 'invert', 'six',
                      'tax', 'titan', 'rent', 'tint', 'invent'];

      let solution2 = boggle_solver.findAllSolutions(grid2, dictionary2);
      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solution2);
      lowercaseStringArray(expected2);
      expect(solution2.sort()).toEqual(expected2.sort());
    });

    test('Test Case 3: (5x5 grid)', () => {
      let grid = [['B', 'O', 'I', 'O', 'S'],
                  ['L', 'R', 'R', 'F', 'N'],
                  ['N', 'U', 'I', 'E', 'I'],
                  ['O', 'H', 'L', 'I', 'N'],
                  ['D', 'E', 'E', 'N', 'T']];

      let dictionary = ['blur', 'born', 'brief', 'feline', 'feint', 'fennel', 
      'inferior', 'info', 'need', 'linen', 'ruler', 'run',
      'eat', 'table', 'fish', 'elite', 'bingo', 'tent',
      'hold', 'rut'];

      let expected = ['blur', 'born', 'brief', 'feline', 'feint', 'fennel', 
      'inferior', 'info', 'need', 'linen', 'ruler', 'run']

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('Test Case 4: (5x5 grid)', () => {
      
      let grid = [['T', 'A', 'E', 'S', 'P'],
                  ['C', 'Y', 'A', 'H', 'G'],
                  ['T', 'O', 'E', 'E', 'M'],
                  ['T', 'R', 'Z', 'L', 'N'],
                  ['C', 'I', 'O', 'A', 'O']];

      let dictionary = ['actor', 'ash', 'cat', 'crease', 'eel', 'gem', 
      'gel', 'heat', 'heroic', 'leash', 'oriole', 'melon',
      'water', 'powder', 'propane', 'fish', 'monk', 'tact', 'money',
      'low', 'meet'];

      let expected = ['actor', 'ash', 'cat', 'crease', 'eel', 'gem', 
      'gel', 'heat', 'heroic', 'leash', 'oriole', 'melon', 'tact'];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('Test Case 5: (3x3 grid)', () => {
      let grid = [['y', 'j', 'e'],
                  ['i', 'i', 's'],
                  ['t', 'd', 't']];

      let dictionary = ['sit', 'tie', 'jest', 'tidiest',
                        'bet', 'test', 'yes', 'did'];

      let expected = ['sit', 'tie', 'jest', 'tidiest'];
      
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
    
  });

  
  describe('Problem contraints', () => {
    // Cases such as Qu
    test('Test Case Qu: ', () => {
      let grid = [['E', 'E', 'S', 'I'],
                  ['P', 'I', 'H', 'A'],
                  ['I', 'R', 'Qu', 'E'],
                  ['K', 'O', 'T', 'J']];
      
      let dictionary = ['equip', 'ash', 'ease','heir',
                        'hip', 'jet', 'pique', 'quote',
                        'wipe', 'goat', 'lamb', 'foot',
                        'coffee', 'jets', 'ripple', 'kite'];
      
      let expected = ['equip', 'ash','ease','heir', 
      'hip', 'jet', 'pique', 'quote'];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
 
    // St test case
    test('Test Case St: ', () => {
      let grid = [['H', 'I', 'I', 'X'],
                  ['T', 'I', 'S', 'A'],
                  ['O', 'R', 'B', 'V'],
                  ['St', 'E', 'O', 'D']];
      
      let dictionary = ['strobe', 'thirst', 'abort', 'birth',
                        'savor', 'store', 'rest', 'trio',
                        'bad', 'cat', 'project', 'shirt',
                        'tip', 'bank', 'rabbit', 'hat'];

      let expected = ['strobe', 'thirst', 'abort', 'birth', 'savor', 'store', 'rest', 'trio'];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
  });

  
  describe('Input edge cases', () => {

    // Example Test using Jess
    test('Dictionary is empty', () => {
      // (Edge case) Since there are no possible solutiona, it should return an
      // empty list.
      let grid = [['A', 'B', 'C', 'D'],
                    ['E', 'F', 'G', 'H'],
                    ['I', 'J', 'K', 'L'],
                    ['M', 'N', 'O', 'P']];
      let dictionary = [];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('Invalid Grid dimensions', () => {
      // Edge case - invalid grid dimensions (3x4), should return an empty list.
      let grid = [['L', 'M', 'P', 'D'],
                  ['A', 'W', 'L', 'E'],
                  ['R', 'B', 'L', 'T']];

      let dictionary = ['raw', 'tell', 'lamp', 'debt'];

      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test('Grid is empty', () => {
      // Edge case - Empty grid, should return an empty list,
      // since there no possible tiles / characters to form words with.

      let grid = [];

      let dictionary = ['feelings', 'today', 'put', 'wrap', 'odd'];

      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
  });
});