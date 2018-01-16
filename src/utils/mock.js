import Faker from 'faker';

// Returns data for a single Entity
export const getEntityObject = () => {

  // Base object
  const obj = {
    id: `entity-${Faker.random.number()}`,
    title: `${Faker.company.catchPhraseAdjective()} ${Faker.company.catchPhraseNoun()}`,
    description: Faker.random.number(1) === 1 ? Faker.lorem.sentence() : '',
    items: [],
  };

  // Add entity items
  const itemCount = Faker.random.number(50);
  for (let i = 0; i < itemCount; i++) {
    obj.items.push({
      id: `entity-item-${Faker.random.number()}`,
      title: `${Faker.company.catchPhraseAdjective()} ${Faker.company.catchPhraseNoun()}`,
    });
  }

  return obj;
};

// Returns data for a single Collection
export const getCollectionObject = (repeat = true) => {
  const obj = {
    id: `collection-${Faker.random.number()}`,
    title: `${Faker.company.catchPhraseAdjective()} ${Faker.company.catchPhraseNoun()}`,
    description: Faker.random.number(1) === 1 ? Faker.lorem.sentence() : '',
    items: {
      included: [],
      excluded: [],
    },
  };

  // Add entities or other collections to collection as included
  const includedCount = Faker.random.number(20);
  for (let i = 0; i < includedCount; i += 1) {
    const rand = Faker.random.number(1);
    if (rand === 1 && repeat) {
      // Add a collection item
      obj.items.included.push({
        type: 'collection',
        data: getCollectionObject(false),
      });
    } else {
      // Add an entity item
      obj.items.included.push({
        type: 'entity',
        data: getEntityObject(),
      });
    }
  }

  // Add entities or other collections to collection as excluded
  const excludedCount = Faker.random.number(10);
  for (let i = 0; i < excludedCount; i += 1) {
    const rand = Faker.random.number(1);
    if (rand === 1 && repeat) {
      // Add a collection item
      obj.items.excluded.push({
        type: 'collection',
        data: getCollectionObject(false),
      });
    } else {
      // Add an entity item
      obj.items.excluded.push({
        type: 'entity',
        data: getEntityObject(),
      });
    }
  }

  return obj;
};

