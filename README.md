
  

# Overview

  

Simple Craft CMS template setup using [Docker](https://www.docker.com/) and [Parcel Bundler](https://parceljs.org/). [Tailwindcss](https://tailwindcss.com/) is also added for utility first CSS along with PurgeCSS.

  

Hot module reloading should be working as well.

  

## Installation

  

Get started by cloning repository and cd into your project using your terminal.

  

cd path/to/your-project

  

By default the site will be available at craftdev.localhost. This can changed to whatever you need in the docker-compose.yml file.

  

Please note that some browsers/systems don' t support subdomains on localhost. In that case just change it to localhost:9000.

  

Start the container by running `docker-compose up` first time might take a bit of time.

  

You should now be able to access [craftdev.localhost/panel](craftdev.localhost/panel) in order to finish installing Craft.

  

## Using Parcel for CSS and JS

  

The Parcel Bundler will be running inside the "buildchain" container using Yarn and as such, new node packages needs to be installed inside the container.

  

This is done by opening bash on the container by running `docker exec -it <project_name>_buildchain_1 /bin/bash`

  

You can then add new packages by `yarn add <package_name>`. After this they are ready to use in your js files.

  

To leave the container bash just type `exit`

  

The SCSS and JS are located under `src/web/assets`. One important thing to note here is that it's only the `assets-manifest.html` file that is watched by Parcel. If you need more outputted files you just add a script or css/scss link to this file.

  

These assets files are bundled with a manifest file to the dist folder inside the web directory. Since the files will have a cache breaking name when updating we use a simple plugin [ParcelTwig](https://github.com/heggemsnes/parcel-twig) for getting the correct asset path.

  

So when you're linking to your assets in your template files use the twig function `{{asset('js/index.js)}}`. The path is relative to the web folder. This function would return something like this in the rendered HTML: `<script src="js.00a46daa.js"></script>`

  

## Problem solving

  

### Composer

If you add composer packages you have two options. The simplest one is to `cd src` and run `composer require <package_name>`. Afterwards you need to delete the composer.lock file and restart the container using ctrl+c to stop it and run `composer up`.

You can also add packages manually to the container you can this should be done by using bash on the PHP container.

    docker exec -it <project_name>_php_1 /bin/bash

Then run `composer require <package_name>`

Sometimes you also need to enter the container and run `composer install` or `composer update`

  

### Docker

You might have several containers running. In that case some ports my already be allocated when running `docker-compose up` in these cases you can either stop each container or run `docker kill $(docker ps -q)` to shut down all containers.