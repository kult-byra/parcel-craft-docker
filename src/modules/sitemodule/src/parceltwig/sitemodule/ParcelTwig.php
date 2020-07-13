<?php
/**
 * Site module for Craft CMS 3.x
 *
 * An example module for Craft CMS 3 that lets you enhance your websites with a custom site module
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2018 nystudio107
 */


namespace modules\sitemodule\parceltwig\SiteModule;

use Craft;
use Twig_Extension;
use Twig_Filter_Method;
use Twig_Function_Method;

class ParcelTwig extends \Twig_Extension
{

    const MANIFEST_FILE = 'dist/parcel-manifest.json';
    public static $__manifest__ = false;


    public function getFunctions(){
        return [
            new \Twig\TwigFunction('asset', function($handle){
                return $this->getShit($handle);
            }),
        ];
    }

    private static function getShit($handle){

        if(self::$__manifest__ === false){
            if(file_exists(self::MANIFEST_FILE)){
                self::$__manifest__ = json_decode(file_get_contents(self::MANIFEST_FILE), true);
            }else{
                self::$__manifest__ = null;
            }
        }

        // Manifest not found
        if (self::$__manifest__ === null) {
            trigger_error("Could not load manifest file", E_USER_WARNING);
            return;
        }

        // Handle not found in manifest
        if (!isset(self::$__manifest__[$handle])) {
            trigger_error("{$handle} is not defined as an asset", E_USER_WARNING);
            return;
        }
        
        $uri = "dist/" . self::$__manifest__[$handle];
        if (preg_match('/\.js$/i', $uri)) {
            $out = "<script src='" . $uri . "'></script>";
            return new \Twig_Markup( $out, 'UTF-8' );
        } elseif (preg_match('/\.css$/i', $uri)) {
            $out =  "<link href='" . $uri . "' rel='stylesheet'/>";
            return new \Twig_Markup( $out, 'UTF-8' );
        } else {
            trigger_error("File didn't match .js or .css for {$handle}" );
            return;
        }
    }

   
}