SELECT 
    dining.id AS dining_id,
    dining.people,
    dining.time,
    dining.date,
    dining.reservation_timestamp,
    users.first_name AS user_firstname,
    users.last_name AS user_lastname,
    users.profile_img AS image
FROM 
    dining
JOIN 
    users ON dining.user_id = users.id;