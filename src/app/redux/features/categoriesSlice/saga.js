import { takeLatest, all, call, put } from 'redux-saga/effects'

import { getCategoriesAndDocuments } from '../../../utils/firebase'

import { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed } from './index'

function* fetchCategoriesAsync() {
  try {
    const payload = yield call(getCategoriesAndDocuments)
    
    yield put(fetchCategoriesSuccess(payload))
  } catch(err) {
    yield put(fetchCategoriesFailed(err.message))
  }
}

function* onFetchCategories() {
  yield takeLatest(fetchCategoriesStart().type, fetchCategoriesAsync)  
}

function* categoriesSaga() {
  yield all([call(onFetchCategories)])
}

export default categoriesSaga