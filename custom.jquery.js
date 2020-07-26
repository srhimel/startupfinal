
function yesnoCheck() {
  if (document.getElementById('yesCheck').checked) {
      document.getElementById('youtubeField').classList.remove("sr-only");
      document.getElementById('coverField').classList.add("sr-only");
  }
  else if( document.getElementById('noCheck').checked){
    document.getElementById('youtubeField').classList.add("sr-only");
      document.getElementById('coverField').classList.remove("sr-only");
  }

}

function countChar(val) {
    var len = val.value.length;
    if (len > 31) {
      val.value = val.value.substring(0, 30);
    } else {
      $('#charNum').text(len);
    }
  };

  function countCharT(val) {
    var len = val.value.length;
    if (len > 81) {
      val.value = val.value.substring(0, 80);
    } else {
      $('#charNumT').text(len);
    }
  };

  function countCharD(val) {
    var len = val.value.length;
    if (len > 1201) {
      val.value = val.value.substring(0, 1200);
    } else {
      $('#charNumD').text(len);
    }
  };
  function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                .width(55)
                .height(55);
        };

        reader.readAsDataURL(input.files[0]);
    }
 }

  $(document).ready(function() {
    var fixHeight = function() {
      $('.navbar-nav').css(
        'max-height',
        document.documentElement.clientHeight - 150
      );
    };
    fixHeight();
    $(window).resize(function() {
      fixHeight();
    });
    $('.navbar .navbar-toggler').on('click', function() {
      fixHeight();
    });
    $('.navbar-toggler, .overlay').on('click', function() {
      $('.mobileMenu, .overlay').toggleClass('open');
    });
    $('.image-file').change(function(e){
      var fileName = e.target.files[0].name;
      $("#imageName").html(fileName);
      $(".image-box").css("border-color", "rgb(41, 158, 255)");
    });


    $('#cover').change(function(e){
      $(".cover-border").css("border-color", "rgb(41, 158, 255)");
      var fileName = e.target.files[0].name;
      $("#fill-title").html(fileName);
      
    });

    $('#name').keyup(function() {
      $('#startup').html($(this).val());
    });
    $('#elevetor').keyup(function() {
      $('#pitch').html($(this).val());
    });
    $('#weburl').keyup(function() {
      $('#urlLink').html($(this).val());
    });
    

  });