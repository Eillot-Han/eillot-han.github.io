$.extend({
    'reviseDis':function (el,e){ e=="block"?$(el).css('display','block'):$(el).css('display','none') },
    'setBackground':function (el,i){ $(el).css('background-image','url(img/' + i + '.png)') },
    'setNumber':function (el){ $(''+el+'').each(function (i,item){ $(item).attr("dataBefore",''+(i+1)+'') }) }
})

$(document).ready(
    function () {
        //滑动门响应
        $(".m-menu>li").click(function () {
            var i = $(".m-menu>li").index(this);
            $(".m-bd>div").removeClass('sel');
            $(".m-bd>div").eq(i).addClass('sel');
        }),
        //设置li元素的背景
        $(".m-bd-demo01>li").each(function (i,item){
            $.setBackground(item,i);
        }),
        //点击显示相对应的放大图片
        $(".m-bd-demo01>li").click(function (){
            var i = $(".m-bd-demo01>li").index(this);
            $.reviseDis($(".m-bd-show"),'block');
            $.setBackground($(".m-bd-show-bg"),i);
        }),
        //点击放大图片消失
        $(".m-bd-show").click(function (){
            $.reviseDis($(".m-bd-show"),'none');
        }),
        //点击delete删除元素
        $(".m-bd-demo02>li").click(function (){
            $(this).remove();
            $.setNumber('.m-bd-demo02>li');
        }),
        //点击添加元素
        $(".m-bd-button>button").click(function (){
            var $h1=$("<li></li>");
            $h1.click(function (){
                $(this).remove();
                $.setNumber('.m-bd-demo02>li');
            });
            $(".m-bd-demo02").append($h1);
            $.setNumber('.m-bd-demo02>li');
        })
    }
)

