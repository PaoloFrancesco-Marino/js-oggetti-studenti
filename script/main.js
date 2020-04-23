$(document).ready(function () {
    

    /*** 
     * Creare un oggetto che descriva uno studente
     * lo studente avrà  le seguenti proprietà: nome, cognome e età.
     * Stampare attraverso il for..in tutte le proprietà (chiavi e valori).
    ***/

    // Creo un oggetto dove inserisco i miei dati

    var student = {
        Nome: 'Paolo Francesco',
        Cognome: 'Marino',
        'Età' : 32,
        Classe: '#12 boolean'
    }

    // stampo le proprità attraverso il for in 
    for (var key in student) {
        console.log(key + ': ' + student[key]);
        
    };


    






}); // <-- End READY


