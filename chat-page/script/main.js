$(document).ready(function () {
    
    // refs
    var button = $('.send'); // button
    var inputSend = $('.sms-input'); // input
    var chat = $('.display-chat'); //chat

    

    

    // init handlebar
    var source = $('#sms-template').html(); //refs template 
    var template = Handlebars.compile(source);

    // console.log(source);

    // sent at click
    button.click(function(){
        var sms = inputSend.val().trim();
        var time = new Date(); //refs date
        var hh = time.getHours();
        var min = time.getMinutes();
        var oraInvio = hh + ':' + min;
        
        console.log(sms);

        // creiamo oggetto con i valori 
        var sent = {
            text: sms,
            time: oraInvio,
            typeSms: 'sent'
        }
        
        // mostriamo nell'html 
        var html = template(sent);
        console.log(html);

        chat.append(html);

        // reset input
        inputSend.val('');

        // risposta bot
        setTimeout(function(){
            var received = {
                text: 'Ok Grazie.',
                time: oraInvio,
                typeSms: 'received'
            }

            var html = template(received);
            console.log(html);

            chat.append(html);

        }, 2000);
    });
    


}); // <-- end Reay
