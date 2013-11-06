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
        'server' => 'ap-cdbr-azure-east-b.cloudapp.net',
        'user' => 'be7f37c4d3f0cc',
        'password' => 'b7fd4b4e',
        'database' => 'deslabdAbKX5ZmRh',
    ),
);

