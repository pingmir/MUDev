({
	getRuns : function(component) {
        console.log("Calling getRuns");
		var action = component.get("c.getRunsDB");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                component.set("v.runs", response.getReturnValue());
            } 
        });
        $A.enqueueAction(action);
	},
     addToRuns : function(component, event) {
        console.log("calling addToRuns");
        
         var run = event.getParam("run");//get the run which is passed in with the payload
		
         // v is value provider and get current runs attribute that is defined in this component
        var runs = component.get("v.runs");
         
        //runs.push(run);   //original version which added run to the end of the array
		runs.unshift(run);  //new version that prepends the run to the beginning of the array
        
         component.set("v.runs", runs);
    }    
})