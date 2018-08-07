$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });

  $(".displayMoreButton").click(function(){
    $(".displayMoreArea").toggle();
});

$('#make').change(function(){
    selection = $(this).val();
    switch(selection)
    {
      case 'lenovo':
       $('.model').hide();
        $('#modelLenovo').show();
        break;
      case 'dell':
      $('.model').hide();
       $('#modelDell').show();
        break;
        case 'acer':
        $('.model').hide();
         $('#modelAcer').show();
          break;
          case 'google':
          $('.model').hide();
           $('#modelGoogle').show();
            break;
            case 'asus':
            $('.model').hide();
             $('#modelAsus').show();
              break;
    }
  });





$(".btnOrange").click(function(){
selection2 = $('.model').val();


switch(selection2)
{
  case 'AllL':
   $('.searchResults').hide();
    $('.AllL').show();
    break;
    case 'AllD':
     $('.searchResults').hide();
      $('.AllD').show();
      break;
      case 'AllAcer':
       $('.searchResults').hide();
        $('.AllD').show();
        break;case 'AllAsus':
         $('.searchResults').hide();
          $('.AllD').show();
          break;case 'AllGoogle':
           $('.searchResults').hide();
            $('.AllD').show();
            break;
  case '500e':
   $('.searchResults').hide();
    $('.500e').show();
    break;
  case 'n42':
  $('.searchResults').hide();
   $('.n42').show();
    break;
    case 'n23':
    $('.searchResults').hide();
     $('.n23').show();
      break;
      case '120s':
      $('.searchResults').hide();
       $('.120s').show();
        break;
        case 'e5480t':
        $('.searchResults').hide();
         $('.e5480t').show();
          break;
          case 'e5480nt':
          $('.searchResults').hide();
           $('.e5480nt').show();
            break;
            case '7010':
            $('.searchResults').hide();
             $('.7010').show();
              break;
              case '709':
              $('.searchResults').hide();
               $('.709').show();
                break;

    case 'acer':
    $('.searchResults').hide();
     $('.acer').show();
      break;
      case 'google':
      $('.searchResults').hide();
       $('.google').show();
        break;
        case 'asus':
        $('.searchResults').hide();
         $('.asus').show();
          break;
}
});
})
