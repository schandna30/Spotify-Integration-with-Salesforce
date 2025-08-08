    public with sharing class spotifyIntegrationController {
    @AuraEnabled
    public static string searchWithSpotify(string trackName){
    //create the instance of HTTP class
    HTTP http = new HTTP();

    // create the instance of HTTP request class
    HttpRequest request =new HttpRequest();
    //populate the attribute of the requesg
    request.setMethod('GET');
    String encodedName=EncodingUtil.urlEncode(trackName,'UTF-8');

    //https://api.spotify.com/v1/search?q=tum+ho&type=track&limit=19&offset=1
    request.setEndpoint('callout:Spotify/v1/search?q='+encodedName+'&type=track&limit=19&offset=1');

    //send the request
    try{

        Httpresponse response= http.send(request);
        system.debug('response'+ response.getBody());
         system.debug('response status code'+ response.getStatusCode());
         system.debug('response status'+ response.getStatus());
        
         if (response.getStatusCode()==200){
             return  response.getBody();


         }else{
            throw new AuraHandledException(response.getBody());
         }
    }
    catch(exception ex){
    System.debug(ex.getMessage());
     throw new AuraHandledException(ex.getMessage());}

    }
    }