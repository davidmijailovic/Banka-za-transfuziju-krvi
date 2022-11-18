package group8.bloodbank.service.interfaces;

import group8.bloodbank.model.User;

import java.util.List;
import java.util.NoSuchElementException;

public interface UserService {
    User saveUser(User user);

    User findById(Long id) throws NoSuchElementException;

    List<User> getAll();

    Boolean updateUser(Long id, User user);


}
