import { API_ALL_WORDS } from '../constants/constants';

class PUT {
  static async editWord(id, updatedWord) {
    const body = {
      english: updatedWord.english,
      transcription: updatedWord.transcription,
      russian: updatedWord.russian,
      tags: '',
      tags_json: '[""]',
    };

    try {
      const resp = await fetch(`${API_ALL_WORDS}/${id}/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(body),
      });

      if (!resp.ok) {
        throw new Error('Failed to update word');
      }

      return await resp.json();
    } catch (e) {
      console.error('Error updating word:', e);
    }
  }
}

export default PUT;
