cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/me.habel.MyEstimotePlugin/www/EstimoteBeacons.js",
        "id": "me.habel.MyEstimotePlugin.EstimoteBeacons",
        "clobbers": [
            "estimoteBeacons"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "me.habel.MyEstimotePlugin": "0.1"
}
// BOTTOM OF METADATA
});