<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;



/***Backend***/
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Frontend\FrontController;





/****Frontend****/

use App\Http\Controllers\FrontendController;




/*---------------------------
| Backend Routs Start
---------------------------*/


Auth::routes();

Route::get('/admin', [HomeController::class, 'index'])->name('admin');

Route::get('/admin/{any}', [HomeController::class, 'index'])->where('any', '.*');


/*---------------------------
| Backend Routs End
---------------------------*/




/*---------------------------
| Frontend Routs Start
---------------------------*/

Route::get('/', [FrontController::class, 'index']);

Route::get('/{any}', [FrontController::class, 'index'])->where('any', '.*');





/*---------------------------
| Frontend Routs end
---------------------------*/