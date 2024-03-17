<?php

/** @var yii\web\View $this */


use app\widgets\vue\VueWidget;

$this->title = 'Курс по фронту VueJs. Карта курса';

?>
<div class="site-index">

    <?= VueWidget::widget([
            'component' => 'faq-component',
            'props' => [
                'message' => 'aaa',
            ]
    ]); ?>

</div>
