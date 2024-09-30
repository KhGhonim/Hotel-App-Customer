export const GETALLROOMS = `SELECT * FROM rooms;`;
export const GETROOMS = `SELECT * FROM rooms WHERE id = $1;`;
export const CheckAvailableRoomWithDates = `SELECT * FROM rooms WHERE room_availability = true AND room_capacity >= $1;`;
export const CheckIfEmailExists = `SELECT * FROM users WHERE email_address = $1;`;
export const CreateNewUser = `INSERT INTO users (first_name, last_name, email_address, password, phone_number, profile_img) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`;





export const GETALLRESERVATIONS = `SELECT * FROM reservations;`;
