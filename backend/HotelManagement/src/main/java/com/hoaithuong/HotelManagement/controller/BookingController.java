package com.hoaithuong.HotelManagement.controller;


import com.hoaithuong.HotelManagement.dto.Response;
import com.hoaithuong.HotelManagement.entity.Booking;
import com.hoaithuong.HotelManagement.exception.OurException;
import com.hoaithuong.HotelManagement.service.interfac.IBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/bookings")

public class BookingController {

    @Autowired
    private IBookingService bookingService;

    @PostMapping("/book-room/{roomId}/{userId}")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public ResponseEntity<Response> saveBookings(@PathVariable Long roomId,
                                                 @PathVariable Long userId,
                                                 @RequestBody Booking bookingRequest) {


        Response response = bookingService.saveBooking(roomId, userId, bookingRequest);
        return ResponseEntity.status(response.getStatusCode()).body(response);

    }

    @GetMapping("/all")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Response> getAllBookings() {
        Response response = bookingService.getAllBookings();
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    @GetMapping("/get-by-confirmation-code/{confirmationCode}")
    public ResponseEntity<Response> getBookingByConfirmationCode(@PathVariable String confirmationCode) {
        Response response = bookingService.findBookingByConfirmationCode(confirmationCode);
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    @DeleteMapping("/cancel-my-booking/{bookingId}")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<Response> cancelMyBooking(@PathVariable Long bookingId) {
        Response response = bookingService.cancelBookingAsUser(bookingId);
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    @DeleteMapping("/admin-cancel-booking/{bookingId}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Response> adminCancelBooking(@PathVariable Long bookingId) {
        Response response = bookingService.cancelBookingAsAdmin(bookingId);
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }





}