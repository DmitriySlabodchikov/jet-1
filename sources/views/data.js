import {JetView, plugins} from "webix-jet";

export default class Data extends JetView{
	config(){

		var dataHeader = { 
				view:"toolbar",
				cols:[
					{view:"label", align:"center", label:"<b>Data</b>"}
				]
			};
			
		var dataMenu = {
				view:"menu", id:"data:menu", 
				width:180, layout:"y", select:true,
				template:"<span class='webix_icon fa-#icon#'></span> #value# ",
				data:[
					{ value:"Countries", id:"countries",  icon:"map" },
					{ value:"Statuses",	id:"statuses",  icon:"check" }
				]
			};

		var dataFull = {
			type:"line", rows:[
			dataHeader,
				{cols:[
				{ rows:[dataMenu]},
				{ rows:[ { height:10}, 
					{ type:"clean", rows:[
						{ $subview:true } 
					]}
				]}
				]}
			]
		};
		return dataFull;
	}
	init(){
		this.use(plugins.Menu, "data:menu");
	}
}