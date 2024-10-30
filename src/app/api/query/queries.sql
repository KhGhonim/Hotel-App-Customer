SELECT 
    bookings.id AS booking_id,
    bookings.number_of_guests,
    bookings.number_of_children,
    bookings.booking_date,
    bookings.special_requests,
    users.first_name AS user_firstname,
    users.last_name AS user_lastname,
    rooms.image AS rooms_image,
    users.email_address AS user_emailaddress,
    rooms.room_type
FROM 
    bookings
JOIN 
    users ON bookings.user_id = users.id
JOIN 
    rooms ON bookings.room_id = rooms.id;