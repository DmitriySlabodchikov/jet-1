import {JetView} from "webix-jet";
import {users} from "models/users";

export default class Settings extends JetView{
	
	config(){	

		var settingsHeader = { 
			view:"toolbar",
			cols:[
				{view:"label", align:"center", label:"<b>Settings</b>"}
			]
		};	

		var settingsForm = {
			view: "form",
			id: "settingsForm",
			borderless:true,
			elements:[
			{ view:"select", label:"Language", options:["English", "Русский"] },
			{}
		]};

		var full = {
			rows:[settingsHeader,{cols:[settingsForm,{}]}]
		};

		return full;
	}
	init(view){
		
	}

}

