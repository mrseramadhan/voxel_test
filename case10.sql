CREATE TABLE `voxel`.`user1` ( `id` INT NOT NULL AUTO_INCREMENT ,  `nama` VARCHAR(100) NOT NULL ,  `tanggal_lahir` DATE NOT NULL ,    PRIMARY KEY  (`id`))
CREATE TABLE `voxel`.`tr_jabatan1` ( `id` INT NOT NULL AUTO_INCREMENT ,  `id_user` INT NOT NULL ,  `id_jabatan` INT NOT NULL ,  `aktif` BOOLEAN NOT NULL ,    PRIMARY KEY  (`id`))
CREATE TABLE `voxel`.`ms_jabatan1` ( `id` INT NOT NULL ,  `nama_jabatan` VARCHAR(100) NOT NULL )

ALTER TABLE `tr_jabatan1` ADD FOREIGN KEY (`id_jabatan`) REFERENCES `tr_jabatan1`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `tr_jabatan1` ADD FOREIGN KEY (`id_user`) REFERENCES `user1`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

SELECT * FROM user1 a LEFT JOIN tr_jabatan1 b ON a.id = b.id_user LEFT JOIN ms_jabatan c ON b.id_jabatan = c.id WHERE b.aktif = 1