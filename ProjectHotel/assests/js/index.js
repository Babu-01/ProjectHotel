$('.fa-plus').click(function(){
    var a = parseInt($(this).parent().find('#count').text());
    if(a<25) {
        $(this).parent().find('#count').text(a+1);
    }
});
$('.fa-minus').click(function(){
    var a = parseInt($(this).parent().find('#count').text());
    if(a != 0) {
        $(this).parent().find('#count').text(a-1);
    }
});
$('.add').click(function() {
    var src = $(this).parent().parent().find('.foodImage').attr('src');
    var quantity = parseInt($(this).parent().parent().find('#count').text());
    var amount = parseInt($(this).parent().parent().find('.food-price').text());
    if (quantity != 0){
        var total = amount * quantity;
        $('.cart-con-images').append('<img src="'+src+'" alt="vegIcon" class="foodImage">');
        var currentTotal = parseInt($('#total').text());
        $('#total').text(currentTotal + total);
    }
})