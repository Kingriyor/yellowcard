const greetingController = require('../src/controllers/greetingController');

test('should return correct text', async () => {
  const result = await greetingController.greet();
  expect(result).toBeDefined();
  expect(result).toBe('Hello World!');
});
