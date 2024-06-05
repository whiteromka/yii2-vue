<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\web\AssetBundle;

/**
 * Main application asset bundle.
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/site.css',
        'css/style.css',
        'css/animation.css',
        //'css/animation2.css', // не подключать сломает стили
        'css/fonts.css',
        'css/mapDeveloper.css',
        'css/elementsAnimation.css',
        'css/media.css'
    ];
    public $js = [
          'js/animationLabel.js'
//        'js/animation.js',
//        'js/printingText.js'

    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap4\BootstrapAsset',
    ];
}
