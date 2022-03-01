import { request } from './request';

export function signUpAPI(data) {
    const baseUrl = 'https://foodie.aarusharora.me/api/';
    const url = baseUrl+'signup';
    return request(url, data);
}
