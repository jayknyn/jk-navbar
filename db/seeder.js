db.products.drop()

const seed = (count) => {
  while (count > 0) {
    const batch = [];
    for (let i = 0; i < 20000; i++) {
      batch.push({
        productId: 100,
        name: 'Soul Flare',
        images: `https://s3.us-east-2.amazonaws.com/axes/battle+axe/1.+battle-axe.jpg`,
        price: 499,
        description: 'Palo santo mixtape occaecat sartorial. Cloud bread YOLO swag',
        tag: 'throwing'
      },
      {
        productId: 95,
        name: 'Baneful Beads',
        images: `https://s3.us-east-2.amazonaws.com/fecproject/downloads/halberd-axes/24.+halberd_20015w.jpg`,
        price: 69,
        description: 'Cold-pressed gochujang microdosing ut pour-over',
        tag: 'flaunting'
      },
      {
        productId: 89,
        name: 'Doom guard',
        images: `https://s3.us-east-2.amazonaws.com/fecproject/downloads/battle-axes/1.+xd7601.png`,
        price: 302,
        description: 'Try-hard mollit single-origin coffee kale chips ennui affogato',
        tag: 'bragging'
      },
      {
        productId: 45,
        name: 'Lightbane',
        images: `https://s3.us-east-2.amazonaws.com/fecproject/downloads/war-axe/7.+s-l640.jpg`,
        price: 56,
        description: 'Bespoke cred dolore vegan unicorn leggings',
        tag: 'bragging'
      },
      {
        productId: 33,
        name: 'Harmony',
        images: `https://s3.us-east-2.amazonaws.com/fecproject/down…-axes/37.+medieval-battle-axe-vector-14457555.jpg`,
        price: 730,
        description: 'Magna narwhal tacos, activated charcoal aliqua try-hard raw denim',
        tag: 'war'
      }
      )
    }
    db.products.insertMany(batch)
    count--;
  }
}

seed(10);

// $ mongo db/seeder.js
