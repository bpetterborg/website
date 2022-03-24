/*
 *	Load posts to main page
 *	TODO:
 *		- Move thumbnailPaths to a config file
 * 
 */

// thank you baao from stackoverflow

var xhr = new XMLHttpRequest();

// thumbnails to display
const thumbnailPaths = [
	"/posts/2021s1-exam/thumbnail.html",
	"/posts/apt-reception/thumbnail.html",
	"/posts/homelab/thumbnail.html"
];

//var thumbnailPaths = JSON.parse(fetch("thumbnailPaths.json"));	// implement this at some point

// for every thumbnail in array, load it to the appropriate div
for (let i = 0; i < thumbnailPaths.length; i++)
{
	xhr.onreadystatechange = function() 
	{
		if (xhr.readyState == 4 && xhr.status == 200)
		{ 
			// i can't figure out how i made it work but it does !
			document.getElementById("posts").innerHTML += 
			("<div class=\"p-1\">" + xhr.responseText + "</div>");
		} 
	}
	xhr.open('get', thumbnailPaths[i], false);
	xhr.send();
}
