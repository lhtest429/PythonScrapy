<template>
  <el-button @click="back">返回登录</el-button>
  <div>
    <!-- 第一部分 -->
    <div class="section">
      <el-text class="mx-1">输入检索的关键词:</el-text>&nbsp;
      <el-input v-model="query.keyword" placeholder="Please input" clearable style="flex: 1" />&nbsp;&nbsp;
      <el-button type="primary" :disabled="isLoading" @click="GetNotesInfos">开始检索视频</el-button>
      <el-button type="primary">登录抖音</el-button>
      <el-button type="success" @click="dialogTableVisible = true">导入收藏</el-button>
      <el-button>全部开始</el-button>
      <el-button>全部结束</el-button>
      <el-button>清空视频</el-button>
      <el-button>导出视频</el-button>
    </div>

    <!-- 第二部分 -->
    <div class="container-tage">
      <el-table :data="pagedNoteData" border height="300" style="flex: 1" v-loading="loading1"
                element-loading-text="Loading...">
        <!--        <el-table-column prop="id" label="序号" width="auto">-->
        <!--        </el-table-column>-->
        <el-table-column label="序号" width="auto" type="index">
        </el-table-column>
        <el-table-column prop="title" label="视频标题" width="auto">
          <template #default="scope">
            <el-popover effect="light" trigger="hover" placement="top" width="auto">
              <template #default>
                <el-tag>双击复制文本</el-tag>
                <div>{{ scope.row.title }}</div>
              </template>
              <template #reference>
                <el-text style="white-space: nowrap;" @dblclick="copyToClipboard(scope.row.title)">{{ scope.row.title }}
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
                <el-text style="white-space: nowrap;" @dblclick="copyToClipboard(scope.row.user.nickname)">
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
                <div> {{ scope.row.note_id }}</div>
              </template>
              <template #reference>
                <el-text style="white-space: nowrap;" @dblclick="copyToClipboard(scope.row.note_id)">
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
                <div> {{ scope.row.comment_count }}</div>
              </template>
              <template #reference>
                <el-text style="white-space: nowrap;" @dblclick="copyToClipboard(scope.row.comment_count)">
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
                <div> {{ base_url + scope.row.note_id }}</div>
              </template>
              <template #reference>
                <el-text style="white-space: nowrap;" @dblclick="copyToClipboard(base_url+scope.row.note_id)">
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
                <div> {{ scope.row.type }}</div>
              </template>
              <template #reference>
                <el-text style="white-space: nowrap;" @dblclick="copyToClipboard(scope.row.type)">{{ scope.row.type }}
                </el-text>
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <!-- 操作栏目 -->
        <el-table-column label="操作" width="auto">
          <template #default="">
            <el-button type="danger" size="small" click="">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--      <el-card class="box-card" style="width: 30%; height: 300px">-->
      <!--        <template #footer></template>-->
      <!--        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">-->
      <!--          <el-tab-pane label="二维码" name="first">二维码</el-tab-pane>-->
      <!--          <el-tab-pane label="数据过滤" name="second">数据过滤</el-tab-pane>-->
      <!--          <el-tab-pane label="辅助功能" name="third">辅助功能</el-tab-pane>-->
      <!--        </el-tabs>-->
      <!--        <div class="container-tage">-->
      <!--          <el-image style="width: 65%; height: 100%"></el-image>-->
      <!--          <div style="width: 5%"></div>-->
      <!--          <div style="width: 30%">-->
      <!--            <el-button>上一个</el-button>-->
      <!--            <el-image></el-image>-->
      <!--            <el-button>下一个</el-button>-->
      <!--          </div>-->

      <!--        </div>-->
      <!--      </el-card>-->
    </div>
    <el-pagination
      v-model:current-page="currentPage"
      :disabled="false"
      :background="true"
      layout="prev, pager, next, total"
      :total="noteData.length"
      :page-size="pageSize"
      @current-change="handleCurrentChange"
    />
    <el-divider>
      <el-text class="mx-1">评论信息</el-text>
    </el-divider>
    <!-- 第三部分 -->
    <div class="section">
      <el-text class="mx-1">请输入完整的地址:</el-text>&nbsp;
      <el-input v-model="query.url" placeholder="Please input" clearable style="flex: 1" />&nbsp;&nbsp;
      <el-button type="primary" :disabled="isLoading" @click="GetCommentInfos">开始检索视频评论</el-button>
      <el-button type="primary">登录抖音</el-button>
      <el-button type="success" @click="dialogTableVisible = true">导入收藏</el-button>
      <el-button>全部开始</el-button>
      <el-button>全部结束</el-button>
      <el-button>清空视频</el-button>
      <el-button>导出视频</el-button>
    </div>

    <!-- 第四部分 -->
    <el-table :data="pageCommentData" border height="300" style="width: 100%">
      <el-table-column type="index" label="序号" width="auto"></el-table-column>
      <el-table-column prop="time" label="评论时间" width="auto">
        <template #default="scope">
          <el-popover effect="light" trigger="hover" placement="top" width="auto">
            <template #default>
              <el-tag>双击复制文本</el-tag>
              <div>{{ scope.row.time }}</div>
            </template>
            <template #reference>
              <el-text style="white-space: nowrap;" @dblclick="copyToClipboard(scope.row.time)">{{ scope.row.time }}
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
              <el-text style="white-space: nowrap;" @dblclick="copyToClipboard(scope.row.comment_desc)">
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
              <el-text style="white-space: nowrap;" @dblclick="copyToClipboard(scope.row.user_nick)">
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
              <el-text style="white-space: nowrap;" @dblclick="copyToClipboard(scope.row.ip)">{{ scope.row.ip }}
              </el-text>
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <!--      <el-table-column prop="name" label="手机号" width="auto">-->
      <!--        <template #default="scope">-->
      <!--          <el-popover effect="light" trigger="hover" placement="top" width="auto">-->
      <!--            <template #default>-->
      <!--              <el-tag>双击复制文本</el-tag>-->
      <!--              <div>{{ scope.row.name }}</div>-->
      <!--            </template>-->
      <!--            <template #reference>-->
      <!--              <el-text style="white-space: nowrap;" @dblclick="copyToClipboard(scope.row.name)">{{ scope.row.name }}-->
      <!--              </el-text>-->
      <!--            </template>-->
      <!--          </el-popover>-->
      <!--        </template>-->
      <!--      </el-table-column>-->
      <!--      <el-table-column prop="date" label="UID" width="auto">-->
      <!--        <template #default="scope">-->
      <!--          <el-popover effect="light" trigger="hover" placement="top" width="auto">-->
      <!--            <template #default>-->
      <!--              <el-tag>双击复制文本</el-tag>-->
      <!--              <div>{{ scope.row.name }}</div>-->
      <!--            </template>-->
      <!--            <template #reference>-->
      <!--              <el-text style="white-space: nowrap;" @dblclick="copyToClipboard(scope.row.name)">{{ scope.row.name }}-->
      <!--              </el-text>-->
      <!--            </template>-->
      <!--          </el-popover>-->
      <!--        </template>-->
      <!--      </el-table-column>-->
      <!--      <el-table-column prop="name" label="MS4" width="auto">-->
      <!--        <template #default="scope">-->
      <!--          <el-popover effect="light" trigger="hover" placement="top" width="auto">-->
      <!--            <template #default>-->
      <!--              <el-tag>双击复制文本</el-tag>-->
      <!--              <div>{{ scope.row.name }}</div>-->
      <!--            </template>-->
      <!--            <template #reference>-->
      <!--              <el-text style="white-space: nowrap;" @dblclick="copyToClipboard(scope.row.name)">{{ scope.row.name }}-->
      <!--              </el-text>-->
      <!--            </template>-->
      <!--          </el-popover>-->
      <!--        </template>-->
      <!--      </el-table-column>-->
      <!--      <el-table-column prop="name" label="简介" width="auto">-->
      <!--        <template #default="scope">-->
      <!--          <el-popover effect="light" trigger="hover" placement="top" width="auto">-->
      <!--            <template #default>-->
      <!--              <el-tag>双击复制文本</el-tag>-->
      <!--              <div>{{ scope.row.name }}</div>-->
      <!--            </template>-->
      <!--            <template #reference>-->
      <!--              <el-text style="white-space: nowrap;" @dblclick="copyToClipboard(scope.row.name)">{{ scope.row.name }}-->
      <!--              </el-text>-->
      <!--            </template>-->
      <!--          </el-popover>-->
      <!--        </template>-->
      <!--      </el-table-column>-->
    </el-table>
    <el-pagination
      v-model:current-page="currentPage1"
      :disabled="false"
      :background="true"
      layout="prev, pager, next, total"
      :total="commentData.length"
      :page-size="pageSize1"
      @current-change="handleCurrentChange1"
    />
  </div>
  <el-dialog v-model="dialogTableVisible" title="抖音收藏列表" width="50%">
    <el-card class="box-card">
      <template #default>
        <div class="sub-cards-container">
          <div v-for="o in 4" :key="o" class="item-container">
            <el-card class="inner-card">
              <div class="container-tage">
                <el-image style="width: 30%; height: 100%"></el-image>
                <div style="width: 40%"></div>
                <el-button style="width: 30%">导入</el-button>
              </div>
              <el-text>知识</el-text>&nbsp;
              <el-text>数量:{{ 1 }}</el-text>
            </el-card>
          </div>
        </div>
      </template>

      <template #footer>
        <div class="footer-buttons">
          <el-button type="primary">导出数据</el-button>
          <el-button type="success">清空数据</el-button>
        </div>
      </template>
    </el-card>
  </el-dialog>
</template>


<script lang="ts" setup>
import { ElMessage, ElMessageBox } from "element-plus";
import { reactive, ref } from "vue";
import router from "../../router";
import { useWebSocket } from "./api";
import type { Comment, Note } from "./data";
//基础地址
const base_url = ref("https://www.xiaohongshu.com/explore/");
//视频信息类型
const noteData = ref<Note[]>([]);
const pagedNoteData = ref<Note[]>([]); // 分页后的数据
//评论信息类型
const commentData = ref<Comment[]>([]);
const pageCommentData = ref<Comment[]>([]); //分页后的数据
//分页参数
const currentPage = ref(1);
const pageSize = ref(5);
//评论的分页
const currentPage1 = ref(1);
const pageSize1 = ref(5);

//表格加载组件
const loading1 = ref(false)

const handleCurrentChange = () => {
  const startIndex = (currentPage.value - 1) * pageSize.value;
  const endIndex = startIndex + pageSize.value;
  pagedNoteData.value = noteData.value.slice(startIndex, endIndex);
};
const handleCurrentChange1 = () => {
  const startIndex = (currentPage1.value - 1) * pageSize1.value;
  const endIndex = startIndex + pageSize1.value;
  pageCommentData.value = commentData.value.slice(startIndex, endIndex);
};

// 监控button按钮
const isLoading = ref(false);
// 基础的视频链接
const back = () => {
  router.push("/login");
};

//定义类型
const query = reactive({
  url: "",
  keyword: "",
  token: ""
});


//获取视频信息的接口
const GetNotesInfos = async () => {
  noteData.value = [];
  pagedNoteData.value = [];
  loading1.value=true
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
        loading1.value=false
        ElMessage.success("数据加载完成!!!");
        //关闭连接
        socket.close();
      }
        // 处理每条接收到的数据
      // noteData.value.push(data);
      else if (data === "Invalid credentials") {
        isLoading.value = false;
        loading1.value=false
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
        loading1.value=false
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
      loading1.value=false
      ElMessage.error("数据加载失败,请重试!!!");
    },
    onClose: () => {
      isLoading.value = false;
      loading1.value=false
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
//获取评论信息的接口
const GetCommentInfos = async () => {
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


const dialogTableVisible = ref(false);


</script>

<style scoped>
.sub-cards-container {
  white-space: nowrap;
  overflow-x: auto;
}

.item-container {
  display: inline-block;
  width: 150px; /* 调整卡片的宽度，根据需要调整 */
  margin-right: 10px; /* 调整子卡片之间的间距，根据需要调整 */
}

.section {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.section .table-container {
  flex: 1;
  margin-right: 20px;
}

.section .config-container {
  display: flex;
  align-items: center;
}

/* 在窗口宽度小于600px时调整样式 */
@media (max-width: 600px) {
  .section {
    flex-direction: column;
  }

  .section .config-container {
    flex-direction: column;
    align-items: flex-start;
  }
}

/* 设置根元素的最小宽度为600px */
body {
  min-width: 600px;
}

.box-card {
  display: flex;
  flex-direction: column;
}

.footer-buttons {
  margin-top: auto; /* 将底部按钮推到底部 */
  display: flex;
  justify-content: flex-end; /* 右对齐 */
}

.inner-card {
  margin-bottom: 10px;
  height: 150px;
}

.container-tage {
  display: flex;
  flex-direction: row; /* 或者试试 row-reverse */
  align-items: flex-start;
}

.container-tage .demo-tabs {
  margin-left: auto; /* 将 Tabs 放置在右边 */
}
</style>
