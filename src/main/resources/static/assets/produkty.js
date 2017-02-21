$(function() {

    var products = [{
            'nazwa': 'Okno balkonowe',
            'producent': 'Oknoplas',
            'cena': '500zł'
        },
        {
            'nazwa': 'Dzwi zewnętrzne',
            'producent': 'Oknoplas',
            'cena': '600zł'
        },
        {
            'nazwa': 'Drzwi wewnętrzne',
            'producent': 'Oknoplas',
            'cena': '300zł'
        }
    ];
    $(document).ready(function() {
  var ile=1;
        products.forEach(function(product) {

            var $prod = $('<tr class="tr"></tr>');
            var $id = $('<th class="th">'+ile+'</th>');
            var $nazwa = $('<td>nazwa</td>');
            var $producent = $('<td>producent</td>');
            var $cena = $('<td>cena</td>');

            $('.tabl').append($prod);
            $prod.append($id);
            $prod.append($nazwa);
            $prod.append($producent);
            $prod.append($cena);
            ile++;
        });


    });
    //products.forEach(function(product) {
    // var ktoryProduct =1;
    //
    // var $product = $('<tr></tr>');
    // var $id=$('<th> ktoryProduct </th>');
    // var $nazwa = $(<td></td>);
    // var $producent = $(<td></td>);
    // var $cena = $(<td></td>);
    //
    // $('.tablica > tbody:last-child').append($product);
    // $('.tr').append($id);
    // $('.row').append($producent);
    // $('.row').append($cena);
    //
    // ktoryProduct++;


    //     $(".tablica").find('tbody')
    //         .append($('<tr></tr>')
    //             .append($('<th></th>')
    //                 .append($('<td></td>')
    //                 .append($('<td></td>')
    //                 .append($('<td></td>')
    //                 )
    //             )
    //         )
    //       )
    // );



    //  });



});
