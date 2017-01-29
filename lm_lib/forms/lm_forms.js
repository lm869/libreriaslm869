
	function crear_lmForm(contenedor,nombre,accion,metodo,btn,icono,reset,campos){
	var cont = document.getElementById(contenedor);
	console.log(reset);
	var iniciar =false;
	if (cont==null) {
		console.log("el div contenedor: --> "+contenedor+" <-- No Existe :( !!!");
		return;
	}
	iniciar=true;

	var form_lm = document.createElement("form");
	var cont_campos =document.createElement("div");
	cont_campos.id="cont_campos_"+nombre;
	var cont_btn_f = document.createElement("div");
	cont_btn_f.id="cont_btns_"+nombre;
	cont_btn_f.className="center-align";
	var html = document.createElement("button");
	var row = document.createElement("div");
	row.className = "col s12"
	var cont_btn = document.createElement("i");
	html.className="btn waves-effect waves-light lm_btn grey darken-4";
	html.setAttribute('type', 'submit');
	html.id="lm_submit";
	cont_btn.className="material-icons right";
	cont_btn.append(icono);
	html.append(btn);
	html.append(cont_btn);
	cont_btn_f.append(html);
	row.append(cont_btn_f);
	form_lm.append(cont_campos);
	form_lm.append(row);

	if (reset==true) {
		var btn_reset= document.createElement("button");
			btn_reset.setAttribute('type','reset');
			btn_reset.className="btn waves-effect waves-light lm_btn grey darken-4";
		var cont_btn_r = document.createElement("i");
		cont_btn_r.className="material-icons right";
		cont_btn_r.append("replay");
		btn_reset.append(cont_btn_r);
		btn_reset.append("Limpiar");
		cont_btn_f.append(btn_reset);

	}
	var iden= "lmform_"+nombre;
	form_lm.id=iden;
	form_lm.setAttribute('action',accion);
	form_lm.setAttribute('method', metodo);


	cont.append(form_lm);


		var num_c=campos.length;
	for(var i = 0; i < num_c; i++){
		campos_lmForm(nombre,campos[i].tipo,campos[i].name,campos[i].label,campos[i].grupo,campos[i].requerido,campos[i].colum,campos[i].desfase,campos[i].max,campos[i].min,campos[i].habilitado,campos[i].accept);
	}
	
	}	




function decodificador(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}


function campos_lmForm(formulario,tipo,name,label,grupo,requerido,colum,desfase,max,min,habilitado,accept){


		var iden= "lmform_"+formulario;
		var form_lm=document.getElementById("cont_campos_"+formulario);
		switch(tipo){

			case "group": 

			var gr=document.createElement('fieldset');
				gr.id="lmgroup_"+grupo;
			var lbl =document.createElement('legend');
				lbl.append(label);
				gr.append(lbl);
				form_lm.append(gr);

			break;
			case "text":
				var columna = document.createElement("div");
				columna.id="col_"+name;
				if (desfase==null || desfase==undefined) {
					columna.className="col s"+colum+" offset-s0";
				}else{
					columna.className="col s"+colum+" offset-s"+desfase;
				}
				var txt = document.createElement("div");
				txt.className="input-field";
				var html = document.createElement("input");
				html.id=iden;
				html.setAttribute('type', tipo);
				html.setAttribute('name', name);
				if (requerido=="si") {
					html.required=true;
				}
				var lbl = document.createElement("label");
				lbl.setAttribute('for', iden);
				lbl.append(label);
				txt.append(html);
				txt.append(lbl);
				columna.append(txt);
				if (grupo== undefined) {
					form_lm.append(columna);
				}
				else{
					var grup = document.getElementById("lmgroup_"+grupo);
					grup.append(columna);
					form_lm.prepend(grup);
				}
			
			break;
			case "number":
				var columna = document.createElement("div");
				columna.id="col_"+name;
				if (desfase==null || desfase==undefined) {
					columna.className="col s"+colum+" offset-s0";
				}else{
					columna.className="col s"+colum+" offset-s"+desfase;
				}
				var txt = document.createElement("div");
				txt.className="input-field";
				var html = document.createElement("input");
				html.id=iden;
				html.setAttribute('type', tipo);
				if (requerido=="si") {
					html.required=true;
				}
				html.setAttribute('max', max);
				html.setAttribute('min', min);
				var lbl = document.createElement("label");
				lbl.setAttribute('for', iden);
				lbl.append(label);
				txt.append(html);
				txt.append(lbl);
				columna.append(txt);
				if (grupo == undefined) {
					form_lm.append(columna);
				}
				else{
					var grup = document.getElementById("lmgroup_"+grupo);
					grup.append(columna);
					form_lm.prepend(grup);
				}
			
			break;
			case "select":
				var columna = document.createElement("div");
				columna.id="col_"+name;
				if (desfase==null || desfase==undefined) {
					columna.className="col s"+colum+" offset-s0";
				}else{
					columna.className="col s"+colum+" offset-s"+desfase;
				}
				var txt = document.createElement("div");
				var html = document.createElement("select");
				html.id="select_"+name;
				
				if (requerido=="si") {
					html.required=true;
				}
				var lbl = document.createElement("label");
				lbl.append(label);
				txt.append(lbl);
				txt.append(html);
				columna.append(txt);
				if (grupo == undefined) {
					form_lm.append(columna);
				}
				else{
					var grup = document.getElementById("lmgroup_"+grupo);
					grup.append(columna);
					form_lm.prepend(grup);
				}
			
			break;
			case "range":
				var columna = document.createElement("div");
				columna.id="col_"+name;
				if (desfase==null || desfase==undefined) {
					columna.className="col s"+colum+" offset-s0";
				}else{
					columna.className="col s"+colum+" offset-s"+desfase;
				}
				var txt = document.createElement("div");
				txt.className="row";
				var p = document.createElement("p");
				p.className="range-field";
				var html = document.createElement("input");
				html.id=iden;
				html.setAttribute('type', tipo);
				html.setAttribute('max', max);
				html.setAttribute('min', min);
				var lbl = document.createElement("label");
				lbl.append(label);
				txt.append(lbl);
				p.append(html);
				txt.append(p);
				columna.append(txt);
				if (grupo== undefined) {
					form_lm.append(columna);
				}
				else{
					var grup = document.getElementById("lmgroup_"+grupo);
					grup.append(columna);
					form_lm.prepend(grup);
				}
			
			break;
			case "date":
				var columna = document.createElement("div");
				columna.id="col_"+name;
				if (desfase==null || desfase==undefined) {
					columna.className="col s"+colum+" offset-s0";
				}else{
					columna.className="col s"+colum+" offset-s"+desfase;
				}
				var txt = document.createElement("div");
				var html = document.createElement("input");
				html.setAttribute('type', tipo);
				html.className="datepicker";
				var lbl = document.createElement("label");
				lbl.append(label);
				txt.append(lbl);
				txt.append(html);
				columna.append(txt);
				if (grupo== undefined) {
					form_lm.append(columna);
				}
				else{
					var grup = document.getElementById("lmgroup_"+grupo);
					grup.append(columna);
					form_lm.prepend(grup);
				}
			
			break;
			case "textArea":
				var columna = document.createElement("div");
				columna.id="col_"+name;
				if (desfase==null || desfase==undefined) {
					columna.className="col s"+colum+" offset-s0";
				}else{
					columna.className="col s"+colum+" offset-s"+desfase;
				}
				var txt = document.createElement("div");
				txt.className="input-field";
				var html = document.createElement("textarea");
				html.id=iden;
				html.className="materialize-textarea"
				html.setAttribute('type', tipo);
				if (requerido=="si") {
					html.required=true;
				}
				html.setAttribute('max', max);
				html.setAttribute('min', min);
				var lbl = document.createElement("label");
				lbl.setAttribute('for', iden);
				lbl.append(label);
				txt.append(html);
				txt.append(lbl);
				columna.append(txt);
				if (grupo== undefined) {
					form_lm.append(columna);
				}
				else{
					var grup = document.getElementById("lmgroup_"+grupo);
					grup.append(columna);
					form_lm.prepend(grup);
				}
			
			break;
			case "password":
				var columna = document.createElement("div");
				columna.id="col_"+name;
				if (desfase==null || desfase==undefined) {
					columna.className="col s"+colum+" offset-s0";
				}else{
					columna.className="col s"+colum+" offset-s"+desfase;
				}
				var txt = document.createElement("div");
				txt.className="input-field";
				var html = document.createElement("input");
				html.id=iden;
				html.setAttribute('type', tipo);
				html.setAttribute('name', name);
				if (requerido=="si") {
					html.required=true;
				}
				var lbl = document.createElement("label");
				lbl.setAttribute('for', iden);
				lbl.append(label);
				txt.append(html);
				txt.append(lbl);
				columna.append(txt);
				if (grupo== undefined) {
					form_lm.append(columna);
				}
				else{
					var grup = document.getElementById("lmgroup_"+grupo);
					grup.append(columna);
					form_lm.prepend(grup);
				}
			break;
			case "checkbox":
			var columna = document.createElement("div");
				columna.id="col_"+name;
				if (desfase==null || desfase==undefined) {
					columna.className="col s"+colum+" offset-s0";
				}else{
					columna.className="col s"+colum+" offset-s"+desfase;
				}
				var txt = document.createElement("div");
				var html = document.createElement("input");
				html.id=iden;
				html.setAttribute('type', tipo);
				if (requerido=="si") {
					html.required=true;
				}
				var lbl = document.createElement("label");
				lbl.setAttribute('for', iden);
				lbl.append(label);
				txt.append(html);
				txt.append(lbl);
				columna.append(txt);
				if (grupo== undefined) {
					form_lm.append(columna);
				}
				else{
					var grup = document.getElementById("lmgroup_"+grupo);
					grup.append(columna);
					form_lm.prepend(grup);
				}

			break;
			case "radio":
			var columna = document.createElement("div");
				columna.id="col_"+name;
				if (desfase==null || desfase==undefined) {
					columna.className="col s"+colum+" offset-s0";
				}else{
					columna.className="col s"+colum+" offset-s"+desfase;
				}
				var txt = document.createElement("div");
				var html = document.createElement("input");
				html.id=iden;
				html.setAttribute('type', tipo);
				if (requerido=="si") {
					html.required=true;
				}
				var lbl = document.createElement("label");
				lbl.setAttribute('for', iden);
				lbl.append(label);
				txt.append(html);
				txt.append(lbl);
				columna.append(txt);
				if (grupo== undefined) {
					form_lm.append(columna);
				}
				else{
					var grup = document.getElementById("lmgroup_"+grupo);
					grup.append(columna);
					form_lm.prepend(grup);
				}
			break;
			case "file":

			var fila =document.createElement("div");
				fila.className="row";
			var cont_file = document.createElement("div");
				cont_file.className="file-field input-field";
			var txt = document.createElement("div");
			var html = document.createElement("input");
				html.className="file-path validate";
				html.id=iden;
				txt.className="file-path-wrapper";
				html.setAttribute('type', 'text');
				html.setAttribute('accept',accept)
				if (requerido=="si") {
					html.required=true;
				}
				var btn_sub = document.createElement("div");
				btn_sub.className="btn grey darken-4";
				var span=document.createElement("span");
				span.append("Subir");
				btn_sub.append(span);
				var sub_2 = document.createElement("input");
				sub_2.setAttribute('type',tipo);
				sub_2.multiple=true;
				btn_sub.append(html);
				btn_sub.append(sub_2);
				txt.append(html)
				cont_file.append(btn_sub);
				cont_file.append(txt)
				fila.append(cont_file);
				form_lm.append(fila);

			break;
			default:
			alert("elemento no existe");
			/*select-box range bigdate*/
		}

	}


function llenarSelect (datos,nom_campo) {
	var num_d = datos.length;
	s = document.getElementById("select_"+nom_campo);
	if (s==null) {
		console.log("el select: "+"select_"+nom_campo+" No existe");
		return;
	}
	for(var j = 0; j < num_d; j++){
		var options = document.createElement("option");
			options.setAttribute('value',j);
			options.append(datos[j]);
			s.append(options);
	}

	$('select').material_select();
	$('.datepicker').pickadate();
}

//solamente pasa con id
function llenar_ubicaciones(sl_pais,sl_dep,sl_ciu){
	$.ajax({
		url:'../login/consultas.php?func=getPais',
		success:function(datos){
			for(var i = 0; i < datos.length;i++){
				$("#select_"+sl_pais).append(new Option(datos[i].nombre,datos[i].id));
			}
			$('select').material_select();
		}
	})

	$("#select_"+sl_pais).change(function(){
		$('#select_'+sl_dep).empty();
		$('#select_'+sl_ciu).empty();
		$.getJSON('../login/consultas.php',{func:"getDep",idpais:$('#select_'+sl_pais).val()}, function(datos){
			for(var i = 0; i<datos.length; i++){
				$("#select_"+sl_dep).append(new Option(datos[i].nombre,datos[i].id,datos[i].pais));
			}

			$('select').material_select();
		})
		.done(function() { console.log('getJSON request succeeded!'); })
		.fail(function(jqXHR, textStatus, errorThrown) { console.log('getJSON request failed! ' + textStatus); })
		.always(function() { console.log('getJSON request ended!'); });
	});

	$("#select_"+sl_dep).change(function(){
		$('#select_'+sl_ciu).empty();
		$.getJSON('../login/consultas.php',{func:"getCiu",idpais:$('#select_'+sl_pais).val(),iddepa:$('#select_'+sl_dep).val()}, function(datos){
			for(var i = 0; i<datos.length; i++){
				$("#select_"+sl_ciu).append(new Option(datos[i].nombre,datos[i].id));
			}

			$('select').material_select();
		})
		.done(function() { console.log('getJSON request succeeded!'); })
		.fail(function(jqXHR, textStatus, errorThrown) { console.log('getJSON request failed! ' + textStatus); })
		.always(function() { console.log('getJSON request ended!'); });
	});



}



function msg_modal(titulo,descrip){
	var cont_modal =  document.createElement("div");
	cont_modal.id="modal_info";
	cont_modal.className="modal";
	var sub_c_modal=document.createElement("div");
	sub_c_modal.className="modal-content";
	var tit = document.createElement("h4");
	var txt = document.createElement("p");
	var foot = document.createElement("div");
		foot.className="modal-footer";
	var btn_accept_foot = document.createElement("a");
	btn_accept_foot.className="modal-action modal-close waves-effect waves-green btn-flat";
	btn_accept_foot.append('Aceptar');
	tit.append(titulo);
	txt.append(descrip);
	sub_c_modal.append(tit);
	sub_c_modal.append(txt);
	cont_modal.append(sub_c_modal);
	cont_modal.append(btn_accept_foot);
	var error =  document.getElementById("error");
	error.append(cont_modal);
	$('.modal').modal();
	$('#modal_info').modal('open');
	}