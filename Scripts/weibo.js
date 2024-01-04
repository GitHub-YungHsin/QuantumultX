// 2024-01-04 09:20
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (obj?.data?.bottom?.length > 0) {
    const sortLists = ["微博", "发现", "我"];
    obj.data.bottom = obj.data.bottom
      .filter((i) => sortLists?.includes(i?.name))
      .sort((a, b) => sortLists.indexOf(a?.name) - sortLists.indexOf(b?.name));
  }