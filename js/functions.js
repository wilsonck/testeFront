function SomenteNumero(e){
	var tecla=(window.event)?event.keyCode:e.which;

	if((tecla>47 && tecla<58)) 
		return true;
	else{
		if (tecla==8 || tecla==0) 
			return true;
		else  
			return false;
	}
}

function mascara_data(d){ 
	var mydata = ''; 
	data = d.value; 
	mydata = mydata + data; 
	if (mydata.length == 2){ 
		mydata = mydata + '/'; 
		d.value = mydata; 
	} 
	if (mydata.length == 5){ 
		mydata = mydata + '/'; 
		d.value = mydata; 
	} 
	if (mydata.length == 10){ 
		verifica_data(d); 
	} 
}

function verifica_data (d) { 

	dia = (d.value.substring(0,2)); 
	mes = (d.value.substring(3,5)); 
	ano = (d.value.substring(6,10)); 
	

	situacao = ""; 
            // verifica o dia valido para cada mes 
            if ((dia < 01)||(dia < 01 || dia > 30) && (  mes == 04 || mes == 06 || mes == 09 || mes == 11 ) || dia > 31) { 
            	situacao = "falsa"; 
            } 

            // verifica se o mes e valido 
            if (mes < 01 || mes > 12 ) { 
            	situacao = "falsa"; 
            } 

            // verifica se e ano bissexto 
            if (mes == 2 && ( dia < 01 || dia > 29 || ( dia > 28 && (parseInt(ano / 4) != ano / 4)))) { 
            	situacao = "falsa"; 
            } 
            
            if (d.value == "") { 
            	situacao = "falsa"; 
            } 
            
            if (situacao == "falsa") { 
            	alert("Data digitada é inválida, digite novamente!");
            	d.value = ""; 
            	d.focus(); 
            } 
        } 