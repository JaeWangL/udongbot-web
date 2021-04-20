import { all } from 'redux-saga/effects';
import { userSagas } from './user';

function* rootSagas(): Generator<any> {
  return yield all([userSagas]);
}

export default rootSagas;
