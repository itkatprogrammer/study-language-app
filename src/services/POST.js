class POST {
    static async addWord(newWord) {
        try {
            const resp = await fetch('http://itgirlschool.justmakeit.ru/api/words/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newWord)
            });
            return await resp.json();
        } catch (e) {
            console.error(e);
            return false;
        }
    }
}

export default POST;