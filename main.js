//http://fvi-grad.com:4004/email

var form = $('#contact-form');
var formBtn = $('#send-btn');

var x = document.querySelectorAll('li a');
console.log(x);
var redButton = document.getElementById('fancy');
redButton.addEventListener('click', function() {
    x[0].classList.add('yellow-button');
    x[1].classList.add('yellow-button');
    x[2].classList.add('yellow-button');
    x[3].classList.add('yellow-button');

});

form.submit(function(e) {
    e.preventDefault();
    $.ajax({
            url: 'http://fvi-grad.com:4004/email',
            method: 'POST',
            data: form.serialize()

         })
        .done(function() {
            formBtn.val('message send');
        })
        .fail(function() {
            formBtn.val('error send');

        })
})
$('body').scrollspy({ target: '#bs-example-navbar-collapse-1' });
$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})
