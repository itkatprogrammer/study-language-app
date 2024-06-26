import { API_ALL_WORDS } from '../constants/constants';

class POST {
  static async addWord(newWord) {
    try {
      const resp = await fetch('/api/words/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          english: newWord.english,
          transcription: newWord.transcription,
          russian: newWord.russian,
          tags: '',
          tags_json: '[""]',
        }),
      });
      if (!resp.ok) {
        throw new Error('Failed to fetch add words');
      }
      return await resp.json();
    } catch (e) {
      console.error('Error fetching words:', e);
    }
  }
}

export default POST;
