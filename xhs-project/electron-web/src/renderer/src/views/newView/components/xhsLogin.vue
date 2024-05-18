<template>
  <div>
    <div class="container" id="box">
      <div class="form-container sign-in-container">
        <el-form :model="loginForm" :rules="rules" status-icon>
          <h1>登 录 小 红 书</h1>
          <el-form-item prop="phone" style="width: 310px; height: 56px; margin-bottom: 5px;">
            <el-input v-model="loginForm.phone" prefix-icon="el-icon-user-solid" placeholder="电话号码"></el-input>
          </el-form-item>
          <el-form-item prop="captcha" style="width: 310px; height: 56px; margin-bottom: 5px;">
            <div style="display: flex; align-items: center;">
              <el-input v-model="verificationCode" prefix-icon="el-icon-safety" placeholder="验证码"></el-input>
              <el-button
                type="info"
                style="border-radius: 5px; width: 120px;"
                @click="sendCaptcha"
                :disabled="verificationCodeDisabled"
                :loading="verificationCodeLoading"
              >
                {{ verificationCodeButtonText }}
              </el-button>
            </div>
          </el-form-item>
          <el-button type="primary" style="border-radius: 20px; width: 120px;" @click="loginXhs">登 录</el-button>
        </el-form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>欢迎 回来!</h1>
            <p>Go back to sign in</p>
            <button class="ghost" id="signIn">登 录</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>Hello!</h1>
            <p>Welcome~</p>
            <button class="ghost" id="signUp">小红书</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { ElForm, ElInput, ElButton, ElMessageBox, ElMessage } from "element-plus";
import { SendCodeAPI, LoginXhsAPI } from "../service/apis";

const loginForm = reactive({
  phone: "",
  captcha: ""
});

const rules = reactive({
  phone: [{ required: true, message: "请输入电话号码", trigger: "blur" }],
  captcha: [{ required: true, message: "请输入验证码", trigger: "blur" }]
});

const countdown = ref(0);

const verificationCodeDisabled = ref(false);
const verificationCodeButtonText = ref("发送验证码");
const verificationCode = ref("");
const verificationCodeLoading = ref(false);

const sendCaptcha = async () => {
  if (!loginForm.phone) {
    // 如果电话号码为空，显示提示弹窗并不执行后续逻辑
    await ElMessageBox.alert("请填写电话号码", "提示", {
      type: "warning"
    });
    return;
  }
  const resp = await SendCodeAPI(loginForm.phone);
  console.log(resp);
  if (resp.success === true) {
    ElMessage.success("验证码发送成功,请注意查收!!!");
    if (countdown.value === 0) {
      verificationCodeLoading.value = true; // 按钮进入加载状态
      verificationCodeDisabled.value = true; // 禁用按钮
      countdown.value = 300;

      const timer = setInterval(() => {
        countdown.value -= 1;
        if (countdown.value <= 0) {
          clearInterval(timer);
          verificationCodeLoading.value = false; // 恢复按钮正常状态
          verificationCodeButtonText.value = "发送验证码";
          verificationCodeDisabled.value = false; // 解除按钮禁用
        } else {
          verificationCodeButtonText.value = `${countdown.value}秒后重新发送`;
        }
      }, 1000);
    }
  } else {
    ElMessage.error(resp.msg);
  }
};

const loginXhs = async () => {
  // 登录逻辑
  // 可以在这里调用后端接口进行登录验证
  const resp = await LoginXhsAPI(loginForm.phone, loginForm.captcha);
  if (resp.success == true) {
    ElMessage.success("登录成功!!!");
  } else {
    ElMessage.error(resp.msg);
  }
};
</script>


<style scoped lang="css">
@import "../../../assets/css/login_reg.css";

.container {
  background-color: #e4e8f2;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 1000px;
  max-width: 100%;
  min-height: 500px;
}

.box {
  background: #b4c0d6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  height: 100%;
  margin: -20px 0 50px;
}

button {
  border-radius: 20px;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}

</style>
