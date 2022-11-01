import awilix from 'awilix';

import UserService from './service/UserService.js';

export const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

export const setup = () => {
  container.register({
    userController: awilix.asClass(UserController),
    
    userService: awilix.asClass(UserService),
  });
};