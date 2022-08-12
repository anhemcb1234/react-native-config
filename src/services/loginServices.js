import {Axios} from './Axios';

function login(payload){
    return Axios.post('login',payload);
}
function test() {
    return Axios.get('?q=tesla&from=2022-07-11&sortBy=publishedAt&apiKey=1f5210480a3d48d487a6e90bd780eadc');
}
export const loginServices = {
    login,
    test
};