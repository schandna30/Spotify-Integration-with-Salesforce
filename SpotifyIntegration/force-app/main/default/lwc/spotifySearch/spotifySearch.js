import { LightningElement } from 'lwc';
import searchWithSpotify from '@salesforce/apex/spotifyIntegrationController.searchWithSpotify';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class SpotifySearch extends LightningElement {
    selectedTrack='';
    displayResult=false;
    trackData='';
    trackURL=''
  //  trackArtists='';
    changeHandler(event){
        this.selectedTrack=event.target.value;
    }
    async searchTrack(){
    let isValid=this.validateInput();
    if(isValid){
        try{

            let responseString= await searchWithSpotify({
                trackName:this.selectedTrack
            })
            let response =JSON.parse(responseString);
            console.log('response',response);
            this.trackData=response.tracks.items[0];
            this.trackURL=this.trackData.album.images[0].url;
           // this.trackArtists=this.trackData.artists[0].name;
            this.displayResult=true;
            console.log('display comp',this.displayResult);
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
        const event = new ShowToastEvent({
            title: title,
            message:message,
            variant:variant

        });
        this.dispatchEvent(event);
    }

    get artistsName(){
        let artistArray=this.trackData.artists.map(currItem=>currItem.name);
        let artistNameString =artistArray.join(", ");
        return artistNameString;
    }
}