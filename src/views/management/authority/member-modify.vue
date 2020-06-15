<template>
    <div class="member-modify-warp common-bg-white">
        <div class="common-title"><h3>{{title}}</h3></div>
        <div style="padding: 10px 300px;">
            <el-form :model="memberParams" :rules="rules"  ref="memberParams" label-width="100px" class="demo-ruleForm">
                <el-form-item
                        label="用户名"
                        prop="userName"
                        ref="userName"
                        
                        v-if="!flag">
                    <el-input v-model="memberParams.userName" maxlength="50" show-word-limit></el-input>
                </el-form-item>
                <el-form-item label="成员姓名" prop="realName">
                    <el-input v-model="memberParams.realName" maxlength="50"
                              show-word-limit></el-input>
                </el-form-item>
                <el-form-item label="成员性别" prop="sex">
                    <el-radio-group v-model="memberParams.sex">
                        <el-radio :label="0">男</el-radio>
                        <el-radio :label="1">女</el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="邮箱地址"
                              prop="email">
                    <el-input v-model="memberParams.email"></el-input>
                </el-form-item>

                <el-form-item label="手机号码"
                              prop="mobilePhone">
                    <el-input v-model="memberParams.mobilePhone"></el-input>
                </el-form-item>
                <!--<el-form-item label="所属部门" prop="govId">-->
                    <!--<el-select v-model="memberParams.govId"-->
                               <!--clearable-->
                               <!--filterable-->
                               <!--placeholder="请选择所属部门">-->
                        <!--<el-option v-for="item in departList"-->
                                   <!--:key="item.value"-->
                                   <!--:label="item.gov_name"-->
                                   <!--:value="item.id"></el-option>-->

                    <!--</el-select>-->
                <!--</el-form-item>-->
                <el-form-item label="所属角色" prop="roleId">
                    <el-select v-model="memberParams.roleId"
                               clearable
                               filterable
                               placeholder="请选择所属角色">
                        <el-option v-for="item in roleList"
                                   :key="item.value"
                                   :label="item.role_name"
                                   :value="item.id"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="登录密码" prop="password" v-if="!flag">
                    <el-input v-model="memberParams.password"  type="password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="repassword" v-if="!flag">
                    <el-input v-model="memberParams.repassword" type="password"  autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="备注信息" prop="comment">
                    <el-input type="textarea" v-model="memberParams.comment"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="goBack">取消</el-button>
                    <el-button type="primary" @click="submitForm('memberParams')">确认</el-button>
                    <el-button @click="resetForm('memberParams')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {getOnRoleList} from "../../../api/management/authority/role";
    import {getMemberList,checkMemberName,editMember,addMember} from "../../../api/management/authority/member";
    import {phone,name} from "../../../type/reg";

    export default {
        data() {
            var validateMemberName = (rule, value, callback)=>{
                if(!value) {
                    callback(new Error('请输入用户名'));
                } else if(!this.nameReg.test(value)) {
                    callback(new Error("请输入正确的用户名"));
                } else {
                    checkMemberName({
                        uName:value ,//部门名称

                    }).then(res => {
                        callback();
                    })
                        .catch(res => {
                            callback(new Error(res));
                        })

                }

            };
            var validateRealName = (rule, value, callback)=>{
                if(!value) {
                    callback(new Error('请输入用户名'));
                } else if(!this.nameReg.test(value)) {
                    callback(new Error("请输入正确的用户名"));
                } else {
                    callback();
                }

            };

            var validatePhone = (rule, value, callback) => {
                if(!value) {
                    callback(new Error('请输入手机号'));
                } else if(!this.phoneReg.test(value)) {
                    callback(new Error("请输入正确的手机号"));
                } else {
                    callback();
                }
            };

            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.memberParams.repassword !== '') {
                        this.$refs.memberParams.validateField('repassword');
                    }
                    callback();
                }
            };
            var validateRePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.memberParams.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                title:'',
                flag:null,
                phoneReg:phone,
                nameReg:name,
                departList:[],
                roleList:[],
                memberParams:{
                    userName:'',
                    realName:'',
                    sex:'',
                    email:'',
                    mobilePhone:'',
                    // govId:'',
                    roleId:'',
                    password:'',
                    repassword:'',
                    comment:''
                },
                rules: {
                    userName: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { validator: validateMemberName, trigger: 'blur' }
                    ],
                    realName: [
                        { required: true, message: '请输入成员姓名', trigger: 'blur' },
                        { validator: validateRealName, trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                    ],
                    mobilePhone: [
                        { required: true, message: '请输入手机号码', trigger: 'blur' },
                        { validator: validatePhone, trigger: 'blur' }

                    ],
                    roleId: [
                        { required: true, message: '请选择所属角色', trigger: 'blur' }
                    ],
                    password:[
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { validator: validatePass, trigger: 'blur' },
                        { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }

                    ],
                    repassword:[
                        { required: true, message: '请再次输入密码', trigger: 'blur' },
                        { validator: validateRePass, trigger: 'blur' },
                        { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }

                    ]
                }
            };
        },
        mounted(){
            this.init();


        },
        methods: {
            init(){
                // this.getDepartList();
                this.getRoleList();
                console.log("kankannimen");
                this.flag=this.$route.query.id;
                console.log(this.flag);
                console.log(this.$route.query.id);
                if(!this.flag){
                    this.title="添加成员";
                    // this.memberParams={
                    //     userName:this.memberParams.userName ,//用户名/账号
                    //     realName:this.memberParams.realName ,//成员姓名
                    //     sex:this.memberParams.sex ,//成员性别
                    //     email:this.memberParams.email, //邮箱地址
                    //     mobilePhone:this.memberParams.phone, //手机
                    //     govId:this.memberParams.govId, //所属部门
                    //     roleId:this.memberParams.roleId, //所属角色
                    //     password:this.memberParams.password, //登录密码
                    //     repassword:this.memberParams.repassword, //重复登录密码
                    //     comment:this.memberParams.comment, //备注信息
                    // }
                }else {
                    this.title="修改成员";
                    this.getMemberById(this.flag);
                    this.$refs.memberParams.clearValidate('userName');
                    this.$refs.memberParams.clearValidate('password');
                    this.$refs.memberParams.clearValidate('repassword');
                }
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if(!this.flag){
                            addMember(this.memberParams).then(res => {
                                this.goBack();
                                this.$message({
                                    message: "操作成功",
                                    duration: 2000,
                                    type: "success"
                                });

                            }).catch(res => {
                                    this.$message.error(res);

                                })
                        }else {
                            editMember(this.memberParams).then(res => {
                                    this.goBack();
                                    this.$message({
                                        message: res,
                                        duration: 2000,
                                        type: "success"
                                    });

                            })
                                .catch(res => {
                                    this.$message.error(res);

                                })
                        }

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            getDepartList(){
                this.api.post(`/bamSysGov/queryOnList`,)
                    .then(res=>{
                        if (res.code == 1){
                            this.departList=res.data;
                            this.$message({
                                message: res.msg,
                                duration: 2000,
                                type: "success"
                            });
                        }else {
                            this.$message.error(res.msg);
                        }

                    })
                    .catch(res=> {
                        this.$message.error(res.msg);

                    })
            },
            getRoleList(){//得到角色列表
                getOnRoleList()
                    .then(res => {this.roleList = res ;})
                    .catch(res => {
                        this.$message.error(res);
                    })
            },
            getMemberById(id){//通过id得到成员信息
                getMemberList({
                    id:id
                }).then(res => {
                        var info = res.list[0];
                        this.memberParams={
                                id:id,
                                realName:info.real_name,
                                sex:info.sex,
                                email:info.email,
                                mobilePhone:info.mobile_phone,
                                // govId:info.gov_id,
                                roleId:info.role_id,
                                comment:info.comment
                        }

                    })
                    .catch( (res) => {
                        this.$message.error(res);
                    })
            },
            goBack(){
                this.$router.push('/member')
            }
        }
    }
</script>

<style scoped>

</style>