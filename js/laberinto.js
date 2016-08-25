function pintarLaberinto(scene){
	
	var escenario = scene;

	var Muro = {
		
		crear:(tam,posX,posZ,isRotate) => {
			pared = new THREE.BoxGeometry( 10, 150, tam );
			paredsmesh = new THREE.Mesh( pared, material );
			escenario.add( paredsmesh );
			paredsmesh.position.x = posX;
			paredsmesh.position.z = posZ;
			if (isRotate) {paredsmesh.rotateY(1.57);}
			objects.push(paredsmesh);
		}

	};

	var Cartel = {
		crear:(posX,posY,posZ,isRotate,color) => {
 
			var material = new THREE.MeshPhongMaterial({
			color: color,
			shininess: 20,
			shading: THREE.FlatShading
			});

			var geometry = new THREE.BoxGeometry(20,10,2);

			var mesh = new THREE.Mesh(geometry, material);
			mesh.position.set(posX, posY,posZ);
			scene.add(mesh);
			if (isRotate) {mesh.rotateY(1.57);}
		}
	}

	//textura paredes
	var texture = THREE.ImageUtils.loadTexture(
        'textures/patterns/grass.png'
      );
      
	var textureLogo = THREE.ImageUtils.loadTexture(
	'textures/patterns/logo.png'
	);

	var material = new THREE.MeshPhongMaterial({
	color: 0xffffff,
	shininess: 20,
	shading: THREE.FlatShading,
	map: texture
	});

	var materialLogo = new THREE.MeshPhongMaterial({
	color: 0xffffff,
	shininess: 20,
	shading: THREE.FlatShading,
	map: textureLogo
	});


	var paredLateralD = new THREE.BoxGeometry( 1, 150, 1000 );
	var cube = new THREE.Mesh( paredLateralD, material );
	cube.rotateY(1.57);
	cube.position.z = 500;
	escenario.add( cube );
	objects.push(cube);
	var paredLateralI = new THREE.BoxGeometry( 1, 150, 1000);
	cube = new THREE.Mesh( paredLateralI, material );
	cube.rotateY(1.57);
	cube.position.z = -500;
	escenario.add( cube );
	objects.push(cube);
	var paredFrontal1 = new THREE.BoxGeometry( 1, 150, 1000);
	cube = new THREE.Mesh( paredFrontal1, material );
	cube.position.x = 500;
	escenario.add( cube );
	objects.push(cube);
	var ParedTrasera = new THREE.BoxGeometry( 1, 150, 1000 );
	cube = new THREE.Mesh( ParedTrasera, material );
	cube.position.x = -500;
	escenario.add( cube );
	objects.push(cube);

	//Coordenadas de todas las paredes
	var lista = [
			[55,-472,-434,true],//1
			[150,-388,-430,false],//2
			[150,-385,-353,true],//3
			[200,-210,-434,true],//4
			[70,-210,-469,false],//5
			[85,-108,-396,false],//6
			[200,-128,-353,true],//7
			[115,34,-445,false],//8
			[270,80,-267,true],//9
			[265,120,-297,false],//10
			[315,370,-364,true],//11
			[96,319,-311,false],//12
			[106,453,-279,true],//13
			[142,339,-52,true],//14
			[136,273,-118,false],//15
			[136,415,-115,false],//16
			[252,375,35,true],//17
			[195,125,0,false],//18
			[180,38,0,true],//19
			[270,-50,-130,false],//20
			[90,85,-92,true],//casa1
			[145,115,-168,true],//casa2
			[115,-183,-146,true],//21
			[115,-244,-199,false],//22
			[115,-320,-199,false],//23
			[85,-360,-147,true],//24
			[215,-400,-159,false],//25
			[385,-320,-50,true],//26
			[115,-320,4,false],//27
			[215,-320,60,true],//28
			[55,-216,83,false],//29
			[195,-413,158,true],//30
			[95,-320,201,false],//31
			[125,-377,250,true],//32
			[110,-434,300,false],//33
			[195,-413,428,true],//34
			[130,-213,438,false],//35
			[125,-213,235,false],//36
			[155,-133,235,true],//37
			[125,26,135,false],//38
			[155,-55,121,true],//39
			[160,51,420,false],//40
			[190,11,340,true],//41
			[100,-79,390,false],//42
			[290,175,360,false],//43
			[180,194,218,true],//44
			[185,279,315,false],//45
			[280,386,175,false],//46
			[130,442,395,true]//47
			 ];

	for (var i = 0; i < lista.length; i++) {
		Muro.crear(lista[i][0],lista[i][1],lista[i][2],lista[i][3]);
	}


	//Objeto
	var posiblesMetas = [[239,25,256],[74,25,-220],[ -464,25,-470]];
	cubo= new THREE.BoxGeometry( 40,40,40);
	cuboMesh= new THREE.Mesh(cubo,materialLogo);
	scene.add(cuboMesh);

	var opcion = Math.floor(Math.random() * (posiblesMetas.length - 0)) + 0;
	
	cuboMesh.position.x=posiblesMetas[opcion][0];
	cuboMesh.position.y=posiblesMetas[opcion][1];
	cuboMesh.position.z= posiblesMetas[opcion][2];
	meta.push(cuboMesh);

	var indicadores = [ [224,53,212,false,0xffffff], //44 blanco
						[-56,49,-85,true,0xff0000], //
						[-333,60,-348,false,0xffff00], //
						[268,50,-137,true,0x0000ff] //
					  ];

	for (var i = 0; i < indicadores.length; i++) {
		Cartel.crear(indicadores[i][0],indicadores[i][1],indicadores[i][2],indicadores[i][3],indicadores[i][4]);
	}	  

};