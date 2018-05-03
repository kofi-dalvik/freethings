$(document).ready(function () {
  
    var header = document.getElementById('header')
    var logo = document.getElementById('logo')
    var searchbox = document.getElementById('searchbox')
    $(window).on('scroll', function (event) {
      event.stopPropagation()
      if ($(this).scrollTop() > 100) {
        header.style.boxShadow = '1px 1px 5px rgba(160, 78, 78, 0.15)'
        var windowWidth = $(this).width()
        if (windowWidth < 768) {
          header.style.height = '120px'
        } else {
          header.style.height = '100px'
        }
        $('#logo').slideUp()
        // searchbox.style.marginTop = '0'
        // header.style.background = '#008CBA'
        // header.style.background = 'rgba(0,140,186, 1)'
        // header.style.opacity = 0.3
        // $('body').css({
        //   background: 'rgba(240, 240, 240, 0.5)'
        // })
      } else {
            header.style.boxShadow = 'none';
            header.style.height = '170px'
            $('#logo').slideDown()
            header.style.background = 'white'
      }
    })
  })