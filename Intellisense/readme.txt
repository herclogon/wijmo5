JavaScript Intellisense support for: Visual Studio, VSCode
==========================================================
This document explains how to add JavaScript Intellisense support for Wijmo library
to Visual Studio and VSCode.

VisualStudio
------------
To add Intellisense support for Wijmo library to Visual Studio JavaScript editor, 
perform the following steps:
1) Put the wijmo.intellisense.js file located in the same folder as this readme
   to any convenient folder.
2) In Visual Studio, open the following settings pane:
Tools/Options/Text Editor/JavaScript/Intellisense/References
3) In the Reference Group combobox, choose 'Implicit (Web)'.
4) Add the reference to this wijmo.intellisense.js file.

VSCode
------
To add Intellisense support for Wijmo library to VSCode JavaScript editor for the Explicit Project,
perform the following steps:
1) Add .d.ts files from the Dist\controls folder of Wijmo zip to a some location under the project root.
2) If project's jsconfig.json contains the "files" option, add these .d.ts files to the "files" array, for example:
{
    "files": [
        "typings/wijmo.d.ts",
		"typings/wijmo.input.d.ts",
		etc........
    ]
}
