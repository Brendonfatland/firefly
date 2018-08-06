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
/* $('#make option').each(function() {

    if (this.selected.val() == "dell") {
       $("#modelDell").show();
    }
}); */


/* function changeModel(selectedMake){

} */

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

var selectedMake = $('#make option').val();
console.log(selectedMake);

/*  $( "#make" ).change(function() {
  alert( "Handler for .change() called." );
});
*/

/*  $("#make").change(function(){
        $(this).css("background-color", "#D6D6FF");
    });

  /* $('#make option').each(function() {
    if($(this).is(':selected')){
      $().show();
    }

    if ($( "#make" ).val().selected){
      console.log(this);
    } */


  /*  $( "#make" ).change(function() {
        var str = "";
        $( "select option:selected" ).each(function() {
          str += $( this ).text() + " ";
        });
        $( "div" ).text( str );
      })
      .trigger( "change" );
      */

      var el = document.querySelector("#make > option:nth-child(4)");
      console.log(el);


})
