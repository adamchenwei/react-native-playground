import Record from './Record';
import content from './content';
export default [
  new Record(
    'a0',//id
    'interest',//title
    'west-interest',//appRouteCustom
    '',//appRouteDefault
    //tags
    [
      'ribaa',
      'interest',
      'west',
      'Ahmed al-Wasaabee'
    ],
    //references
    [
      {
        url: 'https://google.com/interest',
        note: '',
      },
    ],
    //collectedBy
    [
      {
        userId: '0',
        date: 1512795251600,
      },
    ]
  ),
  new Record(
    'a1',//id
    'whom',//title
    'whom',//appRouteCustom
    '',//appRouteDefault
    //tags
    [
      'advise',
    ],
    //references
    [
      {
        url: 'http://www.google.com/whom',
        note: '',
      },
    ],
    //collectedBy
    [
      {
        userId: '0',
        date: 0,
      },
    ],
    //cached content
    content.a1
  ),

]