USE recruitment_platform;

INSERT INTO users (full_name, email, password_hash, role)
VALUES
  ('Admin Demo', 'admin@example.com', '$2a$10$example_hash_replace_me', 'admin'),
  ('Recruteur Demo', 'recruiter@example.com', '$2a$10$example_hash_replace_me', 'recruteur'),
  ('Candidat Demo', 'candidate@example.com', '$2a$10$example_hash_replace_me', 'candidat');

