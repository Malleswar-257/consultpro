const UserController = require('./UserController');
describe('UserController', () => {
  it('should register a new user', async () => {
    const userController = new UserController();
    const user = await userController.register('Test Name', 'test@example.com', 'password');
    expect(user).toHaveProperty('id');
  });
  it('should login an existing user', async () => {
    const userController = new UserController();
    const token = await userController.login('test@example.com', 'password');
    expect(token).toHaveProperty('token');
  });
});