function stringChop(str, size) {
  // Check if the input string is null or empty
  if (str === null || str === "") {
    return [];
  }

  // Initialize an empty array to store chunks
  const chunks = [];

  // Loop through the input string with the specified chunk size
  for (let i = 0; i < str.length; i += size) {
    // Get a chunk of the input string and push it to the array
    chunks.push(str.slice(i, i + size));
  }

  // Return the array of chunks
  return chunks;
}