    // This is the custom JavaScript file referenced by index.html. You will notice
    // that this file is currently empty. By adding code to this empty file and
    // then viewing index.html in a browser, you can experiment with the example
    // page or follow along with the examples in the book.
    //
    // See README.txt for more information.
    $(document).ready(function () {
        $('#selected-plays>li').addClass('horizontal');
        $('#selected-plays li:not(.horizontal)').addClass('sub-level');
    });
    $(document).ready(function () {
        $('tr:even').addClass('alt');
        $('tr:nth-child(odd)').addClass('alt');
        // $('td:contains(Henry)').addClass('highlight');
        // $('td:contains(Henry)').nextAll().addClass('highlight');
        // $('td:contains(Henry)').nextAll().addBack().addClass('highlight');// 第一种写法
        // $('td:contains(Henry)').parent().children().addClass('bigChange')//第二种方法
        $('a').filter(function () {

            return this.hostname&&this.hostname!=location.hostname;

        }).addClass('external');
        //第三种方法
        $('td:contains(Henry)').parent().find('td:eq(1)').addClass('bigChange').end()
            .find('td:eq(2)').addClass('bigChange');
        console.log( $('td:contains(Henry)').parent().find('td:eq(1)'))
    })