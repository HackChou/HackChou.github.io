/*
 * @Author: ZHouYanWei
 * @Date:   2017-02-03 20:03:02
 * @Last Modified by:   ZHouYanWei
 * @Last Modified time: 2017-02-24 16:55:23
 */

$(function() {
    //header nav 导航鼠标经过显示隐藏
    $(".header-nav>li").hover(function() {
        $(this).children(".submenu").slideDown();
    }, function() {
        $(this).children(".submenu").slideUp();
    });

    //header app,会员登录显示隐藏
    $(".relative").hover(function() {
        $(this).children(".submenu").slideDown();
    }, function() {
        $(this).children(".submenu").slideUp();
    });


    //点击搜索图片弹出搜索框
    $("#search-btn").on("click", function(event) {

        $(".searchbox").addClass('scale');
    });
    //关闭搜索框
    $('#close-btn').on('click', function(event) {
        $(".searchbox").removeClass('scale');
    });

    //left分类
    $(".aside-cList li>div").hover(function() {
        $(this).children(".list-show").slideDown();
    }, function() {
        $(this).children(".list-show").slideUp();
    });

    //lessonimg-box鼠标下拉显示
    $(".lesson-list .cf li").each(function(index) {
        var liNode = $(this);
        $(this).mouseover(function() {
            //移到哪个给哪个加上效果
            $(".lesson-list .lessonplay").eq(index).css("opacity", "1");
            $(".lesson-list .lesson-infor").eq(index).css("height", "175px");
            $(".lesson-list .lesson-infor>p").eq(index).css({
                'height': '52px',
                'opacity': '1',
                'display': 'block'
            });
            $(".lesson-list .zhongji").eq(index).css("display", "block");
            $(".lesson-list .learn-number").eq(index).css("display", "block");

        }).mouseout(function() {
            $(".lesson-list .lessonplay").css("opacity", "0");
            $(".lesson-list .lesson-infor").eq(index).css("height", "88px");
            $(".lesson-list .lesson-infor>p").eq(index).css({
                'height': '0',
                'opacity': '0',
                'display': 'none'
            });
            $(".lesson-list .zhongji").eq(index).css("display", "none");
            $(".lesson-list .learn-number").eq(index).css("display", "none");
        })
    });

    //竖列展现
    $(document).ready(function() {
        $(".list-icon").click(function() {
            $("#changeid").removeClass("lesson-list").addClass("lesson-list2");

        });
    });

    //横列展现
    $(document).ready(function() {
        $(".kuai-icon").click(function() {
            $("#changeid").removeClass("lesson-list2").addClass("lesson-list");

        });
    });
});
