function checkk(elem) {
    if (elem.selectedIndex == 4) {
        document.getElementById("other-div2").style.display = 'block';
        $('.q4').attr('required',true);
    } else if (elem.selectedIndex == 5) {
        document.getElementById("other-div2").style.display = 'block';
        $('.q4').attr('required',true);
    } else {
      $('.q4').attr('required',false);
        document.getElementById("other-div2").style.display = 'none';
    }
}

$(document).ready(function() {
    $("#textInputField").on("input", function(event) {
      var inputValue = $(this).val();
      var sanitizedValue = sanitizeInput(inputValue);
      $(this).val(sanitizedValue);
    });
    
    function sanitizeInput(input) {
      var sanitizedText = input.replace(/[^a-zA-Z ]/g, "");
      return sanitizedText;
    }

  });

  $(document).ready(function() {
    $("#numberInputField").on("input", function(event) {
        var inputValue = $(this).val();
        var sanitizedValue = sanitizeInput(inputValue);
        $(this).val(sanitizedValue);
      });
      
      function sanitizeInput(input) {
        var sanitizedNumber = input.replace(/\D/g, "");
        return sanitizedNumber;
      }
  })

