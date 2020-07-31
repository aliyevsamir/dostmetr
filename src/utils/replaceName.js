import { sprintf } from 'sprintf-js';

export default (question, name) => sprintf(question, { name });
