
import {put, call, all, takeLatest} from 'redux-saga/effects';
import {getAirline} from './../services/sample';


function* actionWatcher(){
    yield takeLatest('GET_AIRLINE_DATA', getDataHandler);

}

function* getDataHandler(){
    const response = yield call(getAirline);
    yield put({type:'SET_AIRLINE', json:response})

}

export const rootSaga = function* rootSaga(){
    yield all([actionWatcher()]);
}

