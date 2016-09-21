<?php
/* View source from 'classes' folder to known something about this methods */

/* TODO read vars from config file
 * e.g parse_ini_file(/etc/extshark/config.ini)
*/
$API = array(
    'TShark'=>array(
        'methods'=>array(
            'loadGrid'=>array(
                'len'=>1
            ),
            'loadPacket'=>array(
                'len'=>1
            )
        )
    ),
    'Util'=>array(
        'methods'=>array(
            'loadDumpDir'=>array(
                'len'=>0
            )
        )
    )
);