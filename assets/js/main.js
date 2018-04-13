(function($) {
  $(function() {

    $('.button-collapse').sideNav();
  }); // end of document ready

})(jQuery); // end of jQuery name space
$(document).ready(function() {
  /*var gg = $("#our-text").val()
  $("#our-text").keyup(function(){
    $("#results").text("sadsa")
    console.log(gg)
  })
  */
  $("#our-text")
    .keyup(function() {
      var value = $(this).val();
      $("#chara").html(value.length + " Character &nbsp;&nbsp;&nbsp");
      hh = value.replace(/\n$/gm, '');
      ff = hh.split(" ");
      $("#words").html(ff.length - 1 + " Words &nbsp;&nbsp;&nbsp");
      dd = hh.split(/\n/);
      $("#paragraph").html(dd.length - 1 + " Paragraph &nbsp;&nbsp;&nbsp");
      ll = value.replace(/\s/, ' ');
      zz = ll.split(/\s/);
      $("#whitespace").html(zz.length - 1 + " Whitespace &nbsp;&nbsp;&nbsp");
      oo = value.replace(/\d/, /[0-9]/)
      ss = oo.split(/\d/)
      $("#digit").html(ss.length - 2 + " Digit number &nbsp;&nbsp;&nbsp");
      if (value.length >200){
        for (x=0; x<=value.length; x++){
          f = x/60
          $("#readspeed").html(f.toFixed()+"s Reading speed")
      }
    }else if(value.length <200){
        $("#readspeed").html("<5s Reading speed ")
      }

      if (value.length >= 10000) {
        alert('WOW Amazing..')
      }
    })
    .keyup();

})

function getFre() {
  var value = $("#our-text").val()
  console.log(value.length);
  console.log(value.search(/[a-z]/))
}
