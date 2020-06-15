import { selectList} from "../../api/talentUniversity/talentUniversity";
export default{
  data(){
    return{
      //defaultImg: require('@/assets/img/list/defaultImg.png'),
    }
  },
  mounted(){
    this.getSelect()
  },
  methods: {
    getSelect(){
      //1地区，2职称，3学历，4专业
      for (let i = 2; i < 5; i++) {
        selectList({tyoeId:i}).then(res => {
          //console.log('专家页面根据id下拉查询',res);
          if(i==2){
            let arr=[]
            res.forEach( (item,index) =>{
              arr.push({value:item,label:item})
            })
            this.options2=arr
          }else if(i==3){
            let arr=[]
            res.forEach( (item,index) =>{
              arr.push({value:item,label:item})
            })
            this.options3=arr
          }else if(i==4){
            let arr=[]
            res.forEach( (item,index) =>{
              arr.push({value:item,label:item})
            })
            this.options4=arr
          }
        })
         .catch((res)=> {
           this.$message.error(res);
         })
      }

    },
  }
}
