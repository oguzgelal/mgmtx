import Faker from 'faker';

// Returns data for a single `EntityCard` component
export const getEntityObject = () => {

  // Base object
  const obj = {
    id: `entity-${Faker.random.number()}`,
    title: `${Faker.company.catchPhraseAdjective()} ${Faker.company.catchPhraseNoun()}`,
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
