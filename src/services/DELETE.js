import { API_ALL_WORDS } from '../constants/constants';

class DELETE {
  static async removeWord(wordId) {
    try {
      const resp = await fetch(`${API_ALL_WORDS}/${wordId}/delete`, {
        method: 'POST',
      });

      if (!resp.ok) {
        throw new Error('Failed to delete word');
      }

      return await resp.json();
    } catch (e) {
      console.error('Error deleting word:', e);
    }
  }
}

export default DELETE;
