import axios from 'axios'

export default {
    async getArticles({commit}) {
        const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${this.state.query}&origin=*`;
        const response = await axios.get(url);
        
        let articles = [];
        for (let i=0, resultCount = response.data[1].length; i < resultCount; i++ ) {
            articles[i] = {
                title: response.data[1][i],
                snippet: response.data[2][i],
                link: response.data[3][i]
            }
        }

        commit('updateArticles',articles);
    }
}