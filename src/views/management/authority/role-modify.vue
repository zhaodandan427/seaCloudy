<template>
    <div class="role-modify-warp common-bg-white">
        <div class="common-title"><h3>{{title}}</h3></div>
        <div style="padding: 10px 300px;">
            <el-form
                    :model="roleParams"
                    ref="roleParams"
                    :rules="rules"
                    label-width="100px" class="demo-ruleForm">
                <el-form-item
                        label="角色名称"
                        prop="roleName">
                    <el-input
                            placeholder="请输入角色名称"
                            maxlength="25"
                            show-word-limit
                            v-model="roleParams.roleName"></el-input>
                </el-form-item>
                <el-form-item
                        label="职能描述"
                        prop="roleFunction">
                    <el-input
                            placeholder="请输入职能描述"
                            type="textarea"
                            v-model="roleParams.roleFunction"
                            maxlength="100"
                            show-word-limit></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="goBack">取消</el-button>
                    <el-button type="primary" @click="submitForm('roleParams')">确认</el-button>
                    <el-button @click="resetForm('roleParams')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import { checkRoleName ,addRole , editRole ,getRoleById} from "../../../api/management/authority/role";
    import {name} from "../../../type/reg";

    export default {
        data() {
            var validateGovName = (rule, value, callback)=>{
                if(!value) {
                    callback(new Error('请输入角色名称'));
                } else if(!this.nameReg.test(value)) {
                    callback(new Error("请输入正确的角色名称"));
                } else {
                    checkRoleName({
                        roleName:value ,//部门名称
                    }).then(res => {
                        console.log(res);
                        callback();
                    })
                        .catch(res => {
                            callback(new Error(res));
                        })
                }
// http://192.168.19.34:8088/api/operate/bamSysRole/checkRoleName



            };
            return {
                title:'',
                nameReg:name,
                roleParams:{
                    roleName:'',
                    roleFunction:''
                },
                roleId:null,
                rules: {
                    roleName: [
                        { required: true, message: '请输入角色名字', trigger: 'blur' },
                       // { validator: validateGovName, trigger: 'blur' }
                    ],
                    roleFunction: [
                        { required: true, message: '请输入职能描述', trigger: 'blur' }
                    ]
                }
            };
        },
        created(){
            this.init();
        },
        methods: {
            init(){
                console.log();
                this.roleId = this.$route.query.id
                if(!this.$route.query.id){
                    this.title="添加角色";
                    // this.url=`/bamSysRole/insertBamSysRole`;
                    // this.roleParams={
                    //     roleName:this.roleParams.roleName ,//部门名称
                    //     roleFunction:this.roleParams.roleFunction, //职能描述
                    // }
                }else {
                    this.title="修改角色";
                    // this.url=`/bamSysRole/updateBamSysRole`;
                    // this.roleParams={
                    //     id:this.$route.query.id,
                    //     roleName:this.roleParams.roleName ,//部门名称
                    //     roleFunction:this.roleParams.roleFunction, //职能描述
                    // }
                    this.getRoleById(this.$route.query.id)
                }
            },
            submitForm(ref) {
                console.log( this.$refs[ref]);
                this.$refs[ref].validate((valid) => {
                    if (valid) {
                        if(!this.$route.query.id){
                            addRole(this.roleParams)
                                .then(res => {
                                    this.$message({
                                    message: res,
                                    duration: 2000,
                                    type: "success"
                                });
                                this.goBack();
                            })
                                .catch(res => {
                                    this.$message({
                                        message: res,
                                        center: true
                                    });
                                })
                        }else {
                            // debugger
                            editRole(this.roleParams)
                                .then(res => {
                                    // console.log(res)
                                    // this.$message({
                                    //     message: res.msg,
                                    //     duration: 2000,
                                    //     type: "success"
                                    // });
                                    this.goBack();
                                })
                                .catch(res => {
                                    this.$message({
                                        message: res,
                                        center: true
                                    });
                                })
                        }


                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            getRoleById(id){
                getRoleById({
                    id:id
                }).then(res=>{
                    console.log(res);
                    this.roleParams={
                        id:res.id,
                        roleName:res.role_name,//部门名称
                        roleFunction:res.role_function, //职能描述
                    }
                })
            },
            resetForm(ref) {
                this.$refs[ref].resetFields();
            },
            goBack(){
                this.$router.push('/role')
            }
        }
    }
</script>

<style scoped>

</style>