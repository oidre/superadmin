<?php

namespace Oidre\SuperAdmin;

use Illuminate\Support\ServiceProvider;

class SuperAdminServiceProvider extends ServiceProvider
{
    /**
     * Perform post-registration booting of services.
     *
     * @return void
     */
    public function boot()
    {
        // $this->loadTranslationsFrom(__DIR__.'/../resources/lang', 'oidre');
        // $this->loadViewsFrom(__DIR__ . '/resources/views', 'sa');
        // $this->loadMigrationsFrom(__DIR__.'/../database/migrations');
        // $this->loadRoutesFrom(__DIR__.'/routes.php');
        // $this->loadViewComponentsAs('sa', [
        //     Link::class
        // ]);

        // Publishing is only necessary when using the CLI.
        if ($this->app->runningInConsole()) {
            $this->bootForConsole();
        }
    }

    /**
     * Register any package services.
     *
     * @return void
     */
    public function register()
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/superadmin.php', 'superadmin');

        // Register the service the package provides.
        $this->app->singleton('superadmin', function ($app) {
            return new SuperAdmin;
        });
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return ['superadmin'];
    }

    /**
     * Console-specific booting.
     *
     * @return void
     */
    protected function bootForConsole()
    {
        // Publishing the configuration file.
        // $this->publishes([
        //     __DIR__ . '/../config/superadmin.php' => config_path('superadmin.php'),
        // ], 'superadmin.config');

        $this->publishes([
            __DIR__ . '/../config/tailwind.config.js' => base_path('tailwind.config.js'),
        ], 'superadmin');

        $this->publishes([
            __DIR__ . '/../config/app.js' => base_path('resources/js/superadmin.js'),
        ], 'superadmin');

        $this->publishes([
            __DIR__ . '/../config/alpine.js' => base_path('resources/js/alpine.js'),
        ], 'superadmin');

        $this->publishes([
            __DIR__ . '/../config/app.scss' => base_path('resources/sass/_superadmin.scss'),
        ], 'superadmin');

        // Publishing the views.
        $this->publishes([
            __DIR__ . '/resources/views/components' => base_path('resources/views/components/sa'),
        ], 'superadmin.template');

        // Publishing assets.
        /*$this->publishes([
            __DIR__.'/../resources/assets' => public_path('vendor/oidre'),
        ], 'superadmin.views');*/

        // Publishing the translation files.
        /*$this->publishes([
            __DIR__.'/../resources/lang' => resource_path('lang/vendor/oidre'),
        ], 'superadmin.views');*/

        // Registering package commands.
        // $this->commands([]);
    }
}
