CREATE TABLE Shortener_Link (
  id INT NOT NULL AUTO_INCREMENT,
  url VARCHAR(1024) NOT NULL,
  shortUrl VARCHAR(255) NOT NULL,
  createdAt DATETIME NOT NULL,
  CONSTRAINT PK_Shortener_Link PRIMARY KEY (id),
  CONSTRAINT UC_Shortener_Link_Url UNIQUE (url),
  CONSTRAINT UC_Shortener_Link_ShortUrl UNIQUE (shortUrl)
);