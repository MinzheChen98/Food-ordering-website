import { request } from './request';

export function signUpAPI(data) {
    const url = 'signup';
    return request(url, data);
}
