<template>
  <div class="card-container">
    <div class="left-section">
      <!-- 第一行 -->
      <el-row class="card-row">
        <el-col :span="12">
          <el-input v-model="searchInput"  placeholder="请输入关键词" />
        </el-col>
        <el-col :span="12">
          <el-button type="primary" @click="search">搜索</el-button>
        </el-col>
      </el-row>

      <!-- 第二行 -->
      <el-row class="card-row">
        <el-col :span="12">
          <el-input v-model="inputValue" placeholder="请输入内容" />
        </el-col>
        <el-col :span="4">
          <el-button type="success" @click="submit">提交</el-button>
        </el-col>
        <el-col :span="8">
          <el-select v-model="selectedOption" placeholder="请选择条件">
            <el-option label="最新视频" value="newest" />
            <el-option label="点赞最多" value="mostLiked" />
            <el-option label="综合排序" value="comprehensive" />
          </el-select>
        </el-col>
      </el-row>
      <el-row class="card-row">
        <el-col >
          <el-form label-width="80px">
            <el-form-item label="选择时间">
              <el-time-picker v-model="selectedTime" placeholder="选择时间"></el-time-picker>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
    <div class="right-section">
      <!-- 右侧文本框 -->
      <el-row class="card-row">
        <el-col :span="24">
          <el-input
            v-model="rightTextArea"
            type="textarea"
            placeholder="内容"
            :rows="5"
          />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const searchInput = ref('');
const inputValue = ref('');
const selectedOption = ref('');
const rightTextArea = ref('');

const selectedTime = ref();
const search = () => {
  // 处理搜索逻辑
  console.log('Search:', searchInput.value);
};

const submit = () => {
  // 处理提交逻辑
  console.log('Submit:', inputValue.value);
  console.log('Sort Option:', selectedOption.value);
};

// 通过defineExpose将数据指定抛出 父组件才可以获取需要的数据
defineExpose({
  searchInput
})
</script>

<style scoped lang="less">
.card-container {
  margin: 10px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  display: flex;
}

.left-section {
  flex: 1; /* 左侧占据剩余空间 */
  margin-right: 10px; /* 可根据需要调整左右间距 */
}

.right-section {
  width: 34%; /* 右侧占据1/3空间 */
}

.card-row {
  margin-bottom: 10px;
}

.el-input,
.el-button,
.el-select {
  width: 100%;
}

.el-input textarea {
  width: 33%;
}
</style>
