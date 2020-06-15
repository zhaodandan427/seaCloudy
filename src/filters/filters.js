let orderStatus = value => {//订单状态
    let status = '';
    if (value == null || value == undefined) {
        status = ""
    } else {
        value = value.toString();
    }

    switch (value) {
        case "1":
            status = "待付定金";
            break;
        case "2":
            status = "卖家服务中";
            break;
        case "3":
            status = "待确认服务";
            break;
        case "4":
            status = "订单结束";
            break;
        case "5":
            status = "已取消";
            break;
        case "6":
            status = "退款成功";
            break;
        default:
            status = "";
    }
    return status;
}
let filterStoreStatus = value => {//店铺的审核状态
    let status = '';
    if (value == null || value == undefined) {
        status = ""
    } else {
        value = value.toString();
    }

    switch (value) {
        case "1":
            status = "待审核";
            break;
        case "2":
            status = "审核通过";
            break;
        case "3":
            status = "审核失败";
            break;
        default:
            status = "";
    }
    return status;
}
let filterGoodsAuditStatus = value => {//商品的审核状态
    let status = '';
    if (value == null || value == undefined) {
        status = ""
    } else {
        value = value.toString();
    }

    switch (value) {
        case "0":
            status = "未审核";
            break;
        case "1":
            status = "已通过";
            break;
        case "-1":
            status = "未通过";
            break;
        default:
            status = ""
    }

    return status;
}
let filterGoodsShelfStatus = value => {//商品的上架状态
    let status = '';
    if (value == null || value == undefined) {
        status = ""
    } else {
        value = value.toString();
    }
    switch (value) {
        case "0":
            status = "待上架";
            break;
        case "1":
            status = "已上架";
            break;
        case "-1":
            status = "已下架";
            break;
        default:
            status = ""
    }

    return status;
}
let filterUserStatus = value => {//用户状态
    let status = '';
    if (value == null || value == undefined) {
        status = ""
    } else {
        value = value.toString();
    }
    switch (value) {
        case "0":
            status = "待上架";
            break;
        case "1":
            status = "已上架";
            break;
        case "-1":
            status = "已下架";
            break;
        default:
            status = ""
    }

    return status;
}
let filterUserAllType = value => {//用户状态
    let status = '';
    if (value == null || value == undefined) {
        status = ""
    } else {
        value = value.toString();
    }
    switch (value) {
        case "1":
            status = "游客";
            break;
        case "2":
            status = "个人";
            break;
        case "3":
            status = "企业";
            break;
        case "4":
            status = "个人审核中";
            break;
        case "5":
            status = "企业审核中";
            break;
        case "6":
            status = "审核失败";
            break;
        default:
            status = ""
    }

    return status;
}
let filterUserType = value => {//用户状态
    let status = '';
    if (value == null || value == undefined) {
        status = ""
    } else {
        value = value.toString();
    }
    switch (value) {
        case "2":
            status = "个人";
            break;
        case "3":
            status = "企业";
            break;
        default:
            status = ""

    }

    return status;
};

let filterAuditUserStatus = value => {//用户状态
    let status = '';
    if (value == null || value == undefined) {
        status = ""
    } else {
        value = value.toString();
    }
    switch (value) {
        // case "0" :
        //     status="未审核";
        //     break ;
        case "1":
            status = "已通过";
            break;
        case "2":
            status = "未通过";
            break;
        default:
            status = ""

    }
    return status;
}


let filterPriceStatus = value => {//用户状态
    let status = '';
    if (value == null || value == undefined) {
        status = ""
    } else {
        value = value.toString();
    }
    switch (value) {

        case "-1":
            status = "面议";
            break;
        default:
            status = "￥" + value

    }
    return status;
}
let requireStatus = value => {//订单状态
    let status = '';
    if (value == null || value == undefined) {
        status = ""
    } else {
        value = value.toString();
    }

    switch (value) {
        case "0":
            status = "草稿";
            break;
        case "1":
            status = "待审核";
            break;
        case "2":
            status = "审核未通过";
            break;
        case "3":
            status = "待托管资金";
            break;
        case "4":
            status = "待发布";
            break;
        case "5":
            status = "报名中";
            break;
        case "6":
            status = "平台筛选";
            break;
        case "7":
            status = "待二次托管资金";
            break;
        case "8":
            status = "工作中";
            break;
        case "9":
            status = "待平台验收";
            break;
        case "10":
            status = "待需方验收";
            break;
        case "11":
            status = "已验收待付款";
            break;
        case "12":
            status = "二次工作中";
            break;
        case "13":
            status = "待评价";
            break;
        case "14":
            status = "交易取消";
            break;
        case "15":
            status = "交易成功";
            break;
        case "16":
            status = "待退款";
            break;
        case "17":
            status = "删除";
            break;
        case "18":
            status = "取消";
            break;
        case "19":
            status = "到期";
            break;
        case "20":
            status = "违约失败";
            break;
        default:
            status = "";
    }
    return status;
}
let serviceStatus = value => {//类型
    let status = '';
    if (value == null || value == undefined) {
        status = ""
    } else {
        value = value.toString();
    }
    switch (value) {
        case "2":
            status = "个人";
            break;
        case "4":
            status = "企业";
            break;
        default:
            status = "其他"
    }
    return status;
}
let serviceexamineStatus = value => {//类型
    let status = '';
    if (value == null || value == undefined) {
        status = ""
    } else {
        value = value.toString();
    }
    switch (value) {
        case "0":
            status = "未认证";
            break;
        case "1":
            status = "审核中";
            break;
        case "2":
            status = "已认证";
            break;
        case "3":
            status = "认证失败";
            break;
        default:
            status = ""
    }
    return status;
}
let eduStatus = value => {//学历 1大专 2本科 3硕士 4博士
    let status = '';
    if (value == null || value == undefined) {
        status = ""
    } else {
        value = value.toString();
    }
    switch (value) {
        case "1":
            status = "大专";
            break;
        case "2":
            status = "本科";
            break;
        case "3":
            status = "硕士";
            break;
        case "4":
            status = "博士";
            break;
        default:
            status = ""
    }
    return status;
}

let reqDetailStatus = value => {//需求详情状态
    let status = '';
    if (value == null || value == undefined) {
        status = ""
    } else {
        value = value.toString();
    }
    switch (value) {
        case "0":
            status = "已报名";
            break;
        case "1":
            status = "已被选中(工作中)";
            break;
        case "2":
            status = "未中标";
            break;
        case "3":
            status = "评审中";
            break;
        case "4":
            status = "验收中";
            break;
        case "5":
            status = "待付款";
            break;
        case "6":
            status = "待评价";
            break;
        case "7":
            status = "驳回失败（交易取消）";
            break;
        case "8":
            status = "交易完成";
            break;
        case "9":
            status = "违约失败（交易取消）";
            break;
        default:
            status = ""
    }
    return status;
}

let listStatus = value => {//需求详情状态
    let status = '';
    if (value == null || value == undefined) {
        status = ""
    } else {
        value = value.toString();
    }
    switch (value) {
        case "1":
            status = "去审核";
            break;
        case "4":
            status = "去发布";
            break;
        case "5":
            status = "查看";
            break;
        case "6":
            status = "资格筛选";
            break;
        case "9":
            status = "去验收";
            break;
        case "11":
            status = "去付款";
            break;
        case "16":
            status = "退款";
            break;
        case "14":
            status = "查看";
            break;
        case "15":
            status = "查看";
            break;
        default:
            status = ""
    }
    return status;
}
let reqType = value => {//需求类型
    let status = '';
    if (value == null || value == undefined) {
        status = ""
    } else {
        value = value.toString();
    }
    switch (value) {
        case "1":
            status = "找高校";
            break;
        case "2":
            status = "找专家";
            break;
        case "3":
            status = "联合开发";
            break;
        case "4":
            status = "定制开发";
            break;
        default:
            status = ""
    }

    return status;
}
let checkedStatus = value => {//订单状态
    let status = '';
    if (value == null || value == undefined) {
        status = ""
    } else {
        value = value.toString();
    }

    switch (value) {
        case "0":
            status = "待评审状态";
            break;
        case "1":
            status = "平台审核通过";
            break;
        case "2":
            status = "平台审核不通过";
            break;
        case "3":
            status = "需方审核通过";
            break;
        case "4":
            status = "需方审核不通过";
            break;
        case "5":
            status = "需方审核驳回";
            break;
        default:
            status = "";
    }
    return status;
}

let commentUserType = value => {//用户评价类型
    let status = '';
    if (value == null || value == undefined) {
        status = ""
    } else {
        value = value.toString();
    }
    switch (value) {
        case "2":
            status = "需求方对服务商的评价";
            break;
        case "1":
            status = "服务商对需求方的评价";
            break;
        default:
            status = ""
    }
    return status;
}
let shenHeType = value => {//审核状态
  let status = '';
  if (value == null || value == undefined) {
    status = ""
  } else {
    value = value.toString();
  }
  switch (value) {

    case "2":
      status = "审核成功";
      break;
    case "3":
      status = "审核成功";
      break;
    case "6":
      status = "审核失败";
      break;
    default:
      status = ""
  }

  return status;
}
export {
  shenHeType,
    filterUserAllType,
    filterUserType,
    filterGoodsShelfStatus,
    filterGoodsAuditStatus,
    filterAuditUserStatus,
    filterStoreStatus,
    orderStatus,
    filterPriceStatus,
    serviceStatus,
    serviceexamineStatus,
    eduStatus,
    requireStatus,
    reqDetailStatus,
    listStatus,
    reqType,
    checkedStatus
    , commentUserType
}
