'use strict';

let files = {
// index.html
const indexBody = 
< !DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Elements</title>
</head>
<body>
<h1>Elements</h1>
<h2></h2>             
</body>
</html>;
            
const indexLength = indeBody.length;
                        
                            
// hydrogen.html
const hydrogenBody = 
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Hydrogen</title>
</head>
<body>
<h1>Hydrogen</h1>
<h2>H</h2>
<h3>Atomic number 1</h3>
<p>Hydrogen is the chemical element with the symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element in the periodic table. Hydrogen is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass.</p>         </body>
</html>;       
                        
const hydrogenLength = hydrogenBody.length;

// helium.html
const heliumBody =
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Helium</title>
</head>
<body>
<h1>Helium</h1>
<h2>He</h2>
<h3>Atomic number 2</h3>
<p>Helium is a chemical element with the symbol He and atomic number 2. It is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas group in the periodic table. Its boiling point is the lowest among all the elements.<p>
</body>
</html>;       

const heliumLength = heliumBody.length;
                                            
// 404.html
const errorBody = 
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>404</title>
</head>
<body>
<h1>404 Error</h1>
<h2>Page not found</h2>
<p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.<p>
</body>
</html>;

const errorLength = errorBody.length;

// css/styles.css
                                         
};

module.exports = files;
