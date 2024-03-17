<?php

$dsn = 'sqlite:' . __DIR__ . '/' . "sqlite.db";

return [
    'class' => 'yii\db\Connection',
    'dsn' => $dsn,
    'charset' => 'utf8',
];
