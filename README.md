# react-file-processor

[![NPM version](https://badge.fury.io/js/react-file-processor.svg)](http://badge.fury.io/js/react-file-processor)
[![Dependency Status](https://david-dm.org/skratchdot/react-file-processor.svg)](https://david-dm.org/skratchdot/react-file-processor)
[![devDependency Status](https://david-dm.org/skratchdot/react-file-processor/dev-status.svg)](https://david-dm.org/skratchdot/react-file-processor#info=devDependencies)

[![NPM](https://nodei.co/npm/react-file-processor.png)](https://npmjs.org/package/react-file-processor)


## Description

A React component that adds drag-and-drop functionality to the page it is included
on.  When files are dropped on the page, the onFileSelect() handler is called.
You can also trigger a chooseFile() method on the FileProcessor instance to open
the default browser's file picker.  This is useful for styling your own file
input button.


## Getting Started

Install the module with: `npm install --save react-file-processor`


## Usage

```javascript
import React, { Component } from 'react';
import FileProcessor from 'react-file-processor';
export default class MyApp extends Component {
  handleClick(e) {
    this.refs.myFileInput.chooseFile();
  }
  handleFileSelect(e, files) {
    console.log(e, files);
  }
  render() {
    const self = this;
    return (
      <div>
        <header>My Header</header>
        <div>
          <FileProcessor
            ref="myFileInput"
            onFileSelect={self.handleFileSelect.bind(self)}>
            <button onClick={self.handleClick.bind(handleClick)}>
              Open Local File
            </button>
          </FileProcessor>
        </div>
        <footer>My Footer</footer>
      </div>
    );
  }
}
```


## Documentation

#### Props

Here are the props you can pass to the `FileProcessor` instance:

| Property Name | Type | Default Value | Description |
|--------------:|:----:|:-------------:|-------------|
| onFileSelect | Function | empty function | Called when files are dropped on the page, or when chooseFile() is triggered |
| multiple | Boolean | false | Whether or not chooseFile() allows you to open multiple files or not |

#### Exported Functions

The `FileProcessor` instance has a chooseFile() method attached to it. When
triggered, the browser's default file selector will show up.  After a file
is chosen, the onFileSelect() prop is triggered with the file event, and the
FileList that was chosen;


## Links

- [Source Code](https://github.com/skratchdot/react-file-processor/)
- [Project Page](http://projects.skratchdot.com/react-file-processor/)
- [Project Page Source](https://github.com/skratchdot/react-file-processor/tree/gh-pages)


## License
Copyright (c) 2015 [skratchdot](http://skratchdot.com/)  
Licensed under the [MIT license](LICENSE-MIT).
