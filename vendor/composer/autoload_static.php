<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit5f24abdde400d84c588235b22013a2ea
{
    public static $fallbackDirsPsr4 = array (
        0 => __DIR__ . '/..' . '/image-charts/image-charts',
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->fallbackDirsPsr4 = ComposerStaticInit5f24abdde400d84c588235b22013a2ea::$fallbackDirsPsr4;
            $loader->classMap = ComposerStaticInit5f24abdde400d84c588235b22013a2ea::$classMap;

        }, null, ClassLoader::class);
    }
}
