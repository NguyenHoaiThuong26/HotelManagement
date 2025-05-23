package com.hoaithuong.HotelManagement.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.hoaithuong.HotelManagement.entity.Booking;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class RoomDTO {

    private Long id;
    private String roomType;
    private BigDecimal roomPrice;
    private String roomPhotoUrl;
    private String romeDescription;
    private List<BookingDTO> bookings;
}
