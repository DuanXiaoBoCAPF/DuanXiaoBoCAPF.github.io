/**
 * Created by 段晓博 on 2017/4/10.
 */
$(function(){
    //大容器
    var $banner=$('.su-banner');
    var width=$banner.width();
    //图片容器
    var $image=$banner.find('ul:first');
    //点容器
    var $point=$banner.find('ul:last');
    //所有的点
    var $points=$point.find('li');
    var index=1;
    //动画方法
    var animateFuc=function(){
        $image.animate({'transform':'translateX('+(-index*width)+'px)'},200,'linear',function(){
            if(index>=9){
                index=1;
                $image.css({'transform':'translateX('+(-index*width)+'px)'})
            }else if(index<=0){
                index=8;
                $image.css({'transform':'translateX('+(-index*width)+'px)'})
            }
            $points.removeClass('now').eq(index-1).addClass('now')
        })
    }
    //轮播开始
    var timer=setInterval(function(){
        index++;
        animateFuc();
    },3000)
    //手势事件
    $image.on('swipeRight',function(){
        index--;
        animateFuc();
    })
    $image.on('swipeLeft',function(){
        index++;
        animateFuc();
    })




});