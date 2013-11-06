<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
	'*' => array(
    ),
    '.dev' => array(
		'devMode' => true,
		'environmentVariables' => array(
            'siteUrl'        => 'http://craft.dev/'
        )
    ),
    '.com' => array(
    ),
    '.net' => array(
    	'environmentVariables' => array(
            'siteUrl'        => 'http://deslabdev.azurewebsites.net/public/'
        )
    ),
);
