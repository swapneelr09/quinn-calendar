/*API SERVICES*/
import Global from '../store/config';
import axios from 'axios';
const API = axios.create({ baseURL: Global.apiUrl });

//Sample Api Request Object for testing
const data = {
    "RequestObjects": [
        {
            "Post": {
                "OperationType": "Read",                
                "Privacy": {
                    "SearchValues": ["Public"],
                    "Return": true
                },      
                "UserId": {
                    "SearchValues": ["assign"],
                    "Return": false
                },               
                "id": {
                    "Return": true
                },
                
                "IsCalendarEntry": {
                    "SearchValues": [true],
                    "Return": true
                },
                "Images": { 
                    "Return": true
                },								
								 "Text": {
                    "Return": true 
                },
								"Rating": {
                    "Return": true                    
                },
                "TypeOfDay":{
                     "Return": true
                },    				
				"MaxItemCount": "25",              
                                            
                "CalendarDateTime": { 
                    "Return": true, 
                    "Sort": "Descending" 
                },                                
                 "ContinuationToken": null                
            }
        }
    ]    
}

const getPosts = async ()=>{
	let response = null
	await API.post('', data)
	.then(function (res) {
		response = res
	})
	.catch(function (error) {
		response = error
	})
	return response;
}

const api = {
    getPosts : getPosts
}

export {api as API}
