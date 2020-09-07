<?php

namespace Oidre\SuperAdmin\Facades;

use Illuminate\Support\Facades\Facade;

class SuperAdmin extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'superadmin';
    }
}
