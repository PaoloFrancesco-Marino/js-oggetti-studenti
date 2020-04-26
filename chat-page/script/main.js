$(document).ready(function () {
    
    // refs
    var button = $('.send'); // button
    var inputSend = $('.sms-input'); // input
    var chat = $('.display-chat'); //chat

    

    

    // init handlebar
    var source = $('#sms-template').html(); //refs template 
    var template = Handlebars.compile(source);

    // console.log(source);



    // add array object data
    var generatedSms = [
        {
            text: 'ciao come stai?',
            time: actualTime(),
            typeSms: 'sent'
        },
        {
            text: 'bene, quando ci vediamo?',
            time: actualTime(),
            typeSms: 'received'
        }
    ];

    $.each(generatedSms, function(i) {
        console.log(generatedSms[i]);
        var addSms = template(generatedSms[i]);
        chat.append(addSms);
    });


    // sent at click
    button.click(function(){
        var sms = inputSend.val().trim();

        console.log(sms);

        // creiamo oggetto con i valori 
        var sent = {
            text: sms,
            time: actualTime(),
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
                time: actualTime(),
                typeSms: 'received'
            }

            var html = template(received);
            console.log(html);

            chat.append(html);

        }, 2000);
    });
    


}); // <-- end Reay


/**
 * Function
 */

 // add zero at time number < 10
function addZero (number) {

    if (number < 10) {
        number = '0' + number;
    }

    return number;
}

// function-dinamic time 
function actualTime() {
    
    var data = new Date();
    var h = addZero(data.getHours());
    var m = addZero(data.getMinutes());
    return h + ':' + m;
};
