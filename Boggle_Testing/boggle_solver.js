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
  let allSolutions = new Array();
  let solutions = [];

  if (dictionary == null || grid == null) { // Check if the dictionary or grid are empty; if so return the empty arrah
    return solutions;
  }

  for (let i = 0; i < grid.length; i++) {
    if (grid[i].length != grid.length) {
      return solutions;
    }
  }

  convertToLowerCase(grid, dictionary);
  let trie = new Set(dictionary);

  for (let j = 0; j < grid.length; j++){
    for (let k = 0; k < grid.length; k++){
      let visited = new Array(grid.length).fill(false).map(() => new Array(grid.length).fill(false)); // Mark all grid spots as non-visited
      let word = [];
      wordFinder(word, grid, trie, j, k, visited, allSolutions); // Recursive call to wordFinder at current location in grid
    }
  }
  solutions = [...new Set(allSolutions)];
  return solutions;
}

/**
 * Recursive function that iterates through the grid, finding valid words according to the dictionary.
 */
function wordFinder(word, grid, trie, j, k, visited, allSolutions){
  const adjacents = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]]; // Stores the value of adjacent cells, relative to the current cell

  if (j < 0 || j >= grid.length || k < 0 || k >= grid.length || visited[j][k] == true){
    return;
  }
  word += grid[j][k];

  if(isPrefix(trie, word)) {
    visited[j][k] = true; // If the word is a prefix, mark the current cell as visited

    if (wordValid(trie, word)) {
      allSolutions.push(word)
  }

  for (let i = 0; i < 8; i++){
    wordFinder(word, grid, trie, j + adjacents[i][0], k + adjacents[i][1], visited, allSolutions);
    }
  }

  visited[j][k] = false;
}

/**
 * Helper function that checks if a word is a prefix of a current word in the trie structure, otherwise false.
 */
function isPrefix(trie, word){
  for (let tWord of trie) {
    if (tWord.substr(0, word.length) == word) {
      return true;
    }
  }
  return false;
}
/**
 * Helper function that returns true if the word is in the trie data structure, or false otherwise.
 */
function wordValid(trie, word) {
  for (let tWord of trie) {
    if (tWord == word && word.length >= 3) {
      return true;
    }
  }
  return false;
  }

/**
 * Helper function that Converts all characters in the grid and dictionary to lower case, for character matching purposes.
 */
function convertToLowerCase(grid, dictionary) {
  for (let a = 0; a < grid.length; a++) {
    for (let b = 0; b < grid[a].length; b++){
        grid[a][b] = grid[a][b].toLowerCase();
    }
  }
  for (let i = 0; i < dictionary.length; i++){
    dictionary[i] = dictionary[i].toLowerCase();
  }
}

var grid =    [['T', 'W', 'Y', 'R'],
              ['E', 'N', 'P', 'H'],
              ['G', 'Z', 'Qu', 'R'],
              ['St', 'N', 'T', 'A']];
var dictionary = ['art', 'ego', 'gent', 'get', 'net', 'new', 'newt', 'prat',
                    'pry', 'qua', 'quart', 'quartz', 'rat', 'tar', 'tarp',
                    'ten', 'went', 'wet', 'arty', 'egg', 'not', 'quar'];

console.log(exports.findAllSolutions(grid, dictionary));