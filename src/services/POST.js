class POST {
  static async addWord(newWord) {
    try {
      const resp = await fetch(
        'http://itgirlschool.justmakeit.ru/api/words/add',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify({
            english: newWord.english,
            transcription: newWord.transcription,
            russian: newWord.russian,
            tags: '',
            tags_json: '[""]',
          }),
        }
      );
      return await resp.json();
    } catch (e) {
      console.error(e);
      return false;
    }
  }
}

export default POST;

//     setWords([...words, newWord]);
//   } catch (error) {
//     console.error('Error fetching words:', error);
//   }
// };
