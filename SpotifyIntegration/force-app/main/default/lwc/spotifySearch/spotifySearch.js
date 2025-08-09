import { LightningElement } from 'lwc';
import searchWithSpotify from '@salesforce/apex/spotifyIntegrationController.searchWithSpotify';
export default class SpotifySearch extends LightningElement {
    selectedTrack='';
    changeHandler(event){
        this.selectedTrack=event.target.value;
    }
    async searchTrack(){
    let isValid=this.validateInput();
    if(isValid){
        try{

            let response= await searchWithSpotify({
                trackName:this.selectedTrack
            })
        }catch(error){
            console.log(error);
            this.showToast('Error','Something went wrong','error')

        }
    }
    }
    validateInput(){
        let isValid=true;
        let element= this.template.querySelector('lightning-input');
        if(!element.checkValidity()){
            element.reportValidity();
            isValid=false;
        }
        return isValid;
    }
    showToast(title,message,variant){
        const event = new showToastEvent({
            title: title,
            message:message,
            variant:variant

        });
        this.dispatchEvent(event);
    }
}