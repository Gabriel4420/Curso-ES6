import axios from 'axios';

class Api {
    static async getUserInfo(username){
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);

            console.log(response);
        } catch (error) {
            console.error('Houve um erro durante a requisição da API, tente novamente mais tarde...');
        }
    }
}

module.exports = Api;