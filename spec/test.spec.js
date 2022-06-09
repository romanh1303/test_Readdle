const { test, expect, chromium } = require('@playwright/test');
const { RozetkaTest } = require('../framework/rozetka/test');

test.describe('Find a MagSafe', () => {
  test('todo', async () => {
    const testing = new RozetkaTest();
    await testing.navigate();
    await testing.searchBar();
    await testing.buyit();
    await testing.checkMyBag();
    await testing.makeScreen('screenshot.png');
  });
});
