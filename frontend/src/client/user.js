import { request } from './request';

export function signUpAPI(data) {
    const url = 'signup';
    return request(url, data);
}

export function loginAPI(data) {
    const url = 'login';
    return request(url, data);
}