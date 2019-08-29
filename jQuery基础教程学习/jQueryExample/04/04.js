    // This is the custom JavaScript file referenced by index.html. You will notice
    // that this file is currently empty. By adding code to this empty file and
    // then viewing index.html in a browser, you can experiment with the example
    // page or follow along with the examples in the book.
    //
    // See README.txt for more information.

    //代码清单4.1将文本区域speech放大40%
    // $(function () {
    // $('#switcher-large').on('click',function () {
    //
    //     var num=parseFloat($('.speech').css('fontSize'));
    //     num=num*1.4;
    //     $('.speech').css('fontSize',num+'px')
    // })
    // })
    //代码清单4.2将文本区域speech放大40% 按钮small就缩小40% 两个功能
    // $(function () {
    //     $('#switcher button').on('click',function () {
    //     var num=parseFloat($('.speech').css('fontSize'));
    //     if(this.id==='switcher-large'){
    //         num=num*1.4;
    //         $('.speech').css('fontSize',num+'px')
    //     }else if(this.id==='switcher-small'){
    //         num=num/1.4;
    //         $('.speech').css('fontSize',num+'px')
    //     }
    //
    //     })
    // })

    //代码清单4.3将文本区域speech放大40% 按钮small就缩小40% 复原成默认状态 三个功能按钮都有作用

    // $(function () {
    //     var num1=parseFloat($('.speech').css('fontSize'));
    //     $('#switcher button').on('click',function () {
    //         var num=parseFloat($('.speech').css('fontSize'));
    //         switch(this.id){
    //             case 'switcher-large':
    //                 num=num*1.4;
    //                 // $('.speech').css('fontSize',num+'px');
    //                 $('.speech').animate({'fontSize':num+'px'},2000);
    //                 break;
    //             case 'switcher-small':
    //                 num=num/1.4;
    //                 // $('.speech').css('fontSize',num+'px');
    //                 $('.speech').animate({'fontSize':num+'px'},2000);
    //                 break;
    //             case 'switcher-default':
    //                 // $('.speech').css('fontSize',num1+'px');  //animate方法跟上一个css一样的效果，而且比他强大 可以设定时间
    //                 $('.speech').animate({'fontSize':num1+'px'},2000);
    //                 console.log('454545'+num1)
    //                 break;
    //         }
    //
    //
    //
    //
    //     })
    // })
    //     $(function () {
    //         $('p').eq(1).hide();
    //         $('a.more').click(function (event)
    //         {
    //         event.preventDefault();
    //             $('p').eq(1).show('slow');
    //             $(this).hide('duration');
    //         })
    //     })

        //代码清单4-9淡入淡出
    // $(function () {
    //     $('p').eq(1).hide();
    //     $('a.more').click(function (event)
    //     {
    //         event.preventDefault();
    //         $('p').eq(1).slideDown('slow');
    //         $(this).hide('duration');
    //     })
    // })
    //代码清单4-11多功能显示与隐藏
    // $(function () {
    //     $('p').eq(1).hide();
    //    var  $p1=$('p').eq(1);
    //     $('a.more').click(function (event) {
    //         event.preventDefault();
    //         if($p1.is(':hidden')){
    //             $('p').eq(1).fadeIn('slow');
    //
    //             $(this).text('read less')
    //         }else{
    //             $('p').eq(1).fadeOut('slow');
    //
    //             $(this).text('read more')
    //         }
    //
    //
    //     })
    // })
    //代码清单4-12 对4-11代码进行优化处理多功能显示与隐藏
    // $(function () {
    //     $('p').eq(1).hide();
    //     var  $p1=$('p').eq(1);
    //
    //     $('a.more').click(function (event) {
    //         event.preventDefault();
    //         var $link=$(this);
    //         $p1.slideToggle('slow');
    //         if($p1.is(':hidden')){
    //             $link.text('read less')
    //         }else{
    //             $link.text('read more')
    //         }
    //
    //
    //     })
    // })
    //代码清单4-13 对4-12代码中slideToggle进行模拟
    // 进行优化处理多功能显示与隐藏
    // $(function () {
    //     $('p').eq(1).hide();
    //     var  $p1=$('p').eq(1);
    //
    //     $('a.more').click(function (event) {
    //         event.preventDefault();
    //         var $link=$(this);
    //
    //         $p1.animate({
    //              height:'toggle'
    //             ,opacity:'toggle'
    //
    //
    //         },'slow')
    //
    //         if( $link.text()=='read more'){
    //             $link.text('read less')
    //         }else{
    //             $link.text('read more')
    //         }
    //
    //
    //     })
    // })

    //代码清单4-17 运用动画的方式animate 以及css对switcher进行修饰 outerWidth()属性设置 以及位置移动是需要调动绝对位置相对位置的
    // $(function () {
    //     var switcherWidth=$('#switcher').outerWidth();
    //     var contentWidth=$('div.speech p').outerWidth();
    //     $('div.label').on('click',function () {
    //         $('#switcher').css({
    //
    //             position:'relative'
    //         })
    //             .animate({
    //                      left: contentWidth- switcherWidth
    //                 ,borderWidth:'5px'
    //                 ,height:'+=30px'
    //                        },8000)
    //     })
    // })

    //代码清单4-19  演示排队 连缀 运用动画的方式animate 以及css对switcher进行修饰 outerWidth()属性设置 以及位置移动是需要调动绝对位置相对位置的
    $(function () {
        var switcherWidth=$('#switcher').outerWidth();
        var contentWidth=$('div.speech p').outerWidth();
        $('div.label').on('click',function () {
            $('#switcher').css({position:'relative'})


                .fadeTo('fast',0.5)
                .animate({left: contentWidth- switcherWidth},{duration:'slow',queue:false})
                .fadeTo('slow',1.0)
                .slideUp('slow',function () {
                    $('#switcher').css({backgroundColor:'#3aff27'});
                })


                /** 该快代码用回调函数写
                 * .queue(function (next) {
                    $('#switcher').css({backgroundColor:'#3aff27'});
                    next();
                })
                  */

                .slideDown('fast')
        })
    })
    //代码清单4-19  演示排队 连缀 运用动画的方式animate 以及css对switcher进行修饰 outerWidth()属性设置 以及位置移动是需要调动绝对位置相对位置的
    // $(function () {
    //     $('p').eq(2).css({border:'1px solid #000'})
    //         .click(function () {
    //             $(this).slideUp(5000).next().slideDown(5000)
    //         });
    //     $('p').eq(3).css({backgroundColor:'#3aff27'}).hide();
    //
    // })
    //代码清单4-26  针对this的一个小变动 当this在环境变量改变的情况下，this的指代也会发生变化 这时候的解决方案是将 以前你想指代的那个this先取出来放在一个变量中暂存
    $(function () {
        $('p').eq(2).css({border:'1px solid #000'})
            .click(function () {
                var $this=$(this);
                $this.next().slideDown('slow',function () {
                    $this.slideUp('slow');
                })
            });
        $('p').eq(3).css({backgroundColor:'#3aff27'}).hide();

    })
