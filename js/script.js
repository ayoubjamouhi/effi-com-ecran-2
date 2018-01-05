/*var leftHeader = document.getElementById('left-header');
var barLeft = document.getElementById('bar-left');
var container = document.getElementsByClassName('container');
var header = document.getElementById('header');
var bool = false;


	leftHeader.addEventListener("click",function(){
		if(bool == false){
		barLeft.style.display = "block";
		for(var  i = 0; i < container.length; i++) 
		{
			container[i].style.marginRight = "3px";
			container[i].style.width = "87%";
		}

		header.style.margin = "auto";
		header.style.marginRight = "3px";
		header.style.width = "87%";	
		bool = true;
		}
	});
	
	leftHeader.addEventListener("click",function(){
		barLeft.style.display = "none";
		console.log(bool);
	});*/

$(document).ready(function () {

	/* Start action1 et autorisation1 */
	$("#js-actions1").click( function() {
		$('#ulactions1').fadeToggle(500);
	});

	$("#js-autorisation1").click(function () {
		$('#ulautorisation1').fadeToggle(500);
	});
	/* End action1 et autorisation1 */

	/* Start action2 et autorisation2 */
	$("#js-actions2").click(function () {
		$('#ulactions2').fadeToggle(500);
	});

	$("#js-autorisation2").click(function () {
		$('#ulautorisation2').fadeToggle(500);
	});
	/* End action2 et autorisation2 */

	/* Start action3 et autorisation3 */
	$("#js-actions3").click(function () {
		$('#ulactions3').fadeToggle(500);
	});

	$("#js-autorisation3").click(function () {
		$('#ulautorisation3').fadeToggle(500);
	});
	/* End action3 et autorisation3 */

	/* Start action4 et autorisation4 */
	$("#js-actions4").click(function () {
		$('#ulactions4').fadeToggle(500);
	});

	$("#js-autorisation4").click(function () {
		$('#ulautorisation4').fadeToggle(500);
	});
	/* End action4 et autorisation4 */

	/* Start action5 et autorisation5 */
	$("#js-actions5").click(function () {
		$('#ulactions5').fadeToggle(500);
	});

	$("#js-autorisation5").click(function () {
		$('#ulautorisation5').fadeToggle(500);
	});
	/* End action5 et autorisation5 */
});