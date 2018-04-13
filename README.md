# Photoshop Extension Boilerplate

This is simplay a basic setup for a new Photoshop Extension Panel.  It has the bare minimum to get started and makes no assumptions on what additional scripts or frameworks you use.

## To Use

Simply clone or download https://github.com/theiviaxx/photoshop-extension-boilerplate and copy ./dist into the extension panel you are creating according to the [Extension Folders](https://github.com/theiviaxx/photoshop-extension-boilerplate) for your OS, for example:

On MacOS

    $ cp ~/photoshop-extension-boilerplate/dist ~/Library/Application Support/Adobe/CEP/extensions/MyNewExtension

Or on Windows

    C:\Users\me> copy .\photoshop-extension-boilerplate\dist C:\Users\me\AppData\Roaming\Adobe\CEP\extensions\MyNewExtension

Then you should replace some of the lines in the `dist/CSXS/manifest.xml` file to reflect your company or project domain.  See `ExtensionBundleId` and `<Extension Id="com.app.panel" Version="1.0"/>` below.

	<?xml version="1.0" encoding="UTF-8"?> 
	 
	<ExtensionManifest Version="5.0" 
	                   ExtensionBundleId="com.app" 
	                   ExtensionBundleVersion="1.0.0" 
	                   ExtensionBundleName="App Name"> 
	    <ExtensionList> 
	        <Extension Id="com.app.panel" Version="1.0"/> 
	    </ExtensionList> 
	    <ExecutionEnvironment> 
	        <HostList> 
	            <!-- The 99.9 will target all Photoshop versions moving forward --> 
	            <Host Name="PHXS" Version="[14.0,99.9]"/> 
	        </HostList> 
	        <LocaleList> 
	            <Locale Code="All"/> 
	        </LocaleList> 
	        <RequiredRuntimeList> 
	            <RequiredRuntime Name="CSXS" Version="5.0"/> 
	        </RequiredRuntimeList> 
	    </ExecutionEnvironment> 
	    <DispatchInfoList> 
	        <Extension Id="com.app.panel"> 
	            <DispatchInfo> 
	                <Resources> 
	                    <MainPath>./index.html</MainPath> 
	                    <ScriptPath>./jsx/photoshop.jsx</ScriptPath> 
	                    <CEFCommandLine> 
	                        <Parameter>--enable-nodejs</Parameter> 
	                    </CEFCommandLine> 
	                </Resources> 
	                <UI> 
	                    <Type>Panel</Type> 
	                    <Menu>App Name</Menu> 
	                    <Geometry> 
	                        <Size> 
	                            <Height>300</Height> 
	                            <Width>300</Width> 
	                        </Size> 
	                    </Geometry> 
	                    <Icons> 
	                        <Icon Type="Normal">./img/panel_icon.png</Icon> 
	                        <Icon Type="RollOver">./img/panel_icon_over.png</Icon> 
	                    </Icons> 
	                </UI> 
	            </DispatchInfo> 
	        </Extension> 
	    </DispatchInfoList> 
	</ExtensionManifest>

You may need to enable the debug mode for extensions, see [Debugging Unsigned Extensions](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_8.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md#debugging-unsigned-extensions)

After that, fire up Photoshop and you should see `App Name` in the Window > Extensions menu.

## Further Reading

* [Photoshop Scripting Docs](http://photoshop-docs.readthedocs.io/en/latest/)
* [Adobe CEP on Github](https://github.com/Adobe-CEP/CEP-Resources)

## Credits

* App icon is from [html5 boilerplate](https://html5boilerplate.com/)