/*
 * @Author: json
 * @Date: 2021-12-26 19:01:47
 * @LastEditTime: 2021-12-26 19:05:48
 * @LastEditors: json
 * @Description:状态管理
 * @FilePath: /template-admin/src/store/main.ts
 */
import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'mian',
  state: () => ({
    name: '超级管理员'
  })
})
