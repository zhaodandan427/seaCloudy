<template>
  <div class="member-warp">
    <div class="common-title">
      <h3>用户管理</h3>
    </div>
    <div class="member-warp-content">
      <div class="condition-box">
        <el-row>
          <el-col :span="8">
            <div class="condition-item">
              <label class="condition-item-title">用户名:</label>
              <div class="condition-item-info">
                <el-input size="medium" placeholder="请输入用户名 " v-model="params.userName" clearable></el-input>
              </div>
            </div>
          </el-col>
          <!--<el-col :span="8">-->
          <!--<div class="condition-item" >-->
          <!--<label class="condition-item-title">所属部门:</label>-->
          <!--<div class="condition-item-info">-->
          <!--<el-select size="medium"-->
          <!--clearable-->
          <!--filterable-->
          <!--v-model="params.govId" placeholder="请选择所属部门">-->
          <!--<el-option-->

          <!--v-for="item in departList"-->
          <!--:key="item.value"-->
          <!--:label="item.gov_name"-->
          <!--:value="item.id"></el-option>-->
          <!--</el-select>-->
          <!--</div>-->

          <!--</div>-->
          <!--</el-col>-->
          <el-col :span="8">
            <div class="condition-item">
              <el-button type="danger" size="medium" @click="handleSearch">查询</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="member-main">
        <div class="options">
          <div class="options-left el-float-left">
            <el-dropdown @command="handlePageSizeChange">
              <el-button type="info" size="mini" plain>
                显示条数
                <i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item :command="10">10</el-dropdown-item>
                <el-dropdown-item :command="20">20</el-dropdown-item>
                <el-dropdown-item :command="50">50</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

            <el-dropdown @command="handleOrderByChange">
              <el-button type="info" size="mini" plain>
                排序方式
                <i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="0">添加时间</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="options-right el-float-right">
            <el-button type="danger" size="mini" @click="handleModify()" plain>添加</el-button>
          </div>
        </div>
        <div class="table">
          <el-table :data="listData" tooltip-effect="dark" style="width: 100%" border>
            <el-table-column type="index" label="序号" width="40"></el-table-column>
            <el-table-column prop="user_name" label="用户名"></el-table-column>
            <el-table-column prop="real_name" label="姓名" show-overflow-tooltip></el-table-column>
            <el-table-column prop="email" label="邮箱地址" show-overflow-tooltip></el-table-column>
            <!--<el-table-column-->
            <!--prop="gov_name"-->
            <!--label="所属部门"-->
            <!--show-overflow-tooltip>-->
            <!--</el-table-column>-->
            <el-table-column prop="role_name" label="角色" show-overflow-tooltip></el-table-column>
            <el-table-column prop="create_time" label="添加时间" show-overflow-tooltip></el-table-column>
            <el-table-column prop="last_login_time" label="最后登录" show-overflow-tooltip></el-table-column>
            <el-table-column label="是否启用" width="80px">
              <template slot-scope="scope">
                <el-switch
                  v-model="scope.row.status"
                  on-color="#13ce66"
                  :active-value="0"
                  off-color="#F04134"
                  :inactive-value="1"
                  @change="handleUpdataStatus(scope.row)"
                ></el-switch>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="200px">
              <template slot-scope="scope">
                <el-button type="text" @click="handleModify(scope.row)">编辑</el-button>
                <el-button type="text" @click="handleDelete(scope.row)">删除</el-button>
                <el-button type="text" @click="handleInitialization(scope.row)">初始化密码</el-button>
              </template>
            </el-table-column>
          </el-table>
          <Pagination
            :total="params.total"
            :pages="params.pages"
            :pageSize="params.pageSize"
            :pageNum="params.pageNum"
            @pageChange="handleCurrentChange"
          ></Pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getMemberList,
  deleteMember,
  updateUserStatus,
  initPassWord
} from "../../../api/management/authority/member";
import Pagination from "../../../components/Pagination/index";
export default {
  name: "",
  data() {
    return {
      listData: [],
      params: {
        pageNum: 1,
        pageSize: 10,
        orderBy: "0",
        total: 0,
        pages: 0
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getList();
    },
    getList() {
      getMemberList(this.params)
        .then(res => {
          this.listData = res.list;
          this.params.pageNum = res.pageNum;
          this.params.pageSize = res.pageSize;
          this.params.pages = res.pages;
          this.params.total = res.total;

          this.$message({
            message: "加载成功",
            duration: 2000,
            type: "success"
          });
        })
        .catch(res => {
          this.$message.error(res);
        });
    },

    handleSearch() {
      this.getList();
    },
    handleDelete(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteMember({
            id: row.id,
            roleCode: row.role_code
          })
            .then(res => {
              this.getList();
              this.$message({
                message: res.msg,
                duration: 2000,
                type: "success"
              });
            })
            .catch(function(res) {
              this.$message({
                type: "error",
                message: res.msg
              });
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleModify(data) {
      console.log(data);
      var id = data ? data.id : null;
      this.$router.push({ path: "/member-modify", query: { id: id } });
    },
    handleInitialization(row) {
      initPassWord({
        id: row.id
      })
        .then(res => {
          this.$alert('初始化密码成功，初始密码为：123456', "提示", {
            confirmButtonText: "确定"
          });
          //
          // this.getList();
        })
        .catch(res => {
          this.$message.error(res);
        });
    },
    handleUpdataStatus(data) {
      updateUserStatus({
        id: data.id,
        status: data.status
      })
        .then(res => {
          console.log(res);
          this.getList();
        })
        .catch(res => {
          this.$message.error(res.msg);
        });
    },
    handleCurrentChange(data) {
      console.log(data);
      this.params.pageNum = data;
      this.getList();
    },
    handleOrderByChange(data) {
      this.params.orderBy = data;
      this.getList();
    },
    handlePageSizeChange(data) {
      this.params.pageSize = data;
      this.getList();
    }
  },
  components: {
    Pagination
  }
};
</script>

<style lang="scss" type="text/scss">
.member-warp {
  background-color: #ffffff;
  .member-warp-content {
    padding: 0 20px;
    .condition-box {
      padding-bottom: 20px;
      border-bottom: dashed 1px #d0d0d0;
      .condition-item {
        .condition-item-title {
          color: #999999;
          padding-right: 20px;
        }
        .condition-item-info {
          display: inline-block;
          width: 160px;
        }
      }
    }
    .member-main {
      .options {
        padding: 10px 0;
        .options-left {
          .el-dropdown {
            margin: 0 10px !important;
          }
        }
      }
    }
  }
}
</style>