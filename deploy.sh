git pull

rm -rf vendor/

rm -rf storage/logs/laravel.log

composer install

php artisan optimize:clear
