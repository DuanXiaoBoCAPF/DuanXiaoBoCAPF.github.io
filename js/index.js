/**
 * Created by ������ on 2017/4/10.
 */
$(function(){
    //������
    var $banner=$('.su-banner');
    var width=$banner.width();
    //ͼƬ����
    var $image=$banner.find('ul:first');
    //������
    var $point=$banner.find('ul:last');
    //���еĵ�
    var $points=$point.find('li');
    var index=1;
    //��������
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
    //�ֲ���ʼ
    var timer=setInterval(function(){
        index++;
        animateFuc();
    },3000)
    //�����¼�
    $image.on('swipeRight',function(){
        index--;
        animateFuc();
    })
    $image.on('swipeLeft',function(){
        index++;
        animateFuc();
    })




});