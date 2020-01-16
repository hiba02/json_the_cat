/* 
> node breedFetcher.js Chartreux
The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well.
??? why string.length === 2 ????
*/

const request = require('request');

const url = 'https://api.thecatapi.com/v1/breeds/search?q=sib';

request(url, (error, response, body) => {
  if (error) {
    console.log("Sorry. We can not find the URL");
    return;
  } else if (response.statusCode !== 200) {
    const message = `response.statusCode: ${response.statusCode}`;
    console.log(message);
    return message;
  } else {
    if (body.length === 2) {
      console.log("We cannot find it");
    } else {
      const data = JSON.parse(body);
      console.log(data);
      console.log(typeof data);
    }
  }
});