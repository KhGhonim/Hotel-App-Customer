SELECT 
    users.id AS user_id,
    users.first_name AS user_firstname,
    users.last_name AS user_lastname,
    reviews.content,
    reviews.avatar,
    reviews.rating,
    reviews.created_at,
    reviews.responded
FROM 
    reviews
JOIN 
    users ON users.id = reviews.author;