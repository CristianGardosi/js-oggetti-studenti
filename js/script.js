// **********************************************************
// STUDENTI OGGETTI
// **********************************************************
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare attraverso il for..in tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente all'array creato al punto 2 inserendo nell’ordine: nome, cognome e età.

// Creazione oggetto / studente
var studente = {
    nome: 'Cristian',
    cognome: 'Gardosi',
    età: 23
}

for (var key in studente) {
    // Key e relativo valore
    console.log(key + ': ' + studente[key]);
}

// Creazione array di studenti con i relativi dati e printing di nomi e cognomi
var arrayStudenti = [
    {
        nome: 'Cristian',
        cognome: 'Gardosi',
        età: 23

    },
    {
        nome: 'Paolo',
        cognome: 'Duzioni',
        età: 30

    },
    {
        nome: 'Lorenzo',
        cognome: 'Balsano',
        età: 30

    }
];

for (var i = 0; i < arrayStudenti.length; i++) {
    // In questo modo accedo ai tre 'contenitori' che avvolgono i dati, ovvero i tre oggetti. In un array normale in questo modo avrei accesso ai dati, ora per entrare ancora più in profondità ed estrapolare i valori interni devo fare uno step ulteriore
    console.log(arrayStudenti[i]);
    // Sulla falsa riga di questo ragionamento in un array di oggetti per estrapolare il valore che desidero devo fare questa operazione
    console.log('Nome: ' + arrayStudenti[i].nome, 'Cognome: ' + arrayStudenti[i].cognome)
}