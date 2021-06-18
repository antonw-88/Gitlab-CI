    GRANT ALL PRIVILEGES ON app.* TO 'mariadb'@'%' WITH GRANT OPTION;
    CREATE SCHEMA IF NOT EXISTS `app` DEFAULT CHARACTER SET utf8 ;
    USE `app` ;

    CREATE TABLE IF NOT EXISTS `app`.`Content` (
      `id` INT NOT NULL,
      `string` VARCHAR(50) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    INSERT INTO Content (id, string) VALUES
    (1, '1: Hej allihopa!'), 
    (2, '2: Hello everyone!'),
    (3, '3: Hola a todos!'),
    (4, '4: Hallo, alle miteinander!'),
    (5, '5: Ciao a tutti!'),
    (6, '6: Hei kaikki!'),
    (7, '7: Hej allesammen!'),
    (8, '8: Bonjour a tous!'),
    (9, '9: Omnis salve!'),
    (10, '10: Bonjou tout moun!');