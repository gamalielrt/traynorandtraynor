


///////////THREE.js



var scene, camera, renderer, composer;

const loadingManager = new THREE.LoadingManager();

resourcesLoaded = Boolean;

var camPosition = new THREE.Vector3(1, 3000, 16000);
var camTarget = new THREE.Vector3(-1000,500,0);


var cameraZoom = {var : 1};
var cameraMaxD = {var : 17000};
var cameraMinD = {var : 0};



var orbit1Group = new THREE.Group();
var orbit2Group = new THREE.Group();
var orbit3Group = new THREE.Group();
var orbit4Group = new THREE.Group();








function THREEgoToMusic () {

    gsap.to(camTarget, {x:-1000, duration:3})
    gsap.to(camTarget, {y:-700, duration:3})
    gsap.to(camTarget, {z:0, duration:3})


    gsap.to(cameraZoom, {var:1, duration:3})

    gsap.to(cameraMaxD, {var:17000, duration:3})
    gsap.to(cameraMinD, {var:17000, duration:3})

    gsap.to(camPosition, {y:-500, duration:3});

    gsap.to(scene.background, {r:0.90, duration:3});
    gsap.to(scene.background, {g:0.48, duration:3});
    gsap.to(scene.background, {b:0.19, duration:3});

    gsap.to(scene.fog.color, {r:0.90, duration:3});
    gsap.to(scene.fog.color, {g:0.48, duration:3});
    gsap.to(scene.fog.color, {b:0.19, duration:3});

    //gsap.to(hlight, {intensity:1 , duration:3});





}



function THREEgoToVisual () {

    //controls.enabled = false;

    gsap.to(camTarget, {x:-250, duration:3})
    gsap.to(camTarget, {y:500, duration:3})
    gsap.to(camTarget, {z:250, duration:3})

    gsap.to(cameraMaxD, {var:600, duration:3})
    gsap.to(cameraMinD, {var:600, duration:3})

    gsap.to(cameraZoom, {var:0.6, duration:3})

    gsap.to(camPosition, {y:500, duration:3});

    gsap.to(scene.background, {r:0.90, duration:3});
    gsap.to(scene.background, {g:0.48, duration:3});
    gsap.to(scene.background, {b:0.19, duration:3});

    gsap.to(scene.fog.color, {r:0.90, duration:3});
    gsap.to(scene.fog.color, {g:0.48, duration:3});
    gsap.to(scene.fog.color, {b:0.19, duration:3});

    //gsap.to(hlight, {intensity:0 , duration:10});



}




function THREEgoToAbout () {

    gsap.to(camTarget, {x:-2000, duration:3})
    gsap.to(camTarget, {y:9000, duration:3});
    gsap.to(camTarget, {z:800, duration:3})


    gsap.to(cameraZoom, {var:1, duration:3});

    gsap.to(cameraMaxD, {var:10000, duration:3});
    gsap.to(cameraMinD, {var:10000, duration:3});

    gsap.to(camPosition, {y:20000, duration:3});

    gsap.to(scene.background, {r:0.38, duration:3});
    gsap.to(scene.background, {g:0.44, duration:3});
    gsap.to(scene.background, {b:0.73, duration:3});

    gsap.to(scene.fog.color, {r:0.38, duration:3});
    gsap.to(scene.fog.color, {g:0.44, duration:3});
    gsap.to(scene.fog.color, {b:0.73, duration:3});

    gsap.to(hlight, {intensity:0.8 , duration:3});


}

function clubLightsDown () {
    gsap.to(testLight, {intensity:0 , duration:3});
    gsap.to(testLight1, {intensity:0 , duration:3});
    gsap.to(testLight2, {intensity:0 , duration:3});
    gsap.to(testLight3, {intensity:0 , duration:3});
    gsap.to(testLight4, {intensity:0 , duration:3});
    gsap.to(testLight5, {intensity:0 , duration:3});

}

function clubLightsUp () {

    gsap.to(testLight, {intensity:10 , duration:3});
    gsap.to(testLight1, {intensity:10 , duration:3});
    gsap.to(testLight2, {intensity:10 , duration:3});
    gsap.to(testLight3, {intensity:10 , duration:3});
    gsap.to(testLight4, {intensity:10 , duration:3});
    gsap.to(testLight5, {intensity:10 , duration:3});


}





function updateCamera () {
        camera.zoom = cameraZoom.var;
        controls.maxDistance = cameraMaxD.var;
        controls.minDistance = cameraMinD.var;

        camera.updateProjectionMatrix();

}

function removeEntity(object) {
    var selectedObject = scene.getObjectByName(object);
    scene.remove( selectedObject );
    animate();
}







function init() {

    scene = new THREE.Scene();


    
    bgcolour = new THREE.Color(0.90, 0.48, 0.19);
    //bgcolour = new THREE.Color(0.69, 0.15, 0.15);

    black = new THREE.Color(0,0,0);

    scene.background = bgcolour;


    // blue // 97 112 185  // 0.38 0.44 0.73 // 0x6170B9
    // orange // 230, 122, 48  // 0.90 0.48 0.19 //
    // green // 0x0D4900
    // pink // 0.69 0.15 0.15





    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1,100000);





    renderer = new THREE.WebGLRenderer({antialias:true});

    renderer.setPixelRatio( window.devicePixelRatio* 0.5 );

    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);


    scene.fog = new THREE.FogExp2( bgcolour, 0.00007 );
    

    var axesHelper = new THREE.AxesHelper( 50000 );

    //scene.add( axesHelper );


    ////////////////  CONTROLS


    controls = new THREE.OrbitControls( camera, renderer.domElement );

    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5; // 30 seconds per round when fps is 60

    controls.target = camTarget;
    camera.position.set(camPosition.x, camPosition.y, camPosition.z);

    controls.minDistance = cameraMinD.var;
    controls.maxDistance = cameraMaxD.var;

    controls.maxPolarAngle = 1.4; //1.7
    controls.minPolarAngle = 1.2;  //-2

    controls.keyPanSpeed = 50;
    controls.PanSpeed = 50;

    controls.enableDamping = true;
    controls.dampingFactor = 1;

    controls.update();


    loadingManager.onStart = function(url, item, total) {
        console.log('Started Loading');
        document.getElementById("loadingbox").style.display = "block";
    }
    loadingManager.onProgress = function(item, loaded, total) {
        console.log(item,loaded,total);
    }
    loadingManager.onLoad = function () {
        console.log("Loading Complete");
        resourcesLoaded = true;
        addLights ();
        document.getElementById("loadingbox").style.display = "none";
        //removeEntity("desertwire");
        //scene.background = bgcolour;
        //scene.fog.color = bgcolour;

        //gsap.to(scene.background, {r:0.90, duration:3});
        //gsap.to(scene.background, {g:0.48, duration:3});
        //gsap.to(scene.background, {b:0.19, duration:3});

        //gsap.to(scene.fog.color, {r:0.90, duration:3});
        //gsap.to(scene.fog.color, {g:0.48, duration:3});
        //gsap.to(scene.fog.color, {b:0.19, duration:3});





    }

    



    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /////////// LIGHTS
    
    
    
    
    
    /////////////  DESERT LIGHTS

    function addLights () {

        hlight = new THREE.AmbientLight (0xffffff,2);
        scene.add(hlight);


        var light1 = new THREE.PointLight(0xeb8334, 2);
        light1.position.set(0,10000,30);
        //scene.add(light1);

        var light2 = new THREE.PointLight(0xffffff, 1);
        light2.position.set(0,1000,500);
        //scene.add(light2);

        var light3 = new THREE.PointLight(0x66ffcc,2,  0,  1);
        light3.position.set(0,380,300);
        //scene.add(light3);

        var light3Helper = new THREE.PointLightHelper( light3, 9 );
        //scene.add( light3Helper );


        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        //////////////  CLUB LIGHTS

        var lightColour = 0xD98400; //D98400
        var lightDistance = 10//10; //3
        var lightDecay = 700; //280
        var StageLightColour = 0x3333ff;
        var StageLightIntensity = 5; //0 /////////////////////////////  LONG VIDEO /////9
        var StageLightDecay = 450; //350
        var spotLightintensity = 2;
        var spotLightangle = 0.3;
        var spotLightpenumbra = 0.5;
        var spotLightdistance = 0;
        var spotLightdecay = 0;

        


        //////////////// left light 1

        testLight = new THREE.PointLight(lightColour, lightDistance, lightDecay);//1, 750
        testLight.position.set(351,602,471);
        //testLight.castShadow = true;
        testLight.shadow.camera.near = 100;
        testLight.shadow.camera.far = 1000;

        scene.add(testLight);
        var sphereSize = 9;
        var pointLightHelper = new THREE.PointLightHelper( testLight, sphereSize );
        //scene.add( pointLightHelper );



        //////////////// left light 2

        testLight1 = new THREE.PointLight(lightColour, lightDistance, lightDecay);//750
        testLight1.position.set(9,626,834);
        //testLight1.castShadow = true;
        testLight1.shadow.camera.near = 100;
        testLight1.shadow.camera.far = 1000;

        scene.add(testLight1);



        //////////////// left light 3

        testLight3 = new THREE.PointLight(lightColour, lightDistance, lightDecay);//750
        testLight3.position.set(-414,618,884);
        //testLight3.castShadow = true;
        testLight3.shadow.camera.near = 100;
        testLight3.shadow.camera.far = 1000;

        scene.add(testLight3);
        var sphereSize = 40;
        var pointLightHelper = new THREE.PointLightHelper( testLight3, sphereSize );
        //scene.add( pointLightHelper );



        //////////////// left light 4

        testLight4 = new THREE.PointLight(lightColour, lightDistance, lightDecay);//750
        testLight4.position.set(-821,625,601);
        //testLight4.castShadow = true;
        testLight4.shadow.camera.near = 100;
        testLight4.shadow.camera.far = 1000;

        scene.add(testLight4);
        var sphereSize = 40;
        var pointLightHelper = new THREE.PointLightHelper( testLight4, sphereSize );
        //scene.add( pointLightHelper );



        //////////////// right light 1

        testLight5 = new THREE.PointLight(lightColour, lightDistance, lightDecay);//750
        testLight5.position.set(127,522,-297);
        //testLight5.castShadow = true;
        testLight5.shadow.camera.near = 100;
        testLight5.shadow.camera.far = 1000;

        scene.add(testLight5);
        var sphereSize = 40;
        var pointLightHelper = new THREE.PointLightHelper( testLight5, sphereSize );


        ////////////////// bar light

        testLight2 = new THREE.PointLight(lightColour,3, lightDecay);//750
        testLight2.position.set(-747,531,-211);
        testLight2.shadow.camera.near = 100;
        testLight2.shadow.camera.far = 1000;

        scene.add(testLight2);
        var sphereSize = 300;
        var pointLightHelper = new THREE.PointLightHelper( testLight2, sphereSize );




        //////////////// stage light 1

        testLight6 = new THREE.PointLight("rgb(26%, 26%, 225%)", StageLightIntensity, StageLightDecay);//750
        testLight6.position.set(-116,737,202);

        scene.add(testLight6);



        //////////////// stage light 2

        testLight7 = new THREE.PointLight("rgb(26%, 26%, 225%)", StageLightIntensity, StageLightDecay);//750
        testLight7.position.set(-378,737,138);

        scene.add(testLight7);



        //////////////// stage light 3

        testLight8 = new THREE.PointLight("rgb(26%, 26%, 225%)", StageLightIntensity, StageLightDecay);//750
        testLight8.position.set(-227,737,367);

        scene.add(testLight8);



        ////////////////// stage spot 1

        stageSpot = new THREE.SpotLight("rgb(255%, 255%, 255%)",0);
        stageSpot.intensity = 0;
        stageSpot.angle = 0.5;
        stageSpot.penumbra = 1;
        stageSpot.distance = 1;
        stageSpot.decay = 1;
        stageSpot.position.set(-86,529,10);
        stageSpot.target.position.set(-704, 300, 682)//-704, 300, 682);
        //spotlight.target.position.set(200,-130,400);
        scene.add(stageSpot);
        scene.add(stageSpot.target);
        //lightHelper = new THREE.SpotLightHelper( stageSpot );
        //scene.add( lightHelper );

        ////////////////// stage spot 2

        stageSpot1 = new THREE.SpotLight("rgb(255%, 255%, 255%)",0);
        stageSpot1.intensity = 0;
        stageSpot1.angle = 0.5;
        stageSpot1.penumbra = 1;
        stageSpot1.distance = 1;
        stageSpot1.decay = 1;
        stageSpot1.position.set(-452,527,-1);
        stageSpot1.target.position.set(130, 300, 748);
        //spotlight.target.position.set(200,-130,400);
        scene.add(stageSpot1);
        scene.add(stageSpot1.target);
        //lightHelper = new THREE.SpotLightHelper( stageSpot );
        //scene.add( lightHelper );


        ////////////////// stage spot 3

        stageSpot2 = new THREE.SpotLight("rgb(255%, 255%, 255%)",0);
        stageSpot2.intensity = 0;
        stageSpot2.angle = 0.5;
        stageSpot2.penumbra = 1;
        stageSpot2.distance = 1;
        stageSpot2.decay = 1;
        stageSpot2.position.set(-326,527,501);
        stageSpot2.target.position.set(148, 300, -286);
        //spotlight.target.position.set(200,-130,400);
        scene.add(stageSpot2);
        scene.add(stageSpot2.target);
        //lightHelper = new THREE.SpotLightHelper( stageSpot );
        //scene.add( lightHelper );

        
        ////////////////// stage spot 4

        stageSpot3 = new THREE.SpotLight("rgb(255%, 255%, 255%)",0);
        //stageSpot3.intensity = 0;
        stageSpot3.angle = 0.5;
        stageSpot3.penumbra = 1;
        stageSpot3.distance = 1;
        stageSpot3.decay = 1;
        stageSpot3.position.set(-49,528,388);
        stageSpot3.target.position.set(-766, 300, -409);
        //spotlight.target.position.set(200,-130,400);
        scene.add(stageSpot3);
        scene.add(stageSpot3.target);
        //lightHelper = new THREE.SpotLightHelper( stageSpot );
        //scene.add( lightHelper );
        
        var spotLight = new THREE.SpotLight(0x3333ff);
        spotLight.intensity = 1;
        spotLight.angle = 0.3;
        spotLight.penumbra = 0.5;
        spotLight.distance = 1;
        spotLight.decay = 0;
        spotLight.position.set(0,700,0);
        spotLight.target.position.set(-900, 0, 900);
        //spotlight.target.position.set(200,-130,400);
        //scene.add(spotLight);
        scene.add(spotLight.target);
        lightHelper = new THREE.SpotLightHelper( spotLight );
        //scene.add( lightHelper );


    }


    

    





    








    






    
    ///////////////////  TEXTURES

    
    loader = new THREE.OBJLoader(loadingManager);


    mtlLoader = new THREE.MTLLoader();

    textureLoader = new THREE.TextureLoader();

    var ceilingtex = textureLoader.load('assets/clubassets/ceilingtex1.jpg');
    var walltex = textureLoader.load('assets/clubassets/ceilingtex1.jpg');
    var floortex = textureLoader.load('assets/clubassets/ceilingtex1.jpg');
    var centertex = textureLoader.load('assets/clubassets/ceilingtex1.jpg');
    var ceilingnormaltex = textureLoader.load('assets/clubassets/ceilingnormaltex.jpg');
    var curtaintex = textureLoader.load('assets/clubassets/noisetex.jpg');
    var curtainnormaltex = textureLoader.load('assets/clubassets/leathernormaltex.jpg');

    walltex.wrapS = THREE.RepeatWrapping;
    walltex.wrapT = THREE.RepeatWrapping;
    walltex.repeat.set(40,40);

    curtaintex.wrapS = THREE.RepeatWrapping;
    curtaintex.wrapT = THREE.RepeatWrapping;
    curtaintex.repeat.set(3,7.5);

    curtainnormaltex.wrapS = THREE.RepeatWrapping;
    curtainnormaltex.wrapT = THREE.RepeatWrapping;
    curtainnormaltex.repeat.set(3,7.5);

    ceilingtex.wrapS = THREE.RepeatWrapping;
    ceilingtex.wrapT = THREE.RepeatWrapping;
    ceilingtex.repeat.set(20,20);

    ceilingnormaltex.wrapS = THREE.RepeatWrapping;
    ceilingnormaltex.wrapT = THREE.RepeatWrapping;
    ceilingnormaltex.repeat.set(10,10);

    centertex.wrapS = THREE.RepeatWrapping;
    centertex.wrapT = THREE.RepeatWrapping;
    centertex.repeat.set(2,20);

    walltex.wrapS = THREE.RepeatWrapping;
    walltex.wrapT = THREE.RepeatWrapping;
    walltex.repeat.set(5,20);

    floortex.wrapS = THREE.RepeatWrapping;
    floortex.wrapT = THREE.RepeatWrapping;
    floortex.repeat.set(5,5);

    ////////////////  WIREFRAME

    

        var wiremtl = new THREE.MeshBasicMaterial({

        color: 0x2EFF00,

        wireframe: true

    });

    loader.load( 'assets/wireframeassets/desertwire.obj', function ( desertwire ) {
                    

        desertwire.traverse( function ( node ) {

            if ( node.isMesh ) node.material = wiremtl;             
        } );

        desertwire.position.y = 300;
        desertwire.name = "desertwire";
        //scene.add( desertwire );
    });

















































    //////////////// CLUB

    ////////////////////   floor

    var floormtl = new THREE.MeshLambertMaterial({
        map : floortex,
        color: 0x0d0d0d

    });

    loader.load( 'assets/clubassets/newfloorsmall.obj', function ( floormesh ) {
                    

        floormesh.traverse( function ( node ) {

            if ( node.isMesh ) node.material = floormtl;             
            node.castShadow = true;                       
            node.receiveShadow = true;
        } );

        floormesh.position.y = 300;
        scene.add( floormesh );
    });

    

    ////////////////////   walls
    
    
    var wallscentremtl = new THREE.MeshLambertMaterial({
        map : walltex,
        //shininess : 0,
        color: 0x191919,
        //normalMap: curtainnormaltex,
    });

    loader.load( 'assets/clubassets/newwalls1.obj', function ( wallscentremesh ) {
                    

        wallscentremesh.traverse( function ( node ) {

            if ( node.isMesh ) node.material = wallscentremtl;             
            node.castShadow = true;
        } );

        wallscentremesh.position.y = 300;
        scene.add( wallscentremesh );
    });

    

    ////////////////////   centre
    

    var centremtl = new THREE.MeshLambertMaterial({
        map : centertex,

        color: 0x191919,
        //color: 0x03fc03, 
        //wireframe: true

    });

    loader.load( 'assets/clubassets/newcenter.obj', function ( centremesh ) {
                    

        centremesh.traverse( function ( node ) {

            if ( node.isMesh ) node.material = centremtl;             
            node.castShadow = true;
        } );

        centremesh.position.y = 300;
        scene.add( centremesh );
    });

    

    ////////////////////   stools + tables
    

    var stoolstablesmtl = new THREE.MeshStandardMaterial({
        //map : ceilingtex,
        metalness : 0.8,
        roughness : 0.2,
        color: 0x1c1c1c,
        //emissiveIntensity: 100
        

    });

    loader.load( 'assets/clubassets/newstoolstables1.obj', function ( stoolstablesmesh ) {
                    

        stoolstablesmesh.traverse( function ( node ) {

            if ( node.isMesh ) node.material = stoolstablesmtl;             

        } );

        stoolstablesmesh.position.y = 300;
        scene.add( stoolstablesmesh );
    });
    
    ////////////////////   chair tops

    var chairtopmtl = new THREE.MeshStandardMaterial({
        map : curtaintex,
        metalness : 0.5,
        roughness : 0.5,
        color: 0x000000,
        emissive: 0x800080,
        //emissiveIntensity: 100
        emissiveMap: curtainnormaltex,
        emissiveIntensity : 0.1,
        normalMap: curtainnormaltex,
        normalScale: new THREE.Vector2( 0, 0.5 )

    });



    loader.load( 'assets/clubassets/newchairtops.obj', function ( chairtopmesh ) {
                    

        chairtopmesh.traverse( function ( node ) {

            if ( node.isMesh ) node.material = chairtopmtl;             

        } );

        chairtopmesh.position.y = 300;
        scene.add( chairtopmesh );
    });

    ////////////////////   bar

    var barmtl = new THREE.MeshStandardMaterial({
        //map : ceilingtex,
        metalness : 0.95,
        roughness : 0,
        color: 0x8c8c8c,
        normalMap: ceilingnormaltex,
        normalScale: new THREE.Vector2( 0, 0.4 )


        //emissiveIntensity: 100

    });

    loader.load( 'assets/clubassets/newbar1.obj', function ( barmesh ) {
                    

        barmesh.traverse( function ( node ) {

            if ( node.isMesh ) node.material = barmtl;             

        } );

        barmesh.position.y = 300;
        scene.add( barmesh );
    }); 

    ////////////////////   metal

        var metalmtl = new THREE.MeshPhongMaterial({
        map : floortex,
        shininess : 30,
        color: 0x404040,
        //emissiveIntensity: 100

    });

    loader.load( 'assets/clubassets/newmetal1small.obj', function ( metalmesh ) {
                    

        metalmesh.traverse( function ( node ) {

            if ( node.isMesh ) node.material = metalmtl;             

        } );

        metalmesh.position.y = 300;
        scene.add( metalmesh );
    }); 

    ////////////////////   speakers    
    
    var speakersmtl = new THREE.MeshPhongMaterial({
        //map : ceilingtex,
        shininess : 15,
        color: 0x000000,
        //emissiveIntensity: 100

    });

    loader.load( 'assets/clubassets/newspeakers.obj', function ( speakersmesh ) {
                    

        speakersmesh.traverse( function ( node ) {

            if ( node.isMesh ) node.material = speakersmtl;             
            node.castShadow = true;
            node.receiveShadow = true;
        } );

        speakersmesh.position.y = 300;
        scene.add( speakersmesh );
    });
    

    ////////////////////   tv + light metal

    var tvlightsmtl = new THREE.MeshStandardMaterial({
        map : floortex,
        metalness : 0.5,
        color: 0x595959,
        //emissiveIntensity: 100

    });

    loader.load( 'assets/clubassets/newtvlightmetal4.obj', function ( tvlightsmesh ) {
                    

        tvlightsmesh.traverse( function ( node ) {

            if ( node.isMesh ) node.material = tvlightsmtl;             

        } );

        tvlightsmesh.position.y = 300;
        scene.add( tvlightsmesh );
    });  
    

    ////////////////////   light tops

    var lighttopsmtl = new THREE.MeshStandardMaterial({
        //map : ceilingtex,
        transparent : true,
        opacity : 0.68,
        metalness : 0.6,
        roughness : 0.2,
        color: 0xff6600,
        //emissiveIntensity: 100

    });

    loader.load( 'assets/clubassets/newlighttops1.obj', function ( lighttopsmesh ) {
                    

        lighttopsmesh.traverse( function ( node ) {

            if ( node.isMesh ) node.material = lighttopsmtl;
                        
            node.castShadow = true;
            node.receiveShadow = true;             

        } );

        lighttopsmesh.position.y = 300;
        scene.add( lighttopsmesh );
    });  

    ////////////////////   tv screens

    var tvscreensmtl = new THREE.MeshPhongMaterial({
        shininess : 30,

        //roughness : 0,
        color: 0x000000,
        //specular: 0x000000
        //emissiveIntensity: 100

    });

    loader.load( 'assets/clubassets/newtvscreens.obj', function ( tvscreensmesh ) {
                    

        tvscreensmesh.traverse( function ( node ) {

            if ( node.isMesh ) node.material = tvscreensmtl;             

        } );

        // Add the model to the scene.
        tvscreensmesh.position.y = 300;
        scene.add( tvscreensmesh );
    });  

    ////////////////////   cables
    

    var cablesmtl = new THREE.MeshPhongMaterial({
        color: 0x000000,
        shininess : 10, 

    });

    loader.load( 'assets/clubassets/newcablessmall.obj', function ( cablesmesh ) {
                    

        cablesmesh.traverse( function ( node ) {

            if ( node.isMesh ) node.material = cablesmtl;             

        } );

        cablesmesh.position.y = 300;
        scene.add( cablesmesh );
    }); 
    
    ////////////////////   stage surface

    stagesurfacemtl = new THREE.MeshStandardMaterial({
        //map : curtaintex,
        metalness: 0,
        roughness : 1,
        color: 0x000000,
        emissiveIntensity: 1,
        //emissive: 'rgb(26%,26%,255%)'//0x1a1aff,


    });

    loader.load( 'assets/clubassets/newstagesurface.obj', function ( stagesurfacemesh ) {
                    

        stagesurfacemesh.traverse( function ( node ) {

            if ( node.isMesh ) node.material = stagesurfacemtl;             

        } );

        stagesurfacemesh.position.y = 300;
        scene.add( stagesurfacemesh );
    }); 

    





    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //////////////// DESERT


    

    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdesertassets/' )
    .load( 'domenew1_1.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdesertassets/' )
            objLoader.load( 'domenew1_1.obj', function ( domenew1_1 ) {

                domenew1_1.position.y = 200;
                scene.add( domenew1_1 );

            } );

    } );
    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdesertassets/' )
    .load( 'domenew1_2.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdesertassets/' )
            objLoader.load( 'domenew1_2.obj', function ( domenew1_2 ) {

                domenew1_2.position.y = 200;
                scene.add( domenew1_2 );

            } );

    } );



    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdesertassets/' )
    .load( 'ladder1.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdesertassets/' )
            objLoader.load( 'ladder1.obj', function ( ladder1 ) {

                ladder1.position.y = 200;
                scene.add( ladder1 );

            } );

    } );
    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdesertassets/' )
    .load( 'wall1.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdesertassets/' )
            objLoader.load( 'wall1.obj', function ( wall1 ) {

                wall1.position.y = 200;
                scene.add( wall1 );

            } );

    } );
    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdesertassets/' )
    .load( 'wallextra1.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdesertassets/' )
            objLoader.load( 'wallextra1.obj', function ( wallextra1 ) {

                wallextra1.position.y = 200;
                scene.add( wallextra1 );

            } );

    } );
    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdesertassets/' )
    .load( 'rocks.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdesertassets/' )
            objLoader.load( 'rocks2.obj', function ( rocks ) {

                rocks.position.y = 200;
                scene.add( rocks );

            } );

    } );
    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdesertassets/' )
    .load( 'door1.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdesertassets/' )
            objLoader.load( 'door1.obj', function ( door1 ) {

                door1.position.y = 200;
                scene.add( door1 );

            } );

    } );











    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdesertassets/' )
    .load( 'LL_0.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdesertassets/' )
            objLoader.load( 'LL_0.obj', function ( LL_0 ) {

                LL_0.position.y = 200;
                scene.add( LL_0 );

            } );

    } );
    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdesertassets/' )
    .load( 'LL_1.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdesertassets/' )
            objLoader.load( 'LL_1.obj', function ( LL_1 ) {

                LL_1.position.y = 200;
                scene.add( LL_1 );

            } );

    } );
    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdesertassets/' )
    .load( 'LL_2.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdesertassets/' )
            objLoader.load( 'LL_2.obj', function ( LL_2 ) {

                LL_2.position.y = 200;
                scene.add( LL_2 );

            } );

    } );
    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdesertassets/' )
    .load( 'LL_3.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdesertassets/' )
            objLoader.load( 'LL_3.obj', function ( LL_3 ) {

                LL_3.position.y = 200;
                scene.add( LL_3 );

            } );

    } );
    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdesertassets/' )
    .load( 'LL_4.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdesertassets/' )
            objLoader.load( 'LL_4.obj', function ( LL_4 ) {

                LL_4.position.y = 200;
                scene.add( LL_4 );

            } );

    } );
    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdesertassets/' )
    .load( 'LL_5.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdesertassets/' )
            objLoader.load( 'LL_5.obj', function ( LL_5 ) {

                LL_5.position.y = 200;
                scene.add( LL_5 );

            } );

    } );
    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdesertassets/' )
    .load( 'LL_6.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdesertassets/' )
            objLoader.load( 'LL_6.obj', function ( LL_6 ) {

                LL_6.position.y = 200;
                scene.add( LL_6 );

            } );

    } );
    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdesertassets/' )
    .load( 'RL_0.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdesertassets/' )
            objLoader.load( 'RL_0.obj', function ( RL_0 ) {

                RL_0.position.y = 200;
                scene.add( RL_0 );

            } );

    } );
    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdesertassets/' )
    .load( 'RL_1.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdesertassets/' )
            objLoader.load( 'RL_1.obj', function ( RL_1 ) {

                RL_1.position.y = 200;
                scene.add( RL_1 );

            } );

    } );
    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdesertassets/' )
    .load( 'RL_2.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdesertassets/' )
            objLoader.load( 'RL_2.obj', function ( RL_2 ) {

                RL_2.position.y = 200;
                scene.add( RL_2 );

            } );

    } );
    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdesertassets/' )
    .load( 'ML_0.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdesertassets/' )
            objLoader.load( 'ML_0.obj', function ( ML_0 ) {

                ML_0.position.y = 200;
                scene.add( ML_0 );

            } );

    } );
    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdesertassets/' )
    .load( 'ML_1.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdesertassets/' )
            objLoader.load( 'ML_1.obj', function ( ML_1 ) {

                ML_1.position.y = 200;
                scene.add( ML_1 );

            } );

    } );
    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdesertassets/' )
    .load( 'ML_2.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdesertassets/' )
            objLoader.load( 'ML_2.obj', function ( ML_2 ) {

                ML_2.position.y = 200;
                scene.add( ML_2 );

            } );

    } );



    scene.add(orbit1Group);
    scene.add(orbit2Group);
    scene.add(orbit3Group);
    scene.add(orbit4Group);

    

    


    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdesertassets/orbits/' )
    .load( 'orbit1.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdesertassets/orbits/' )
            objLoader.load( 'orbit1.obj', function ( orbit1 ) {

                orbit1.position.y = 200;
                orbit1Group.add( orbit1 );

            } );

    } );
    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdesertassets/orbits/' )
    .load( 'orbit2.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdesertassets/orbits/' )
            objLoader.load( 'orbit2.obj', function ( orbit2 ) {

                orbit2.position.y = 200;
                orbit2Group.add( orbit2 );

            } );

    } );
    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdesertassets/orbits/' )
    .load( 'orbit3.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdesertassets/orbits/' )
            objLoader.load( 'orbit3.obj', function ( orbit3 ) {

                orbit3.position.y = 200;
                orbit3Group.add( orbit3 );

            } );

    } );
    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdesertassets/orbits/' )
    .load( 'orbit4.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdesertassets/orbits/' )
            objLoader.load( 'orbit4.obj', function ( orbit4 ) {

                orbit4.position.y = 200;
                orbit4Group.add( orbit4 );

            } );

    } );

    
























    
   

    
































    //////////////DINOS









    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdinoassets/' )
    .load( 'gam1.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdinoassets/' )
            objLoader.load( 'gam1.obj', function ( gam ) {

                gam.position.y = 200;
                scene.add( gam );

            } );

    } );

    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdinoassets/' )
    .load( 'dante1.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdinoassets/' )
            objLoader.load( 'dante1.obj', function ( dante1 ) {

                dante1.position.y = 200;
                scene.add( dante1 );

            } );

    } );

    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdinoassets/' )
    .load( 'dante2.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdinoassets/' )
            objLoader.load( 'dante2.obj', function ( dante2 ) {

                dante2.position.y = 200;
                scene.add( dante2 );

            } );

    } );

    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdinoassets/' )
    .load( 'dinos1.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdinoassets/' )
            objLoader.load( 'dinos1.obj', function ( dinos1 ) {

                dinos1.position.y = 200;
                scene.add( dinos1 );

            } );

    } );

    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdinoassets/' )
    .load( 'dinos2.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdinoassets/' )
            objLoader.load( 'dinos2.obj', function ( dinos2 ) {

                dinos2.position.y = 200;
                scene.add( dinos2 );

            } );

    } );

    mtlLoader = new THREE.MTLLoader()
    .setPath( 'assets/newdinoassets/' )
    .load( 'dinos3.mtl', function ( materials ) {

        materials.preload();

        objLoader = new THREE.OBJLoader(loadingManager)
        
            objLoader.setMaterials( materials )
            objLoader.setPath( 'assets/newdinoassets/' )
            objLoader.load( 'dinos3.obj', function ( dinos3 ) {

                dinos3.position.y = 200;
                scene.add( dinos3 );

            } );

    } );

    







    

    

    























    composer = new POSTPROCESSING.EffectComposer(renderer);
    composer.addPass(new POSTPROCESSING.RenderPass(scene, camera));

    const effectPass = new POSTPROCESSING.EffectPass(
        camera,
        new POSTPROCESSING.BloomEffect()
    );
    effectPass.renderToScreen = true;
    composer.addPass(effectPass);


    animate();
    window.addEventListener( 'resize', onWindowResize, false );



}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );


}


function animate() {
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
    controls.update();
    updateCamera();

    orbit1Group.rotation.y += 0.001;
    orbit2Group.rotation.y -= 0.002;
    orbit3Group.rotation.y += 0.001;
    orbit4Group.rotation.y -= 0.002;

    

}



init();
