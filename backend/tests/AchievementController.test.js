const AchievementController = require('./AchievementController');
describe('AchievementController', () => {
  it('should get all achievements', async () => {
    const achievementController = new AchievementController();
    const achievements = await achievementController.getAllAchievements();
    expect(achievements).toBeInstanceOf(Array);
  });
});