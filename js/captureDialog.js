/* This function create dialog window to open pcap-file */
function captureDialog(data){
	this.data=data;
	this.title="Capture Packets";

	// change the window title to data ^^
	if(this.data){
		if(this.data.title){
			this.title=this.data.title;
		}
	}
	this.store=new Ext.data.TreeStore({});
	
	Util.loadDumpDir(
		function(result,e){
			this.store.setRootNode(result.data);
		},
		this
		);
	
	this.tree = new Ext.tree.Panel({
		store: this.store,
		border:0,
		folderSort:true,
		height: '100%',
		width: '100%',
		hideHeaders: true,
		lines:true,
		rootVisible:false,
		listeners:{
			scope:this,
			itemdblclick:function(view,record){
				packetListStore.getProxy().extraParams['file']=record.data.id;
				packetListStore.load();
				this.w.close();
			}
		},
	});
	
	this.w=new Ext.Window({
		title:this.title,
		height:500,
		width:1100,
		layout:'fit',
		modal:true,
		items:[
			this.tree
		]
	});
	this.w.show();
}