var builder;
var GeoCodeMessage;

import { GeoCode } from './geoCode';

var object = new GeoCode({ "longitude": 22, "latitude": 1, "address": "some address" });
var encoded = GeoCode.encode(object).finish();
console.log(encoded);
var decoded = GeoCode.decode(encoded);
console.log(decoded);