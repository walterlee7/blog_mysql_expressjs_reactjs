import * as baseService from './base';
import { basename } from 'path';

function all() {
    return baseService.get('/api/blogs');
}

function one(id) {
    return baseService.get(`/api/blogs/${id}`);
}

function insert(data) {
    return baseService.post('/api/blogs', data);
}

function update(id, data) {
    return baseService.put(`/api/blogs/${id}`, data);
}

function destroy(id) {
    return baseService.destroy(`/api/blogs/${id}`);
}

function destroyAll() {
    return baseService.destroy('/api/blogs');
}

export { all, one, insert, update, destroy, destroyAll };