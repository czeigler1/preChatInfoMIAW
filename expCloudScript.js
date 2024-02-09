window.addEventListener("onEmbeddedMessagingReady", () => {
    if ($A.get("$SObjectType.CurrentUser.Id")){
        fetch('experienceCloudSiteUrl/apex/vfPageName')
        .then(response => {
            if (!response.ok){
                throw new Error("response not OK");
            }
            return response.json();
        })
        .then(response => {
            embeddedservice_bootstrap.prechatAPI.setVisiblePrechatFields({
                "_email": {
                    "value": response.email,
                    "isEditableByEndUser": true
                },
                "_firstName": {
                    "value": response.fName,
                    "isEditableByEndUser": true
                },
                "_lastName": {
                    "value": response.lName,
                    "isEditableByEndUser": true
                }
            });
        })
        .catch(err => {console.log(err)})
    }
});
