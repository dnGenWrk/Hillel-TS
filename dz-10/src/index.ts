function Catch(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  const method = descriptor.value;

  descriptor.value = function (...args: any[]) {
    try {
      return method.apply(this, args);
    } catch (error: any) {
      console.error(`Oops, there is an error in ${propertyKey}: ${error.message}`);
    }
  };

  return descriptor;
}

class UsersService {
  @Catch
  getUsers() {
    throw new Error("No users");
  }
}

const userService = new UsersService();
userService.getUsers();
