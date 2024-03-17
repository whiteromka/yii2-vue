<?php

namespace app\models;

use Yii;
use yii\base\Model;

/**
 * Форма для записи на курс
 */
class CourseForm extends Model
{
    public $name;
    public $telegram;
    public $email;
    public $course;
    public $comment;
    public $start_part;
    public $status;
    public $verifyCode;


    /**
     * @return array the validation rules.
     */
    public function rules()
    {
        return [
            [['name', 'telegram', 'course'], 'required'],
            ['email', 'email'],
            [['comment', 'start_part', 'status'], 'string'],
            ['verifyCode', 'captcha'],
        ];
    }

    /**
     * @return array customized attribute labels
     */
    public function attributeLabels()
    {
        return [
            'name' => 'Имя Фамилия',
            'telegram' => 'Телеграм',
            'course' => 'Курс',
            'verifyCode' => 'Код',
            'comment' => 'Комемнтарий',
            'start_part' => 'Глава с которой хотите начать'
        ];
    }

    /**
     * @return string[]
     */
    public static function getCourses(): array
    {
        return ['Frontend' => 'Фронтенд', 'Fullstack' => 'Фулстек', 'Gamedev' => 'Разработчик игр', 'Private' => 'Частные уроки'];
    }

    /**
     * Sends an email to the specified email address using the information collected by this model.
     * @param string $email the target email address
     * @return bool whether the model passes validation
     */
    public function contact($email)
    {
        if ($this->validate()) {
            Yii::$app->mailer->compose()
                ->setTo($email)
                ->setFrom([Yii::$app->params['senderEmail'] => Yii::$app->params['senderName']])
                ->setReplyTo([$this->email => $this->name])
                ->setSubject($this->subject)
                ->setTextBody($this->body)
                ->send();

            return true;
        }
        return false;
    }
}
