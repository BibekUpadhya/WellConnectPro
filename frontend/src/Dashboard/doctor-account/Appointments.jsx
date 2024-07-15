const Appointments = ({ Booking }) => {
  return (
    <table className="w-full text-left text-sm text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          {/* <th scope="col" className="px-6 py-3">
            Doctor
          </th> */}
          <th scope="col" className="px-6 py-3">
            User
          </th>
          <th scope="col" className="px-6 py-3">
            Ticket Price
          </th>
          <th scope="col" className="px-6 py-3">
            Status
          </th>
          <th scope="col" className="px-6 py-3">
            Is Paid
          </th>
        </tr>
      </thead>

      <tbody>
        {Booking?.map((booking) => (
          <tr key={booking._id}>
            {/* <td className="px-6 py-4">{Bookings.doctor.name}</td> */}
            <td className="px-6 py-4">{booking.user.name}</td>
            <td className="px-6 py-4">{booking.ticketPrice}</td>
            <td className="px-6 py-4">{booking.status}</td>
            <td className="px-6 py-4">Yes</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Appointments