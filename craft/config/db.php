<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return array(
    '*' => array(
        'tablePrefix' => 'craft',
    ),
    '.dev' => array(
        'server' => 'localhost:3306',
        'user' => 'root',
        'password' => 'Ao21Ao21',
        'database' => 'craft',
    ),
    '.net' => array(
        'server' => 'us-cdbr-azure-west-b.cleardb.com',
        'user' => 'b2a3c54e2decab',
        'password' => '62caa123',
        'database' => 'as_c5d075f7c574d83',
    ),
);

