import { API_ALL_WORDS } from '../constants/constants';

class GET {
  static async getWords() {
    try {
      const resp = await fetch(API_ALL_WORDS);
      if (!resp.ok) {
        throw new Error('Failed to fetch words');
      }
      return await resp.json();
    } catch (e) {
      console.error('Error fetching words:', e);
    }
  }
}

export default GET;
