import { showAlert } from './actions';
import { CREATE_POST } from './types';

const forbidden = ['fuck', 'НАХУЙ', 'php', 'spam'];

export function forbiddenWordsMiddleware({ dispatch }) {
    //Обработчик названия постов
    return function (next) {
        return function (action) {
            if (action.type === CREATE_POST) {
                const found = forbidden.filter(w =>
                    action.payload.title.includes(w)
                );
                if (found.length) {
                    return dispatch(showAlert('САМ ПОШЕЛ НАХУЙ!'));
                }
            }
            return next(action);
        };
    };
}
