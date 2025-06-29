var Text = "Folders\n\n";

var wsh = WScript.CreateObject ("WScript.Shell");

// Create FileSystemObject object to access file system.
var fso = WScript.CreateObject("Scripting.FileSystemObject");

// Retrieve the operating system's system folder.
var path = "C:/Users/dongwei/desktop";  // 1 = system folder

// Fetch Folders collection.
var oFolders = fso.GetFolder(wsh.ExpandEnvironmentStrings(path));
// Subfolders collection 
var oSubFolder = new Enumerator(oFolders.SubFolders);  

Text += path+"\n";

for (; !oSubFolder.atEnd(); oSubFolder.moveNext()){   // All folders
    var oFolder = oSubFolder.item();
    Text += oFolder.name + "\n";
}

WScript.Echo(Text);