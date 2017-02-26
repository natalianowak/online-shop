$(function() {


    var products = window.products;

    $(document).ready(function() {

        products.forEach(function(product) {

            var $prod = $('<tr class="tr"></tr>');
            var $id = $('<th class="th">' + product.ID + '</th>');
            var $nazwa = $('<td>' + product.nazwa + '</td>');
            var $producent = $('<td>' + product.producent + '</td>');
            var $cena = $('<td>' + product.cena + "zł" + '</td>');
            var $button = $('<td class="btn btn-success">' + "Dodaj" + '</td>');

            $('.tabl').append($prod);
            $prod.append($id);
            $prod.append($nazwa);
            $prod.append($producent);
            $prod.append($cena);
            $prod.append($button);


        });
        let sumaKoszyka = 0;
        let cena = 0;
        $('.tabl').on('click', '.btn', function() {
            var id = $(this).parent().children(':first-child').text();
            alert("dodano do koszyka produkt nr = " + id);
            $(this).text("Dodaj ponownie");

            var p = products.filter(function(element) {
                return element.ID == parseInt(id);
            })[0];
            // products.forEach(function(product) {
            //     if (parseInt(id) == product.ID) {
            //         cena = parseInt(product.cena);
            //     }
            // });

            var $prod = $('<tr class="tr"></tr>');
            var $id = $('<th class="th">' + p.ID + '</th>');
            var $nazwa = $('<td>' + p.nazwa + '</td>');
            var $producent = $('<td>' + p.producent + '</td>');
            var $cena = $('<td>' + p.cena + "zł" + '</td>');
            var $button = $('<td class="btn btn-success">' + "Usuń" + '</td>');

            $('.tabelaZamowien').append($prod);
            $prod.append($id);
            $prod.append($nazwa);
            $prod.append($producent);
            $prod.append($cena);
            $prod.append($button);

            sumaKoszyka = sumaKoszyka + p.cena;
            $('p').after().remove();
            $('.footer-distributed').before('<p>Suma koszyka wynosi: ' + sumaKoszyka + '</p>');

        });

        $('.tabelaZamowien').on('click', '.btn', function() {
            var id = $(this).parent().children(':first-child').text();
            alert("Usunieto z koszyka produkt nr = " + id);

            var p = products.filter(function(element) {
                return element.ID == parseInt(id);
            })[0];

            $(this).parent().remove();
            sumaKoszyka = sumaKoszyka - p.cena;
            $('p').after().remove();
            $('.footer-distributed').before('<p>Suma koszyka wynosi: ' + sumaKoszyka + '</p>');



        });

    });




});
