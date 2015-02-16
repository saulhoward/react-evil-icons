# React Evil Icons

React components for the excellent http://evil-icons.io/

## A React component for the Icons

```html

    <html>
        <head>
            <link rel="stylesheet" href="/evil-icons.css">
        </head>
        <body>
            <!-- evil icons sprite svg goes here - see task below -->

            <div id="app"></div>

        </body>
    </html>

```

```javascript

    var React = require('react');
    var Icon = require('react-evil-icons');

    React.render(
        <Icon name="ei-eye" size="l" />,
        document.getElementById('app')
    );

```

## A gulp task to write the icon sprite into the HTML

```javascript

    var evilIconSprite = require('./node_modules/react-evil-icons/tasks/icons'); 

    evilIconSprite('./src/index.html', './_site') 

```
