<?php

/** @var yii\web\View $this */
/** @var string $content */

use app\assets\AppAsset;
use app\widgets\Alert;
use yii\bootstrap4\Breadcrumbs;
use yii\bootstrap4\Html;
use yii\bootstrap4\Nav;
use yii\bootstrap4\NavBar;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>" class="h-100">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php $this->registerCsrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
    <!--    Tektur  Orbitron-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Tektur:wght@400..900&display=swap" rel="stylesheet">
</head>
<body class="d-flex flex-column h-100">
<?php $this->beginBody() ?>

<header>
    <?php
    NavBar::begin([
        'brandLabel' => "<span class='d-none d-md-block d-lg-block d-xl-block fade-animation'>_</span>", /* <span class='xLabel'>X</span>Courses */
        'brandUrl' => Yii::$app->homeUrl,
        'options' => [
            'class' => 'navbar navbar-expand-md navbar-dark bg-dark_ fixed-top ',
        ],
    ]);
    echo Nav::widget([
        'options' => ['class' => 'navbar-nav f-play'],
        'items' => [
            ['label' => 'Home', 'url' => ['/']],
            ['label' => 'frontend', 'url' => ['/site/frontend']],
            ['label' => 'fullstack', 'url' => ['/site/fullstack']],
            ['label' => 'gamedev', 'url' => ['/site/gamedev']],
            ['label' => 'faq', 'url' => ['/site/faq']],
            ['label' => 'записаться', 'url' => ['/site/course-record']],
        ],
    ]);
    NavBar::end();
    ?>
</header>

<main role="main">
    <div class="main-container_">
        <div class="container-fluid" style="max-width: 1920px; min-height: 90vh">
            <?= $content ?>
        </div>
    </div>

</main>


<div class="footer pt-40 pb-50">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <ul>
                    <li>Ром на GitHub: <a target="_blank" class="description-link" href="https://github.com/whiteromka">github.com</a></li>
                    <li>Ром на GetMentor: <a target="_blank" class="description-link" href="https://getmentor.dev/mentor/roman-belov-2309">getmentor.dev</a></li>
                    <li>Ром в Telegram: <a target="_blank" class="description-link" href="https://t.me/roman_belov_1989">@roman_belov_1989</a></li>
                </ul>
            </div>
            <div class="col-md-6">
                <ul>
                    <li> <span> Если хотите поработать со мной над проектом: <a target="_blank" class="description-link" href="https://t.me/roman_belov_1989">@roman_belov_1989</a></span></li>
                    <li><span> Если хотите чтобы я поработал над вашим: <a target="_blank" class="description-link" href="https://t.me/roman_belov_1989">@roman_belov_1989</a></span></li>
                    <li><span> Если Вы старовер и любите подолгу ждать ответов: <a class="description-link" href="mailto:whiteromka@yandex.ru">whiteromka@yandex.ru</a></span></li>
                </ul>
            </div>
        </div>

    </div>
</div>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
