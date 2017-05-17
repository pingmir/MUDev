({
	loadOptions : function(component,event, helper) {
        
		var types = [
            {class: "optionClass", label: "Sprint", value: "Sprint"},
            {class: "optionClass", label: "Middle Distance", value: "Middle_Distance"},
            {class: "optionClass", label: "Combined Events", value: "Combined_Events"},
            {class: "optionClass", label: "1K", value: "1K"},
        ];
        component.find("Type").set("v.options", types);
        
	},
    createNewRun : function(component) {    
        
		//Get a refrence to Apex Class Controller 
        var action = component.get("c.newRunDB");
        
        //Set Run object from NewRun.cmp to send to insert through Apex Controller Method
        action.setParams({ "run" : component.get("v.newRun") });
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                console.log("Run successfully saved");
				// Fire off application event after successful save
				// $A represents the Aura framework
				// e.c = refer addToRunList in event>component
				var appEvent = $A.get("e.c:AddToRunList");
                appEvent.setParams({ "run" : response.getReturnValue() });
                appEvent.fire(); 
            } else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            } else {
                console.log("Action State returned was: " + state);
            }

        });
        $A.enqueueAction(action);

    }
    
})