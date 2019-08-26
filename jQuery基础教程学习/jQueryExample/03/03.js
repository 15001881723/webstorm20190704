    // This is the custom JavaScript file referenced by index.html. You will notice
    // that this file is currently empty. By adding code to this empty file and
    // then viewing index.html in a browser, you can experiment with the example
    // page or follow along with the examples in the book.
    //
    // See README.txt for more information.
   // $(function () {
   //   $('#switcher-large').on('click',function () {
   //       $('body').addClass('large');
   //       $('body').removeClass('narrow');
   //   })
   //     $('#switcher-narrow').on('click',function () {
   //         $('body').addClass('narrow');
   //         $('body').removeClass('large');
   //     })
   //     $('#switcher-default').on('click',function () {
   //         $('body').removeClass('narrow');
   //         $('body').removeClass('large');
   //     })
   // })

    // $(function () {
    //     $('#switcher-large')
    //         .on('click',function () {
    //         $('body').addClass('large');
    //         $('body').removeClass('narrow');
    //             $('#switcher button').removeClass('selected');
    //             $(this).addClass('selected')
    //     })
    //     $('#switcher-narrow').on('click',function () {
    //         $('body').addClass('narrow');
    //         $('body').removeClass('large');
    //         $('#switcher button').removeClass('selected');
    //         $(this).addClass('selected')
    //     })
    //     $('#switcher-default').
    //         addClass('selected').on('click',function () {
    //         $('body').removeClass('narrow');
    //         $('body').removeClass('large');
    //         $('#switcher button').removeClass('selected');
    //         $(this).addClass('selected')
    //     })
    // })

    //终极写法
    $(document).ready(function () {
        $('#switcher-default').addClass('selected');
        $('#switcher button').on('click',function () {
            var bodyClass=this.id.split('-')[1];
            $('body').removeClass().addClass(bodyClass);
            $('#switcher button').removeClass();
            $(this).addClass('selected');
        })
        $('#switcher h3').click(function () {
            $('#switcher button').toggleClass('hidden')
        })
        $('#switcher h3').hover(function () {
            $(this).addClass('hover')
        },function () {
            $(this).removeClass('hover')
        })

    })