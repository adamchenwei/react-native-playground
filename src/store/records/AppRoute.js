export default class AppRoute {
  constructor(
    routeCustom='',
    routeDefault='',
  ) {
    return {
      custom: routeCustom,
      default: routeDefault,
    };

  }
};