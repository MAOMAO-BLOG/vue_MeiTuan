<template>
    <div class="page-register">
        <div class="header">
        <header>
            <a href="#" class="site-logo">
                <img src="//s0.meituan.net/bs/fe-web-meituan/10afbf1/img/logo.png" alt="美团">
            </a>
            <div class="login">
              <span>已有美团账号</span>
              <router-link :to="{name: 'login'}">登录</router-link>
            </div>
          </header>
        </div>
        <div class="content">
            <el-form
              :model="registerForm"
              status-icon
              :rules="rules"
              ref="registerForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="用户名" prop="userName">
                <el-input type="text" v-model="registerForm.userName" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="registerForm.password" autocomplete="off" @input='input' ></el-input>
                <div class="pw-strength">
                  <div :class="['bar', strengthClass]"></div>
                  <div class="letter">
                    <span>弱</span>
                    <span>中</span>
                    <span>强</span>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label="确认密码" prop="rePassword" class='sure'>
                <el-input type="password" v-model="registerForm.rePassword" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('registerForm')">提交</el-button>
              </el-form-item>
            </el-form>
          </div>
          <footer >
            <p class="copyright">
                ©<a class="f1" href="https://www.meituan.com">meituan.com</a>&nbsp;
                <a class="f1" target="_blank" href="http://www.miibeian.gov.cn/">京ICP证070791号</a>&nbsp;
                <span class="f1">京公网安备11010502025545号</span>
            </p>
          </footer>
    </div>
</template>
<script>
import API from '@/api'
export default {
  data () {
    const validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入密码'))
      } else if (this.registerForm.rePassword !== '') {
        this.$refs.registerForm.validateField('rePassword')
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    const validateUser = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入用户名'))
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error('用户名必须为4-16位的字母数字下划线组成'))
      } else {
        callback()
      }
    }
    return {
      registerForm: {
        userName: '',
        password: '',
        rePassword: ''
      },
      strengthClass: '',
      rules: {
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        rePassword: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        userName: [
          { validator: validateUser, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          API.register({
            userName: this.registerForm.userName,
            password: this.registerForm.password,
            rePassword: this.registerForm.rePassword
          }).then(resp => {
            console.log(resp)
            if (resp.status === 'success') {
              this.$router.push({ name: 'login' })
            } else {
              alert(resp.data.msg)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    input () {
      const reg = /\w+/g
      const strength = this.registerForm.password.match(reg)
      if (this.registerForm.password.length > 20 || (this.registerForm.password.length > 6 && strength)) {
        this.strengthClass = 'strong'
      } else if (this.registerForm.password.length < 6) {
        this.strengthClass = 'week'
      } else if (!this.registerForm.password.length) {
        this.strengthClass = ''
      } else {
        this.strengthClass = 'normal'
      }
      console.log(this.strengthClass)
    }
  }
}
</script>
<style lang='less' ascoped>
.page-register {
  .header {
    border-bottom: 2px solid #2bb8aa;
    min-width: 980px;
    color: #666;
    header {
      margin: 0 auto;
      padding: 20px 0 10px;
      width: 980px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .site-logo {
        display: inline-block;
        width: 128px;
        width: 54px;
        height: 36px;
        text-indent: -9999px;
        background-position: -669px -748px;
        background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
      }
      .login {
        float: right;
        height: 36px;
        line-height: 36px;
        a {
          padding: 5px 10px;
          background-color: #2db3a6;
          color: aliceblue;
          text-decoration: none;
          font-size: 12px;
          font-weight: 400;
        }
      }
    }
    }
    .content {
    margin: 0 auto 30px;
    padding-top: 30px;
    width: 980px;
    min-height: 300px;
    padding-right: 550px;
    .demo-ruleForm {
        width: 428px;
        padding-left: 20px;
        .sure {
            margin-top: 60px;
        }
    }
    .pw-strength{
      position: absolute;
      width: 330px;
      top: 64px;
      left: 0px;
      background: #eee;
      .bar {
        background: #d3ebee;
        height: 20px;
        width: 0;
        overflow: hidden;
        transition: all .4s linear;
        &.week {
          width: 108px;
          background: #f76120;
        }
        &.normal {
          width: 218px;
          background: #ff8900;
        }
        &.strong {
          width: 330px;
          background: #5bab3c;
        }
      }
      .letter {
        position: absolute;
        top: 0;
        left: 0;
        span {
          display: block;
          float: left;
          text-align: center;
          font-size: 12px;
          height: 20px;
          line-height: 20px;
          width: 108px;
          border-right: 2px solid #fff;
          color: #fff;
        }
      }
    }
    .status {
      font-size: 12px;
      margin-left: 20px;
      color: #e6a23c;
    }

    .error {
      color: red;
    }
    .f1 {
      display: block;
    }
  }
  footer {
    color: #999;
    border-top: 1px solid #EEE;
    padding-top: 20px;
    font-size: 13px;
    text-align: center;
    .f1 {
        font-size: 14px;
        color: #ccc;
        text-decoration: none;
    }
  }
}
</style>
