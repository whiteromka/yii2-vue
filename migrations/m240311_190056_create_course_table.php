<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%course}}`.
 */
class m240311_190056_create_course_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%course}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string(),
            'telegram' => $this->string(),
            'email' => $this->string(),
            'comment' => $this->string(),
            'course' => $this->string(),
            'start_part' => $this->string(),
            'status' => $this->integer(),
            'created_at' => 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP',
            'updated_at' => 'TIMESTAMP NULL',
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%course}}');
    }
}
