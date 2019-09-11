    // This is the custom JavaScript file referenced by index.html. You will notice
    // that this file is currently empty. By adding code to this empty file and
    // then viewing index.html in a browser, you can experiment with the example
    // page or follow along with the examples in the book.
    //
    // See README.txt for more information.

    // (function($) {
    //     $.mathUtils = {
    //         sum: function(array) {
    //             var total = 0;
    //
    //             $.each(array, function(index, value) {
    //                 value = $.trim(value);
    //                 value = parseFloat(value) || 0;
    //
    //                 total += value;
    //             });
    //             return total;
    //         },
    //         average: function(array) {
    //             if ($.isArray(array)) {
    //                 return $.mathUtils.sum(array) / array.length;
    //             }
    //             return '';
    //         }
    //     };
    // })(jQuery)
    //
    // $(function () {
    //
    //     var $inventory=$('#inventory tbody');
    //     var quantity=$inventory.find('td:nth-child(2)').map(function (index,qty) {
    //         return $(qty).text();
    //     }).get();
    //     var sum= $.mathUtils.sum(quantity);
    //     $('#sum').find('td:nth-child(2)').text(sum);
    //
    //     console.log(quantity);
    //     var price=$inventory.find('td:nth-child(3)').map(function (index,qty) {
    //         return $(qty).text();
    //
    //     }).get();
    //     console.log(price);
    //     var average=$.mathUtils.average(price)
    //     $('#average').find('td:nth-child(3)').text(average.toFixed(2))
    // })


    //例8-8 使用hasClass() 方法进行类的存在判断

    // (function ($) {
    //     $.fn.swapClass=function (class1,class2) {
    //         if(this.hasClass(class1)){
    //             this.removeClass(class1).addClass(class2)
    //         }else if (this.hasClass(class2)){
    //             this.removeClass(class2).addClass(class1)
    //         }
    //     }
    //
    // })(jQuery)
    //
    // $(function () {
    //     $('table').click(function () {
    //         console.log('12121212')
    //         $('tr').swapClass('one','two')
    //     })
    // })


    (function ($) {
        $.fn.swapClass=function (class1,class2) {
           this.each(function () {
               var  $this=$(this);
               if($this.hasClass(class1)){
                   $this.removeClass(class1).addClass(class2)
               }else if($this.hasClass(class2)){
                   $this.removeClass(class2).addClass(class1)
               }
           })

        }

    })(jQuery)

    $(function () {
        $('table').click(function () {
            console.log('12121212')
            $('tr').swapClass('one','two')
        })
    })