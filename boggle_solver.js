/**
 * Given a Boggle board and a dictionary, returns a list of available words in
 * the dictionary present inside of the Boggle board.
 * @param {string[][]} grid - The Boggle game board.
 * @param {string[]} dictionary - The list of available words.
 * @returns {string[]} solutions - Possible solutions to the Boggle board.
 *
 * Name: Brian Paul
 * SID: @02965840
 */

exports.findAllSolutions = function(grid, dictionary) {
  const allSolutions = [];
  let solutions = [];

  if (dictionary == null || grid == null) {
    // Check if the dictionary or grid are empty; if so return the empty array
    return solutions;
  }

  for (let i = 0; i < grid.length; i++) {
    if (grid[i].length != grid.length) {
      // Check if the grid meets the valid NxN dimemsions;
      // if not return an empty array
      return solutions;
    }
  }

  convertToLowerCase(grid, dictionary); // converts all characters in the grid
  // and all words in the dictionary to lower-case
  // for string-matching purposes
  const trie = new Set(dictionary);

  for (let j = 0; j < grid.length; j++) {
    for (let k = 0; k < grid.length; k++) {
      const visited = new Array(grid.length)
          .fill(false)
          .map(() =>
            new Array(grid.length).fill(
                false,
            ),
          ); // Mark all grid spots as non-visited
      const word = [];
      wordFinder(
          word,
          grid,
          trie,
          j,
          k,
          visited,
          allSolutions,
      ); // Call to wordFinder at current location in grid
    }
  }
  solutions = [...new Set(allSolutions)];
  // convert the array allSolutions to a Set, which removes duplicates.
  return solutions;
};

/**
 * Recursive function that iterates through the grid,
 * finding valid words according to the dictionary.
 * @param {char[]} word - The word being formed
 * @param {string[][]} grid - The Boggle game board.
 * @param {Set} trie - Set of dictionary words.
 * @param {int} j - Integer value corresponding to a row
 * on the Boggle game board.
 * @param {int} k - Integer value corresponding to a column
 * on the Boggle game board.
 * @param {boolean[][]} visited - Boolean matrix corresponding to
 * whether a cell has been visited or not.
 * @param {string[]} allSolutions - Array holding all valid words
 * that can be formed with the current board & dictionary.
 * @return {null} N/A
 */
function wordFinder(word, grid, trie, j, k, visited, allSolutions) {
  const adjacents = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
  ]; // Values of adjacent cells, relative to the current cell.

  if (
    j < 0 ||
                    j >= grid.length ||
                    k < 0 ||
                    k >= grid.length ||
                    visited[j][k] == true
  ) {
    // If the cell has already been visited,
    // or the grid location is out-of-bounds.
    return; // return nothing
  }
  word += grid[j][k]; // Add the character(s) of
  // the current grid location to the word array.

  if (isPrefix(trie, word)) {
    visited[j][k] = true; // If the word is a prefix
    // mark the current cell as visited

    if (wordValid(trie, word)) {
      allSolutions.push(word); // Add the word to the solutions array
      // if it is valid
    }

    for (let i = 0; i < 8; i++) {
      // One cell could have up to 8 adjacent cells
      wordFinder(
          word,
          grid,
          trie,
          j + adjacents[i][0],
          k + adjacents[i][1],
          visited,
          allSolutions,
      ); // Recursive call of wordFinder, this time for adjacent cells
    }
  }

  visited[j][k] = false;
}

/**
 * Helper function that checks if a word
 * is a prefix of a current word in the trie structure, otherwise false.
 * @param {Set<string>} trie - Set of words in the dictionary.
 * @param {char[]} word - The word used for prefix comparison.
 * @return {boolean} True if the word is a prefix, false otherwise.
 */
function isPrefix(trie, word) {
  for (const tWord of trie) {
    if (tWord.substr(0, word.length) == word) {
      return true;
    }
  }
  return false;
}
/**
 * Helper function that returns true
 * if the word is in the trie data structure,
 * or false otherwise.
 * @param {Set<string>} trie - Set of words in the dictionary.
 * @param {char[]} word - The word to be checked for validity.
 * @return {boolean} True if the word is in the dictionary
 * and can be formed by the grid, false otherwise.
 */
function wordValid(trie, word) {
  for (const tWord of trie) {
    if (tWord == word && word.length >= 3) {
      // Check if the word is in the trie and is at least 3 letters long.
      return true;
    }
  }
  return false;
}

/**
 * Converts all characters in the grid and dictionary to lower case
 * for character matching purposes.
 * @param {string[][]} grid - The Boggle game board.
 * @param {string[]} dictionary - The list of available words.
 * @return {null} N/A
 */
function convertToLowerCase(grid, dictionary) {
  for (let a = 0; a < grid.length; a++) {
    for (let b = 0; b < grid[a].length; b++) {
      grid[a][b] = grid[a][b].toLowerCase();
    }
  }
  for (let i = 0; i < dictionary.length; i++) {
    dictionary[i] = dictionary[i].toLowerCase();
  }
}

const grid = [
  ['T', 'W', 'Y', 'R'],
  ['E', 'N', 'P', 'H'],
  ['G', 'Z', 'Qu', 'R'],
  ['St', 'N', 'T', 'A'],
];
const dictionary = [
  'art',
  'ego',
  'gent',
  'get',
  'net',
  'new',
  'newt',
  'prat',
  'pry',
  'qua',
  'quart',
  'quartz',
  'rat',
  'tar',
  'tarp',
  'ten',
  'went',
  'wet',
  'arty',
  'egg',
  'not',
  'quar',
];

console.log(exports.findAllSolutions(grid, dictionary));
