<!--
 * @Author: json
 * @Date: 2021-12-25 11:49:44
 * @LastEditTime: 2021-12-26 19:32:58
 * @LastEditors: json
 * @Description: 首页
 * @FilePath: /template-admin/src/views/Home.vue
-->
<template>
  <div class="Home">首页--{{ mainStore.name }}</div>
  <div>
    <div>Hey! {{ data?.name }}</div>
    <ElButton @click="run" type="primary">点击</ElButton>
    <ElButton @click="modifyStatename" type="danger">修改state</ElButton>
  </div>
</template>
<script lang="ts" setup>
import { useMainStore } from '@/store/main'
import { useRequest } from 'vue-request'
const mainStore = useMainStore()
const modifyStatename = () => {
  mainStore.$patch({
    name: '修改后的name'
  })
}

function getUser() {
  return { url: 'https://61273138c2e8920017bc0b3c.mockapi.io/api/userInfo/1' }
}
type UserInfo = {
  id: string
  name: string
  avatar: string
  type: string
  createdAt: string
}
const { data, run } = useRequest<UserInfo>(getUser)
</script>
