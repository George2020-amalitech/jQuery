$(document).ready(function(){
 $('#button-create-item').on('click',function(
 ){
   let name = $('#input-create-item').val();
   $('#input-create-item').val('');

   let html = '';
        html += '<div class="item">';
        html += '<div class="name">' + name + '</div>';
        html += '<img src="assets/accra.jpg"></img>';
        html += '<div class="description">Founded in the 17th century by the Ga people, Accra became the capital of the British Gold Coast in 1877. Following Ghana/s independence in 1957, Accra became the capital of the newly independent state</div>';
        html += '<div class="price">300</div>';
        html += '<button class="item-add">Add to cart</button>';
        html += '<button class="item-remove">Remove</button>'
        html += '<br/>';
        html += '<a class="more-info-link" href="#">More info</a>';
        html += '<div class="more-info"> Accra is the capital of Ghana </div>';
        html += '</div>';

        $('#container').prepend(html);
 });

        $('#container').on('click','.more-info-link',function(event){
          event.preventDefault();

          $(this).parent().find('.more-info').slideToggle('slow');
          $(this)
            .animate({"opacity":0.5, "margin-left":10}, 'fast')
            .animate({"opacity":1.0, "margin-left":0}, 'fast');
        });

        $('#container').on('click','.item-remove',function(){
          $(this).parent().remove();
        })

        $.ajax('data/item.json')
          .done(function(response){
            console.log(response);
          })
          .fail(function(reqest,errorType,errorMessage){
            console.log(errorMessage);
          })
          .always()

        });
