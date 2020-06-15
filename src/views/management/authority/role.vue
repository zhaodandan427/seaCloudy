<template>
  <div class="role-warp">
    <div class="common-title">
      <h3>角色管理</h3>
    </div>
    <div class="role-warp-content">
      <div class="options clearfix">
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
          <el-button type="danger" size="mini" @click="handleModify(null)" plain>添加</el-button>
        </div>
      </div>
      <div class="table">
        <el-table :data="listData" border style="width: 100%">
          <el-table-column type="index" label="序号" width="40"></el-table-column>
          <el-table-column prop="role_name" label="角色名称" width="180"></el-table-column>
          <el-table-column prop="role_function" label="职能描述"></el-table-column>
          <el-table-column prop="pcount" label="成员数量" width="50"></el-table-column>
          <el-table-column prop="create_time" label="添加时间" width="160px"></el-table-column>
          <el-table-column label="是否启用" width="80px">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.status"
                on-color="#13ce66"
                :active-value="0"
                off-color="#F04134"
                :inactive-value="1"
                @change="handleUpdateStatus(scope.row)"
              ></el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="170px">
            <template slot-scope="scope">
              <el-button type="text" @click="handleRoleSetup(scope.row)">权限设置</el-button>
              <el-button type="text" @click="handleModify(scope.row)">编辑</el-button>
              <el-button type="text" @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination-warp">
          <div class="pagination-box-left">
            共
            <span class="common-red-color">{{pagination.pages}}</span>页/
            <span class="common-red-color">{{pagination.total}}</span>条数据
          </div>
          <div class="pagination-box-right">
            <el-pagination
              @current-change="handleCurrentChange"
              :current-page.sync="params.pageNum"
              :page-size="params.pageSize"
              layout="prev, pager, next"
              :total="pagination.total"
            ></el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RoleSetUp from "@/views/management/authority/component/RoleSetUp";
import {
  getRoleList,
  deleteRole,
  updateRoleStatus
} from "../../../api/management/authority/role";
export default {
  name: "",
  data() {
    return {
      listData: [],
      roleId: "",
      params: {
        pageNum: "1",
        pageSize: "10",
        orderBy: "0"
      },
      pagination: {
        //分页参数
        total: 0,
        pages: 0
      },
      dialogFormVisible: false
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
      getRoleList(this.params)
        .then(res => {
          this.listData = res.list;
          this.pagination.pageNum = res.pageNum;
          this.pagination.pageSize = res.pageSize;
          this.pagination.pages = res.pages;
          this.pagination.total = res.total;
          this.$message({
            message: "加载成功",
            duration: 2000,
            type: "success"
          });
        })
        .catch(function(res) {
          this.$message.error(res);
        });
    },
    handleDelete(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteRole({
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
      this.$router.push({ path: "/role-modify", query: { id: id } });
    },
    handleRoleSetup(data) {
      this.$router.push({ path: "/role-setup", query: { roleid: data.id } });
    },
    handleUpdateStatus(data) {
      updateRoleStatus({
        id: data.id,
        status: data.status
      })
        .then(res => {
          console.log(res);
          this.getList();
          this.$message({
            message: res,
            duration: 2000,
            type: "success"
          });
        })
        .catch(res => {
          this.$message.error(res);
        });
    },
    handleCurrentChange(data) {
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
    RoleSetUp
  }
};
</script>

<style scoped lang="scss" type="text/scss">
.role-warp {
  background-color: #ffffff;
  .role-warp-content {
    padding: 0 20px;
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
</style>