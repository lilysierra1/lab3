'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected.");
		$("#testjs").text("you were clicked");
		$(".jumbotron p").toggleClass("active");
		$("#submitBtn").click(update); 
	});

	

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

function update(e){
	var projectChange = $("#project").val();
		$(projectChange).animate({
			width: $('#width').val()
		});
		
		var des = $("#description").val();
		$(projectChange + " .project-description").text(des);
}


function projectClick(e) {
	 
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);
    console.log("Project clicked"); 

    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
    	description.hide();
    }

}

/*function projectClick(e){
	console.log("Project clicked");
	// prevent the page from reloading      
    e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    $(this).css("background-color", "#7fff00");
}*/