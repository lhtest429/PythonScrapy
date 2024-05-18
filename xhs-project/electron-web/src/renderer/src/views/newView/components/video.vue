<template>
  <div class="container">
    <el-row :align="'top'">
      <!-- 左侧部分 -->
      <el-col :span="12" class="left-sidebar">
        <el-form :inline="true" class="search-bar">
          <el-form-item label="关键字搜索">
            <el-input v-model="query.keyword" placeholder="请输入关键词"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :disabled="isLoading" @click="GetNotesInfos">搜索</el-button>
          </el-form-item>
        </el-form>

        <el-table :data="tableData" style="margin-top: 10px">
          <el-table-column label="列1" prop="column1"></el-table-column>
          <el-table-column label="列2" prop="column2"></el-table-column>
          <!-- 添加更多列... -->
        </el-table>
      </el-col>

      <!-- 右侧部分 -->
      <el-col :span="12" class="right-sidebar">
        <el-tabs type="border-card">
          <el-tab-pane label="配置信息">
            <TabSetting ref="arr"></TabSetting>
          </el-tab-pane>
          <el-tab-pane label="Config">Config</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>

    <!-- 整体下面的部分 -->
    <div class="bottom-content">
      <el-table
        v-loading="loading1"
        :data="pagedNoteData"
        style="flex: 1"
        element-loading-text="Loading..."
        stripe
      >
        <!--        <el-table-column prop="id" label="序号" width="auto">-->
        <!--        </el-table-column>-->
        <el-table-column label="序号" width="auto" type="index"></el-table-column>
        <el-table-column prop="title" label="视频标题" width="auto">
          <template #default="scope">
            <el-popover effect="light" trigger="hover" placement="top" width="auto">
              <template #default>
                <el-tag>双击复制文本</el-tag>
                <div>{{ scope.row.title }}</div>
              </template>
              <template #reference>
                <el-text style="white-space: nowrap" @dblclick="copyToClipboard(scope.row.title)"
                >{{ scope.row.title }}
                </el-text>
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="user.nickname" label="作者" width="auto">
          <template #default="scope">
            <el-popover effect="light" trigger="hover" placement="top" width="auto">
              <template #default>
                <el-tag>双击复制文本</el-tag>
                <div>{{ scope.row.user.nickname }}</div>
              </template>
              <template #reference>
                <el-text
                  style="white-space: nowrap"
                  @dblclick="copyToClipboard(scope.row.user.nickname)"
                >
                  {{ scope.row.user.nickname }}
                </el-text>
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="note_id" label="视频ID" width="auto">
          <template #default="scope">
            <el-popover effect="light" trigger="hover" placement="top" width="auto">
              <template #default>
                <el-tag>双击复制文本</el-tag>
                <div>{{ scope.row.note_id }}</div>
              </template>
              <template #reference>
                <el-text style="white-space: nowrap" @dblclick="copyToClipboard(scope.row.note_id)">
                  {{ scope.row.note_id }}
                </el-text>
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="comment_count" label="评论数" width="auto">
          <template #default="scope">
            <el-popover effect="light" trigger="hover" placement="top" width="auto">
              <template #default>
                <el-tag>双击复制文本</el-tag>
                <div>{{ scope.row.comment_count }}</div>
              </template>
              <template #reference>
                <el-text
                  style="white-space: nowrap"
                  @dblclick="copyToClipboard(scope.row.comment_count)"
                >
                  {{ scope.row.comment_count }}
                </el-text>
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="note_id" label="地址" width="auto">
          <template #default="scope">
            <el-popover effect="light" trigger="hover" placement="top" width="auto">
              <template #default>
                <el-tag>双击复制文本</el-tag>
                <div>{{ base_url + scope.row.note_id }}</div>
              </template>
              <template #reference>
                <el-text
                  style="white-space: nowrap"
                  @dblclick="copyToClipboard(base_url + scope.row.note_id)"
                >
                  {{ base_url + scope.row.note_id }}
                </el-text>
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="type" label="类型" width="auto">
          <template #default="scope">
            <el-popover effect="light" trigger="hover" placement="top" width="auto">
              <template #default>
                <el-tag>双击复制文本</el-tag>
                <div>{{ scope.row.type }}</div>
              </template>
              <template #reference>
                <el-text style="white-space: nowrap" @dblclick="copyToClipboard(scope.row.type)"
                >{{ scope.row.type }}
                </el-text>
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <!-- 操作栏目 -->
        <el-table-column label="操作" width="auto">
          <template #default="scope">
            <div class="operation-buttons">
              <el-popconfirm
                width="220"
                confirm-button-text="OK"
                cancel-button-text="No, Thanks"
                :icon="InfoFilled"
                icon-color="#626AEF"
                title="点赞该视频?"
                @confirm="() => NoteLike(scope.row.note_id)"
              >
                <template #reference>
                  <el-button type="primary" size="small">
                    视频点赞
                  </el-button>
                </template>
              </el-popconfirm>
              <el-popconfirm
                width="220"
                confirm-button-text="OK"
                cancel-button-text="No, Thanks"
                :icon="InfoFilled"
                icon-color="#626AEF"
                title="关注该博主?"
                @confirm="() => UserFollow(scope.row.user.user_id)"
              >
                <template #reference>
                  <el-button type="success" size="small">
                    关注博主
                  </el-button>
                </template>
              </el-popconfirm>
            </div>
          </template>
        </el-table-column>


      </el-table>
    </div>
    <el-pagination
      v-model:current-page="currentPage"
      :disabled="false"
      :background="true"
      layout="prev, pager, next, total"
      :total="noteData.length"
      :page-size="pageSize"
      style="margin-top: 10px"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="ts">
/* eslint-disable */
import { ElMessage, ElMessageBox } from "element-plus";
import { InfoFilled } from "@element-plus/icons-vue";
import { ref, reactive } from "vue";
import { useWebSocket } from "../../index/api";
import type { Note } from "../../index/data";
import router from "../../../router";
import { NoteLikeAPI, UserFollowAPI } from "../service/apis";
//组件
import TabSetting from "./TabSetting.vue";
// 通过ref来获取子组件数据和方法
// 首先通过ref定义个变量也可以用reactiv定义
const arr = ref(null);
// const add = ()=>{
//   console.log(arr.value.searchInput);
// }
const tableData = ref([
  { column1: "123", column2: "234" },
  { column1: "123", column2: "234" },
  { column1: "123", column2: "234" },
  { column1: "123", column2: "234" }
]);
const base_url = ref("https://www.xiaohongshu.com/explore/");
//视频信息类型
const noteData = ref<Note[]>([]);
const pagedNoteData = ref<Note[]>([]); // 分页后的数据
//分页参数
const currentPage = ref(1);
const pageSize = ref(8);

//视频点赞
const NoteLike = async (note_id: string) => {
  ElMessage.success("点赞成功!!!");
  await NoteLikeAPI(note_id);
}
//关注博主
const UserFollow = async (user_id: string) => {
  ElMessage.success("关注成功!!!");
  await UserFollowAPI(user_id);
}
const handleCurrentChange = () => {
  const startIndex = (currentPage.value - 1) * pageSize.value;
  const endIndex = startIndex + pageSize.value;
  pagedNoteData.value = noteData.value.slice(startIndex, endIndex);
};
// 监控button按钮
const isLoading = ref(false);
//表格加载组件
const loading1 = ref(false);
//定义类型
const query = reactive({
  url: "",
  keyword: "",
  token: ""
});
//获取视频信息的接口
const GetNotesInfos = () => {
  noteData.value = [];
  pagedNoteData.value = [];
  loading1.value = true;
  const tokenFromSessionStorage = sessionStorage.getItem("token");
  // 空值检查
  if (tokenFromSessionStorage !== null) {
    query.token = tokenFromSessionStorage;
  }
  ElMessage.info("正在进行数据加载,请勿进行其他操作!!!");
  isLoading.value = true;
  const socket = useWebSocket({
    url: "ws://127.0.0.1:8000/ws/keyword",
    onOpen: () => {
      socket.send(JSON.stringify(query));
    },
    onMessage: (data) => {
      if (data === "No Infos") {
        isLoading.value = false;
        loading1.value = false;
        ElMessage.success("数据加载完成!!!");
        //关闭连接
        socket.close();
      }
        // 处理每条接收到的数据
      // noteData.value.push(data);
      else if (data === "Invalid credentials") {
        isLoading.value = false;
        loading1.value = false;
        // 关闭连接
        socket.close();
        // 弹出认证失败提示框
        ElMessageBox.alert("认证失败，请重新登录!!!", "提示", {
          confirmButtonText: "确认",
          callback: () => {
            // 跳转到登录页面
            router.push("/login");
          }
        });
      } else {
        loading1.value = false;
        noteData.value.push(data);
        const startIndex = (currentPage.value - 1) * pageSize.value;
        const endIndex = startIndex + pageSize.value;
        pagedNoteData.value = noteData.value.slice(startIndex, endIndex);
      }
      // console.log(noteData.value);
      // if (noteData.value.length >= 20) {
      //   isLoading.value = false;
      //   ElMessage.success("数据加载完成!!!");
      //   //关闭连接
      //   socket.close();
      // }
    },
    onError: () => {
      isLoading.value = false;
      loading1.value = false;
      ElMessage.error("数据加载失败,请重试!!!");
    },
    onClose: () => {
      isLoading.value = false;
      loading1.value = false;
    }
  });
  // const res = await GetNotesInfosAPI(query);
  // noteData.value = res;
  // console.log(noteData.value);
  // 在组件卸载时关闭提示框，避免可能的内存泄漏
  // onBeforeUnmount(() => {
  //   closeLoadingMessage();
  // });
};

//双击粘贴
const copyToClipboard = async (text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
    // 可以添加一些提示信息，例如使用 Element Plus 的 ElMessage
    // this.$message.success('已复制到剪贴板'); // 注意：这里无法直接使用 this，需要通过上下文传递
    ElMessage.success("已复制到剪贴板");
  } catch (err) {
    // console.error("复制失败:", err);
    // 处理复制失败的情况
  }
};
</script>

<style scoped lang="less">
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.left-sidebar,
.right-sidebar {
  background-color: #e0e0e0;
  padding: 10px;
}

.right-sidebar {
  background-color: #f0f0f0;
}

.bottom-content {
  background-color: #d0d0d0;
  margin-top: 10px;
}

.operation-buttons {
  display: flex;
  align-items: center;
  justify-content: center; /* 将两个按钮在水平方向上居中 */
}

//.operation-buttons el-popconfirm {
//  margin: 0 5px; /* 可以根据需要进行调整 */
//}

</style>
