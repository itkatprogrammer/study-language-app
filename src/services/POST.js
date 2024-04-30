import { API_ALL_WORDS } from '../constants/constants';

class POST {
  static async addWord(newWord) {
    try {
      const resp = await fetch(`${API_ALL_WORDS}/add`, {
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
