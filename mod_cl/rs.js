$( document ).ready(function() {
    console.log( "ready!" );
    set_att_ata();

    $('#persona_s').on('change', function() {
  		var choice = this.value;
  		if (choice == "Docente"){
  			set_att_docenti();
  		}
  		else if(choice == "ATA"){set_att_ata();}
	})

	$('#add_att').on('click', function() {
  		 $('#att').clone().find("input").val("").end().appendTo('#att_list');
	})


});


function set_att_docenti(){
	 $('#attivita_menu').empty()
	 $('#attivita_menu').append('<option>PROGETTI - PROGETTAZIONE</option>');
	 $('#attivita_menu').append('<option>PROGETTI - DOCENZA</option>');
	 $('#attivita_menu').append('<option>COMMISSIONI </option>');
	 $('#attivita_menu').append("<option>FUNZIONALI ATTIVITA' DIDATTICA - REFERENTI</option>)");
	 $('#attivita_menu').append("<option>FUNZIONALI ATTIVITA' DIDATTICA - COORDINATORI</option>)");
	 $('#attivita_menu').append('<option>HELP</option>');
	 $('#attivita_menu').append('<option>IDEI</option>');
	 $('#attivita_menu').append('<option>FUNZIONI STRUMENTALI</option>');
	 $('#attivita_menu').append('<option>LA SCUOLA AL CENTRO</option>');
	 $('#attivita_menu').append('<option>ORE ECCEDENTI SOSTITUZIONE COLLEGHI ASSENTI</option>');
	 $('#attivita_menu').append('<option>PERCORSI DI ORIENTAMENTO</option>');
	 $('#attivita_menu').append('<option>DISPERSIONE SCOLASTICA</option>');
	 $('#attivita_menu').append('<option>AREA FORTE PROCESSO IMMIGRATORIO</option>');
	 $('#attivita_menu').append('<option>ALTERNANZA - REFERENTI - TUTOR</option>');
	 $('#attivita_menu').append('<option>ALTERNANZA - DOCENZA</option>');
	 $('#attivita_menu').append('<option>EXTRA_D1</option>');
	 $('#attivita_menu').append('<option>EXTRA_D2</option>');
	 $('#attivita_menu').append('<option>EXTRA_D3</option>');
	 $('#attivita_menu').append('<option>EXTRA_D4</option>');
	 $('#attivita_menu').append('<option>EXTRA_D5</option>');
}


function set_att_ata(){
	 $('#attivita_menu').empty()
	 $('#attivita_menu').append('<option>INCARICHI SPECIFICI</option>');
	 $('#attivita_menu').append('<option>COMPENSO FORFETTARIO</option>');
	 $('#attivita_menu').append('<option>LAVORO STRAORDINARIO</option>');
	 $('#attivita_menu').append('<option>EXTRA_A1</option>');
	 $('#attivita_menu').append('<option>EXTRA_A2</option>');
	 $('#attivita_menu').append('<option>EXTRA_A3</option>');
	 $('#attivita_menu').append('<option>EXTRA_A4</option>');
	 $('#attivita_menu').append('<option>EXTRA_A5</option>');
}


