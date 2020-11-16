/*
 * @Author: liudong
 * @Date: 2020-11-12 14:24:27
 * @version: 模块版本
 * @Description: 请求方法封装
 * @FilePath: \movie-api\app\utils\request.js
 * @param: {Object} [title] - 参数说明
 * @method: [FunctionName] - 方法说明
 * @LastEditors: liudong
 * @LastEditTime: 2020-11-12 15:14:41
 */
const request = require('request');

module.exports = function (url, method='get', headers) {
  headers = headers || {
    'Host': 'movie.douban.com',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.193 Safari/537.36',
    'referer': url,
    'Cookie': 'll="118318"; bid=RAFND_Lokqw; __yadk_uid=ER7iqrdDyaGFvkxoqzDKjHG5JymUXjjo; _vwo_uuid_v2=DA5BC233840ADF71E8198E69A299C0C77|0ba593c2e0169bbbbf5bec072fff2584; viewed="3590768"; gr_user_id=9094496b-366d-44e3-ba54-5fa2d4dd17bd; douban-fav-remind=1; __gads=ID=13c7ae986ad78642-2252b998a9c400b1:T=1604973825:RT=1604973825:S=ALNI_MY_p1s5cB9MnItrshSt-PgrhH9YbA; __utmc=30149280; __utmc=223695111; __utma=30149280.1734408241.1592634081.1605152598.1605162869.5; __utmz=30149280.1605162869.5.3.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; dbcl2="226461568:+PXm9xJWqGw"; ck=iLUr; push_noty_num=0; push_doumail_num=0; __utmv=30149280.22646; douban-profile-remind=1; __utmb=30149280.11.10.1605162869; __utma=223695111.1602260892.1592634081.1605152598.1605163001.4; __utmb=223695111.0.10.1605163001; __utmz=223695111.1605163001.4.2.utmcsr=douban.com|utmccn=(referral)|utmcmd=referral|utmcct=/; _pk_ref.100001.4cf6=%5B%22%22%2C%22%22%2C1605163002%2C%22https%3A%2F%2Fwww.douban.com%2F%22%5D; _pk_ses.100001.4cf6=*; _pk_id.100001.4cf6=ca8528e5a15faf2c.1592634080.4.1605165026.1605153237.',
  }
  return new Promise((resolve, reject) => {
    request({
      url,
      method,
      headers,
    }, function (error, response) {
      if (error) {
        console.log('error: ', error);
        return reject(error);
      }
      if (response.statusCode !== 200) {
        console.log('response-error: ', response);
        return reject(response);
      }
      return resolve(response.body.toString());
    });
  });
};