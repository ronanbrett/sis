var apps = [];

$(document).ready(function($){

init();
animate();

function init() {
   /*==========  Big Logos  ==========*/
   
   apps.push( new App( '.desLabLogo', '#FF3A20', 'slow' ));
   apps.push( new App( '.ideaLogo', '#2abfff', 'slow'  ));
   apps.push( new App( '.desCompLogo', '#ff0052', 'slow'  ));

   /*==========  Menu Logos  ==========*/

   apps.push( new App( '.sideLogo--desLab', '#FF3A20','fast') );
   apps.push( new App( '.sideLogo--idea', '#2abfff','fast' ));
   apps.push( new App( '.sideLogo--desComp', '#ff0052','fast' ));
   apps.push( new App( '.sideLogo--res', '#333','fast' ));
}




function animate() {

   for ( var i = 0; i < apps.length; ++i ) {
      apps[ i ].animate();

      }

   requestAnimationFrame( animate );

}


function App( containerId, color, speed  ) {
   var container;

   this.container = containerId;

   var camera, scene, renderer;
   var geometry, material, mesh;
   var col = new THREE.Color( color );

   var speed = speed;

   if( speed === 'fast' ){
      

      speed = (Math.floor(Math.random() * 10) + 1) / 500

   }
   
   else{


      speed = 0.005
   }


   init();

      function init(){
         $can = $( containerId );


         camera = new THREE.PerspectiveCamera( 45, $can.width() / $can.height(), 1, 10000 );
         camera.position.z = 150;
         scene = new THREE.Scene();
         material = new THREE.MeshBasicMaterial( { color: col, wireframe: false } );
         geometry = new THREE.CubeGeometry( 50, 50, 50 );
         mesh = new THREE.Mesh( geometry, material );
         scene.add( mesh );
         renderer = new THREE.CanvasRenderer();
         renderer.setSize( $can.width(), $can.height() );
         $can.append( renderer.domElement );
      }

      this.animate = function(){
         render();
      }

      this.changeColor = function(col){
         material.color.setHex(col); // there is also setHSV and setRGB
      }



      function render(){
         mesh.rotation.x += speed;
         mesh.rotation.y += speed;

         renderer.render( scene, camera );
      }


}

});

var lastSelected;

$('.nav__item').click(function(e){
  if($(this).has('.nav__shelf').length>0){
    e.preventDefault();
    $('.nav__item').removeClass('expanded');
    $('.content').transition({ y: '240px' });
    $('.nav__shelf').transition({ y: '0' });
    $(this).addClass('expanded');
  }
});


$('.desCompLogoSwitch').hover(function(){
  changeLogo('.sideLogo--desComp','ff0052');
})

$('.grid__item--course').hover(function(){

  var a = $(this).attr('id');
  switch (a){
    case "digDesStudioLogo":
    changeLogo('.sideLogo--desComp','f5af00');
    break;
    case "ixdStudio":
    changeLogo('.sideLogo--desComp','333333');
    break;
    case "infoVisStudio":
    changeLogo('.sideLogo--desComp','532771');
    break;
    case "humanComputerLogo":
    changeLogo('.sideLogo--desComp','ffffff');
    break;
  }
})


$('.nav__item--submenu li a').hover(function(){
  $(this).parent().parent().find('li').removeClass('active');
  $(this).parent().addClass('active');
  var a = '#' + $(this).text().toLowerCase();
  $(this).parent().parent().parent().parent().find('.nav__item--longMenu').addClass('visuallyhidden');
  $(this).parent().parent().parent().parent().find(a).removeClass('visuallyhidden');

})


function changeLogo(x,col){
  var c = '0x'+ col;
  for ( var i = 0; i < apps.length; ++i ) {
      if(apps[i].container===x){
         apps[ i ].changeColor(c);
      }
   }
}





$('.sideLogo').hover(function(){
   $(this).parent().parent().find('section').addClass('visuallyhidden');
   $('.sideLogo').removeClass('active');
   $(this).addClass('active');
   if($(this).hasClass('sideLogo--desLab')){$('.st-menu > section.desLab').removeClass('visuallyhidden')}
   if($(this).hasClass('sideLogo--idea')){$('.st-menu > section.idea').removeClass('visuallyhidden')}
   if($(this).hasClass('sideLogo--desComp')){$('.st-menu > section.desComp').removeClass('visuallyhidden')}
   if($(this).hasClass('sideLogo--res')){}
})


