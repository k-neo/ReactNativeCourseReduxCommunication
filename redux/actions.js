function requestStart() {
    console.log("requestMessage!");
    return {
      type: 'REQUEST_MESSAGE',
    }
}
  
function receiveResponse(json) {
    console.log(json);
    return {
      type: 'REQUEST_MESSAGE_SUCCESS',
      response: json.response.prefecture
    }
}
  
export function fetchMessages() {
    console.log("fetchMessages!");

    return dispatch => {
        dispatch(requestStart())
        return fetch("http://express.heartrails.com/api/json?method=getPrefectures")
            .then(response => response.json())
            .then(function(json) {
                console.log(json);
                dispatch(receiveResponse(json))
            }).catch((response) => {
                console.log("err!");
            });
    }
}
