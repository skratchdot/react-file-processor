import React, { Component } from 'react';

/**
 * A React component that adds drag-and-drop functionality to the
 * window the component resides in.  It also exposes a chooseFile()
 * function that will trigger the browsers choose local file functionality
 * from an <input type="file" />
 * @class FileProcessor
 * @extends React.Component
 * @example
 * const self = this;
 * <FileProcessor ref="myFileProcessor" onFileSelect={(e, files) => {
 *   console.log(e, files);
 * }} />
 * <Button onClick={()=>{self.refs.myFileProcessor.chooseFile();}}>Open</Button>
 */
export default class FileProcessor extends Component {
  componentDidMount() {
    this.boundHandleFileSelect =  this.handleFileSelect.bind(this);
    window.addEventListener('dragover', this.handleFileDrag, false);
    window.addEventListener('dragleave', this.handleFileDrag);
    window.addEventListener('drop', this.boundHandleFileSelect, false);
  }
  componentWillUnmount() {
    window.removeEventListener('dragover', this.handleFileDrag);
    window.removeEventListener('dragleave', this.handleFileDrag);
    window.removeEventListener('drop', this.boundHandleFileSelect);
  }
  chooseFile() {
    this.refs.fileButton.click();
  }
  handleFileDrag(e) {
    e.stopPropagation();
    e.preventDefault();
  }
  handleFileSelect(e) {
    // cancel event
    this.handleFileDrag(e);

    // fetch FileList object
    const fileList = e.target.files || e.dataTransfer.files;

    // call onFileSelect
    if (typeof this.props.onFileSelect === 'function') {
      const files = [];
      for (let i = 0; i < fileList.length; i++) {
        files.push(fileList[i]);
      }
      this.props.onFileSelect(e, files);
    }
  }
  render() {
    return (
      <div className="file-processor">
        <input
          type="file"
          ref="fileButton"
          style={{display: 'none'}}
          multiple={this.props.multiple}
          onChange={this.handleFileSelect.bind(this)}
        />
        {this.props.children}
      </div>
    );
  }
}

FileProcessor.defaultProps = {
  onFileSelect: function () {},
  multiple: false
};
