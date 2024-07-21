$(document).ready(function() {
    let wallHit = false;

    function handleWallColoring() {
        $('.boundary').addClass('youlost');
        $('#status').text('You lose!');
        wallHit = true;
    }

    $('.boundary').mouseover(function() {
        handleWallColoring();
    });

    $('.boundary').mouseleave(function() {
        if (wallHit) {
            $('.boundary').removeClass('youlost');
            wallHit = false;
        }
    });

    $('#end').mouseover(function() {
        if (!wallHit) {
            $('#status').text('You win!');

        }
    });

    $('#start').click(function() {
        $('.boundary').removeClass('youlost');
        $('#status').text('');
        wallHit = false;
    });

    $(document).mousemove(function(e) {
        if (!$(e.target).closest('#maze').length && $('#status').text() === '') {
            handleWallColoring();
        }
    });
});
