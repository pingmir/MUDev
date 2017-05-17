({
	doInit : function(component, event, helper) {
		var types = [{class: "optionClass", label: "Sprint", value: "Sprint"},
            {class: "optionClass", label: "Middle Distance", value: "Middle_Distance"},
            {class: "optionClass", label: "Combined Events", value: "Combined_Events"},
            {class: "optionClass", label: "1K", value: "1K"}];
                
        component.find("Type").set("v.options", types);
	},
    newRun : function(component, event, helper) {
        helper.createNewRun(component);
    }
})