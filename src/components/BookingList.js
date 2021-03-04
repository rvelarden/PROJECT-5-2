import React, { Component } from "react"
import Booking from "./Booking.js"


class BookingList extends Component {
   
  
      render() {
    return (
        <div>
            {/* {console.log(this.props.bookings)} */}
            <br></br>
            <br></br>
            <h2>My Upcoming Bookings</h2>
            {/* {this.props.bookings.map(bookingItem => <Booking booking={bookingItem} bookings={this.props.bookings} editBookingForm={this.props.editBookingForm} drones={this.props.drones} updatedBookings={this.props.updatedBookings}/>)} */}
            {this.props.bookings.map(bookingItem => <Booking booking={bookingItem} editBookingForm={this.props.editBookingForm} drones={this.props.drones} updatedBookings={this.props.updatedBookings} deleteBooking={this.props.deleteBooking} bookings={this.props.bookings}/>)}
          
        </div>
    )
      }
}

export default BookingList