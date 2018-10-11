import { ANIM_SWITCH } from '../mutation-types'
const state = {
  animSwitch: 'left-out'
}

const getters = {
  animSwitch: state => state.animSwitch
}

const mutations = {
  [ANIM_SWITCH] (state, { animtype }) {
    state.animSwitch = (animtype === 'left' ? 'left-out' : 'right-out')
  }
}

const actions = {
  animSwitch ({ commit }, option) {
    commit(ANIM_SWITCH, option)
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
