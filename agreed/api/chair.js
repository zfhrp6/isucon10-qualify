const PATH = '/api/chair'

module.exports = [
  // GET: /api/chair/:id
  {
    request: {
      path: `${PATH}/:id`,
      method: 'GET',
      query: {},
      values: {
        id: 10
      }
    },
    response: {
      headers: {},
      status: 200,
      body: {
        id: '{:id}',
        name: '{:name}',
        description: '{:description}',
        thumbnails: '{:thumbnails}',
        price: '{:price}',
        height: '{:height}',
        width: '{:width}',
        depth: '{:depth}',
        color: '{:color}',
        features: '{:features}',
        kind: '{:kind}'
      },
      schema: {
        type: 'object',
        properties: {
          id: 'number',
          name: 'string',
          description: 'string',
          thumbnails: {
            type: 'array',
            items: 'string'
          },
          price: 'number',
          height: 'number',
          width: 'number',
          depth: 'number',
          color: 'string',
          features: {
            type: 'array',
            items: 'string'
          },
          kind: 'string'
        }
      },
      values: {
        id: 10,
        name: 'すごいイス',
        description: 'すごいネコはいます。',
        thumbnails: [
          '/assets/images/chair/3E880A828B1DBFACB42209724583B56EF28466E45E2BF3704475EA02B19BDBFC.jpg',
          '/assets/images/chair/9120C2E3CAF5CD376C1B14899C2FD31438A839D1F6B6F8A52091392E0B9168FC.jpg',
          '/assets/images/chair/1501E5C34A2B8EE645480ED1CC6442CD5929FE7616E20513574628096163DF0C.jpg'
        ],
        price: 10000,
        height: 100,
        width: 50,
        depth: 60,
        color: '黒',
        features: [
          'リクライニング',
          'キャスター付き',
          '肘掛け'
        ],
        kind: 'エルゴノミクス'
      }
    }
  },

  // GET: /api/chair/search
  {
    request: {
      path: `${PATH}/search`,
      method: 'GET',
      query: {
        priceRangeId: '{:priceRangeId}',
        heightRangeId: '{:height}',
        widthRangeId: '{:width}',
        depthRangeId: '{:depth}',
        color: '{:color}',
        features: '{:features}',
        kind: '{:kind}'
      },
      values: {
        priceRangeId: 2,
        heightRangeId: 3,
        widthRangeId: 2,
        depthRangeId: 1,
        color: '黒',
        features: 'リクライニング,肘掛け',
        kind: 'エルゴノミクス'
      }
    },
    response: {
      headers: {},
      body: {
        chairs: '{:chairs}'
      },
      values: {
        chairs: [
          {
            id: 1,
            name: 'すごいイス',
            description: 'すごいネコはいます。',
            thumbnails: [
              '/assets/images/chair/3E880A828B1DBFACB42209724583B56EF28466E45E2BF3704475EA02B19BDBFC.jpg',
              '/assets/images/chair/9120C2E3CAF5CD376C1B14899C2FD31438A839D1F6B6F8A52091392E0B9168FC.jpg',
              '/assets/images/chair/1501E5C34A2B8EE645480ED1CC6442CD5929FE7616E20513574628096163DF0C.jpg'
            ],
            price: 10000,
            height: 100,
            width: 50,
            depth: 60,
            color: '黒',
            features: [
              'リクライニング',
              'キャスター付き',
              '肘掛け'
            ],
            kind: 'エルゴノミクス'
          },
          {
            id: 11,
            name: 'ボロいイス',
            description: 'ボロい釣り竿的なsomething。',
            thumbnails: [
              '/assets/images/chair/9120C2E3CAF5CD376C1B14899C2FD31438A839D1F6B6F8A52091392E0B9168FC.jpg',
              '/assets/images/chair/3E880A828B1DBFACB42209724583B56EF28466E45E2BF3704475EA02B19BDBFC.jpg'
            ],
            price: 12000,
            height: 80,
            width: 45,
            depth: 70,
            color: '黒',
            features: [
              '肘掛け'
            ],
            kind: 'エルゴノミクス'
          },
          {
            id: 12,
            name: 'ふつうのハンモック',
            description: '老後はハンモックで遊びたい。',
            thumbnails: [
              '/assets/images/chair/1501E5C34A2B8EE645480ED1CC6442CD5929FE7616E20513574628096163DF0C.jpg'
            ],
            price: 12000,
            height: 50,
            width: 120,
            depth: 70,
            color: '白',
            features: [
              'リクライニング'
            ],
            kind: 'ハンモック'
          }
        ]
      }
    }
  },

  // POST: /api/chair/buy/:id
  {
    request: {
      path: `${PATH}/buy/:id`,
      method: 'POST',
      body: {
        email: '{:email}'
      },
      values: {
        id: 10,
        email: 'isuumo@example.com'
      }
    },
    response: {
      headers: {},
      body: 'OK',
      schema: {
        type: 'string'
      },
      values: {}
    }
  }
]