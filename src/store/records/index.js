// import record from './mock';
import ProductionList from './production';
import Record from './Record';
function generateList(item, key) {
  let list = [];
  const max = 200;
  for (let i = 0; i < max; i ++) {
    ((index) => {
      item.id = `aW${index}`;
      list.push(item);
    })(i);
  }
  return list;
}

function generateRecord(item, key) {
  let newItem = Object.assign({}, item);
  newItem.id = key;
  return newItem;
}

// const theList = [
//   generateRecord(record, 0),
//   generateRecord(record, 1),
//   generateRecord(record, 2),
// ];

const theList = ProductionList;

class Records {
  constructor(records) {
    this.list = records;
  }
  getAll() {
    return this.list;
  }
  getARecord(recordId) {
    const resultList = this.list.filter((item) => {
      return item.id === recordId;
    });

    return resultList.length === 1
      ? resultList[0]
      : new Record()
  }
}
export default Records;
