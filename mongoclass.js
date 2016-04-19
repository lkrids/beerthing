db.zips.aggregate([

{
  '$match': {
    '$or': [
      {'state':'CT'},
      {'state':'NJ'}
    ],
  }
},

{
  '$match': {
    'pop':{ '$gt':25000 }
  }
},

{
  '$group': {
    '_id': {
      'state': '$state',
      'city':  '$city'
    },
    'pop': {'$sum':'$pop'}
  }
},

{
  '$group': {
    '_id': null,
    'total': {'$avg':'$pop'}
  }
}

]);
