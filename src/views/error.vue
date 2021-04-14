<template>
  <div>
    <h1>登录错误：{{ msg }}</h1>
    <el-button type="" @click="test">buttun</el-button>
    <el-row></el-row>
  </div>
</template>
<script>
export default {
  // data() {
  //   return {
  //     msg: this.$route.query.data
  //   };
  // }, //使用这种方式也可以显示 msg
  data() {
    return {
      msg: null,
    };
  },
  created() {
    this.msg = this.$route.query.message;
  },
  methods: {
    test() {
      console.log(this.$store);
    }
  }
};
</script>