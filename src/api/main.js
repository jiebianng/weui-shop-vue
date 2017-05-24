/**
 * 公告方法调用
 * Created by gutsy on 2017/5/22.
 */

/**
 * 首页 轮播
 */

export function getAjax(obj) {
    $.ajax({
        type: obj.type,
        url: obj.url,
        dataType: obj.dataType,
        data:obj.data,
        traditional:true,
        beforeSend(){
        },
        success: function(msg) {
            if(obj.ret){
                obj.ret(msg);
            }
        },
        error (XMLHttpRequest){
        }
    });
}