<?php

namespace app\models;

use Yii;
use yii\db\ActiveRecord;

/**
 * This is the model class for table "course".
 *
 * @property int $id
 * @property string|null $name
 * @property string|null $telegram
 * @property string|null $email
 * @property string|null $comment
 * @property string|null $course
 * @property string|null $start_part
 * @property int|null $status
 * @property string|null $created_at
 * @property string|null $updated_at
 */
class Course extends ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'course';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['email', 'telegram', 'name', 'course'], 'required'],
            [['status'], 'integer'],
            ['email', 'email'],
            ['telegram', 'telegramValidator'],
            ['telegram', 'string', 'length' => [4, 100]],
            ['name', 'string', 'length' => [4, 100]],
            [['created_at', 'updated_at'], 'safe'],
            [['name', 'telegram', 'email', 'comment', 'course', 'start_part'], 'string', 'max' => 255],
            ['course', 'in', 'range' => self::courses()],
        ];
    }

    /**
     * @param $attribute
     * @param $params
     */
    public function telegramValidator($attribute, $params)
    {
        $position = strpos($this->$attribute, '@');
        if ($position !== 0) {
            $this->addError($attribute, 'Значение поля Телеграм должно начинаться с символа @');
        }
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'ФИО',
            'telegram' => 'Telegram',
            'email' => 'Email',
            'comment' => 'Ваш комментарий',
            'course' => 'Курс',
            'start_part' => 'Глава(этап) откуда хотите начать',
            'status' => 'Статус',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }

    /**
     * Можно добавить запись
     *
     * @return bool
     */
    public function isCanRecord(): bool
    {
        $course = Course::find()->where(['telegram' => $this->telegram, 'course' => $this->course])->one();
        return empty($course) ? true : false;
    }

    /**
     * @return string[]
     */
    public static function getCourses(): array
    {
        return ['Frontend' => 'Фронтенд', 'Fullstack' => 'Фулстек', 'Gamedev' => 'Разработчик игр', 'Private' => 'Частные уроки'];
    }

    /**
     * @return array
     */
    public static function courses(): array
    {
        $courses = self::getCourses();
        return array_keys($courses);
    }
}
