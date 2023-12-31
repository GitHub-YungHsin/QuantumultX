/*
# 名称：blblHD
# 功能：哔哩哔哩会员高帧率解锁js文件
# 原作者：RuCu6
# 现作者：GitHub-YungHsin
# 脚本链接：https://raw.githubusercontent.com/GitHub-YungHsin/QuantumultX/main/Scripts/blblHD.js
*/

/*

#新版需要自己抓包找域名

[rewrite_local]

#哔哩哔哩解锁大会员
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header https://raw.githubusercontent.com/GitHub-YungHsin/QuantumultX/main/Scripts/blblHD.js

[mitm]
hostname = *.biliapi.*, *.bilibili.*

*/

var modifiedHeaders = $request.headers;

//modifiedHeaders['Cookie'] = '';

modifiedHeaders['Authorization'] = 'identify_v1 baf9851654ab5fec148f7595af0e48c2CjAHkeo73lsryoPGFq33NOdd7QBX26Yko7U-xm-0zXvC_OxA1MvCF0B-Nr60VppXnC0SVlVaclYyc1BjaVZFSER0M2FlSTM4RHdYNmtJSVJ5RTcycXF6TVkzaElMTUdqSVd6aDVnaUhWVUotajlicnN5RGpCWFRzM3o1bHM4UDAzenBtcklPMHNnIIEC';

modifiedHeaders['User-Agent'] = 'User-Agent":"bili-universal/75800200 os/ios model/iPhone 12 mobi_app/iphone osVer/17.2 network/2 grpc-objc-cronet/1.47.0 grpc-c/25.0.0 (ios; cronet_http)';

$done({headers : modifiedHeaders})
