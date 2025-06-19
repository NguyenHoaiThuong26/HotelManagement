package com.hoaithuong.HotelManagement.repo;

import com.hoaithuong.HotelManagement.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    Optional<Booking> findByBookingConfirmationCode(String confirmationCode);

    List<Booking> findByRoomIdAndIsCanceledFalse(Long roomId);
}
