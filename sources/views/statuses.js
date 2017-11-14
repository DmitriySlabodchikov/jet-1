import {JetView} from "webix-jet";
import {statuses} from "models/statuses";

export default class Statuses extends JetView{
	
	config(){	

		var statusesTable = {
			view:"datatable",
			id: "statusesTable",
			select:true,
			editable:true,
			columns:[
				{ id:"statusesName", editor:"text",	header:["Statuses name", {content:"textFilter"}], sort:"string", width:230},
				{ id:"statusesIcon", editor:"text",	header:["Statuses icon", {content:"textFilter"}] , sort:"string", width:230 }
			]
		};

		var statusesForm = {
			view: "form",
			id: "statusesForm",
			elements:[
				{ view:"text", name:"statusesName", label:"Name:"},
				{ view:"text", name:"statusesIcon", label:"Icon:"},
				{ cols:[
					{view:"button", value:"Add new", type:"form",
						click: function() {
							if ($$("statusesForm").validate()) {

								var item = $$("statusesForm").getValues();

								statuses.add(item);
								
								webix.message("Data entered correctly");
								
							}
						}
					},
					{view:"button", value:"Delete", type:"danger", click: function() {
						var id = $$("statusesTable").getSelectedId();

						statuses.remove(id);
						
						}
					},
					{view:"button", value:"Clear form",click: function() {
						$$("statusesForm").clear();
						$$("statusesForm").clearValidation();
					}
				}
			]},{}
			],
			rules:{
				statusesName: function(value) {
					if(!value.match(/^\d+$/)&&value!=""){return value;}
				},
				statusesIcon: function(value) {
					if(!value.match(/^\d+$/)&&value!=""){return value;}
				}
			}
		};

		var statusesFull = {
			cols:[statusesTable,statusesForm]
		};

		return statusesFull;
	}
	init(view){
		$$("statusesTable").sync(statuses);
	}

}

