<?php

/** @var yii\web\View $this */


use app\widgets\vue\VueWidget;

$this->title = 'Курсы по кодингу';

?>
<div class="site-index">

    <?= VueWidget::widget([
            'component' => 'base-component',
            'props' => [
                'message' => 'a1a1a1a',
            ]
    ]); ?>

</div>
