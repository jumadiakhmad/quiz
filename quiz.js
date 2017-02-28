
 //deklarasi variable score awal
 var quizScore = 0 ;

 //Deklarasi jawwaban
 var jawaban1 = 'MANILA' ;
 var jawaban2 = 'TOKYO' ;
 var jawaban3 = 'PARIS' ;
 var jawaban4 = 'ROMA' ;
 var jawaban5 = 'BANGKOK' ;

//deklarasi pertanyaan 
 var pertanyaan1 = prompt ( 'Pertanyaan 1: Apa Ibu kota negara Filipina ?' );
 if ( pertanyaan1 . toUpperCase () === jawaban1 ) {
 quizScore = quizScore + 1 ;
 alert ( 'Ya jawaban anda benar ' );
 } else {
 alert ( 'maaf jawaban anda salah' );
 }

 var pertanyaan2 = prompt ( 'Pertanyaan 2 : Apa Ibu kota negara Jepang ? ' );
 if ( pertanyaan2 . toUpperCase () === jawaban2 ) {
 quizScore = quizScore + 1 ;
 alert ( 'Ya jawaban anda benar' );
 } else {
 alert ( 'maaf jawaban anda salah' );
 }

 var pertanyaan3 = prompt ( 'Pertanyaan  3: Apa ibu kota negara Perancis' );
 if ( pertanyaan3 . toUpperCase () === jawaban3 ) {
 quizScore = quizScore + 1 ;
 alert ( 'That is correct!' );
 } else {
 alert ( 'Sorry that is incorrect.' );
 }

 var pertanyaan4 = prompt ( 'Pertanyaan 4 :Apa ibu kota negara Italia' );
 if ( pertanyaan4 . toUpperCase () === jawaban4 ) {
 quizScore = quizScore + 1 ;
 alert ( 'Ya jawaban anda benar' );
 } else {
 alert ( 'Maaf jawaban anda salah' );
 }

 var pertanyaan5 = prompt ( 'Pertanyaan 5: Apa ibu kota negara Thailand' );
 if ( pertanyaan5 . toUpperCase () === jawaban5 ) {
 quizScore = quizScore + 1 ;
 alert ( 'Ya jawaban anda benar' );
 } else {
 alert ( 'Maaf jawaban anda salah' );
 }

 //Menentukan skor pemain dengan menguji berapa banyak mereka mendapatkan jawaban yang benar.
 if ( quizScore === 5 ) {
 document .  write ( '<p>Anda memenangkan medali emas dengan' + quizScore + ' jawaban yang benar.</p>' );
 } else if ( quizScore === 4 || quizScore === 3 ) {
 document .  write ( '<p>Anda memenangkan medali Perak dengan ' + quizScore + ' jawaban yang benar.</p>' );
 } else if ( quizScore === 2 || quizScore === 1 ) {
 document .  write ( '<p> Anda memenangkan medali Perunggu dengan ' + quizScore + ' jawaban yang benar.</p>' );
 } else {
 document .  write ( "<p>Skor kamu " + quizScore +" Kamu tidak mendapatkan apa-apa "+ " jawaban kamu salah semua.</p>" );
 }

 