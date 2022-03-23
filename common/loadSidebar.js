/*
 *	Load the sidebar
 *	TODO: Add something to detect if the page is not the index page
 * 		  and change this links to be correct for that page
 */

// thank you baao from stackoverflow
var xhr = new XMLHttpRequest();
var sidebarPath;


xhr.onreadystatechange = function() 
{
    if (xhr.readyState == 4 && xhr.status == 200)
	{ 
        document.getElementById("sidebar").innerHTML = xhr.responseText;
    } 
}

// use this if sidebars are different for each page
if (window.location.pathname == "/") 
{
    sidebarPath = "/html/sidebar.html"
} 
else 
{
    sidebarPath = "/html/sidebar.html"
}

xhr.open('get', sidebarPath, false);
xhr.send();
