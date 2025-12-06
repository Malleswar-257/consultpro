const ExpertiseController = require('./ExpertiseController');
describe('ExpertiseController', () => {
  it('should get all expertise', async () => {
    const expertiseController = new ExpertiseController();
    const expertise = await expertiseController.getAllExpertise();
    expect(expertise).toBeInstanceOf(Array);
  });
});