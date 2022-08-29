import { takeLatest, all, call, put } from 'redux-saga/effects'

import { getCategoriesAndDocuments } from '../../../utils/firebase'

function* fetchCategoriesAsync() {
  try {
    const payload = yield call(getCategoriesAndDocuments)
    
    yield put({ type: 'categories/fetchCategoriesSuccess', payload })
  } catch(err) {
    yield put({ type: 'categories/fetchCategoriesFailed', payload: err.message })
  }
}

function* onFetchCategories() {
  yield takeLatest('categories/fetchCategoriesStart', fetchCategoriesAsync)  
}

function* categoriesSaga() {
  yield all([call(onFetchCategories)])
}

export default categoriesSaga