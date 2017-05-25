/**
 * 公告方法调用
 * Created by gutsy on 2017/5/22.
 */

/**
 * ajax获取数据
 */

export function getAjax(obj) {
    $.ajax({
        type: obj.type,
        url: '/static/data/main.json',
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

/**
 * 返回顶部动画
 */

export function initTopHoverTree(hvtid, times, right, bottom){
    $("#" + hvtid).css("right", right).css("bottmo", bottom);
    $("#" + hvtid).on("click", function () { goTopHovetree(times); });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 268) {
            $("#" + hvtid).fadeIn(100);
        }
        else {
            $("#" + hvtid).fadeOut(100);
        }
    });
    //返回顶部动画
    function goTopHovetree(times) {
        if (!!!times) {
            $(window).scrollTop(0);
            return;
        }
        var sh = $('body').scrollTop();//移动总距离
        var inter = 13.333;//ms,每次移动间隔时间
        var forCount = Math.ceil(times / inter);//移动次数
        var stepL = Math.ceil(sh / forCount);//移动步长
        var timeId = null;
        function aniHovertree() {
            !!timeId && clearTimeout(timeId);
            timeId = null;
            if ($('body').scrollTop() <= 0 || forCount <= 0) {
                $('body').scrollTop(0);
                return;
            }
            forCount--;
            sh -= stepL;
            $('body').scrollTop(sh);
            timeId = setTimeout(function () { aniHovertree(); }, inter);
        }
        aniHovertree();
    }
}