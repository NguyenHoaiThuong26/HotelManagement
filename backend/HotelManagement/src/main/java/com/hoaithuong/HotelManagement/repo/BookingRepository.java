package com.hoaithuong.HotelManagement.repo;

import com.hoaithuong.HotelManagement.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {

}
