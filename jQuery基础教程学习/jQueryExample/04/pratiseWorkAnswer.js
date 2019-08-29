    /**
     * Created by Administrator on 2019/8/29.
     */

   //第一题  一开始隐藏 然后要缓慢淡入
   //  $(function () {
   //
   //      $('#container').hide(function () {
   //          $('#container').fadeTo(5000,1.0)
   //      })
   //  })
    //第er题 鼠标悬停到某个段落时候 该段落增加黄色背景颜色
    // $(function () {
    //
    //  $('div.speech p').mouseover(function () {
    //      $(this).css({backgroundColor:'yellow'})
    //  }).mouseout(function () {
    //      $(this).css({backgroundColor:''})
    //  })
    //
    // })
    //第三题 两部分的东西 第一部分：同时将h2左外边距与透明度变成25% 第二部分：紧接第一部分之后，将讲话文稿变成50%透明度
    // $(function () {
    //     var $h2=$('div h2');
    //     var $speech=$('div.speech')
    //     $h2.on('click',function () {
    //         $h2.css({
    //            position:'relative'
    //         }).animate({
    //             opacity:0.25
    //             ,left:'+=20px'
    //         },5000).queue(function () {
    //             $speech.css({
    //                 opacity:0.5
    //             })
    //         })
    //     })
    // })
    //第四题 方向键按下 switcher这个大框按照方向移动20px
    $(function () {
        $('#switcher').css({position: 'relative'})
        $(document).keyup(function (event) {
            var value=event.keyCode;
            if(value===37){
               $('#switcher').animate({left: '-=20px'});
            }else if(value===38){
                $('#switcher').animate({top: '-=20px'});
            }else if(value===39){
                $('#switcher').animate({left: '+=20px'});
            }else if(value===40){
                $('#switcher').animate({top: '+=20px'});
            }
        })

        // switch(event.keyCode) {
        //     case 37:
        //         $('#switcher').animate({left: '-=20px'},'slow');
        //         break;
        //     case 38:
        //         $('#switcher').animate({top: '-=20px'},'slow');
        //         break;
        //     case 39:
        //         $('#switcher').animate({left: '+=20px'},'slow');
        //         break;
        //     case 40:
        //         $('#switcher').animate({top: '+=20px'},'slow');
        //         break;


    })