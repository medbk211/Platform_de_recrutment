CREATE DATABASE IF NOT EXISTS recruitment_platform
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE recruitment_platform;

CREATE TABLE IF NOT EXISTS users (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('candidat', 'recruteur', 'admin') NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS companies (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  description TEXT,
  location VARCHAR(120),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS job_offers (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  company_id BIGINT UNSIGNED NOT NULL,
  recruiter_id BIGINT UNSIGNED NOT NULL,
  title VARCHAR(180) NOT NULL,
  location VARCHAR(120) NOT NULL,
  contract_type VARCHAR(50) NOT NULL,
  status ENUM('BROUILLON', 'EN_ATTENTE', 'PUBLIEE', 'ARCHIVEE', 'EXPIREE')
    NOT NULL DEFAULT 'EN_ATTENTE',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_job_offers_company
    FOREIGN KEY (company_id) REFERENCES companies(id),
  CONSTRAINT fk_job_offers_recruiter
    FOREIGN KEY (recruiter_id) REFERENCES users(id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS applications (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  offer_id BIGINT UNSIGNED NOT NULL,
  candidate_id BIGINT UNSIGNED NOT NULL,
  motivation TEXT,
  status ENUM('ENVOYEE', 'EN_COURS', 'RETENUE', 'REJETEE', 'ENTRETIEN_PLANIFIE')
    NOT NULL DEFAULT 'ENVOYEE',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_offer_candidate (offer_id, candidate_id),
  CONSTRAINT fk_applications_offer
    FOREIGN KEY (offer_id) REFERENCES job_offers(id),
  CONSTRAINT fk_applications_candidate
    FOREIGN KEY (candidate_id) REFERENCES users(id)
) ENGINE=InnoDB;

