
var rest = require('./rest');

var northwindRepo = {
    Url: null
};

northwindRepo.init = function (url) {
    northwindRepo.Url = url;
};


northwindRepo.getTerritories = function (expand, select) {
    return new Promise(function (fullfil, reject) {
        var thisUrl = northwindRepo.Url.trim() + "/Territories" + "?$format=json"
        thisUrl = buildOdataUrl(thisUrl, expand, select);

        console.log("Querying Service " + thisUrl);
        rest.get(thisUrl).then(function (data) {
            // TODO, put some recordsetting in here
            fullfil(data.value);
        }
        ).catch(reject);
    });
};


function buildOdataUrl(url, expand, select)
{
    if(expand!=null)
    {
        url += "&$expand=" + expand;
    }

    if(select!=null)
    {
        url += "&$select=" + select;
    }

    return url;
}

module.exports = northwindRepo;