$(function() {
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(this).find("a").html("<i class='fas fa-bars'></i>");
        } else {
            $(".item").addClass("active");
            $(this).find("a").html("<i class='fas fa-times'></i>");
        }
    });
});

function popUp(URL) {
    window.open(URL, 'Nombre de la ventana', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=300,height=200,left = 390,top = 50');
}

 function mostrarPopupPr1() {
    document.querySelector('.popup1').style.display = 'block';
  }
  function mostrarPopupPr2() {
    document.querySelector('.popup2').style.display = 'block';
  }
  function mostrarPopupPr3() {
    document.querySelector('.popup3').style.display = 'block';
  }
  function mostrarPopupPr4() {
    document.querySelector('.popup4').style.display = 'block';
  }
  
  function ocultarPopupPr1() {
    document.querySelector('.popup1').style.display = 'none';
  } 
  function ocultarPopupPr2() {
    document.querySelector('.popup2').style.display = 'none';
  } 
  function ocultarPopupPr3() {
    document.querySelector('.popup3').style.display = 'none';
  } 
  function ocultarPopupPr4() {
    document.querySelector('.popup4').style.display = 'none';
  } 