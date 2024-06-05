<?php

/** @var yii\web\View $this */
/** @var yii\bootstrap4\ActiveForm $form */
/** @var app\models\Course $model */

use app\models\Course;
use yii\bootstrap4\ActiveForm;
use yii\bootstrap4\Html;
use yii\helpers\Url;

$this->title = 'Запись на курсы';
$this->params['breadcrumbs'][] = $this->title;
?>
<div>
    <br>
    <div class="main-wrap">
        <br>
        <h1 class="cyber-h f-tektur mw-450">ПОДАТЬ ЗАЯВКУ</h1>
        <br>
        <?php if (Yii::$app->session->hasFlash('ok')): ?>
            <div>
                <div class="custom-alert mb-50">
                    <div class="bracket bracket-blue-tl"></div>
                    <div class="bracket bracket-blue-tr"></div>
                    <div class="bracket bracket-blue-bl"></div>
                    <div class="bracket bracket-blue-br"></div>
                    <h4 class="d-none d-xl-block">success</h4>
                    <p>Спасибо! Все хорошо! Когда наберется команда я свяжусь с Вами</p>
                </div>
            </div>
        <?php elseif(Yii::$app->session->hasFlash('isCanNotRecord')): ?>
            <div>
                <div class="custom-alert mb-50">
                    <div class="bracket bracket-blue-tl"></div>
                    <div class="bracket bracket-blue-tr"></div>
                    <div class="bracket bracket-blue-bl"></div>
                    <div class="bracket bracket-blue-br"></div>
                    <h4 class="d-none d-xl-block">warning</h4>
                    <p>
                        Вы уже записались на этот курс! Но можно
                        <a class="description-link" href="<?= Url::to('site/course-record')?>">записаться на другой курс</a>
                    </p>
                </div>
            </div>
        <?php endif; ?>

        <br>
        <div class="mw-1280 m-a">
            <div class="course-record-wrap">
                <p>Для записи на курс заполните форму! И когда группа наберется, я свяжусь с Вами</p>
                <div class="bracket bracket-tl"></div>
                <div class="bracket bracket-tr"></div>
                <div class="bracket bracket-bl"></div>
                <div class="bracket bracket-br"></div>

                <div class="course-form-wrap">
                    <?php $form = ActiveForm::begin(['id' => 'course-form', 'method' => 'post', 'class'=> 'aaa']) ?>
                    <?= $form->field($model, 'name') ?>
                    <?= $form->field($model, 'telegram')->input('telegram', ['placeholder' => 'Например: @roman_belov_1989']) ?>
                    <?= $form->field($model, 'email') ?>
                    <?= $form->field($model, 'course')->dropdownList(Course::getCourses(), ['prompt' => 'Выберите курс']) ?>
                    <?= $form->field($model, 'comment')->textarea() ?>
                    <?= $form->field($model, 'start_part')->input('start_part', ['placeholder' => 'Например: со 2-го этапа по фулстеку - PHP ООП']) ?>
                    <?= $form->field($model, 'status')->hiddenInput()->label(false) ?>
                    <div class="form-group">
                        <?= Html::submitButton('Отправить', ['class' => 'btn btn-primary', 'name' => 'contact-button', 'style' => 'border-radius: 0']) ?>
                    </div>
                    <?php ActiveForm::end(); ?>
                </div>
             </div>
        </div>
        <div style="height: 120px"></div>

    </div>
</div>
