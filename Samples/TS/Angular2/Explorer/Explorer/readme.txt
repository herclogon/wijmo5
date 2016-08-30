Explorer for Angular 2
---------------------------
Shows how to use all the Wijmo 5 controls in Angular 2 applications.

System requirements:
- To run the sample from Visual Studio, you require Visual Studio 2015 with TypeScript version 1.7 or above.
- Alternatively, you may host the sample on a Web Server and run its default.htm page.
- The sample was tested in the following desktop browsers: Chrome, Edge, FireFox, IE11. 

System requirements
====================
Visual Studio 2015 users
------------------------
- Make sure that you have installed Visual Studio 2015 Update 1 or above.

Visual Studio 2013 users
------------------------
Make sure that you have installed:
- Visual Studio 2013 Update 5 or above.
- Package Intellisense extension that adds support for NPM modules installation:
https://visualstudiogallery.msdn.microsoft.com/65748cdb-4087-497e-a394-2e3449c8e61e
- The latest TypeScript version:
https://visualstudiogallery.msdn.microsoft.com/9b47d09d-353c-4c53-9517-8e2ec3f4aa4f

Use without Visual Studio
-------------------------
- Install NodeJS https://nodejs.org/, if not installed yet, which is bundled with NPM package manager.
- Run NodeJS command prompt.
- Execute the following commands through command prompt:
> cd "<sample root folder>"
, where <sample root folder> is the one where the package.json file is located.
> npm install
, which installs angular2 and related modules in the sample's node_modules folder

After completing the above steps, execute the following command in order to run the sample:
> npm start
, which will run the lite-server web server and will open the sample in the default browser.
This command also runs the TypeScript compiler in watch mode that allows you to modify
the .ts files and get their compiled .js versions automatically.