$(function () {

    $('#box-left, #box-right').sortable({
        connectWith: '#box-left, #box-right',
        containment: '#puzzle-container',
    });

    $('#btn-new').on('click', function () {
        $('#box-left, #box-right').sortable('cancel');
        $('.lock').fadeIn(0);

        for (let i = 1; i < 17; i++) {
            let ord = Math.round(Math.random() * 16);
            $(`.order${i}`).css({
                order: `${ord}`
            })
        }
        $('#timer').html('01:00');
        $('.text-area2').text(`It's a pity, but you lost`)
    })

    $('#btn-start').on('click', function () {
        $('#btn-check').removeAttr('disabled');
        $(this).prop('disabled', true);
        $('.lock').fadeOut(0);

        const myInterval = setInterval(myTimer, 1000);
        let time = 59;

        function myTimer() {
            $('#btn-new').on('click', function () {
                myStopFunction()
                $('#btn-start').removeAttr('disabled');
                $('#btn-check').prop('disabled', true);
            })

            $('.finish').on('click', function () {
                myStopFunction()
                $('#btn-start').prop('disabled', true);
                $('#btn-check').prop('disabled', true);
                $('.check-window').fadeOut(0)
                $('.back-black').fadeOut(0)
            })

            if (time < 10) {
                time = '0' + time;
            }
            $('#timer').html(`00:${time}`)
            time--;
            if (time == 0 - 1) {
                $('#btn-start').removeAttr('disabled');
                $('#btn-check').prop('disabled', true);
                myStopFunction()
            }
            let timer = $('#timer').html();

            $('.time').html(timer);
        };
        function myStopFunction() {
            clearInterval(myInterval);
        }
    })

    $('#btn-check').on('click', function () {
        $('.back-black').fadeIn(500)
        $('.check-window').fadeIn(100, function () {
            $('.check-window').animate({
                top: '7vh'
            }, 300)
        })

    })
    $('.close-1').on('click', function () {
        $('.back-black').fadeOut(500)
        $('.check-window').animate({
            top: '1vh'
        }, 200).fadeOut(200, function () {
        })
    })

    $('.check').on('click', function () {
        $('.checked-window').css({
            visibility: 'visible'
        })

        let getId = id => document.getElementById(id);
        let val = getId('block-right').children;
        if (val[0].textContent == 1 &&
            val[1].textContent == 2 &&
            val[2].textContent == 3 &&
            val[3].textContent == 4 &&
            val[4].textContent == 5 &&
            val[5].textContent == 6 &&
            val[6].textContent == 7 &&
            val[7].textContent == 8 &&
            val[8].textContent == 9 &&
            val[9].textContent == 10 &&
            val[10].textContent == 11 &&
            val[11].textContent == 12 &&
            val[12].textContent == 13 &&
            val[13].textContent == 14 &&
            val[14].textContent == 15 &&
            val[15].textContent == 16
        ) {
            $('.text-area2').text('Woohoo, well done, you did it!')
            $('.close-2').on('click', function () {
                $('.checked-window').css({
                    visibility: 'hidden'
                })
                $('.back-black').css({
                    visibility: 'hidden'
                })
                $('.check-window').css({
                    visibility: 'hidden'
                })
            })
        }
    })

    $('.close-2').on('click', function () {
        $('.checked-window').css({
            visibility: 'hidden'
        })
    })
})



















