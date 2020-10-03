(function ($) {
    $(function () {
        // ---
        // ГОЛОСОВАНИЕ
        
        var URL = {
            LIKE: '/assets/components/likedislike/connectors/connector.php?action=web/like'
        };
        var setLikeDislikeResult = function (response, $wrapper) {
            // RESPONSE
            // item:
            //     id: 96
            //     category: "modDocument"
            //     closed: 0
            //     date: 1344987302
            //     id: 96
            //     name: "modDocument::2::Demo up_down"
            //     result: ["+109"]
            //     user_voted: true
            //     votes_balance: 109
            //     votes_down: 110
            //     votes_pct_down: 33.434650455927
            //     votes_pct_up: 66.565349544073
            //     votes_total: 329
            //     votes_up: 219
            if (response.error) {
                if (typeof Noty !== 'undefined') {
                    new Noty({
                        text: response.error.lang_error,
                        type: 'error',
                        timeout: 1500
                    }).show();
                } else {
                    alert(response.error.lang_error);
                }
            } else {
                var $number = $wrapper.find('.santa__rating__number');
                $number
                    .text(response.item.result[0])
                    .removeClass('santa__rating__number--red')
                    .removeClass('santa__rating__number--green');
                if (response.item.votes_balance >= 0) {
                    $number.addClass('santa__rating__number--green');
                } else {
                    $number.addClass('santa__rating__number--red');
                }
                if (response.item.user_voted) {
                    $wrapper.addClass('santa__rating--disabled')
                        .after($('<span class="ml-x1 text-danger">Ваш голос учтен</span>'));
                }
            }
        };
        
        // DATA
        // likedislike_id: 96
        // likedislike_format: {BALANCE}
        // likedislike_round: 0
        // likedislike_vote: -1
        var defaultData = 'likedislike_format={BALANCE}&likedislike_round=0';
        $('body')
          .on('click', '[data-rating-vote]', function (e) {
            var $wrapper = $(this).closest('[data-rating-id]');
            var data = 'likedislike_vote=' + $(this).attr('data-rating-vote') + '&likedislike_id=' + $wrapper.attr('data-rating-id');
            $.ajax({
                url: URL.LIKE,
                data: defaultData + '&' + data,
                type: 'POST',
                success: function (response) {
                    setLikeDislikeResult(response, $wrapper);
                },
            });
            e.preventDefault(); 
        });
        
        // END ГОЛОСОВАНИЕ
        // ---
    });
})(jQuery);