import { useState } from "react";
import { supabase } from "../supabase";

function Booking() {
  const [form, setForm] = useState({
    name: "",
    tickets: "",
    stand: "",
    venue: "",
    place: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleBooking(event) {
    event.preventDefault();

    if (!form.name || !form.tickets || !form.stand || !form.venue || !form.place) {
      alert("Please fill all the details");
      return;
    }

    const { error } = await supabase
      .from("bookings")
      .insert([{ ...form, tickets: Number(form.tickets) }]);

    if (error) {
      console.error(error);
      alert("Booking failed");
      return;
    }

    alert("Ticket booked successfully!");
    setForm({ name: "", tickets: "", stand: "", venue: "", place: "" });
  }

  return (
    <main className="booking-page">
      <h1>Book Your Ticket</h1>
      <form className="booking-form" onSubmit={handleBooking}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={form.name} onChange={handleChange} />

        <label htmlFor="tickets">Tickets</label>
        <input
          id="tickets"
          name="tickets"
          type="number"
          min="1"
          value={form.tickets}
          onChange={handleChange}
        />

        <label htmlFor="stand">Stand</label>
        <input id="stand" name="stand" value={form.stand} onChange={handleChange} />

        <label htmlFor="venue">Venue</label>
        <input id="venue" name="venue" value={form.venue} onChange={handleChange} />

        <label htmlFor="place">Place</label>
        <input id="place" name="place" value={form.place} onChange={handleChange} />

        <button type="submit">Book Ticket</button>
      </form>
    </main>
  );
}

export default Booking;