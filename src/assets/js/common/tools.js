export default {
    getCookie(name){
        //可以搜索RegExp和match进行学习
        var arr,reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
            return unescape(arr[2]);
        } else {
            return null;
        }
    },
    setCookie(name,value,path,domain,secure){
        var cdata = name + "=" + value;
        cdata +=path ? ("; path=" + path) : "" ;
        cdata +=domain ? ("; domain=" + domain) : "" ;
        cdata +=secure ? ("; secure=" + secure) : "" ;
        document.cookie = cdata;
    },
    setLocalStorage(name,value){
        localStorage.setItem(name,value)
    },
    getLocalStorage(name){
        return localStorage.getItem(name)
    }
}