class DELETE {
  static async deleteRow(wordRow) {
    try {
      const resp = await fetch(
        `http://itgirlschool.justmakeit.ru/api/words/${wordRow.id}`,
        {
          method: 'DELETE',
        }
      );

      if (!resp.ok) {
        throw new Error('Failled to delete table tow');
      }
    } catch (e) {
      console.error(e);
    }
    return false;
  }
}

export default DELETE;
