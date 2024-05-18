<template>
  <div class="container">
    <el-row :align="'top'">
      <el-form :inline="true" class="search-bar">
        <el-form-item label="视频评论搜索">
          <el-input v-model="query.url" placeholder="请输入完整视频链接"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :disabled="isLoading" @click="GetCommentInfos">搜索</el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <div class="bottom-content">
      <el-table :data="pageCommentData" stripe style="width: 100%">
        <el-table-column type="index" label="序号" width="auto"></el-table-column>
        <el-table-column prop="time" label="评论时间" width="auto">
          <template #default="scope">
            <el-popover effect="light" trigger="hover" placement="top" width="auto">
              <template #default>
                <el-tag>双击复制文本</el-tag>
                <div>{{ scope.row.time }}</div>
              </template>
              <template #reference>
                <el-text style="white-space: nowrap" @dblclick="copyToClipboard(scope.row.time)"
                >{{ scope.row.time }}
                </el-text>
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="comment_desc" label="评论" width="auto">
          <template #default="scope">
            <el-popover effect="light" trigger="hover" placement="top" width="auto">
              <template #default>
                <el-tag>双击复制文本</el-tag>
                <div>{{ scope.row.comment_desc }}</div>
              </template>
              <template #reference>
                <el-text
                  style="white-space: nowrap"
                  @dblclick="copyToClipboard(scope.row.comment_desc)"
                >
                  {{ scope.row.comment_desc }}
                </el-text>
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="user_nick" label="昵称" width="auto">
          <template #default="scope">
            <el-popover effect="light" trigger="hover" placement="top" width="auto">
              <template #default>
                <el-tag>双击复制文本</el-tag>
                <div>{{ scope.row.user_nick }}</div>
              </template>
              <template #reference>
                <el-text
                  style="white-space: nowrap"
                  @dblclick="copyToClipboard(scope.row.user_nick)"
                >
                  {{ scope.row.user_nick }}
                </el-text>
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="ip" label="地址" width="auto">
          <template #default="scope">
            <el-popover effect="light" trigger="hover" placement="top" width="auto">
              <template #default>
                <el-tag>双击复制文本</el-tag>
                <div>{{ scope.row.ip }}</div>
              </template>
              <template #reference>
                <el-text style="white-space: nowrap" @dblclick="copyToClipboard(scope.row.ip)"
                >{{ scope.row.ip }}
                </el-text>
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="auto">
          <template #default="scope">
            <el-popconfirm
              width="220"
              confirm-button-text="OK"
              cancel-button-text="No, Thanks"
              :icon="InfoFilled"
              icon-color="#626AEF"
              title="点赞该评论?"
              @confirm="() => commentLike(scope.row.comment_id,scope.row.note_id)"
            >
              <template #reference>
                <el-button type="success" size="small">
                  点赞评论
                </el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      v-model:current-page="currentPage1"
      v-model:page-size="pageSize1"
      :disabled="false"
      :background="true"
      layout="prev, pager, next, total"
      :total="commentData.length"
      @current-change="handleCurrentChange1"
      style="margin-top: 20px"
    />
  </div>
</template>

<script setup lang="ts">
import { ElMessage, ElMessageBox } from "element-plus";
import { reactive, ref } from "vue";
import { Comment } from "../../index/data";
import { useWebSocket } from "../../index/api";
import router from "../../../router";
import { InfoFilled } from "@element-plus/icons-vue";
import { CommentLikeAPI } from "../service/apis";

const commentData = ref<Comment[]>([]);
const pageCommentData = ref<Comment[]>([]); //分页后的数据
const query = reactive({
  url: "",
  keyword: "",
  token: ""
});

// 监控button按钮
const isLoading = ref(false);
//评论的分页
const currentPage1 = ref(1);
const pageSize1 = ref(12);

const handleCurrentChange1 = () => {
  const startIndex = (currentPage1.value - 1) * pageSize1.value;
  const endIndex = startIndex + pageSize1.value;
  pageCommentData.value = commentData.value.slice(startIndex, endIndex);
};
//点赞评论
const commentLike = async (comment_id: string, note_id: string) => {
  ElMessage.success("点赞成功!!!");
  await CommentLikeAPI(comment_id, note_id);
};
//获取评论信息的接口
const GetCommentInfos = () => {
  commentData.value = [];
  pageCommentData.value = [];
  const tokenFromSessionStorage = sessionStorage.getItem("token");
  // 空值检查
  if (tokenFromSessionStorage !== null) {
    query.token = tokenFromSessionStorage;
  }
  ElMessage.info("正在进行数据加载,请勿进行其他操作!!!");
  isLoading.value = true;
  const socket = useWebSocket({
    url: "ws://127.0.0.1:8000/ws/comment",
    onOpen: () => {
      socket.send(JSON.stringify(query));
    },
    onMessage: (data) => {
      if (data === "No Infos") {
        isLoading.value = false;
        ElMessage.success("数据加载完成!!!");
        //关闭连接
        socket.close();
      }

        // 处理每条接收到的数据
      // noteData.value.push(data);
      else if (data === "Invalid credentials") {
        isLoading.value = false;
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
        commentData.value.push(data);
        const startIndex = (currentPage1.value - 1) * pageSize1.value;
        const endIndex = startIndex + pageSize1.value;
        pageCommentData.value = commentData.value.slice(startIndex, endIndex);
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
      ElMessage.error("数据加载失败,请重试!!!");
    },
    onClose: () => {
      isLoading.value = false;
      // console.log("WebSocket Closed:", event);
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

.bottom-content {
  background-color: #d0d0d0;
  margin-top: 10px;
}
</style>
