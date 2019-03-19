// 包含n个间接更新状态数据的方法对象
import {
  reqAddress,
  reqCategorys,
  reqShops
} from '../api'

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'

export default {
  // 获取地址
  async getAddress ({commit, state}) {
    const {longitude, latitude} = state
    // 1. 发送ajax请求
    const result = await reqAddress(longitude, latitude)
    // 2. 根据结果提交mutation
    if(result.code===0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  // 获取分类列表
  async getCategorys ({commit, state}) {
    // 1. 发送ajax请求
    const result = await reqCategorys()
    // 2. 根据结果提交mutation
    if(result.code===0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, categorys)
    }
  },

  // 获取商家列表
  async getShops({commit, state}) {
    const {longitude, latitude} = state
    // 1. 发送ajax请求
    const result = await reqShops({longitude, latitude})
    console.log(result);
    // 2. 根据结果提交mutation
    if(result.code===0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, shops)
    }
  }
}
