import {JetView} from "webix-jet";
import {countries} from "models/countries";

export default class Countries extends JetView{
	
	config(){	

		var countriesTable = {
			view:"datatable",
			id: "countriesTable",
			select:true,
			editable:true,
			columns:[
				{ id:"shortCountryName", editor:"text",	header:["Short name", {content:"textFilter"}], sort:"string", width:230},
				{ id:"fullCountryName", editor:"text",	header:["Full name", {content:"textFilter"}] , sort:"string", width:230 }

			]
		};

		var countriesForm = {
			view: "form",
			id: "countriesForm",
			elements:[
				{ view:"text", name:"shortCountryName", label:"Short:"},
				{ view:"text", name:"fullCountryName", label:"Full:"},
				{ cols:[
					{view:"button", value:"Add new", type:"form",
						click: function() {
							if ($$("countriesForm").validate()) {

								var item = $$("countriesForm").getValues();

								countries.add(item);
								
								webix.message("Data entered correctly");
								
							}
						}
					},
					{view:"button", value:"Delete", type:"danger", click: function() {
						var id = $$("countriesTable").getSelectedId();

						countries.remove(id);

						}
					},
					{view:"button", value:"Clear form",click: function() {
						$$("countriesForm").clear();
						$$("countriesForm").clearValidation();
					}
				}
			]},{}
			],
			rules:{
				shortCountryName: function(value) {
					if(!value.match(/^\d+$/)&&value!=""){return value;}
				},
				fullCountryName: function(value) {
					if(!value.match(/^\d+$/)&&value!=""){return value;}
				}
			}
		};

		var countriesFull = {
			cols:[countriesTable,countriesForm]
		};

		return countriesFull;
	}
	init(view){
		$$("countriesTable").sync(countries);
	}

}

