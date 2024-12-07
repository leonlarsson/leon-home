DROP TABLE IF EXISTS entries;

CREATE TABLE entries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date INTEGER DEFAULT (strftime('%s', 'now') * 1000) NOT NULL,
    body TEXT NOT NULL CHECK (length(body) <= 100),
    name TEXT DEFAULT NULL CHECK (length(name) <= 50),
    ip TEXT CHECK (length(ip) <= 50)
);