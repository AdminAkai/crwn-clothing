import { takeLatest, put, all, call } from 'redux-saga/effects'

import { 
  getCurrentUser, 
  createUserDocumentFromAuth,
  signInWithGooglePopup, 
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword
} from '../../../utils/firebase'

import { 
  checkUserSession, 
  signinFailure, 
  signinSuccess, 
  googleSigninStart,
  emailSigninStart,
  signupStart,
  signupSuccess,
  signupFailure
} from '.'

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth, 
      userAuth
    )
    console.log("---- snapshot ----")
    console.log(userSnapshot.data())
    const createdAt = new Date(userSnapshot.data().createdAt.seconds).toString()
    const currentUser = {
      id: userSnapshot.id,
      displayName: userSnapshot.data().displayName,
      email: userSnapshot.data().email,
      createdAt
    }
    yield put(signinSuccess(currentUser))
  } catch(err) {
    yield put(signinFailure(err))
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword, 
      email, 
      password
    )
    yield call(getSnapshotFromUserAuth, user)
  } catch(err) {
    yield put(signinFailure(err))
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup)
    yield call(getSnapshotFromUserAuth, user)
  } catch(err) {
    yield put(signinFailure(err))
  } 
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser)
    if (!userAuth) return
    yield call(getSnapshotFromUserAuth, userAuth)
  } catch(err) {
    yield put(signinFailure(err))
  }
}

export function* signUp({ payload: { email, password, displayName }}) {
  try {
    const { user } = yield call(createAuthUserWithEmailAndPassword, email, password)
    
    const newUser = {
      ...user,
      displayName
    }

    yield put(signupSuccess(newUser))
  } catch(err) {
    yield put(signupFailure(err))
  }
}

export function* onSignInAfterSignUp({ payload }) {
  yield call(getSnapshotFromUserAuth, payload)
}

export function* onGoogleSigninStart() {
  yield takeLatest(googleSigninStart().type, signInWithGoogle)
}

export function* onCheckUserSession() {
  yield takeLatest(checkUserSession().type, isUserAuthenticated)
}

export function* onEmailSignInStart() {
  yield takeLatest(emailSigninStart().type, signInWithEmail)
}

export function* onSignupStart() {
  yield  takeLatest(signupStart().type, signUp)
}

export function* onSignupSuccess() {
  yield takeLatest(signupSuccess().type, onSignInAfterSignUp)
}

export default function* userSagas() {
  yield all([
    call(onCheckUserSession), 
    call(onGoogleSigninStart), 
    call(onEmailSignInStart),
    call(onSignupStart),
    call(onSignupSuccess)
  ])
}