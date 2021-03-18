exports.renderIndex = (req, res) => {
    res.render("index");
}

exports.postData = (req, res) =>{
    console.log(req.body)
    res.render ("index", {
        delpost:req.body.fname
    });
}
//--------------------

const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
const { config } = require('dotenv/types');

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

