// Given a string, return a jumbled version of that string where each word is transformed using the following constraints:

// The first and last letters of the words remain in place
// All letters between the first and last letter are sorted alphabetically.
// The input strings will contain no punctuation, and will be entirely lowercase.

// jbelmu("hello world") should return "hello wlord".
// jbelmu("i love jumbled text") should return "i love jbelmud text".
// jbelmu("freecodecamp is my favorite place to learn to code") should return "faccdeeemorp is my faiortve pacle to laern to cdoe".
// jbelmu("the quick brown fox jumps over the lazy dog") should return "the qciuk borwn fox jmpus oevr the lazy dog"
function jblemu(str) {
  function jumbleWord(word) {
    if (word.length <= 2) return word; // nothing to change
    let middle = word.slice(1, -1).split("").sort().join("");
    return word[0] + middle + word[word.length - 1];
  }

  return str.split(" ").map(jumbleWord).join(" ");
}
