\c team_colors

INSERT INTO cities (name) VALUES
  ('San Francisco'),
  ('Oakland'),
  ('San Jose')
;

INSERT INTO colors (name) VALUES
  ('red'),
  ('gold'),
  ('silver'),
  ('black'),
  ('green'),
  ('white'),
  ('orange'),
  ('cream'),
  ('blue')
;

INSERT INTO teams (name, city_id, mascot) VALUES
  ('Warriors', 2, 'Thunder'),
  ('Forty-Niners', 1, 'Sourdough Sam'),
  ('Raiders', 2, 'Raider Rusher'),
  ('Giants', 1, 'Lou Seal'),
  ('Athletics', 2, 'Stomper')
;

INSERT INTO team_colors (team_id, color_id) VALUES
  (2, 1),
  (2, 2),
  (3, 3),
  (3, 4),
  (5, 2),
  (5, 5),
  (5, 6),
  (4, 7),
  (4, 8),
  (4, 4),
  (4, 2),
  (1, 2),
  (1, 9)
;
