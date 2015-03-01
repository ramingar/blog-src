# blog-src

This is a mini CMS to host your blog in [GitHub Pages](https://pages.github.com/). As you know, you only can upload raw html files in order to publish them in gh-pages and take advantage of GitHub as a hosting web server.

For that, you need some way to edit only your posts without having to deal with any databases (not supported by gh-pages) and get your html file magically created to upload into your repository.

[Assemble](http://assemble.io/) to the rescue! Assemble is a static site generator (raw html) for Node.js using the [Handlebars](http://handlebarsjs.com/) template engine. With Assemble you can set up your project to accomplish your goal only editing Markdown files for each new post you want to publish. Awesome!

The entire code is under GNU GPL v2 terms and you can use, study, share, copy and modify all what you want.

## Installation

To get started, simply download the source code or do in a command line:
> git clone https://github.com/ramingar/blog-src.git

and cd to app folder.

Make sure you have installed [Node.js](http://nodejs.org/) and  [Grunt](http://gruntjs.com/). To install Grunt:
> Install Node.js
>
> npm install -g grunt-cli
>
> npm install grunt --save-dev

After that, let's go to get all dependencies:
> npm install

Finally, compile our project:
> grunt

You will have a dist folder at the parent directory of this project, with all the things ready to publish in GitHub. You only need to edit as you like all the templates and posts.

## Considerations

This project is in continous changes because I'm using it to publish my blog. For this reason, you will notice things are different one day to another.


- - -

Made with <img src="./public/assets/img/heart-kingdom-hearts.png" alt="love" width="20" height="18"/> thanks to Node.js, Assemble, Handlebars and Grunt using [Business Casual](http://startbootstrap.com/template-overviews/business-casual/) template from StartBootstrap.