/*eslint no-console:0 */
import React, { Component } from 'react';
import { Row, Col, Button, Jumbotron, Table } from 'react-bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { setSelectedFiles } from '../actions/selectedFiles';
import FileProcessor from '../../lib/index';

class Home extends Component {
  handleClick(e) {
    console.log('handleClick:', e);
    this.refs.myFileInput.chooseFile();
  }
  handleFileSelect(e, files) {
    console.log('handleFileSelect', e, files);
    const { dispatch } = this.props;
    dispatch(setSelectedFiles(files));
  }
  render() {
    const self = this;
    const { selectedFiles } = this.props;
    const height = 200;
    const handleClickText = this.handleClick.toString();
    const handleFileSelectText = this.handleFileSelect.toString();
    return (
      <div>
        <Jumbotron className="text-center">
          <h1 className="title">
            react-file-processor
            <br />
            <small>A React component for choosing files.</small>
          </h1>
          <p>
            View the example below or learn more by visiting the about page
            after clicking the button below:
          </p>
          <p>
            <Link to={'/react-file-processor/about'} className="btn btn-primary">
              About Page
            </Link>
          </p>
        </Jumbotron>
        <Row>
          <Col md={7}>
            <h1 className="title text-center">Working Example:</h1>
            <Row style={{
                margin: 20,
                padding: 20,
                backgroundColor: '#f8f8f8',
                border: '2px solid #aaa',
                borderRadius: 20
            }}>
              <Col md={12}>
                <Row>
                  <Col md={6}>
                    <h2>Example:</h2>
                    <p>
                      Click the button below to choose a local file, or
                      you can drag-and-drop files anywhere on the page
                      to see the results:
                    </p>
                    <p>&nbsp;</p>
                    <FileProcessor
                      ref="myFileInput"
                      multiple={true}
                      onFileSelect={self.handleFileSelect.bind(self)}>
                      <Button className="btn btn-primary"
                        style={{width: '100%'}}
                        onClick={self.handleClick.bind(self)}>
                        Select files
                      </Button>
                    </FileProcessor>
                  </Col>
                  <Col md={6}>
                    <h2>JSX:</h2>
                    <pre style={{width: '100%', height: height}}>
                      {`<FileProcessor
  ref="myFileInput"
  multiple={true}
  onFileSelect={self.handleFileSelect.bind(self)}>
  <button onClick={self.handleClick.bind(handleClick)}>
    Open Local File
  </button>
</FileProcessor>
`}
                    </pre>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <h2>handleFileSelect:</h2>
                    <pre style={{width: '100%', height: height}}>{handleFileSelectText}</pre>
                  </Col>
                  <Col md={6}>
                    <h2>handleClick:</h2>
                    <pre style={{width: '100%', height: height}}>{handleClickText}</pre>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col md={5}>
            <h1 className="title text-center">Selected Files:</h1>
            <Table bordered condensed hover striped>
              <thead>
                <tr>
                  <th>File Name</th>
                  <th>Size</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {selectedFiles.map(function (file, i) {
                  return (
                    <tr key={i}>
                      <th>{file.name}</th>
                      <th>{file.size}</th>
                      <th>{file.type}</th>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(function (state) {
  return {
    selectedFiles: state.selectedFiles || []
  };
})(Home);
