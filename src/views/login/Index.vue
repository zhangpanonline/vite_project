<template>
  <div class="login_container">
    <video autoplay muted loop poster="../../assets/images/login/video-cover.jpeg" >
      <source src="../../assets/images/login/night.mp4">
    </video>
    <el-form :model="loginForm" class="login_form" >
      <h1 class="_form_title" >
        系统登录
      </h1>
      <el-form-item prop="username" >
        <el-input v-model="loginForm.username" prefix-icon="User"></el-input>
      </el-form-item>
      <el-form-item prop="password" >
        <el-input v-model="loginForm.password" :type="passwordType">
          <template #prefix >
            <el-icon v-if="passwordType === 'password'" @click="passwordType = ''"  ><Lock /></el-icon>
            <el-icon v-else  @click="passwordType = 'password'"><Unlock /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-button :loading="loading" type="primary" @click="handleLogin()" style="width: 100%; height: 40px;" >登录</el-button>
    </el-form>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  toRefs,
  reactive
} from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
export default defineComponent({
  setup() {
    const router = useRouter()
    const state = reactive({
      loginForm: {
        username: '',
        password: '',
      },
      loading: false,
      passwordType: 'password',
    })
    const methods = reactive({
      handleLogin() {
        if (state.loginForm.username === 'root' && state.loginForm.password === 'root') {
          router.push('/')
        } else {
          ElMessage.warning('账号密码不正确！')
        }
      },
    })
    return {
      ...toRefs(state),
      ...toRefs(methods),
    }
  },
})
</script>
<style lang="scss" >
.login_container {
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
  .el-input__wrapper {
    background: transparent;
    box-shadow: none;
  }
  input {
    height: 47px;
    padding: 12px 5px 12px 15px;
    color: #fff;
    caret-color: #fff;
  }
  .el-icon {
    font-size: 16px;
  }
}
</style>
<style lang="scss" scoped>
.login_container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: #eee;
  position: relative;
  video {
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .login_form {
    width: 450px;
    margin: 0 auto;
    padding: 200px 35px 0;
    overflow: hidden;
    ._form_title {
      font-size: 24px;
      text-align: center;
      padding-bottom: 40px;
    }
  }
}
</style>
