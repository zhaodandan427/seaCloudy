<template>
    <div class="member-warp">
        <div class="common-title">
            <h3 v-if="type==1">查看</h3>
            <h3 v-if="type==2">编辑</h3>
            <h3 v-if="type==3">新增</h3>
        </div>
        <div class="member-warp-content">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                <el-form-item label="照片" prop="expertPicture">
                    <upload v-model="ruleForm.expertPicture" :fileList="fileList" :flag="flag1" :limit="1" @fileChange="fileChange"></upload>
                </el-form-item>
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="职称" prop="professional">
                    <el-select v-model="ruleForm.professional" filterable placeholder="请选择" :popper-append-to-body="false">
                        <el-option
                                v-for="item in options2"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-radio v-model="ruleForm.sex" label="男">男</el-radio>
                    <el-radio v-model="ruleForm.sex" label="女">女</el-radio>
                </el-form-item>
                <el-form-item label="电子邮件" prop="eemail">
                    <el-input v-model="ruleForm.eemail"></el-input>
                </el-form-item>
                <el-form-item label="工作单位" prop="workerUnit">
                    <el-input v-model="ruleForm.workerUnit"></el-input>
                </el-form-item>
                <el-form-item label="单位地址" prop="addressUnit">
                    <el-input v-model="ruleForm.addressUnit"></el-input>
                </el-form-item>
                <el-form-item label="现从事专业" prop="nowMajor">
                    <el-select v-model="ruleForm.nowMajor" filterable placeholder="请选择" :popper-append-to-body="false">
                        <el-option
                                v-for="item in options4"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="办公电话" prop="officePhone">
                    <el-input v-model="ruleForm.officePhone"></el-input>
                </el-form-item>
                <el-form-item label="学历" prop="education">
                    <el-select v-model="ruleForm.education" filterable placeholder="请选择" :popper-append-to-body="false">
                        <el-option
                                v-for="item in options3"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="手机" prop="telephone">
                    <el-input v-model="ruleForm.telephone"></el-input>
                </el-form-item>
                <el-form-item label=" 专家自我简介" prop="expertIntroduce">
                    <el-input type="textarea" v-model="ruleForm.expertIntroduce"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button v-if="isShow" type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <!--<el-button v-if="isShow" @click="resetForm('ruleForm')">取消</el-button>-->
                    <el-button @click="back">返回</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>

<script>
  import { insertZbTalents,selectInfoById,updateZbTalents } from "../../api/talentUniversity/talentUniversity";
  import upload from "@/components/upload/upload";
  import Mixin from "@/assets/mixins/Mixin.js";
  export default {
    mixins:[Mixin],
    name: "",
    components:{
      upload
    },
    data(){
      var validatemobilephone= (rule, value, callback) => {
        if(value) {
          if(!this.$root.mobilephoneReg.test(value)) {
            callback(new Error("请输入正确的手机号"));
          }else{
            callback();
          }
        } else {
          callback();
        }
      };
      var validateemail= (rule, value, callback) => {
        if(value) {
          if (value.length > 18) {
            callback(new Error('邮箱字符长度不能超过18个字符'));
          }
          if(!this.$root.email.test(value)) {
            callback(new Error("请输入正确的邮箱"));
          }else{
            callback();
          }
        } else{
          callback();
        }
      };
      var validateebangong= (rule, value, callback) => {
        if(value) {
          if(!this.$root.phone.test(value)) {
            callback(new Error("请输入正确的办公电话"));
          }else{
            callback();
          }
        } else{
          callback();
        }
      };
      return{
        isShow:'',
        flag1:1,
        fileList:[],
        ruleForm: {
          expertPicture:'',
          name: '',
          professional: '',
          sex: '男',
          eemail: '',
          workerUnit: '',
          addressUnit: '',
          nowMajor: '',
          officePhone: '',
          education: '',
          telephone: '',
          expertIntroduce: '',
        },
        rules: {
          expertPicture:[
            { required: true, message: '请上传照片', trigger: 'change' },
          ],
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 0, max: 10, message: '长度不得超过10个汉字', trigger: 'blur' }
          ],
          professional: [
            { required: true, message: '请输入职称', trigger: 'blur' },
            { min: 0, max: 50, message: '长度不得超过50个汉字', trigger: 'blur' }
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'blur' },
          ],
          eemail: [{
            validator:validateemail,
            trigger: ['change','blur']
          }],
          workerUnit: [
            { required: true, message: '请输入工作单位', trigger: 'blur' },
            { min: 0, max: 20, message: '长度不得超过20个汉字', trigger: 'blur' }
          ],
          addressUnit: [
            { required: true, message: '请输入单位地址', trigger: 'blur' },
            { min: 0, max: 50, message: '长度不得超过50个汉字', trigger: 'blur' }
          ],
          nowMajor: [
            { required: true, message: '请输入现从事专业', trigger: 'blur' },
          ],
          officePhone: [{
            validator:validateebangong,
            trigger: ['change','blur']
          }],
          education: [
            { required: true, message: '请选择学历', trigger: 'blur' },
          ],
          telephone: [{
            validator:validatemobilephone,
            trigger: ['change','blur']
          }],
          expertIntroduce: [
            { min: 0, max: 400, message: '长度不得超过400个汉字', trigger: 'blur' }
          ],
        },
        options2: [],
        options3: [],
        options4: [],
        type:''
      }
    },
    watch:{

    },
    mounted(){
      let param=this.$route.query.id;
      this.type=this.$route.query.type;
      if(this.type && this.type ==1){
        this.isShow=false
      }else {
        this.isShow=true
      }
      if(param){
        this.seeDetail({id:param})
      }
    },
    methods:{
      update(){
        updateZbTalents(this.ruleForm).then(res => {
          console.log('修改',res);
          if(res.code==200){
            this.$message.success("修改成功")
            this.$router.push("/talentList")
          }
        })
         .catch((res)=> {
           this.$message.error(res);
         })
      },
      commit(){
        insertZbTalents(this.ruleForm).then(res => {
          console.log('新增',res);
          if(res.code==200){
            this.$message.success("新增成功")
            this.$router.push("/talentList")
          }
        })
         .catch((res)=> {
           this.$message.error(res);
         })
      },
      seeDetail(param){
        selectInfoById(param).then(res => {
          console.log('回显',res);
          this.ruleForm=res.data;
          //this.ruleForm.expertPicture=window.IMGURL+"/"+this.ruleForm.expertPicture
          this.fileList.push({url:window.IMGURL+"/"+this.ruleForm.expertPicture})
        })
         .catch((res)=> {
           this.$message.error(res);
         })
      },
      back(){
        this.$router.push("/talentList")
      },
      fileChange(val){
        this.ruleForm.expertPicture=val
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if(this.$route.query.id){
              this.ruleForm.id=this.$route.query.id
              this.update()
            }else{
              this.commit()
            }

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
    .member-warp{
        .el-form{
            width: 500px;
            margin: 0 auto;
            .demo-ruleForm{
            }
        }
        .el-form-item__content{
            width: 300px;
        }
        .el-input{
            width: 300px;
        }
        .el-col{
            margin-bottom: 20px;
        }
        background-color: #ffffff;
        .member-warp-content{
            padding: 0 20px;
            //text-align: center;
        }
    }
</style>
<style lang="scss">
    .member-warp {
        .el-scrollbar {
            .el-scrollbar__wrap {
                overflow-x: scroll !important;
            }
        }
    }
</style>
