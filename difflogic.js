import { readFileSync } from 'fs';
import _ from 'Lodash';

const diffFunc = (path1, path2) => {
    const jsonObj1 = JSON.parse(readFileSync(path1));
    const jsonObj2 = JSON.parse(readFileSync(path2));

    let ans = [];
    for (let i in jsonObj1) {
      if (!jsonObj2.hasOwnProperty(i)) {
        ans.push(`- ${i}: ${jsonObj1[i]}`);
      } else if (jsonObj1[i] !== jsonObj2[i]) {
        ans.push(`- ${i}: ${jsonObj1[i]}`);
        ans.push(`+ ${i}: ${jsonObj2[i]}`);
      }
      else {
        ans.push(`${i} : ${jsonObj1[i]}`);
      }
    }

    for (let i in jsonObj2) {
      if (!jsonObj1.hasOwnProperty(i)) {
        ans.push(`+ ${i}: ${jsonObj2[i]}`);
      }
    }

    ans = _.sortBy(ans, (o) => {
      if (o[0] === '-' || o[0] === '+') {
        return o[2];
      }
      return o[0];
    })

    console.log(`{
        ${ans.join('\n')}
    }`);
}

export default diffFunc;