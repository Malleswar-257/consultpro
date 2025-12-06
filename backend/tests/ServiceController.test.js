const ServiceController = require('./ServiceController');
describe('ServiceController', () => {
  it('should get all services', async () => {
    const serviceController = new ServiceController();
    const services = await serviceController.getAllServices();
    expect(services).toBeInstanceOf(Array);
  });
});