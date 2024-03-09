import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum'
import { Storage } from '@/utils/Storage'
import Api from '@/apis'
import { resetRouter } from '@/router'

export const useUserStore = defineStore('user', () => {
  const token = ref(Storage.get(ACCESS_TOKEN_KEY, null))
  const name = ref('admin')

  /* 清空token及用户信息 */
  const resetToken = () => {
    token.value = name.value = ''
    Storage.clear()
  }
  // 登录成功保存token
  const setToken = (_token: string) => {
    token.value = _token
    Storage.set(ACCESS_TOKEN_KEY, token.value)
  }

  // 登录
  const login  = async (params: API.LoginDto) => {
    try {
      const data = await Api.auth.authLogin(params)
      setToken(data.token)
      return data
    } catch (error) {
      return Promise.reject(error)
    }
  }

  // 登出
  const logout = async () => {
    try {
      await Api.auth.authLogout()
      resetToken()
      resetRouter()
      return true
    } catch (error) {
      return Promise.reject(error)
    }
  }

  return {
    token,
    name,
    login,
    logout,
    resetToken
  }
})
