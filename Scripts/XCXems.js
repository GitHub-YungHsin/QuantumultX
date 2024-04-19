/*
# 名称：XCXems
# 功能：中国邮政EMS小程序净化js脚本文件
# 原作者：fmz200
# 现作者：GitHub-YungHsin
# 脚本链接：https://raw.githubusercontent.com/GitHub-YungHsin/QuantumultX/main/Scripts/XCXems.js
*/

let obj = JSON.parse($response.body);
obj.info.moduleJson = JSON.stringify(JSON.parse(obj.info.moduleJson).filter(item => !item.moduleName.includes("广告")));
$done({body: JSON.stringify(obj)});