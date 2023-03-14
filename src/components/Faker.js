import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';

function Faker() {

  const users = [];

  function createRandomUser() {
    return {
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };
  }

  Array.from({ length: 10 }).forEach(() => {
    users.push(createRandomUser());
  })

  return (
    <div>
      <h3>Hello, I am the Faker component</h3>
      <h4>The below is Faker Data</h4>
      {users.map((user) => {
        return (
          <>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </>
        )
      })}
    </div>
  )
}

export default Faker
