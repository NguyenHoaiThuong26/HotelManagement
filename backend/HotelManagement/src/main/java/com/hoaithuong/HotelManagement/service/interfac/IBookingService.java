package com.hoaithuong.HotelManagement.service.interfac;

import com.hoaithuong.HotelManagement.dto.Response;
import com.hoaithuong.HotelManagement.entity.Booking;

public interface IBookingService {

    Response saveBooking(Long roomId, Long userId, Booking bookingRequest);

    Response findBookingByConfirmationCode(String confirmationCode);

    Response getAllBookings();

    Response cancelBooking(Long bookingId);
}
