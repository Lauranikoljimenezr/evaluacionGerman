import UserRepository from '../Repositories/UserRepository';

class MenuService {
    static async getAllMenu() {
        return await UserRepository.getAllMenu();
      }
}
export default MenuService;