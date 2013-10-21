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
    '.com' => array(
        'server' => 'us-cdbr-azure-east-c.cloudapp.net',
        'user' => 'bed79fe94a4b59',
        'password' => 'd3f5300a',
        'database' => 'deslabDAsrUI76VU',
    ),
);

