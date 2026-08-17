export default {
  async fetch(request, env, ctx) {
    // NeuralGuide — полностью статический сайт. Вся маршрутизация — через assets.
    return env.ASSETS.fetch(request);
  }
};