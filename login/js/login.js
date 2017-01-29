$(document).ready(function(){
	crear_lmForm("cont_ses","form_sesion","consultas.php?func=login","post","Ingresar","send",false,camp_sesion);
	registro();
	});


var camp_sesion =
	[ 
	{
		tipo : "text",
		name : "usuario",
		label: "Usuario",
		requerido: "si",
		colum: 6,
		desfase: 3
	},
	
	{
		tipo : "password",
		name : "contrasena",
		label: "Contraseña",
		requerido: "si",
		colum: 6,
		desfase: 3
	}];

function registro(){

	var campos =
	[ 
	{
		tipo: "group",
		grupo:"grupo1",
		label: "Datos personales"
	},
	{
		tipo : "text",
		name : "pri_nomb",
		label: "Primer Nombre",
		grupo: "grupo1",
		requerido: "si",
		colum: 3
	},
	{
		tipo : "text",
		name : "seg_nomb",
		label: "Segundo Nombre",
		grupo: "grupo1",
		requerido: "si",
		colum: 3
	},
	{
		tipo : "text",
		name : "pri_apell",
		label: "Primer Apellido",
		grupo: "grupo1",
		requerido: "si",
		colum: 3
	},
	{
		tipo : "text",
		name : "seg_apell",
		label: "Segundo Apellido",
		grupo: "grupo1",
		requerido: "si",
		colum: 3
	},
	{
		tipo : "text",
		name : "correo",
		requerido: "si",
		label: "Correo Electronico",
		grupo: "grupo1",
		colum: 6

	},
	{
		tipo : "number",
		name : "edad",
		label: "Edad",
		grupo: "grupo1",
		requerido: "si",
		min: 0,
		max: 110,
		colum: 3
	},
	{
		tipo : "number",
		name : "telefono",
		label: "Telefono/Celular",
		grupo: "grupo1",
		requerido: "si",
		min: 0,
		colum: 3
	},
	{
		tipo : "date",
		name : "fecha_nac",
		label: "Fecha de Nacimiento",
		grupo: "grupo1",
		requerido: "si",
		colum: 6
		
	},
	{
		tipo : "select",
		name : "profesion",
		grupo: "grupo1",
		requerido: "si",
		label: "Profesion",
		colum: 6
	},
	{
		tipo: "group",
		grupo:"grupo2",
		label: "Ubicacion"
	},
	{
		tipo : "select",
		name : "pais",
		requerido: "si",
		grupo: "grupo2",
		label: "Pais",
		colum: 4
	},
	{
		tipo : "select",
		name : "departamento",
		requerido: "si",
		label: "Departamento",
		grupo:"grupo2",
		colum: 4
	},
	{
		tipo : "select",
		name : "ciudad",
		requerido: "si",
		label: "ciudad",
		grupo:"grupo2",
		colum: 4
	},
	{
		tipo : "text",
		name : "direccion",
		requerido: "si",
		label: "Direccion",
		grupo:"grupo2",
		colum: 3
	},
	{
		tipo : "select",
		name : "est_civil",
		requerido: "si",
		label: "Estado Civil",
		grupo:"grupo1",
		colum: 3
	},
	{
		tipo : "select",
		name : "estrato",
		requerido: "si",
		label: "Estrato",
		grupo:"grupo1",
		colum: 3
	},
	{
		tipo : "select",
		name : "rh",
		label: "Tipo de Sangre",
		grupo:"grupo1",
		requerido: "si",
		colum: 3
	},
	{
		tipo : "select",
		name : "tipo_doc",
		label: "Tipo de Documento",
		grupo:"grupo1",
		requerido: "si",
		colum: 6
	},
	{
		tipo : "number",
		name : "num_doc",
		label: "Documento",
		grupo:"grupo1",
		requerido: "si",
		min: 0,
		colum: 6
	},
	{
		tipo : "radio",
		name : "genero",
		label: "Genero",
		grupo:"grupo1",
		requerido: "si",
		colum: 6
	},
	
	{
		tipo : "radio",
		name : "num_hijos",
		label: "Hijos",
		grupo:"grupo1",
		requerido: "si",
		colum: 6
	}
	];

	
	
	var tipo_d = [];
	tipo_d.push("T.I","C.C","Reg C","C.E");
	console.log(tipo_d);

	crear_lmForm("cont_reg","form_reg","../conexion/consultas.php","get","Registrar","send",true,campos);
	llenarSelect(tipo_d,"tipo_doc");

	llenar_ubicaciones("pais","departamento","ciudad");

}
	

/*var campos =
	[ 
	{
		tipo : "text",
		name : "hola0",
		requerido: "si"
	},
	{
		tipo : "textArea",
		name : "hola1",
		requerido: "si"
	},
	{
		tipo : "number",
		name : "hola2",
		requerido: "si",
		max : 10,
		min : 0
	},
	{
		tipo : "select",
		name : "hola3",
		requerido: "si",
	},
	{
		tipo : "range",
		name : "hola4",
		requerido: "si",
		max : 10,
		min : 0
	},
	{
		tipo : "date",
		name : "hola5",
		requerido: "si",
	},
	{
		tipo : "password",
		name : "hola6",
		requerido: "no"
	},
	/*parte pensar*//*
	{
		tipo : "checkbox",
		name : "hola7",
		requerido: "no"
	},
	{
		tipo : "radio",
		name : "hola8",
		requerido: "no"
	},
	/*fin pensar*//*
	{
		tipo : "file",
		name : "hola9",
		requerido: "no",
		accept: "file_extension|audio/*|video/*|image/*|media_type"
	}];*/
	