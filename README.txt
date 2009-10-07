
YQL Execute Page Builder
under BSD License (see LICENSE.txt)
by Eric Abouaf
may 12th, 2009

Interface to quickly generate dynamic pages using YQL Execute as data source, YUI CSS Grids for layouts, and Trimpath templates for views.

Demo:
-----

http://neyric.com/~neyric/yqlex-builder/yqlex-builder.html

How to use:
-----------

  * 1. Edit page properties

  * 2. Edit the layout using the YUI CSS Grid Builder

  * 3. Write YQL javascript. 
		 Use the run button to test the request. (This is necessary if you want to view the results for the next step)

  * 4. Create as many templates as boxes in your layout (blue bordered)

  * 5. Build the page !

  * 6. Save the source
			The page is saved as a tinyurl link ! Just keep a reference to this link.
			Note: the Layout is not saved yet !

  * Finally, the generated page can be saved on your filesystem. It will run as long as you are connected to the Internet.


Developper infos:
-----------------

Hacking together:

	- YUI javascript
	- YUI CSS Grids and Grid Builder
	- inputEx library (http://javascript.neyric.com/inputex/)
	- trimpath templates
	- YQL Execute
	- http://javascript.neyric.com/yql/
	- JSMin to minify the code before sending it to YQL
	
	- ... and flickr through the example
	
