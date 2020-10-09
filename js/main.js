function addItem(name,description,price, moreInfo) {


     let html = '';
          html += '<div class="item">';
          html += '<div class="name">' + name + '</div>';
          html += '<img src="assets/accra.jpg"></img>';
          html += '<div class="description">' + description + '</div>';
          html += '<div class="price">'+ price + '</div>';
          html += '<button class="item-add">Add to cart</button>';
          html += '<button class="item-remove">Remove</button>'
          html += '<br/>';
          html += '<a class="more-info-link" href="#">More info</a>';
          html += '<div class="more-info"> ' + moreInfo + ' </div>';
          html += '</div>';

          $('#container').prepend(html);
}

$(document).ready(function(){

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

        $.ajax('data/item.json', {
          dataType: 'json',
          contentType: 'application/json',
          cache: false
        })
          .done(function(response){
            let items = response.items;
            items.forEach(function(item){
              addItem(item.name,item.description,item.price,item.moreInfo);
            });

          })
          .fail(function(reqest,errorType,errorMessage){
            console.log(errorMessage);
          })
          .always()

        });
