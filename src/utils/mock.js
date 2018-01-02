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
    items: [],
  }

  // Add entities or other collections to collection
  const itemCount = Faker.random.number(8);
  for (let i = 0; i < itemCount; i++) {
    let rand = Faker.random.number(1);

    // Add a collection item
    if (rand == 1 && repeat) {
      obj.items.push({
        type: 'collection',
        data: getCollectionObject(false)
      });
    }

    // Add an entity item
    else {
      obj.items.push({
        type: 'entity',
        data: getEntityObject()
      });
    }

  }

  return obj;
}
