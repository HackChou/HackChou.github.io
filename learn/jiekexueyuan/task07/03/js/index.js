/*
 * @Author: ZHouYanWei
 * @Date:   2017-02-03 20:04:09
 * @Last Modified by:   ZHouYanWei
 * @Last Modified time: 2017-02-20 23:09:56
 */
var minHeight = 120;
var imageMargin = 5;
var rowMargin = 5;
var container = $(".container");
var containerWidth = container.width();
var rowIndexs = [];
var pageRowCount = 4;
var lastRowHeight = 0;
var unlocatedItemIndex = 0;

$(document).ready(function() {
    getImage(localImages);
})

$(window).on("resize", function() {
    lastRowHeight = 0;
    unlocatedItemIndex = 0;
    containerWidth = container.width();
    $(".img-holder").height(minHeight);
    localImages();
});

$(window).on("mousewheel", wheelHandler);
$(window).on("wheel", wheelHandler);

// 为了处理滚轮事件，避免短时间内触发太多滚轮事件。提高性能
var stackTimeout = 0;

function stackEvent(handler) {
    clearTimeout(stackTimeout);
    stackTimeout = setTimeout(function() {
        handler();
    }, 50);
}

// 处理滚轮事件
function wheelHandler() {
    stackEvent(function() {
        var windowBottom = $(window).scrollTop() + $(window).height();
        if (windowBottom + 200 > lastRowHeight) {
            containerWidth = container.width();
            getImage(localImages);
        }
    });
}

// ajax获取图像数据
function getImage(callback) {
    $.getJSON("getImage.html", function(obj) {
        var newImages = new Array();
        for (var index = 0; index < obj.length; index++) {
            var item = $("<div class='img-holder'><img src='" + obj[index].url + "'></div>");
            item.css("height", minHeight);
            newImages.push(item);
        }
        container.append(newImages);
        callback();
    });
}

// 分页。
function getRowIndicator(rowIndex) {
    if (rowIndex > 0) {
        if (rowIndex > rowIndexs.length) {
            var rowItem = $("<div class='row-index'>第" + (rowIndex + 1) + "页</>");
            rowItem.appendTo(container);
            rowIndexs.push(rowItem);
            return rowItem;
        } else {
            var rowItem = rowIndexs[rowIndex - 1];
            rowItem.show();
            return rowItem;
        }
    }
}

// 图像布局
function localImages(items) {
    items = $(".img-holder").toArray();
    var rowItems = [];
    var rowWidth = 0;
    var rowHeight = lastRowHeight;
    var rowCount = 1;
    $(".row-index").hide();
    $.each(items, function(index, item) {
        // 只布局还未参与布局的元素
        if (index >= unlocatedItemIndex) {
            $(item).show();

            // 得到一行的元素
            if (rowWidth + $(item).width() < containerWidth) {
                rowItems.push($(item));
                rowWidth += $(item).width() + imageMargin;
            }
            // 得到了一行的元素后，对这一行元素进行布局。
            else {
                // 得到放大因子
                var gapWidth = containerWidth - rowWidth - imageMargin;
                var zoomRatio = (containerWidth - imageMargin * (rowItems.length - 1)) / (rowWidth - (imageMargin * rowItems.length));
                var curLeft = 0 - imageMargin;

                // 分页处理
                if (rowCount % pageRowCount == 1 && rowCount > pageRowCount) {
                    var rowItem = getRowIndicator((rowCount - 1) / pageRowCount);
                    rowItem.css("top", rowHeight);
                    rowHeight += rowItem.height();
                }

                // 布局一行元素，并为下一行元素布局做准备
                $.each(rowItems, function(index, item) {
                    var itemWidth = item.width();
                    item.css("height", item.height() * zoomRatio);
                    item.css("left", curLeft + imageMargin);
                    item.css("top", rowHeight);
                    item.css("visibility", "visible");
                    curLeft += itemWidth * zoomRatio + imageMargin;
                    lastRowHeight = lastRowHeight > rowHeight ? lastRowHeight : rowHeight;
                    unlocatedItemIndex++;
                });
                rowItems = [];
                rowItems.push($(item));
                rowWidth = $(item).width() + imageMargin;
                rowHeight += rowMargin + rowItems[0].height() * zoomRatio;
                lastRowHeight = rowHeight > lastRowHeight ? rowHeight : lastRowHeight;
                rowCount++;
            }
        }
    });

    // 没有参与布局的元素隐藏起来，避免导致局部不好看。
    $.each(rowItems, function(index, item) {
        item.hide();
    });
}
