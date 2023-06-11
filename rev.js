const reverseWordsInSentence = (sentence) => {
    const words = sentence.split(' ');
    const reversedWords = words.map((word) => {
      return word.split('').reverse().join('');
    });
    return reversedWords.join(' ');
  };
  
  const sentence = 'Hello, world! Have a nice day.';
  const reversedSentence = reverseWordsInSentence(sentence);
  console.log(`Предложение с обратно перевернутыми словами: ${reversedSentence}`);
  