<template>
    <div class="member-warp">
        <div class="common-title">
            <h3 v-if="type==1">查看</h3>
            <h3 v-if="type==2">编辑</h3>
            <h3 v-if="type==3">新增</h3>
        </div>
        <div class="member-warp-content">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                <el-form-item label="照片" prop="universitiesPicture">
                    <upload v-model="ruleForm.universitiesPicture" :fileList="fileList" :flag="flag2" :limit="1" @fileChange2="fileChange2"></upload>
                </el-form-item>
                <el-form-item label="高校名称" prop="universitiesName">
                    <el-input v-model="ruleForm.universitiesName"></el-input>
                </el-form-item>
                <el-form-item label="所属地区" prop="universitiesProvince">
                    <el-select :popper-append-to-body="false" @change="next" v-model="ruleForm.universitiesProvince" filterable placeholder="请选择">
                        <el-option
                                v-for="item in area1"
                                :key="item.value"
                                :label="item.label"
                                :value="item"

                        >
                        </el-option>
                    </el-select>
                    <el-select :popper-append-to-body="false" @change="next2" v-model="ruleForm.universitiesCity" filterable placeholder="请选择" @focus="newChange">
                        <el-option
                                v-for="item in area2"
                                :key="item.value"
                                :label="item.label"
                                :value="item">
                        </el-option>
                    </el-select>
                    <el-select :popper-append-to-body="false" @change="next3" v-model="ruleForm.universitiesCounty" filterable placeholder="请选择">
                        <el-option
                                v-for="item in area3"
                                :key="item.value"
                                :label="item.label"
                                :value="item">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label=" 学校简介" prop="universitiesBrief">
                    <el-input type="textarea" v-model="ruleForm.universitiesBrief"></el-input>
                </el-form-item>
                <el-form-item label="联系方式" prop="universitiesTelephone">
                    <el-input v-model="ruleForm.universitiesTelephone"></el-input>
                </el-form-item>
                <el-form-item label="主要研究方向" prop="researchDirection">
                    <el-input v-model="ruleForm.researchDirection"></el-input>
                </el-form-item>
                <el-form-item label="实验室图片" prop="labPicture">
                    <upload v-model="ruleForm.labPicture" :fileList="fileListMore" :flag="flag3" :limit="10" @fileChange3="fileChange3"></upload>
                </el-form-item>
                <el-form-item label=" 详细介绍" prop="textPart">
                    <el-input type="textarea" v-model="ruleForm.textPart"></el-input>
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
  import {SelectAreaList,insertZbUniversities,updateZbUniversities,zbUniversitiesselectInfoById,} from "../../api/talentUniversity/talentUniversity";
  import upload from "@/components/upload/upload";
  export default {
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
            if(value === "") {
            callback(new Error('请输入办公电话'))
            }else if(!this.$root.phone.test(value)) {
            callback(new Error("请输入正确的办公电话"));
             } else {
             callback();
        }
      };
      return{
        isShow:'',
        areavalue1:'',
        areavalue2:'',
        areavalue3:'',
        area1:[],
        area2:[],
        area3:[],
        radio: 1,
        flag2:2,
        flag3:3,
        fileList:[],
        fileListMore:[],
        ruleForm: {
          universitiesPicture:'',
          universitiesName:'',
          universitiesProvince:'',
          universitiesCity:'',
          universitiesCounty:'',
          universitiesBrief:'',
          universitiesTelephone:'',
          researchDirection:'',
          labPicture:'',
          textPart:'',
        },
        rules: {
          universitiesPicture:[
            { required: true, message: '请上传照片', trigger: 'change' },
          ],
          universitiesName: [
            { required: true, message: '请输入高校名称', trigger: 'blur' },
            { min: 0, max: 20, message: '长度不得超过20个汉字', trigger: 'blur' }
          ],
          universitiesProvince: [
            { required: true, message: '请输入所在省', trigger: 'blur' },
          ],
          universitiesCity: [
            { required: true, message: '请输入所在市', trigger: 'blur' },
          ],
          universitiesCounty: [
            { required: true, message: '请输入所在区', trigger: 'blur' },
          ],
          universitiesBrief: [
            { required: true, message: '请输入学校简介', trigger: 'blur' },
            { min: 0, max: 100, message: '长度不得超过100个汉字', trigger: 'blur' }
          ],
          universitiesTelephone: [{
            required: true,
            validator:validateebangong,
            trigger: ['change','blur']
          }],
          researchDirection: [
            { required: true, message: '请输入主要研究方向', trigger: 'blur' },
            { min: 0, max: 100, message: '长度不得超过100个汉字', trigger: 'blur' }
          ],
          labPicture:[
            { required: true, message: '请上传实验室图片', trigger: 'change' },
          ],
          textPart: [
            { required: true, message: '请输入详细介绍', trigger: 'blur' },
            { min: 0, max: 400, message: '长度不得超过400个汉字', trigger: 'blur' }
          ],
        },
        options: [],
        value: '',
        options1: [],
        value1: '',
        options2: [],
        value2: '',
        type: '',
      }
    },
    watch:{

    },
    mounted(){
      this.init()
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
      seeDetail(param){
        zbUniversitiesselectInfoById(param).then(res => {
          console.log('回显',res);
          this.ruleForm=res;
          //this.ruleForm.universitiesPicture=window.IMGURL+"/"+res.universitiesPicture
          this.fileList.push({url:window.IMGURL+"/"+res.universitiesPicture})
          //this.ruleForm.labPicture=window.IMGURL+"/"+res.labPictures
          let arrs=[]
          res.labPictures.forEach( (item,index) => {
            arrs.push({url:window.IMGURL+"/"+item})
          })
          this.fileListMore=arrs
        })
         .catch((res)=> {
           this.$message.error(res);
         })
      },
      newChange(){
        var str=''
        this.area1.forEach( (item,index) => {
          if(item.label==this.ruleForm.universitiesProvince){
            str=item.value;
          }
        })
        this.next({value:str,label:this.ruleForm.universitiesProvince})
      },
      getArea(params){
        SelectAreaList(params).then(res => {
          console.log('地区',res);
          let arr=[]
          res.forEach( (item,index) => {
            arr.push({value:item.code,label:item.shortName})
          })
          this.area1=arr;
        })
         .catch((res)=> {
           this.$message.error(res);
         })
      },
      next(code){
        this.ruleForm.universitiesProvince=code.label
        SelectAreaList({level:2,parentCode:code.value}).then(res => {
          console.log('地区2',res);
          let arr=[]
          res.forEach( (item,index) => {
            arr.push({value:item.code,label:item.shortName})
          })
          this.area2=arr;
          console.log('aaaaaaaaa',this.ruleForm.universitiesCity);
          this.ruleForm.universitiesCity=""
          this.ruleForm.universitiesCounty=""
        })
         .catch((res)=> {
           this.$message.error(res);
         })
      },
      next2(code){
        this.ruleForm.universitiesCity=code.label
        SelectAreaList({level:3,parentCode:code.value}).then(res => {
          console.log('地区3',res);
          let arr=[]
          res.forEach( (item,index) => {
            arr.push({value:item.code,label:item.shortName})
          })
          this.area3=arr;
          this.ruleForm.universitiesCounty=""
        })
         .catch((res)=> {
           this.$message.error(res);
         })
      },
      next3(code){
        this.ruleForm.universitiesCounty=code.label
      },

      init(){
        let param={level:1,parentCode:0}
        this.getArea(param);
      },
      back(){
        this.$router.push("/universityList")
      },
      fileChange2(val){
        console.log('val',val);
        this.ruleForm.universitiesPicture=val
      },
      fileChange3(val){
        this.ruleForm.labPicture=val
        /*console.log('val1',val);
        let newArr=val
        let str=''
        str=this.ruleForm.labPicture
        if(val.indexOf(',')){
          newArr=val.split(',');
          val.forEach( (item,index) =>{
            if(item !== 'undefined'){
              str+=item+','
            }
          })
          this.ruleForm.labPicture=str
        }else{

        }*/
      },
      update(){
        updateZbUniversities(this.ruleForm).then(res => {
          console.log('修改',res);
          if(res.code==200){
            this.$message.success("修改成功")
            this.$router.push("/universityList")
          }
        })
         .catch((res)=> {
           this.$message.error(res);
         })
      },
      commit(){
        insertZbUniversities(this.ruleForm).then(res => {
          console.log('新增',res);
          if(res.code==200){
            this.$message.success("新增成功")
            this.$router.push("/universityList")
          }
        })
         .catch((res)=> {
           this.$message.error(res);
         })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          console.log('valid',valid);
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
        .el-select{
            width: 30%;
        }
        .el-scrollbar {
            .el-scrollbar__wrap {
                overflow-x: scroll !important;
            }
        }
    }
</style>
