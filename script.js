
// code is still incomplete 
const words = ["the", "of", "and", "a", "to", "in", "is", "you", "that", "it", "he", "was", "for", "on", "are", "as", "with", "his", "they", "I", "at", "be", "this", "have", "from", "or", "one", "had", "by", "word", "but", "not", "what", "all", "were", "we", "when", "your", "can", "said", "there", "use", "an", "each", "which", "she", "do", "how", "their", "if", "will", "up", "other", "about", "out", "many", "then", "them", "these", "so", "some", "her", "would", "make", "like", "him", "into", "time", "has", "look", "two", "more", "write", "go", "see", "number", "no", "way", "could", "people", "my", "than", "first", "water", "been", "call", "who", "oil", "its", "now", "find", "long", "down", "day", "did", "get", "come", "made", "may", "part"];

let text = document.getElementById("text");

const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};

for (let i = 0; i < 100; i++) {
  const random = getRandomWord();
  text.innerText += " " + random;
}

const checkInput = () => {
  let input = document.getElementById("input").value;
  const inputWords = input.split(" ");
  

  for (let i = 0; i < words.length; i++) {
  
    let dataWord = words[i].toLowerCase().trim();
    

    if (dataWord === inputWords) {
      // Words match, move on to the next word
    } else {
      // Handle error (e.g. highlight incorrect word, display error message)

    }
  }

  // Calculate and display user's score based on the number of correctly typed words
  let score = inputWords.filter((word) => words.includes(word)).length;
  document.getElementById("result").innerText = `Your score: ${score}/${words.length}`;
};
