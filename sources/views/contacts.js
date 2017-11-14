import {JetView} from "webix-jet";
import {users} from "models/users";
import {statuses} from "models/statuses";
import {countries} from "models/countries";

export default class Contact extends JetView{
	
	config(){	

		var contactHeader = { 
			view:"toolbar",
			cols:[
				{view:"label", align:"center", label:"<b>Contacts</b>"}
			]
		};	

		var contact = {
			view:"activeList",
			id:"contactlist",
			activeContent:{
				deleteButton:{
					id:"contactDeleteButton",
					type:"icon", 
					icon:"close",
					view:"button",
					width:30,
					click: function() {	
					var id = $$("contactlist").getSelectedId();
					users.remove(id);
					}
				}
			},
			template:"<span style='float:left;'>#id#. <b>#name#</b> <br> Email:  #email# <br> Age: #age#, Country: #country#</span>"+
			"<span style='float:right;'><br>{common.deleteButton()}</span>",
			type:{
				height:92,
			},
			select:true,
			on:{
				"onItemClick":function(id){
					$$("contactDeleteButton").define("icon","users");
					$$("contactDeleteButton").refresh();
				}
			}
			
		};

		var contactForm = {
			gravity: 0.5,
			view: "form",
			id: "contactForm",
			elements:[
				{ view:"text", name:"name", id:"name", label:"Name:"},
				{ view:"text", name:"email", id:"email", label:"Email:"},
				{ view:"select", label:"status", name:"statusesName", options:[] },
				{ view:"select", label:"country", name:"fullCountryName", options:[] },
				{}
			]
		};

		var contacts = {
			cols:[{rows:[contactHeader,contact]},contactForm]
		};

		return contacts;
	}
	init(view){
		$$("contactlist").sync(users);
		$$("contactForm").bind($$("contactlist"));
		$$("contactForm").sync(statuses);
		$$("contactForm").sync(countries);
	}

}

