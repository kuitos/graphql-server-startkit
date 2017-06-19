/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2017-06-12
 */

import http from '../../utils/http';
import qs from 'querystring';

export async function getUser(userId) {

	const user = await http.get(`http://127.0.0.1:8080/users/${userId}`).then(res => res.data);
	return user;
}

export async function getUsers(queryParams, pageNum, pageSize) {

	const params = qs.stringify({ ...queryParams, pageNum, pageSize });
	const users = await http.get(`http://127.0.0.1:8080/users?${params}`).then(res => res.data);
	return users;
}

export async function getUserMixNick(userId) {
	const nick = await http.get(`http://127.0.0.1:8080/taobao/${userId}/nick/`).then(res => res.data);
	return nick;
}
