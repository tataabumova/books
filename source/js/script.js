/*var pupil_elem = document.querySelector(".big-book__pupil");
var eye_elem = document.querySelector(".big-book__eye");
var book = document.querySelector(".big-book__book");
var big_book = document.querySelector(".big-book");

var centerX = eye_elem.offsetLeft + book.offsetLeft + big_book.offsetLeft + eye_elem.offsetWidth/2;
var centerY = eye_elem.offsetTop + book.offsetTop + big_book.offsetTop + eye_elem.offsetHeight/2;
var max_radius = (eye_elem.offsetWidth - 8 - pupil_elem.offsetWidth)/2;

var moveX, moveY, dist, pupilX, angle, circleX, circleY;

console.log(pupilX);
document.body.addEventListener("mousemove", function(event){
	// console.log("X: " + event.pageX);
	// console.log("Y: " + event.pageY);

	moveX = (centerX - event.pageX)*max_radius/centerX;
	moveY = (centerY - event.pageY)*max_radius/(centerY - this.scrollTop);

	//pupilX = centerX - max_radius + pupil_elem.offsetLeft;
	//pupilY = centerY - max_radius + pupil_elem.offsetTop;

	if (centerX > event.pageX) {
		pupilX = max_radius*centerX/Math.abs(centerX - event.pageX);
	}else{
		pupilX = max_radius*(this.offsetWidth - centerX)/Math.abs(centerX - event.pageX);
	}
	if (centerY > event.pageY) {
		pupilY = max_radius*centerY/event.pageY;
	}else{
		pupilY = max_radius*(window.innerHeight - centerY + this.scrollTop)/(event.pageY - centerY);
	}
	
	console.log("PupilX: "+pupilX);
	console.log("PupilY: "+pupilY);
	
	dist = Math.sqrt((pupilX-centerX)*(pupilX-centerX) + (pupilY-centerY)*(pupilY-centerY));

	if(dist < max_radius) {
		console.log('dist: '+dist);
		pupil_elem.style.left = max_radius - moveX + "px";
		pupil_elem.style.top = max_radius - moveY + "px";
	}else{
		angle = Math.atan2(event.pageX - centerX, centerY - event.pageY);
		circleX = Math.cos(angle)*max_radius;
		circleY = Math.sin(angle)*max_radius;

		console.log(max_radius + circleX + "px");
		console.log(max_radius - circleY + "px");

		pupil_elem.style.left = max_radius + circleX + "px";
		pupil_elem.style.top = max_radius - circleY + "px";
	}
});
*/

var pupil = document.querySelector('.big-book__pupil');
var eye = document.querySelector('.big-book__eye');
var big_book = document.querySelector('.big-book');
var book = document.querySelector('.big-book__book');
var centerX = big_book.offsetLeft + book.offsetLeft + eye.offsetLeft + eye.offsetWidth/2;
var centerY = big_book.offsetTop + book.offsetTop + eye.offsetTop + eye.offsetHeight/2;
var maxRadius = (eye.offsetWidth - pupil.offsetWidth - 8)/2; // 8 - border width
var relPosX, relPosY, pupilPosX, pupilPosY, dist, wMouseX, wMouseY, angle;
document.body.addEventListener('mousemove', function(e){
	eyeWatch(e.pageX, e.pageY);
});

document.body.addEventListener('touchmove', function(e){
	if (e.targetTouches.length == 1) {
	    var touch = e.targetTouches[0];
		eyeWatch(touch.pageX, touch.pageY);
	}
});

function eyeWatch(x, y){
	relPosX = x - centerX;
	relPosY = y - centerY;
	wMouseX = x - centerX;
	wMouseY = centerY - y;
	angle = Math.atan2(wMouseX, wMouseY);
	borderPosX = Math.sin(angle) * maxRadius;
	borderPosY = Math.cos(angle) * maxRadius;

	if(relPosX < 0) {
		pupilPosX = Math.abs(borderPosX)*relPosX/centerX;
	}else{
		pupilPosX = Math.abs(borderPosX)*relPosX/(window.innerWidth - centerX);
	}
	if (relPosY < 0) {
		pupilPosY = Math.abs(borderPosY)*relPosY/(centerY - document.body.scrollTop);
	}else{
		pupilPosY = Math.abs(borderPosY)*relPosY/(document.body.scrollTop + window.innerHeight - centerY);
	}

	dist = Math.sqrt(pupilPosX*pupilPosX + pupilPosY*pupilPosY);
	if(dist < maxRadius){
		pupil.style.left = pupilPosX + maxRadius + "px";
		pupil.style.top = pupilPosY + maxRadius + "px";
	}else{
		pupil.style.left = maxRadius + borderPosX + "px";
		pupil.style.top = maxRadius - borderPosY + "px";
	}
}


/**********************adding books***************/

angular.module("myapp", [])
        .controller("MyController", function($scope, $sce, $http) {
            $scope.myData = {};
            var books = angular.element(document.querySelector(".section__moving-books"));

            $scope.myData.books = books.html();
            $scope.myData.fromServer = $sce.trustAsHtml($scope.myData.books);
            
            $scope.myData.doClick = function(item, event) {
                var responsePromise = $http.get("books.php");

                console.log(responsePromise);

                responsePromise.success(function(data, status, headers, config) {
                    $scope.myData.books += data;
                    $scope.myData.fromServer = $sce.trustAsHtml($scope.myData.books);
                });
                responsePromise.error(function(data, status, headers, config) {
                    alert("AJAX failed!");
                });
            }


        } );



