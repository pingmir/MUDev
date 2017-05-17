({
	doInit : function(component, event, helper) {
		helper.getRuns(component);
	},
     handleAddToRuns : function(component, event, helper) {
        helper.addToRuns(component, event);   
    }
})