$(function() {
  $('#toggleButton').on('click', function() {
    $('#myParagraph').toggle()
  })

  $('#colorButton').on('click', function() {
    $('#colorDiv').css('background-color', 'yellow')
  })

  $('#addClassButton').on('click', function() {
    const newBox = $('<div class="newClass"></div>');
    $('#classDiv').append(newBox);
  })
  $('#removeClassButton').on('click', function() {
    $('#classDiv .newClass').last().remove()
  })

  $('#fadeInButton').on('click', function() {
    $('#fadeDiv').fadeIn()
  })
  $('#fadeOutButton').on('click', function() {
    $('#fadeDiv').fadeOut()
  })

  $("#slideUpButton").on('click', function() {
    $("#slideDiv").slideUp()
  })
  $("#slideDownButton").on('click', function() {
    $("#slideDiv").slideDown()
  })
})

