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
    //                 $('.speech').css('fontSize',num+'px');
    //                 break;
    //             case 'switcher-small':
    //                 num=num/1.4;
    //                 $('.speech').css('fontSize',num+'px');
    //                 break;
    //             case 'switcher-default':
    //                 $('.speech').css('fontSize',num1+'px');
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
    $(function () {
        $('p').eq(1).hide();
       var  $p1=$('p').eq(1);
        $('a.more').click(function (event) {
            event.preventDefault();
            if($p1.is(':hidden')){
                $('p').eq(1).fadeIn('slow');

                $(this).text('read less')
            }else{
                $('p').eq(1).fadeOut('slow');

                $(this).text('read more')
            }


        })
    })
