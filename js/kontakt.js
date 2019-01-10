$(function() {
  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // greske
    },
    submitSuccess: function($form, event) {
      event.preventDefault();
      var imeprezime = $("input#imeprezime").val();
      var elektronicka_adresa = $("input#elektronicka_adresa").val();
      var telefon = $("input#telefon").val();
      var vasa_poruka = $("textarea#vasa_poruka").val();
      var firstName = imeprezime;
      $this = $("#posalji");
      $this.prop("disabled", true);
      $.ajax({
        url: "../mail/posalji.php",
        type: "POST",
        data: {
          imeprezime: imeprezime,
          telefon: telefon,
          elektronicka_adresa: elektronicka_adresa,
          vasa_poruka: vasa_poruka
        },
        cache: false,
        success: function() {
          $('#success').html("<div class='alert alert-success'>");
          $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-success')
            .append("<strong>USPJEŠNO!</strong> Vaša poruka je poslana. Hvala Vam na javljanju.");
          $('#success > .alert-success')
            .append('</div>');
          $('#contactForm').trigger("reset");
        },
        error: function() {
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-danger').append($("<strong>").text("Poštovani " + firstName + ", dogodila se greška na poslužitelju. Molimo pokušajte ponovno."));
          $('#success > .alert-danger').append('</div>');
          //$('#contactForm').trigger("reset");
        },
        complete: function() {
          setTimeout(function() {
            $this.prop("disabled", false);
          }, 1000);
        }
      });
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

$('#imeprezime').focus(function() {
  $('#success').html('');
});