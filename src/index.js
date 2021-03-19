const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
const { config } = require('../config');
const toneAnalyzer = new ToneAnalyzerV3({
  version: '2017-09-21',
  authenticator: new IamAuthenticator({
    apikey: config.apikey,
  }),
  serviceUrl: config.serviceUrl,
  headers: {
    'X-Watson-Learning-Opt-Out': 'true'
  }
});

exports.renderIndex = (req, res) => {
    res.send("Backend");
}

exports.postData = (req, res) =>{
    console.log(req.body.fname)
    var text = req.body.fname
    const params = {
        toneInput : {'text': text},
        contentType : 'application/json'
    };
    toneAnalyzer.tone(params, function(error, response){
        if(error){
            console.log('error',error);
        }else{
            res.send (
                JSON.stringify(response,null,2)
            );
        }

    })


  
}
//--------------------



