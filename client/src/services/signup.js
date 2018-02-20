import * as baseService from './base';
import { basename } from 'path';

function insert(data) {
    return baseService.post('/api/signup', data);
}

export { insert };