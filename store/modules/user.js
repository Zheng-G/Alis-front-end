import * as types from '../mutation-types'

const namespaced = true

const state = () => ({
  loggedIn: false,
  showSignUpModal: false,
  showSignUpAuthFlowModal: false,
  showLoginModal: false,
  sentMail: false,
  signUpModal: {
    formData: {
      userId: '',
      email: '',
      password: ''
    },
    formError: {
      userId: false,
      email: false,
      password: false
    }
  },
  signUpAuthFlowModal: {
    isLoginModal: false,
    isInputPhoneNumberModal: false,
    isInputAuthCodeModal: false,
    isCompletedPhoneNumberAuthModal: false,
    isProfileSettingsModal: false,
    login: {
      formData: {
        userIdOrEmail: '',
        password: ''
      },
      formError: {
        userIdOrEmail: false,
        password: false
      }
    },
    inputPhoneNumber: {
      formData: {
        phoneNumber: ''
      },
      formError: {
        phoneNumber: false
      }
    },
    inputAuthCode: {
      formData: {
        authCode: ''
      },
      formError: {
        authCode: false
      }
    },
    profileSettings: {
      formData: {
        userDisplayName: '',
        selfIntroduction: ''
      },
      formError: {
        userDisplayName: false,
        selfIntroduction: false
      }
    }
  },
  loginModal: {
    formData: {
      userIdOrEmail: '',
      password: ''
    },
    formError: {
      userIdOrEmail: false,
      password: false
    }
  },
  showReportModal: false,
  alertText: '',
  showAlert: false
})

const getters = {
  loggedIn: (state) => state.loggedIn,
  showSignUpModal: (state) => state.showSignUpModal,
  sentMail: (state) => state.sentMail,
  signUpModal: (state) => state.signUpModal,
  showSignUpAuthFlowModal: (state) => state.showSignUpAuthFlowModal,
  signUpAuthFlowModal: (state) => state.signUpAuthFlowModal,
  showLoginModal: (state) => state.showLoginModal,
  loginModal: (state) => state.loginModal,
  showReportModal: (state) => state.showReportModal,
  alertText: (state) => state.alertText,
  showAlert: (state) => state.showAlert
}

const actions = {
  login({ commit }) {
    commit(types.LOGIN)
  },
  setSignUpModal({ commit }, { showSignUpModal }) {
    commit(types.SET_SIGN_UP_MODAL, { showSignUpModal })
  },
  setSentMail({ commit }, { sentMail }) {
    commit(types.SET_SENT_MAIL, { sentMail })
  },
  setSignUpUserId({ commit }, { userId }) {
    commit(types.SET_SIGN_UP_USER_ID, { userId })
  },
  setSignUpEmail({ commit }, { email }) {
    commit(types.SET_SIGN_UP_EMAIL, { email })
  },
  setSignUpPassword({ commit }, { password }) {
    commit(types.SET_SIGN_UP_PASSWORD, { password })
  },
  showSignUpError({ commit }, { type }) {
    commit(types.SHOW_SIGN_UP_ERROR, { type })
  },
  hideSignUpError({ commit }, { type }) {
    commit(types.HIDE_SIGN_UP_ERROR, { type })
  },
  hideSignUpErrors({ commit }) {
    commit(types.HIDE_SIGN_UP_ERRORS)
  },
  setSignUpAuthFlowModal({ commit }, { showSignUpAuthFlowModal }) {
    commit(types.SET_SIGN_UP_AUTH_FLOW_MODAL, { showSignUpAuthFlowModal })
  },
  setSignUpAuthFlowLoginModal({ commit }, { isSignUpAuthFlowLoginModal }) {
    commit(types.SET_SIGN_UP_AUTH_FLOW_LOGIN_MODAL, { isSignUpAuthFlowLoginModal })
  },
  setSignUpAuthFlowLoginUserIdOrEmail({ commit }, { userIdOrEmail }) {
    commit(types.SET_SIGN_UP_AUTH_FLOW_LOGIN_USER_ID_OR_EMAIL, { userIdOrEmail })
  },
  setSignUpAuthFlowLoginPassword({ commit }, { password }) {
    commit(types.SET_SIGN_UP_AUTH_FLOW_LOGIN_PASSWORD, { password })
  },
  showSignUpAuthFlowLoginError({ commit }, { type }) {
    commit(types.SHOW_SIGN_UP_AUTH_FLOW_LOGIN_ERROR, { type })
  },
  hideSignUpAuthFlowLoginError({ commit }, { type }) {
    commit(types.HIDE_SIGN_UP_AUTH_FLOW_LOGIN_ERROR, { type })
  },
  setSignUpAuthFlowInputPhoneNumberModal({ commit }, { isSignUpAuthFlowInputPhoneNumberModal }) {
    commit(types.SET_SIGN_UP_AUTH_FLOW_INPUT_PHONE_NUMBER_MODAL, { isSignUpAuthFlowInputPhoneNumberModal })
  },
  setSignUpAuthFlowInputPhoneNumberPhoneNumber({ commit }, { phoneNumber }) {
    commit(types.SET_SIGN_UP_AUTH_FLOW_INPUT_PHONE_NUMBER_PHONE_NUMBER, { phoneNumber })
  },
  showSignUpAuthFlowInputPhoneNumberError({ commit }, { type }) {
    commit(types.SHOW_SIGN_UP_AUTH_FLOW_INPUT_PHONE_NUMBER_ERROR, { type })
  },
  hideSignUpAuthFlowInputPhoneNumberError({ commit }, { type }) {
    commit(types.HIDE_SIGN_UP_AUTH_FLOW_INPUT_PHONE_NUMBER_ERROR, { type })
  },
  setSignUpAuthFlowInputAuthCodeModal({ commit }, { isSignUpAuthFlowInputAuthCodeModal }) {
    commit(types.SET_SIGN_UP_AUTH_FLOW_INPUT_AUTH_CODE_MODAL, { isSignUpAuthFlowInputAuthCodeModal })
  },
  setSignUpAuthFlowInputAuthCodeAuthCode({ commit }, { authCode }) {
    commit(types.SET_SIGN_UP_AUTH_FLOW_INPUT_AUTH_CODE_AUTH_CODE, { authCode })
  },
  showSignUpAuthFlowInputAuthCodeError({ commit }, { type }) {
    commit(types.SHOW_SIGN_UP_AUTH_FLOW_INPUT_AUTH_CODE_ERROR, { type })
  },
  hideSignUpAuthFlowInputAuthCodeError({ commit }, { type }) {
    commit(types.HIDE_SIGN_UP_AUTH_FLOW_INPUT_AUTH_CODE_ERROR, { type })
  },
  setSignUpAuthFlowCompletedPhoneNumberAuthModal({ commit }, { isSignUpAuthFlowCompletedPhoneNumberAuthModal }) {
    commit(types.SET_SIGN_UP_AUTH_FLOW_COMPLETED_PHONE_NUMBER_AUTH_MODAL, { isSignUpAuthFlowCompletedPhoneNumberAuthModal })
  },
  setLoginModal({ commit }, { showLoginModal }) {
    commit(types.SET_LOGIN_MODAL, { showLoginModal })
  },
  setLoginUserIdOrEmail({ commit }, { userIdOrEmail }) {
    commit(types.SET_LOGIN_USER_ID_OR_EMAIL, { userIdOrEmail })
  },
  setLoginPassword({ commit }, { password }) {
    commit(types.SET_LOGIN_PASSWORD, { password })
  },
  showLoginError({ commit }, { type }) {
    commit(types.SHOW_LOGIN_ERROR, { type })
  },
  hideLoginError({ commit }, { type }) {
    commit(types.HIDE_LOGIN_ERROR, { type })
  },
  hideLoginErrors({ commit }) {
    commit(types.HIDE_LOGIN_ERRORS)
  },
  setSignUpAuthFlowProfileSettingsModal({ commit }, { isSignUpAuthFlowProfileSettingsModal }) {
    commit(types.SET_SIGN_UP_AUTH_FLOW_PROFILE_SETTINGS_MODAL, { isSignUpAuthFlowProfileSettingsModal })
  },
  setSignUpAuthFlowProfileSettingsUserDisplayName({ commit }, { userDisplayName }) {
    commit(types.SET_SIGN_UP_AUTH_FLOW_PROFILE_SETTINGS_USER_DISPLAY_NAME, { userDisplayName })
  },
  setSignUpAuthFlowProfileSettingsSelfIntroduction({ commit }, { selfIntroduction }) {
    commit(types.SET_SIGN_UP_AUTH_FLOW_PROFILE_SETTINGS_SELF_INDRODUCTION, { selfIntroduction })
  },
  showSignUpAuthFlowProfileSettingsError({ commit }, { type }) {
    commit(types.SHOW_SIGN_UP_AUTH_FLOW_PROFILE_SETTINGS_ERROR, { type })
  },
  hideSignUpAuthFlowProfileSettingsError({ commit }, { type }) {
    commit(types.HIDE_SIGN_UP_AUTH_FLOW_PROFILE_SETTINGS_ERROR, { type })
  },
  setReportModal({ commit }, { showReportModal }) {
    commit(types.SET_REPORT_MODAL, { showReportModal })
  },
  setAlertText({ commit }, { alertText }) {
    commit(types.SET_ALERT_TEXT, { alertText })
  },
  setAlert({ commit }, { showAlert }) {
    commit(types.SET_ALERT, { showAlert })
  }
}

const mutations = {
  [types.LOGIN](state) {
    state.loggedIn = true
  },
  [types.SET_SIGN_UP_MODAL](state, { showSignUpModal }) {
    state.showSignUpModal = showSignUpModal
  },
  [types.SET_SENT_MAIL](state, { sentMail }) {
    state.sentMail = sentMail
  },
  [types.SET_SIGN_UP_USER_ID](state, { userId }) {
    state.signUpModal.formData.userId = userId
  },
  [types.SET_SIGN_UP_EMAIL](state, { email }) {
    state.signUpModal.formData.email = email
  },
  [types.SET_SIGN_UP_PASSWORD](state, { password }) {
    state.signUpModal.formData.password = password
  },
  [types.SHOW_SIGN_UP_ERROR](state, { type }) {
    state.signUpModal.formError[type] = true
  },
  [types.HIDE_SIGN_UP_ERROR](state, { type }) {
    state.signUpModal.formError[type] = false
  },
  [types.HIDE_SIGN_UP_ERRORS]({ signUpModal: { formError } }) {
    Object.keys(formError).forEach(key => {
      formError[key] = false
    })
  },
  [types.SET_SIGN_UP_AUTH_FLOW_MODAL](state, { showSignUpAuthFlowModal }) {
    state.showSignUpAuthFlowModal = showSignUpAuthFlowModal
  },
  [types.SET_SIGN_UP_AUTH_FLOW_LOGIN_MODAL](state, { isSignUpAuthFlowLoginModal }) {
    state.signUpAuthFlowModal.isLoginModal = isSignUpAuthFlowLoginModal
  },
  [types.SET_SIGN_UP_AUTH_FLOW_LOGIN_USER_ID_OR_EMAIL](state, { userIdOrEmail }) {
    state.signUpAuthFlowModal.login.formData.userIdOrEmail = userIdOrEmail
  },
  [types.SET_SIGN_UP_AUTH_FLOW_LOGIN_PASSWORD](state, { password }) {
    state.signUpAuthFlowModal.login.formData.password = password
  },
  [types.SHOW_SIGN_UP_AUTH_FLOW_LOGIN_ERROR](state, { type }) {
    state.signUpAuthFlowModal.login.formError[type] = true
  },
  [types.HIDE_SIGN_UP_AUTH_FLOW_LOGIN_ERROR](state, { type }) {
    state.signUpAuthFlowModal.login.formError[type] = false
  },
  [types.SET_SIGN_UP_AUTH_FLOW_INPUT_PHONE_NUMBER_MODAL](state, { isSignUpAuthFlowInputPhoneNumberModal }) {
    state.signUpAuthFlowModal.isInputPhoneNumberModal = isSignUpAuthFlowInputPhoneNumberModal
  },
  [types.SET_SIGN_UP_AUTH_FLOW_INPUT_PHONE_NUMBER_PHONE_NUMBER](state, { phoneNumber }) {
    state.signUpAuthFlowModal.inputPhoneNumber.formData.phoneNumber = phoneNumber
  },
  [types.SHOW_SIGN_UP_AUTH_FLOW_INPUT_PHONE_NUMBER_ERROR](state, { type }) {
    state.signUpAuthFlowModal.inputPhoneNumber.formError[type] = true
  },
  [types.HIDE_SIGN_UP_AUTH_FLOW_INPUT_PHONE_NUMBER_ERROR](state, { type }) {
    state.signUpAuthFlowModal.inputPhoneNumber.formError[type] = false
  },
  [types.SET_SIGN_UP_AUTH_FLOW_INPUT_AUTH_CODE_MODAL](state, { isSignUpAuthFlowInputAuthCodeModal }) {
    state.signUpAuthFlowModal.isInputAuthCodeModal = isSignUpAuthFlowInputAuthCodeModal
  },
  [types.SET_SIGN_UP_AUTH_FLOW_INPUT_AUTH_CODE_AUTH_CODE](state, { authCode }) {
    state.signUpAuthFlowModal.inputAuthCode.formData.authCode = authCode
  },
  [types.SHOW_SIGN_UP_AUTH_FLOW_INPUT_AUTH_CODE_ERROR](state, { type }) {
    state.signUpAuthFlowModal.inputAuthCode.formError[type] = true
  },
  [types.HIDE_SIGN_UP_AUTH_FLOW_INPUT_AUTH_CODE_ERROR](state, { type }) {
    state.signUpAuthFlowModal.inputAuthCode.formError[type] = false
  },
  [types.SET_SIGN_UP_AUTH_FLOW_COMPLETED_PHONE_NUMBER_AUTH_MODAL](state, { isSignUpAuthFlowCompletedPhoneNumberAuthModal }) {
    state.signUpAuthFlowModal.isCompletedPhoneNumberAuthModal = isSignUpAuthFlowCompletedPhoneNumberAuthModal
  },
  [types.SET_LOGIN_MODAL](state, { showLoginModal }) {
    state.showLoginModal = showLoginModal
  },
  [types.SET_LOGIN_USER_ID_OR_EMAIL](state, { userIdOrEmail }) {
    state.loginModal.formData.userIdOrEmail = userIdOrEmail
  },
  [types.SET_LOGIN_PASSWORD](state, { password }) {
    state.loginModal.formData.password = password
  },
  [types.SHOW_LOGIN_ERROR](state, { type }) {
    state.loginModal.formError[type] = true
  },
  [types.HIDE_LOGIN_ERROR](state, { type }) {
    state.loginModal.formError[type] = false
  },
  [types.HIDE_LOGIN_ERRORS]({ loginModal: { formError } }) {
    Object.keys(formError).forEach(key => {
      formError[key] = false
    })
  },
  [types.SET_SIGN_UP_AUTH_FLOW_PROFILE_SETTINGS_MODAL](state, { isSignUpAuthFlowProfileSettingsModal }) {
    state.signUpAuthFlowModal.isProfileSettingsModal = isSignUpAuthFlowProfileSettingsModal
  },
  [types.SET_SIGN_UP_AUTH_FLOW_PROFILE_SETTINGS_USER_DISPLAY_NAME](state, { userDisplayName }) {
    state.signUpAuthFlowModal.profileSettings.formData.userDisplayName = userDisplayName
  },
  [types.SET_SIGN_UP_AUTH_FLOW_PROFILE_SETTINGS_SELF_INDRODUCTION](state, { selfIntroduction }) {
    state.signUpAuthFlowModal.profileSettings.formData.selfIntroduction = selfIntroduction
  },
  [types.SHOW_SIGN_UP_AUTH_FLOW_PROFILE_SETTINGS_ERROR](state, { type }) {
    state.signUpAuthFlowModal.profileSettings.formError[type] = true
  },
  [types.HIDE_SIGN_UP_AUTH_FLOW_PROFILE_SETTINGS_ERROR](state, { type }) {
    state.signUpAuthFlowModal.profileSettings.formError[type] = false
  },
  [types.SET_REPORT_MODAL](state, { showReportModal }) {
    state.showReportModal = showReportModal
  },
  [types.SET_ALERT_TEXT](state, { alertText }) {
    state.alertText = alertText
  },
  [types.SET_ALERT](state, { showAlert }) {
    state.showAlert = showAlert
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
