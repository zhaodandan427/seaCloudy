const layout = () => import("../views/layout/index.vue");
const layoutCrumb = () => import("../views/layout/layout-crumb.vue");
const layoutsub = () => import("../views/management/index.vue");

/* 需要权限判断的路由 */
const dynamicRoutes = [
  {
    path: "/adminConsole", //订单管理
    name: "adminConsole",
    component: layoutCrumb,
    meta: {
      name: "管理控制台",
      icon: "icon-email"
    },
    hidden: false,
    children: [
      {
        path: "/adminConsole-list",
        name: "adminConsole-list",
        meta: {
          name: "管理控制台",
          icon: "icon-email"
        },
        hidden: false,
        component: () => import("../views/adminConsole/adminConsole.vue")
      }
    ]
  },
  {
    path: "/goods", //商品管理
    name: "goods",
    component: layoutCrumb,
    meta: {
      name: "商品管理",
      icon: "icon-email"
    },
    hidden: false,
    children: [
      {
        path: "/goods-list",
        name: "goods-list",
        meta: {
          name: "商品查询",
          icon: "icon-email"
        },
        hidden: false,
        component: () => import("../views/goods/list.vue")
      },
      {
        path: "/goods-details",
        name: "goods-details",
        meta: {
          name: "商品详情",
          icon: "icon-email"
        },
        hidden: true,
        component: () => import("../views/goods/details.vue")
      },
      {
        path: "/goods-examine",
        name: "goods-examine",
        meta: {
          name: "商品审核",
          icon: "icon-email"
        },
        hidden: true,
        component: () => import("../views/goods/examine-goods.vue")
      },
      {
        path: "/stayOnShelf",
        name: "stayOnShelf",
        meta: {
          name: "待上架资源",
          icon: "icon-email"
        },
        hidden: false,
        component: () => import("../views/goods/list-stayOnShelf.vue")
      },

      {
        path: "/onShelf",
        name: "onShelf",
        meta: {
          name: "已上架资源",
          icon: "icon-email"
        },
        hidden: false,
        component: () => import("../views/goods/list-onShelf.vue")
      }
    ]
  },
  {
    path: "/user", //用户管理
    name: "user",
    component: layoutCrumb,
    meta: {
      name: "用户管理",
      icon: "icon-email"
    },
    hidden: false,
    children: [
      {
        path: "/user-list",
        name: "user-list",
        meta: {
          name: "用户查询",
          icon: "icon-email"
        },
        hidden: false,
        component: () => import("../views/user/user-list.vue")
      },
      {
        path: "/user-details",
        name: "user-details",
        meta: {
          name: "用户详情",
          icon: "icon-email"
        },
        hidden: true,
        component: () => import("../views/user/details.vue")
      },
      {
        path: "/user-examine",
        name: "user-examine",
        meta: {
          name: "用户审核",
          icon: "icon-email"
        },
        hidden: false,
        component: () => import("../views/user/user-examine.vue")
      },
      {
        path: "/examine-details",
        name: "examine-details",
        meta: {
          name: "审核详情",
          icon: "icon-email"
        },
        hidden: true,
        component: () => import("../views/user/examine-details.vue")
      },
      {
        path: "/examine-record",
        name: "examine-record",
        meta: {
          name: "审核记录",
          icon: "icon-email"
        },
        hidden: false,
        component: () => import("../views/user/examine-record.vue")
      },

      {
        path: "/record-details",
        name: "record-details",
        meta: {
          name: "审核记录详情",
          icon: "icon-email"
        },
        hidden: true,
        component: () => import("../views/user/record-details.vue")
      }
    ]
  },
  {
    path: "/order", //订单管理
    name: "order",
    component: layoutCrumb,
    meta: {
      name: "订单管理",
      icon: "icon-email"
    },
    hidden: false,
    children: [
      {
        path: "/order-list",
        name: "order-list",
        meta: {
          name: "订单查询",
          icon: "icon-email"
        },
        hidden: false,
        component: () => import("../views/order/list.vue")
      }
    ]
  },
  {
    path: "/shop", //店铺管理
    name: "shop",
    component: layoutCrumb,
    meta: {
      name: "店铺管理",
      icon: "icon-email"
    },
    hidden: false,
    children: [
      /*{
                path: "/shop-list",
                name: "shop-list",
                meta: {
                    name: '店铺查询',
                    icon: 'icon-email'
                },
                hidden: false,
                component: () => import("../views/shop/list.vue"),
            },*/
      {
        path: "/storeManage",
        name: "storeManage",
        meta: {
          name: "店铺审核",
          icon: "icon-email"
        },
        hidden: false,
        component: () => import("../views/shop/list-storeManage.vue")
      }
    ]
  },
  {
    path: "/serviceProviders", //服务商管理
    name: "serviceProviders",
    component: layoutCrumb,
    meta: {
      name: "服务商管理",
      icon: "icon-email"
    },
    hidden: false,
    children: [
      {
        path: "/serviceProvider",
        name: "serviceProvider",
        meta: {
          name: "服务商",
          icon: "icon-email"
        },
        hidden: false,
        component: () => import("../views/serviceProvider/serviceProvider.vue")
      },
      {
        path: "/detail",
        name: "detail",
        meta: {
          name: "服务商详情",
          icon: "icon-email"
        },
        hidden: true,
        component: () => import("../views/serviceProvider/detail.vue")
      }
    ]
  },
  {
    path: "/talentUniversity", //人才高校
    name: "talentUniversity",
    component: layoutCrumb,
    meta: {
      name: "人才高校",
      icon: "icon-email"
    },
    hidden: false,
    children: [
      {
        path: "/talentList",
        name: "talentList",
        meta: {
          name: "人才管理",
          icon: "icon-email"
        },
        hidden: false,
        component: () => import("../views/talentUniversity/talentList.vue")
      },
      {
        path: "/universityList",
        name: "universityList",
        meta: {
          name: "高校管理",
          icon: "icon-email"
        },
        hidden: false,
        component: () => import("../views/talentUniversity/universityList.vue")
      },
      {
        path: "/talentDetail",
        name: "talentDetail",
        meta: {
          name: "添加",
          icon: "icon-email"
        },
        hidden: true,
        component: () => import("../views/talentUniversity/talentDetail.vue")
      },
      {
        path: "/universityDetail",
        name: "universityDetail",
        meta: {
          name: "添加",
          icon: "icon-email"
        },
        hidden: true,
        component: () =>
          import("../views/talentUniversity/universityDetail.vue")
      }
    ]
  },
  {
    path: "/techniqueResult", //可视化管理
    name: "techniqueResult",
    component: layoutCrumb,
    meta: {
      name: "可视化管理",
      icon: "icon-email"
    },
    hidden: false,
    children: [
      {
        path: "/techniqueResult-list",
        name: "techniqueResult-list",
        meta: {
          name: "涉海科技成果分析",
          icon: "icon-email"
        },
        hidden: false,
        component: () => import("../views/visualization/techniqueResult.vue")
      },
      {
        path: "/industryIndex",
        name: "industryIndex",
        meta: {
          name: "涉海产业指标检测",
          icon: "icon-email"
        },
        hidden: false,
        component: () => import("../views/visualization/industryIndex.vue")
      },
      {
        path: "/talentAnalysis",
        name: "talentAnalysis",
        meta: {
          name: "涉海人才分析",
          icon: "icon-email"
        },
        hidden: false,
        component: () => import("../views/visualization/talentAnalysis.vue")
      },
      {
        path: "/marketingMonitor",
        name: "marketingMonitor",
        meta: {
          name: "涉海市场检测",
          icon: "icon-email"
        },
        hidden: false,
        component: () => import("../views/visualization/marketingMonitor.vue")
      },
      {
        path: "/knownToproduce",
        name: "knownToproduce",
        meta: {
          name: "涉海知产交易与服务",
          icon: "icon-email"
        },
        hidden: false,
        component: () => import("../views/visualization/knownToproduce.vue")
      }
    ]
  },
  {
    path: "/demand", //需求管理
    name: "demand",
    component: layoutCrumb,
    meta: {
      name: "需求管理",
      icon: "icon-email"
    },
    hidden: false,
    children: [
      {
        path: "/demand-list",
        name: "demand-list",
        meta: {
          name: "需求大厅",
          icon: "icon-email"
        },
        hidden: false,
        component: () => import("../views/order/demand.vue")
      },
      {
        path: "/demand-detail",
        name: "demand-detail",
        meta: {
          name: "需求详情",
          icon: "icon-email"
        },
        hidden: true,
        component: () => import("../views/order/demandDetail.vue")
      },
      {
        path: "/payPage",
        name: "payPage",
        meta: {
          name: "付款/退款记录",
          icon: "icon-email"
        },
        hidden: true,
        component: () => import("../views/order/payPage.vue")
      }
    ]
  },
  {
    path: "/management", //系统管理
    name: "management",
    component: layout,
    meta: {
      name: "系统管理",
      icon: "icon-email"
    },
    hidden: false,
    children: [
      {
        path: "/authority",
        name: "authority",
        meta: {
          name: "权限设置",
          icon: "icon-email"
        },
        hidden: false,
        component: layoutsub,
        children: [
          {
            path: "/role",
            name: "role",
            hidden: false,
            component: () => import("../views/management/authority/role.vue"),
            meta: {
              name: "角色管理",
              icon: "icon-email"
            }
          },
          {
            path: "/role-setup",
            name: "role-setup",
            meta: {
              name: "角色设置",
              icon: "icon-email"
            },
            hidden: true,
            component: () =>
              import("../views/management/authority/role-setup.vue")
          },
          {
            path: "/role-modify",
            name: "role-modify",
            meta: {
              name: "角色编辑",
              icon: "icon-email"
            },
            hidden: true,
            component: () =>
              import("../views/management/authority/role-modify.vue")
          },
          {
            path: "/member",
            name: "member",
            hidden: false,
            component: () => import("../views/management/authority/member.vue"),
            meta: {
              name: "用户管理",
              icon: "icon-email"
            }
          },
          {
            path: "/member-modify",
            name: "member-modify",
            meta: {
              name: "成员编辑",
              icon: "icon-email"
            },
            hidden: true,
            component: () =>
              import("../views/management/authority/member-modify.vue")
          },
          {
            path: "/menu",
            name: "menu",
            hidden: false,
            component: () => import("../views/management/authority/menu.vue"),
            meta: {
              name: "菜单管理",
              icon: "icon-email"
            }
          }
        ]
      }
    ]
  }
];
let baseRouter = [
  {
    path: "/login",
    name: "login",
    hidden: true,
    component: () => import("../views/login/login.vue")
  },
  {
    path: "/",
    name: "index",
    hidden: true,
    redirect: "/home",
    meta: {
      requiresAuth: true,
      name: "首页"
    },
    component: layout,
    children: [
      {
        path: "/home",
        name: "home",
        hidden: true,
        component: () => import("../views/home/index.vue")
      }
    ]
  }
];
export { baseRouter, dynamicRoutes };
