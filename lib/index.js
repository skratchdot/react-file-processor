'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var FileProcessor = function (_Component) {
  _inherits(FileProcessor, _Component);

  function FileProcessor() {
    _classCallCheck(this, FileProcessor);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FileProcessor).apply(this, arguments));
  }

  _createClass(FileProcessor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.boundHandleFileSelect = this.handleFileSelect.bind(this);
      window.addEventListener('dragover', this.handleFileDrag, false);
      window.addEventListener('dragleave', this.handleFileDrag);
      window.addEventListener('drop', this.boundHandleFileSelect, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('dragover', this.handleFileDrag);
      window.removeEventListener('dragleave', this.handleFileDrag);
      window.removeEventListener('drop', this.boundHandleFileSelect);
    }
  }, {
    key: 'chooseFile',
    value: function chooseFile() {
      this.refs.fileButton.click();
    }
  }, {
    key: 'handleFileDrag',
    value: function handleFileDrag(e) {
      e.stopPropagation();
      e.preventDefault();
    }
  }, {
    key: 'handleFileSelect',
    value: function handleFileSelect(e) {
      // cancel event
      this.handleFileDrag(e);

      // fetch FileList object
      var fileList = e.target.files || e.dataTransfer.files;

      // call onFileSelect
      if (typeof this.props.onFileSelect === 'function') {
        var files = [];
        for (var i = 0; i < fileList.length; i++) {
          files.push(fileList[i]);
        }
        this.props.onFileSelect(e, files);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'file-processor' },
        _react2.default.createElement('input', {
          type: 'file',
          ref: 'fileButton',
          style: { display: 'none' },
          multiple: this.props.multiple,
          onChange: this.handleFileSelect.bind(this)
        }),
        this.props.children
      );
    }
  }]);

  return FileProcessor;
}(_react.Component);

exports.default = FileProcessor;


FileProcessor.defaultProps = {
  onFileSelect: function onFileSelect() {},
  multiple: false
};
//# sourceMappingURL=index.js.map
