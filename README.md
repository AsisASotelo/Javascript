# Javascript
Repository for Javascript Code

To setup a bootstrap project begin with
-npm init
-npm install bootstrap@4.0.0 --save
-npm install jquery@3.3.1 popper.js@1.12.9 --save

Enter the Required Tags:
    <!-- Required meta tags always come first -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">

Enter the tags at the bottom right before the end of html

  <!-- jQuery first, then Popper.js, then Bootstrap JS. -->
    <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

Setting Up Navbar

-> To Create a Navbar
<nav class="navbar navbar-dark navbar-expand-sm bg-primary>
                                        ^-----Creates Expandable navbar

-> How to List Horizontal Links
<li class="nav-item"></li>

-> How to Highlight Active link.

-> Creating a Responsive Nav Bar
    Add A Button
    <nav class="navbar navbar-dark navbar-expand-sm bg-primary fixed-top">
        <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span class="navbar-toggler-icon"></span>
            </button>
           <a class="navbar-brand" href="#">Ristorante Con Fusion</a>
           <div class="collapse navbar-collapse" id="Navbar">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active"><a class="nav-link" href="#">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="./aboutus.html">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Menu</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
                </ul>
            </div>            
        </div>
    </nav>


Modification Of CSS

body{
    padding:50px
}


How to Setup To Right Margin
-mr-auto

Icon Fonts
- Set of symbols or glyphs to be used in website
- Can expand them to be used for simple graphics
- Font Awesome
    - Very popular Icon fi
-Include Bootsrap Social Into your Project 
    npm install font-awesome@4.7.0 --save
    npm install bootsrap-social@5.1.1.1 --save

- To use SCSS we have to Install Node-Sass