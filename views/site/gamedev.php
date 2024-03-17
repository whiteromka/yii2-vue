<?php

/** @var yii\web\View $this */


use app\widgets\vue\VueWidget;

$this->title = 'Курс разработчика игр на C#. Карта курса';

?>
<div class="site-index">

    <?= VueWidget::widget([
            'component' => 'gamedev-component',
            'props' => [
                'message' => 'aaa',
            ]
    ]); ?>

</div>
