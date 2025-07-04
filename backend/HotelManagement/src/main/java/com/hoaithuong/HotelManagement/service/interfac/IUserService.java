package com.hoaithuong.HotelManagement.service.interfac;

import com.hoaithuong.HotelManagement.dto.ChangePasswordRequest;
import com.hoaithuong.HotelManagement.dto.LoginRequest;
import com.hoaithuong.HotelManagement.dto.Response;
import com.hoaithuong.HotelManagement.dto.UserDTO;
import com.hoaithuong.HotelManagement.entity.User;

public interface IUserService {

    Response register(User user);

    Response login(LoginRequest loginRequest);

    Response getAllUsers();

    Response getUserBookingHistory(String userId);

    Response deleteUser(String userId);

    Response getUserById(String userId);

    Response getMyInfo(String email);

    Response updateUserProfile(String currentEmail, UserDTO updatedInfo);

    Response changePassword(String email, ChangePasswordRequest request);


}
