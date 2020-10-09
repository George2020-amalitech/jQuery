$(document).ready(function(){
 $('#button-create-item').on('click',function(
 ){
   let name = $('#input-create-item').val();$('#input-create-item').val('');

   let html = '';
        html += '<div class="item">';
        html += '<div class="name">' + name + '</div>';
        html += '<img src="assets/accra.jpg"></img>';
        html += '<div class="description">Founded in the 17th century by the Ga people, Accra became the capital of the British Gold Coast in 1877. Following Ghana/s independence in 1957, Accra became the capital of the newly independent state</div>';
        html += '<div class="price">300</div>';
        html += '<button> Add to cart</button>';
        html += '<br/>';
        html += '<a href="#">More info</a>';
        html += '<div class=""more-info"> Accra is the capital of Ghana </div>';
        html += '</div>';

        $('#container').append(html);
 });
});
