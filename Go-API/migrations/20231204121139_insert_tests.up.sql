INSERT INTO public.test (title, "description", questions, category, duration, "image") VALUES
('A Category', 'A and A1 category (motorcycle and moped)', 
ARRAY[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40], 
'A', 50, ARRAY[pg_read_binary_file('/path/in/container/images/motor.png')]),

('C Category', 'C and C1 category (truck and 7.5-ton truck)', 
ARRAY[81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 
101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 
118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130], 'C', 40, 
ARRAY[pg_read_binary_file('/path/in/container/images/truck.png')]);