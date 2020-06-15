<template>
  <el-upload
          class="upload-demo"
          :action="uploadPath"
          :show-file-list="true"
          :on-progress="onProgress"
          :on-remove="handleRemove"
          :limit="limit"
          :on-exceed="handleExceed"
          :on-success="handleSuccess"
          list-type="picture-card"
          :before-upload="beforeAvatarUpload"
          :file-list="fileList"
  >
    <el-button size="small" type="primary">
      上传
    </el-button>
    <slot></slot>
  </el-upload>
</template>

<script>
  //import * as $api from"@/api/basicInformation/basicInformation.js"
  //import { uploadfile } from "@/api/config";
  import { setToken, getToken , removeToken} from '../../tools/cookies'
  import { api } from "@/api/baseApi";
  import {getCookie} from '@/assets/js/common/tools'
  export default {
    name: 'upload1',
    props: {
      fileList: {
        type: Array,
        default:()=>{
          return []
        }
      },
      flag: {
        type: Number
      },
      limit:{
        type: Number
      }
    },
    data(){
      return{
        fileList2: "",
        fileList3: "",
        fileName:'',
        imageUrl: '',
        uploadPath:api.baseURL+api.uploadURL+'/fileoprator/uploadfile?Authorization='+getToken('token')
      }
    },
    watch:{
      fileList:function(val,oldVal) {
        //console.log('-----',val)
        this.fileList2 = JSON.parse(JSON.stringify(val))
        /*this.fileList2.forEach((item)=>{
          item.url = item.url.split(window.IMGURL+'')[1]
        })*/
        //console.log('---->>>>',this.fileList2)
        //this.fileList3 = JSON.parse(JSON.stringify(val))
      }
    },
    mounted(){
      //console.log('this.uploadPath',this.uploadPath);
      this.fileList2 = JSON.parse(JSON.stringify(this.fileList))
      /*this.fileList2.forEach((item)=>{
        item.url = item.url.split(window.IMGURL+'')[1]
      })*/
      //console.log('---->>',this.fileList2)
    },
    methods:{
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif' || file.type === 'image/bmp'|| file.type === 'image/jpg';
        const isLt2M = file.size / 1024 / 1024 < 5;

        if (!isJPG) {
          this.$message.error('上传图片只能是 JPG 或PNG,gif,bmp,jpg格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 5MB!');
        }
        return isJPG && isLt2M;
      },
      onProgress(event, file, fileList){
        this.fileName=file.name
      },
      //附件上传成功
      handleSuccess(res,file,fileList){
        console.log('附件上传成功',fileList,res,file);
        //let list = []
        let list=''
        fileList.forEach(item=>{
          if(item.response){
            list += item.response.data + ','
            /*list.push({
              name:item.name,
              url:item.response.data
            })*/
          }else if(item.path){
            list+=item.path+','
            /*list.push({
              name:item.name,
              url:item.path
            })*/
          }else{
            list+=item.url.split(window.IMGURL+'')[1]+','
          }

        })
        list = list.substring(0,list.lastIndexOf(','))
        console.log('list--------------',list);
        if(res.code == 200){
          if(this.flag==1){
            this.$emit('fileChange', list)
          }else if(this.flag==2){
            this.$emit('fileChange2', list)
          }else if(this.flag==3){
            this.$emit('fileChange3', list)
          }
          this.$message({
            message: '上传成功',
            type: 'success'
          });
        }
      },
      //删除附件
      handleRemove(file, fileList) {
        console.log('删除附件',file);
        this.fileList2 = fileList
        let list = JSON.parse(JSON.stringify(this.fileList2))
        list.forEach((item)=>{
          item.url = item.url.split(window.IMGURL+'')[1]
        })
        if(this.flag==1){
          this.$emit('fileChange', list)
        }else if(this.flag==2){
          this.$emit('fileChange2', list)
        }else if(this.flag==3){
          this.$emit('fileChange3', list)
        }
      },
      handlePreview(file) {

      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 ${fileList.length } 个文件，本次选择了 ${fileList.length} 个文件，共选择了 ${fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        const isType = file.type === 'image/png' || file.name.split('.')[1] === 'image/jpeg';
        const isSize=file.size / 1024 / 1024 < 5
        if(isType || isSize)return this.$confirm(`确定移除 ${ file.name }？`);
      },
    }
  }
</script>

<style scoped lang="scss">
  .el-upload--picture-card{
    border: 0 !important;
  }
  .avatar-uploader .el-upload {
    //border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  /*.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }*/
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    //line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

