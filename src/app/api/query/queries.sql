SELECT 
    users.id AS user_id,
    jsonb_build_object(
    'title', users.first_name, 
    'Soyadi', users.first_name,
    'image', users.profile_img 
  ) AS review_Details,
    reviews.content,
    reviews.rating,
    reviews.created_at,
    reviews.responded
FROM 
    reviews
JOIN 
    users ON users.id = reviews.author;