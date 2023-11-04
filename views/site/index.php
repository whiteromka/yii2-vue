<?php

/** @var yii\web\View $this */


use app\widgets\vue\VueWidget;

$this->title = 'My Yii Application';

?>
<div class="site-index">

    <?= VueWidget::widget([
            'component' => 'hello-component',
            'props' => ['msg' => 'Yeah!!!!!!!!']
    ]); ?>

</div>
