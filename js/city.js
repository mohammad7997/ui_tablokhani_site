function city(x) {
    var city=$(x);
    var arr={};
    var datavalue=city.find('option:selected').attr('data-value');
    if (datavalue==1){
        arr=['شهر1 تهران','شهر 2 تهران','شهر3 تهران'];
    }
    if (datavalue==2){
        arr=['شهر1 البرز','شهر 2 البرز','شهر3 البرز'];
    }
    if (datavalue==3){
        arr=['شهر1 اصفهان','شهر 2 اصفهان','شهر3 اصفهان'];
    }
    $('.city').find('option').remove();
    var k;
    for (k=0;k<arr.length;k++){
        $('.city').append($('<option>',{
            text:arr[k]
        }))
    }}