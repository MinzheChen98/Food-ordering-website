import { request } from '../../client/request';

export function signUpAPI(params) {
    url = 'user/login'
    return request(url, params);
}