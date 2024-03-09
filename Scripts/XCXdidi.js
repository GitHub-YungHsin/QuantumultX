/*
# 名称：XCXems
# 功能：滴滴出行小程序净化js文件
# 原作者：fmz200
# 现作者：GitHub-YungHsin
# 脚本链接：https://raw.githubusercontent.com/GitHub-YungHsin/QuantumultX/main/Scripts/XCXdidi.js
*/

let obj = JSON.parse($response.body);
obj.data.sections = obj.data.sections.filter(item => ["center_v2", "head_v2", "core_function"].includes(item.sectionId));
$done({body: JSON.stringify(obj)});