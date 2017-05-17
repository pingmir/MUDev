({
	updateRun : function(component) {
    	var run = component.get("v.run");
        console.log("Calling updateRun");
        var action = component.get("c.updateRunDB");
        action.setParams({ "run" : run });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                console.log("Run successfully updated");
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