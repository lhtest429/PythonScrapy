<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="video">视频采集</el-menu-item>
      <el-menu-item index="comment">评论采集</el-menu-item>
      <el-menu-item index="follower">粉丝关注</el-menu-item>
      <el-menu-item>
        <el-button type="primary" circle :icon="UserFilled" @click="visible=true"></el-button>
      </el-menu-item>
      <el-menu-item>
        <el-popconfirm
          width="220"
          confirm-button-text="OK"
          cancel-button-text="No, Thanks"
          :icon="SwitchButton"
          icon-color="#626AEF"
          title="注销?"
          @confirm="back"
        >
          <template #reference>
            <el-button type="danger" :icon="SwitchButton" circle />
          </template>
        </el-popconfirm>
      </el-menu-item>


    </el-menu>
    <el-dialog v-model="visible" :show-close="false" width="800"  style="height: auto">
      <template #header="{ close, titleId, titleClass }">
        <div class="my-header">
          <h4 :id="titleId" :class="titleClass"></h4>
          <el-button type="danger" @click="close">
            <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
            Close
          </el-button>
        </div>
      </template>
      <xhs-login></xhs-login>
    </el-dialog>
    <el-main id="container">
      <router-view v-slot="{ Component }">
        <!-- v-show="$route.meta.keepAlive"只有当当前路由的meta字段中有keepAlive属性时才显示router-view。这样做是为了灵活控制是否需要缓存当前组件。-->
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </el-main>
  </div>
</template>
<script setup lang="ts">
import router from "../../router";
import { ref } from "vue";
import { SwitchButton, UserFilled } from "@element-plus/icons-vue";
import xhsLogin from './components/xhsLogin.vue'

const activeIndex = ref("video");
const visible = ref(false)
const back = () => {
  router.push("/login");
};
// const setCurrentRoute = () => {
//   activeIndex.value = router.currentRoute.value.path // 通过他就可以监听到当前路由状态并激活当前菜单
// }
// watchEffect(() => {
//   setCurrentRoute()
// })
// onMounted(() => {
//   setCurrentRoute()
// })
</script>
<style scoped lang="less">
.container {
  height: 100vh;
  display: flex;
}

.logout-col {
  text-align: right;
}
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
}
</style>
