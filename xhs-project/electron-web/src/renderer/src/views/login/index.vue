<template>
  <div class="login-container">
    <div class="background-animation"></div>
    <h1 class="login-title">Login</h1>
    <el-form :rules="rules" :model="form" label-width="80px" class="login-form">
      <el-form-item label="Username:" prop="username">
        <el-input v-model="form.username" placeholder="Enter your username"></el-input>
      </el-form-item>
      <el-form-item label="Password:" prop="password">
        <el-input v-model="form.password" type="password" placeholder="Enter your password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import router from "../../router";
import { ElMessage } from "element-plus";
import { Login } from "./api";

const form = reactive({
  username: "admin",
  password: "123456"
});
const rules = {
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" }
    // 可以添加其他验证规则
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" }
    // 可以添加其他验证规则
  ]
};

const login = async () => {
  try {
    const res = await Login(form);
    if (res.status === 200) {
      sessionStorage.setItem("token", res.token);
      ElMessage.success("登录成功!!");
      // 实现登录逻辑
      await router.push("/view");
    } else {
      ElMessage.error("登录失败，请检查用户名和密码");
    }
  } catch (error) {
    console.error("登录请求失败:", error);
    ElMessage.error("登录请求失败，请稍后重试");
  }
};

</script>

<style scoped lang="less">
.login-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
}

.background-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #3498db, #2ecc71);
  animation: gradientAnimation 8s infinite;
  z-index: -1;
  opacity: 0.7;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9); /* 调整背景颜色透明度 */
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;
}

form:hover {
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
}

.login-title {
  font-size: 32px;
  margin-bottom: 20px;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

label {
  font-size: 16px;
  color: #333333;
}

input {
  padding: 12px;
  border: 1px solid #cccccc;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s ease-in-out;
}

input:focus {
  border-color: #3498db;
}

button {
  padding: 12px;
  background-color: #3498db;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: #2980b9;
}
</style>
