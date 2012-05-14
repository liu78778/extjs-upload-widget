Ext.data.JsonP.Ext_ux_upload_Dialog({"aliases":{},"mixedInto":[],"superclasses":["Ext.window.Window"],"parentMixins":[],"tagname":"class","extends":"Ext.window.Window","members":{"css_var":[],"method":[{"tagname":"method","owner":"Ext.ux.upload.Dialog","name":"constructor","id":"method-constructor","meta":{}},{"tagname":"method","owner":"Ext.ux.upload.Dialog","name":"getTopToolbarConfig","id":"method-getTopToolbarConfig","meta":{"private":true}},{"tagname":"method","owner":"Ext.ux.upload.Dialog","name":"initComponent","id":"method-initComponent","meta":{"private":true}},{"tagname":"method","owner":"Ext.ux.upload.Dialog","name":"initQueue","id":"method-initQueue","meta":{"private":true}},{"tagname":"method","owner":"Ext.ux.upload.Dialog","name":"onFileSelection","id":"method-onFileSelection","meta":{"private":true}},{"tagname":"method","owner":"Ext.ux.upload.Dialog","name":"onMultipleRemove","id":"method-onMultipleRemove","meta":{"private":true}},{"tagname":"method","owner":"Ext.ux.upload.Dialog","name":"onQueueChange","id":"method-onQueueChange","meta":{"private":true}}],"css_mixin":[],"cfg":[{"tagname":"cfg","owner":"Ext.ux.upload.Dialog","name":"dialogTitle","id":"cfg-dialogTitle","meta":{}},{"tagname":"cfg","owner":"Ext.ux.upload.Dialog","name":"height","id":"cfg-height","meta":{}},{"tagname":"cfg","owner":"Ext.ux.upload.Dialog","name":"synchronous","id":"cfg-synchronous","meta":{}},{"tagname":"cfg","owner":"Ext.ux.upload.Dialog","name":"uploadExtraHeaders","id":"cfg-uploadExtraHeaders","meta":{}},{"tagname":"cfg","owner":"Ext.ux.upload.Dialog","name":"uploadParams","id":"cfg-uploadParams","meta":{}},{"tagname":"cfg","owner":"Ext.ux.upload.Dialog","name":"uploadTimeout","id":"cfg-uploadTimeout","meta":{}},{"tagname":"cfg","owner":"Ext.ux.upload.Dialog","name":"uploadUrl","id":"cfg-uploadUrl","meta":{"required":true}},{"tagname":"cfg","owner":"Ext.ux.upload.Dialog","name":"width","id":"cfg-width","meta":{}}],"event":[{"tagname":"event","owner":"Ext.ux.upload.Dialog","name":"uploadcomplete","id":"event-uploadcomplete","meta":{}}],"property":[{"tagname":"property","owner":"Ext.ux.upload.Dialog","name":"browseButton","id":"property-browseButton","meta":{}},{"tagname":"property","owner":"Ext.ux.upload.Dialog","name":"grid","id":"property-grid","meta":{}},{"tagname":"property","owner":"Ext.ux.upload.Dialog","name":"queue","id":"property-queue","meta":{}},{"tagname":"property","owner":"Ext.ux.upload.Dialog","name":"statusBar","id":"property-statusBar","meta":{}},{"tagname":"property","owner":"Ext.ux.upload.Dialog","name":"uploadManager","id":"property-uploadManager","meta":{}}]},"subclasses":[],"alternateClassNames":[],"requires":["Ext.ux.upload.ItemGridPanel","Ext.ux.upload.Manager","Ext.ux.upload.StatusBar","Ext.ux.upload.BrowseButton","Ext.ux.upload.Queue"],"inheritdoc":null,"html_meta":{},"singleton":false,"statics":{"method":[],"css_var":[],"css_mixin":[],"cfg":[],"property":[],"event":[]},"mixins":[],"code_type":"ext_define","inheritable":false,"name":"Ext.ux.upload.Dialog","uses":[],"files":[{"href":"Dialog.html#Ext-ux-upload-Dialog","filename":"Dialog.js"}],"meta":{},"id":"class-Ext.ux.upload.Dialog","html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.window.Window<div class='subclass '><strong>Ext.ux.upload.Dialog</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Ext.ux.upload.BrowseButton' rel='Ext.ux.upload.BrowseButton' class='docClass'>Ext.ux.upload.BrowseButton</a></div><div class='dependency'><a href='#!/api/Ext.ux.upload.ItemGridPanel' rel='Ext.ux.upload.ItemGridPanel' class='docClass'>Ext.ux.upload.ItemGridPanel</a></div><div class='dependency'><a href='#!/api/Ext.ux.upload.Manager' rel='Ext.ux.upload.Manager' class='docClass'>Ext.ux.upload.Manager</a></div><div class='dependency'><a href='#!/api/Ext.ux.upload.Queue' rel='Ext.ux.upload.Queue' class='docClass'>Ext.ux.upload.Queue</a></div><div class='dependency'><a href='#!/api/Ext.ux.upload.StatusBar' rel='Ext.ux.upload.StatusBar' class='docClass'>Ext.ux.upload.StatusBar</a></div><h4>Files</h4><div class='dependency'><a href='source/Dialog.html#Ext-ux-upload-Dialog' target='_blank'>Dialog.js</a></div></pre><div class='doc-contents'><p>The main upload dialog.</p>\n\n<p>Mostly, this will be the only object you need to interact with. Just initialize it and show it:</p>\n\n<pre class='inline-example '><code>var dialog = Ext.create('<a href=\"#!/api/Ext.ux.upload.Dialog\" rel=\"Ext.ux.upload.Dialog\" class=\"docClass\">Ext.ux.upload.Dialog</a>', {\n     dialogTitle: 'My Upload Widget',\n     uploadUrl: 'upload.php'\n });\n\n dialog.show();\n</code></pre>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Required Config options</h3><div id='cfg-uploadUrl' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.upload.Dialog'>Ext.ux.upload.Dialog</span><br/><a href='source/Dialog.html#Ext-ux-upload-Dialog-cfg-uploadUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.upload.Dialog-cfg-uploadUrl' class='name expandable'>uploadUrl</a><span> : String</span><strong class='required signature'>required</strong></div><div class='description'><div class='short'>The URL to upload files to. ...</div><div class='long'><p>The URL to upload files to.</p>\n<p>Defaults to: <code>&quot;&quot;</code></p></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Optional Config options</h3><div id='cfg-dialogTitle' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.upload.Dialog'>Ext.ux.upload.Dialog</span><br/><a href='source/Dialog.html#Ext-ux-upload-Dialog-cfg-dialogTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.upload.Dialog-cfg-dialogTitle' class='name expandable'>dialogTitle</a><span> : String</span></div><div class='description'><div class='short'>The title of the dialog. ...</div><div class='long'><p>The title of the dialog.</p>\n<p>Defaults to: <code>&quot;&quot;</code></p></div></div></div><div id='cfg-height' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.upload.Dialog'>Ext.ux.upload.Dialog</span><br/><a href='source/Dialog.html#Ext-ux-upload-Dialog-cfg-height' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.upload.Dialog-cfg-height' class='name expandable'>height</a><span> : Number</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>500</code></p></div></div></div><div id='cfg-synchronous' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.upload.Dialog'>Ext.ux.upload.Dialog</span><br/><a href='source/Dialog.html#Ext-ux-upload-Dialog-cfg-synchronous' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.upload.Dialog-cfg-synchronous' class='name expandable'>synchronous</a><span> : boolean</span></div><div class='description'><div class='short'>If true, all files are uploaded in a sequence, otherwise files are uploaded simultaneously (asynchronously). ...</div><div class='long'><p>If true, all files are uploaded in a sequence, otherwise files are uploaded simultaneously (asynchronously).</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-uploadExtraHeaders' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.upload.Dialog'>Ext.ux.upload.Dialog</span><br/><a href='source/Dialog.html#Ext-ux-upload-Dialog-cfg-uploadExtraHeaders' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.upload.Dialog-cfg-uploadExtraHeaders' class='name expandable'>uploadExtraHeaders</a><span> : Object</span></div><div class='description'><div class='short'>Extra HTTP headers to be added to the HTTP request uploading the file. ...</div><div class='long'><p>Extra HTTP headers to be added to the HTTP request uploading the file.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='cfg-uploadParams' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.upload.Dialog'>Ext.ux.upload.Dialog</span><br/><a href='source/Dialog.html#Ext-ux-upload-Dialog-cfg-uploadParams' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.upload.Dialog-cfg-uploadParams' class='name expandable'>uploadParams</a><span> : Object</span></div><div class='description'><div class='short'>Params passed to the uploader object and sent along with the request. ...</div><div class='long'><p>Params passed to the uploader object and sent along with the request. It depends on the implementation of the\nuploader object, for example if the <a href=\"#!/api/Ext.ux.upload.uploader.ExtJsUploader\" rel=\"Ext.ux.upload.uploader.ExtJsUploader\" class=\"docClass\">Ext.ux.upload.uploader.ExtJsUploader</a> is used, the params are sent\nas GET params.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='cfg-uploadTimeout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.upload.Dialog'>Ext.ux.upload.Dialog</span><br/><a href='source/Dialog.html#Ext-ux-upload-Dialog-cfg-uploadTimeout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.upload.Dialog-cfg-uploadTimeout' class='name expandable'>uploadTimeout</a><span> : Number</span></div><div class='description'><div class='short'>The time after the upload request times out - in miliseconds. ...</div><div class='long'><p>The time after the upload request times out - in miliseconds.</p>\n<p>Defaults to: <code>6000</code></p></div></div></div><div id='cfg-width' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.upload.Dialog'>Ext.ux.upload.Dialog</span><br/><a href='source/Dialog.html#Ext-ux-upload-Dialog-cfg-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.upload.Dialog-cfg-width' class='name expandable'>width</a><span> : Number</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>700</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-browseButton' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.upload.Dialog'>Ext.ux.upload.Dialog</span><br/><a href='source/Dialog.html#Ext-ux-upload-Dialog-property-browseButton' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.upload.Dialog-property-browseButton' class='name expandable'>browseButton</a><span> : <a href=\"#!/api/Ext.ux.upload.BrowseButton\" rel=\"Ext.ux.upload.BrowseButton\" class=\"docClass\">Ext.ux.upload.BrowseButton</a></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='property-grid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.upload.Dialog'>Ext.ux.upload.Dialog</span><br/><a href='source/Dialog.html#Ext-ux-upload-Dialog-property-grid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.upload.Dialog-property-grid' class='name expandable'>grid</a><span> : <a href=\"#!/api/Ext.ux.upload.ItemGridPanel\" rel=\"Ext.ux.upload.ItemGridPanel\" class=\"docClass\">Ext.ux.upload.ItemGridPanel</a></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='property-queue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.upload.Dialog'>Ext.ux.upload.Dialog</span><br/><a href='source/Dialog.html#Ext-ux-upload-Dialog-property-queue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.upload.Dialog-property-queue' class='name expandable'>queue</a><span> : <a href=\"#!/api/Ext.ux.upload.Queue\" rel=\"Ext.ux.upload.Queue\" class=\"docClass\">Ext.ux.upload.Queue</a></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='property-statusBar' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.upload.Dialog'>Ext.ux.upload.Dialog</span><br/><a href='source/Dialog.html#Ext-ux-upload-Dialog-property-statusBar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.upload.Dialog-property-statusBar' class='name expandable'>statusBar</a><span> : <a href=\"#!/api/Ext.ux.upload.StatusBar\" rel=\"Ext.ux.upload.StatusBar\" class=\"docClass\">Ext.ux.upload.StatusBar</a></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='property-uploadManager' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.upload.Dialog'>Ext.ux.upload.Dialog</span><br/><a href='source/Dialog.html#Ext-ux-upload-Dialog-property-uploadManager' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.upload.Dialog-property-uploadManager' class='name expandable'>uploadManager</a><span> : <a href=\"#!/api/Ext.ux.upload.Manager\" rel=\"Ext.ux.upload.Manager\" class=\"docClass\">Ext.ux.upload.Manager</a></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>null</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.upload.Dialog'>Ext.ux.upload.Dialog</span><br/><a href='source/Dialog.html#Ext-ux-upload-Dialog-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.ux.upload.Dialog-method-constructor' class='name expandable'>Ext.ux.upload.Dialog</a>( <span class='pre'>Object config</span> ) : Object</div><div class='description'><div class='short'>Constructor. ...</div><div class='long'><p>Constructor.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTopToolbarConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.upload.Dialog'>Ext.ux.upload.Dialog</span><br/><a href='source/Dialog.html#Ext-ux-upload-Dialog-method-getTopToolbarConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.upload.Dialog-method-getTopToolbarConfig' class='name expandable'>getTopToolbarConfig</a>( <span class='pre'></span> ) : Array<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Returns the config object for the top toolbar. ...</div><div class='long'><p>Returns the config object for the top toolbar.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.upload.Dialog'>Ext.ux.upload.Dialog</span><br/><a href='source/Dialog.html#Ext-ux-upload-Dialog-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.upload.Dialog-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-initQueue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.upload.Dialog'>Ext.ux.upload.Dialog</span><br/><a href='source/Dialog.html#Ext-ux-upload-Dialog-method-initQueue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.upload.Dialog-method-initQueue' class='name expandable'>initQueue</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.ux.upload.Queue\" rel=\"Ext.ux.upload.Queue\" class=\"docClass\">Ext.ux.upload.Queue</a><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Initializes and returns the queue object. ...</div><div class='long'><p>Initializes and returns the queue object.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.ux.upload.Queue\" rel=\"Ext.ux.upload.Queue\" class=\"docClass\">Ext.ux.upload.Queue</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onFileSelection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.upload.Dialog'>Ext.ux.upload.Dialog</span><br/><a href='source/Dialog.html#Ext-ux-upload-Dialog-method-onFileSelection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.upload.Dialog-method-onFileSelection' class='name expandable'>onFileSelection</a>( <span class='pre'><a href=\"#!/api/Ext.ux.upload.BrowseButton\" rel=\"Ext.ux.upload.BrowseButton\" class=\"docClass\">Ext.ux.upload.BrowseButton</a> input, FileList files</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Executes after files has been selected for upload through the \"Browse\" button. ...</div><div class='long'><p>Executes after files has been selected for upload through the \"Browse\" button. Updates the upload queue with the\nnew files.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>input</span> : <a href=\"#!/api/Ext.ux.upload.BrowseButton\" rel=\"Ext.ux.upload.BrowseButton\" class=\"docClass\">Ext.ux.upload.BrowseButton</a><div class='sub-desc'>\n</div></li><li><span class='pre'>files</span> : FileList<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onMultipleRemove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.upload.Dialog'>Ext.ux.upload.Dialog</span><br/><a href='source/Dialog.html#Ext-ux-upload-Dialog-method-onMultipleRemove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.upload.Dialog-method-onMultipleRemove' class='name expandable'>onMultipleRemove</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Executes upon hitting the \"multiple remove\" button. ...</div><div class='long'><p>Executes upon hitting the \"multiple remove\" button. Removes all selected items from the queue.</p>\n</div></div></div><div id='method-onQueueChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.upload.Dialog'>Ext.ux.upload.Dialog</span><br/><a href='source/Dialog.html#Ext-ux-upload-Dialog-method-onQueueChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.upload.Dialog-method-onQueueChange' class='name expandable'>onQueueChange</a>( <span class='pre'><a href=\"#!/api/Ext.ux.upload.Queue\" rel=\"Ext.ux.upload.Queue\" class=\"docClass\">Ext.ux.upload.Queue</a> queue</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Executes if there is a change in the queue. ...</div><div class='long'><p>Executes if there is a change in the queue. Updates the related components (grid, toolbar).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>queue</span> : <a href=\"#!/api/Ext.ux.upload.Queue\" rel=\"Ext.ux.upload.Queue\" class=\"docClass\">Ext.ux.upload.Queue</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-uploadcomplete' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.upload.Dialog'>Ext.ux.upload.Dialog</span><br/><a href='source/Dialog.html#Ext-ux-upload-Dialog-event-uploadcomplete' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.upload.Dialog-event-uploadcomplete' class='name expandable'>uploadcomplete</a>( <span class='pre'><a href=\"#!/api/Ext.ux.upload.Dialog\" rel=\"Ext.ux.upload.Dialog\" class=\"docClass\">Ext.ux.upload.Dialog</a> dialog, <a href=\"#!/api/Ext.ux.upload.Manager\" rel=\"Ext.ux.upload.Manager\" class=\"docClass\">Ext.ux.upload.Manager</a> manager, <a href=\"#!/api/Ext.ux.upload.Item\" rel=\"Ext.ux.upload.Item\" class=\"docClass\">Ext.ux.upload.Item</a>[] items, Number errorCount, Object eOpts</span> )</div><div class='description'><div class='short'>Fired when all files has been processed. ...</div><div class='long'><p>Fired when all files has been processed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dialog</span> : <a href=\"#!/api/Ext.ux.upload.Dialog\" rel=\"Ext.ux.upload.Dialog\" class=\"docClass\">Ext.ux.upload.Dialog</a><div class='sub-desc'>\n</div></li><li><span class='pre'>manager</span> : <a href=\"#!/api/Ext.ux.upload.Manager\" rel=\"Ext.ux.upload.Manager\" class=\"docClass\">Ext.ux.upload.Manager</a><div class='sub-desc'>\n</div></li><li><span class='pre'>items</span> : <a href=\"#!/api/Ext.ux.upload.Item\" rel=\"Ext.ux.upload.Item\" class=\"docClass\">Ext.ux.upload.Item</a>[]<div class='sub-desc'>\n</div></li><li><span class='pre'>errorCount</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n</div></li></ul></div></div></div></div></div></div></div>","component":false});