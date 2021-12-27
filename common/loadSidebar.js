/*
 *	Load the sidebar
 *	TODO: Add something to detect if the page is not the index page
 * 		  and change this links to be correct for that page
 */

// thank you baao from stackoverflow
var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

xhr.open('get', '/html/sidebar-main.html', true);

xhr.onreadystatechange = function() 
{
    if (xhr.readyState == 4 && xhr.status == 200)
	{ 
        document.getElementById("sidebar").innerHTML = xhr.responseText;
    } 
}

xhr.send();
