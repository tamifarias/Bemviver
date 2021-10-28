$(document).ready(function() {
    $('#mycarousel').carousel({interval: 5000});
    $('#carouselButton').click(function() {
        if ($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause')
            $('#carouselButton').children('span').addClass('fa-play')
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }  
    });

    $('#loginLink').click(function() {
        $('#loginModal').modal('show');
    });

    $('#reserveButton').click(function() {
        $('#reserveModal').modal('show');
    });
    
});

$('#bologna-list a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
});


$(function() {     
  $('a.thumbnail').click(function(e) {
    e.preventDefault();
    $('#image-modal .modal-body img').attr('src', $(this).find('img').attr('src'));
    $("#image-modal").modal('show');
  });
  $('#image-modal .modal-body img').on('click', function() {
    $("#image-modal").modal('hide')
  });
});
