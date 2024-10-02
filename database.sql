CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.'),
('images/goat_stache.png', 'Goat Stache!', 'Photo of a mustachioed goat taken at Glacier National Park.');
  

  INSERT INTO "gallery"
  ("url", "title", "description")
  VALUES('images/lanternfest.jpeg', 'Water Lantern Festival' "Seth & I at the Water Lantern Festival.");

    INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/flowers.jpeg', 'Pretty purple flowers.', 'Picture of some purple flowers I saw on a walk'),
('images/lanternfest.jpeg','Water lantern festival.', 'Picture of me and my husband at the Water lantern festival at Lake Phalen.');
