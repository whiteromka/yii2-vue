<?php

/** @var yii\web\View $this */


use app\widgets\vue\VueWidget;

$this->title = 'Курс на фулстека. Карта курса';

?>
<div class="site-index">

    <?= VueWidget::widget([
            'component' => 'fullstack-component',
            'props' => [
                'message' => 'a1a1a1a',
            ]
    ]); ?>

</div>
