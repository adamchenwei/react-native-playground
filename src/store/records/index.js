import record from './mock';
import ProductionList from './production';

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
export default theList;
