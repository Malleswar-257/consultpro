const LeadController = require('./LeadController');
describe('LeadController', () => {
  it('should get all leads', async () => {
    const leadController = new LeadController();
    const leads = await leadController.getAllLeads();
    expect(leads).toBeInstanceOf(Array);
  });
  it('should create a new lead', async () => {
    const leadController = new LeadController();
    const lead = await leadController.createLead('Test Name', 'test@example.com', 'Test Message');
    expect(lead).toHaveProperty('id');
  });
});