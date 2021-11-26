(window["opensearchDashboardXlsxImport_bundle_jsonpfunction"] = window["opensearchDashboardXlsxImport_bundle_jsonpfunction"] || []).push([[1],{

/***/ "./public/application.tsx":
/*!********************************!*\
  !*** ./public/application.tsx ***!
  \********************************/
/*! exports provided: renderApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderApp", function() { return renderApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main.js */ "./public/components/main.js");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_stepTwo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/stepTwo.js */ "./public/components/stepTwo.js");
/* harmony import */ var _components_stepThree_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/stepThree.js */ "./public/components/stepThree.js");

 //import { AppMountParameters, ChromeStart, CoreStart } from '../../../src/core/public';





let horizontalSteps = [{
  title: 'Choose a file',
  isSelected: true,
  isComplete: false,
  onClick: () => window.location.href = "#"
}, {
  title: 'Setup your index',
  isSelected: false,
  isComplete: false,
  onClick: () => window.location.href = "#"
}, {
  title: 'Done !',
  isSelected: false,
  isComplete: false,
  onClick: () => window.location.href = "#"
}];
const supportedFileType = ['xlsx', 'csv']; // Defini les extensions utilisable dans le plugin

/*function setBreadcrumbs(chrome: ChromeStart) {
  chrome.setBreadcrumbs([
    {
      text: i18n.translate('devTools.k7BreadcrumbsDevToolsLabel', {
        defaultMessage: 'opensearchdashboards-xlsx-import',
      }),
      href: '#/',
    },
  ]);
}*/

const renderApp = ({
  notifications,
  http
}, {
  navigation
}, {
  appBasePath,
  element
}, bulkSize, displayedRows) => //chrome: ChromeStart,
{
  var i;

  for (i = 0; i < horizontalSteps.length; i++) {
    horizontalSteps[i].isSelected = false;
    horizontalSteps[i].isComplete = false;
  }

  horizontalSteps[0].isSelected = true; //setBreadcrumbs(chrome);

  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_main_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    steps: horizontalSteps,
    nextStep: displayStep2,
    basename: appBasePath,
    notifications: notifications,
    http: http,
    navigation: navigation,
    maxDisplayableElement: displayedRows
  }), element);
  return () => react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(element); // omment

  function displayStep2(fileName, sheetName, workbook, firstRow, columns) {
    horizontalSteps[0].isSelected = false;
    horizontalSteps[0].isComplete = true;
    horizontalSteps[1].isSelected = true;
    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiStepsHorizontal"], {
      steps: horizontalSteps,
      style: {
        backgroundColor: "white"
      }
    }), document.getElementById("step"));
    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_stepTwo_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      http: http,
      notifications: notifications,
      fileName: fileName,
      sheetName: sheetName,
      columns: columns,
      firstRow: firstRow,
      nextStep: displayStep3,
      workbook: workbook,
      bulksize: bulkSize
    }), document.getElementById("main"));
  }

  function displayStep3(indexName, sheetName, fileName, nbDocument) {
    horizontalSteps[1].isSelected = false;
    horizontalSteps[1].isComplete = true;
    horizontalSteps[2].isSelected = true;
    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiStepsHorizontal"], {
      steps: horizontalSteps,
      style: {
        backgroundColor: "white"
      }
    }), document.getElementById("step"));
    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_stepThree_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      indexName: indexName,
      sheetName: sheetName,
      fileName: fileName,
      nbDocument: nbDocument
    }), document.getElementById("main"));
  }
};

/***/ }),

/***/ "./public/components/main.js":
/*!***********************************!*\
  !*** ./public/components/main.js ***!
  \***********************************/
/*! exports provided: Main, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_core_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/core/public */ "entry/core/public");
/* harmony import */ var _src_core_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_core_public__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_plugins_navigation_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../src/plugins/navigation/public */ "plugin/navigation/public");
/* harmony import */ var _src_plugins_navigation_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_plugins_navigation_public__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common */ "./common/index.ts");
/* harmony import */ var _stepOne_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stepOne.js */ "./public/components/stepOne.js");
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */









const Main = ({
  steps,
  nextStep,
  basename,
  notifications,
  http,
  navigation,
  maxDisplayableElement
}) => {
  // Render the application DOM.
  // Note that `navigation.ui.TopNavMenu` is a stateful component exported on the `navigation` plugin's start contract.
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiPage"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiPageBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiPageHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiHeader"], {
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiHeaderSection"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiHeaderSectionItem"], {
    border: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexGroup"], {
    justifyContent: "center",
    style: {
      padding: "5px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiIcon"], {
    type: "importAction",
    size: "xxl"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiHeaderSectionItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiTitle"], {
    style: {
      padding: "12px 5px 5px 15px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "XLSX Import")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiPageContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiPageContentHeader"], {
    id: "step"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiStepsHorizontal"], {
    steps: steps,
    style: {
      backgroundColor: "white"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiPageContentBody"], {
    id: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_stepOne_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    nextStep: nextStep,
    maxDisplayableElement: maxDisplayableElement
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./public/components/mappingTable.js":
/*!*******************************************!*\
  !*** ./public/components/mappingTable.js ***!
  \*******************************************/
/*! exports provided: getMappingByColumns, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMappingByColumns", function() { return getMappingByColumns; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);


function getMappingByColumns(columns) {
  let nbJsonInvalid = 0; // get the initial items list and convert it to a mapping properties content

  let mappingObj = columns.reduce(function (acc, cur, i) {
    if (cur.isJsonInvalid) {
      nbJsonInvalid++;
      return acc;
    }

    acc[cur.name] = {
      type: cur.type || "text",
      // default value "text" if no type
      ...cur.json
    };
    return acc;
  }, {});

  if (nbJsonInvalid > 0) {
    return false;
  }

  return mappingObj;
}

const MappingTable = ({
  items,
  onChangeColumns
}) => {
  const [mappingArr, setMappingArr] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(items);

  const handlePropertyChange = (item, updatedContent) => {
    // update the given item with new type or advanced json content
    const newMappingArr = mappingArr.map(i => {
      if (i.name !== item) {
        return i;
      }

      return { ...i,
        ...updatedContent
      };
    });
    setMappingArr(newMappingArr);
    onChangeColumns(newMappingArr);
  }; // specific process to parse JSON and detect potential syntax error


  const handlePropertyJsonChange = (item, updatedContent) => {
    let parsedContent = updatedContent.json;

    try {
      if (parsedContent) {
        parsedContent = {
          json: JSON.parse(parsedContent),
          isJsonInvalid: false
        };
      }
    } catch (err) {
      parsedContent = {
        json: parsedContent,
        isJsonInvalid: true
      };
    } // update the given item with new type or advanced json content


    handlePropertyChange(item, parsedContent);
  };

  const options = [{
    value: 'text',
    text: 'Text'
  }, {
    value: 'keyword',
    text: 'Keyword'
  }, {
    value: 'integer',
    text: 'Integer'
  }, {
    value: 'short',
    text: 'Short'
  }, {
    value: 'long',
    text: 'Long'
  }, {
    value: 'double',
    text: 'Double'
  }, {
    value: 'float',
    text: 'Float'
  }, {
    value: 'date',
    text: 'Date'
  }, {
    value: 'boolean',
    text: 'Boolean'
  }, {
    value: 'byte',
    text: 'Byte'
  }, {
    value: 'binary',
    text: 'Binary'
  }, {
    value: 'ip',
    text: 'IP'
  }, {
    value: 'geo_point',
    text: 'Geo Point'
  }, {
    value: 'geo_shape',
    text: 'Geo Shape'
  }];
  const columns = [{
    field: 'name',
    name: 'Fields'
  }, {
    field: 'type',
    name: 'Type',
    render: (name, item) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSelect"], {
      options: options,
      defaultValue: name,
      onChange: e => {
        handlePropertyChange(item.name, {
          type: e.target.value
        });
      }
    })
  }, {
    field: 'json',
    name: 'Advanced JSON',
    render: (name, item) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTextArea"], {
      className: "advjsontext",
      isInvalid: item.isJsonInvalid,
      rows: 4,
      placeholder: `{
  "type": "${item.type}",
  ...
}`,
      onChange: e => {
        handlePropertyJsonChange(item.name, {
          json: e.target.value
        });
      }
    })
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiBasicTable"], {
    items: mappingArr,
    columns: columns
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MappingTable);

/***/ }),

/***/ "./public/components/previewTable.js":
/*!*******************************************!*\
  !*** ./public/components/previewTable.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);



const PreviewTable = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiBasicTable"], {
    items: props.items,
    columns: props.columns,
    tableLayout: "auto",
    isExpandable: true
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PreviewTable);

/***/ }),

/***/ "./public/components/stepOne.js":
/*!**************************************!*\
  !*** ./public/components/stepOne.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _previewTable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./previewTable.js */ "./public/components/previewTable.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_sheetServices_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/sheetServices.js */ "./public/services/sheetServices.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class StepOne extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "onFileChange", file => {
      if (file.length > 0) {
        //UI reset
        this.setState({
          selectItem: {
            options: [{
              value: "",
              text: ""
            }]
          },
          data: {
            loaded: false,
            items: [],
            columns: []
          },
          disableButton: true,
          loading: true
        });
        var reader = new FileReader();

        reader.onload = async file => {
          if (Object(_services_sheetServices_js__WEBPACK_IMPORTED_MODULE_5__["getExtension"])(this.state.fileName)[0] != "csv") {
            var wb = await xlsx__WEBPACK_IMPORTED_MODULE_4___default.a.read(reader.result, {
              type: 'array',
              cellDates: true,
              cellNF: false,
              cellText: false
            });
          } else {
            var wb = await xlsx__WEBPACK_IMPORTED_MODULE_4___default.a.read(reader.result, {
              type: 'binary'
            });
          }

          var options = wb.SheetNames.map(s => ({
            value: s,
            text: s
          }));
          this.setState({
            workbook: wb,
            selectItem: {
              options
            },
            loading: false
          });
          this.changeSheet(options[0].value);
        };

        if (Object(_services_sheetServices_js__WEBPACK_IMPORTED_MODULE_5__["getExtension"])(file[0].name)[0] != "csv") reader.readAsArrayBuffer(file[0]);else {
          reader.readAsText(file[0]);
        }
        ;
        this.setState({
          fileName: file[0].name
        });
      } else {
        this.setState({
          selectItem: {
            options: [{
              value: "",
              text: ""
            }]
          },
          data: {
            loaded: false,
            items: [],
            columns: []
          },
          disableButton: true,
          workbook: {}
        });
      }
    });

    this.maxDisplayableElement = props.maxDisplayableElement;
    this.state = {
      workbook: {},
      fileName: "",
      sheetName: "",
      selectItem: {
        options: [{
          value: "",
          text: ""
        }]
      },
      data: {
        loaded: false,
        items: [],
        columns: []
      },
      disableButton: true,
      loading: false
    };
  }

  async onSheetChange(item) {
    this.changeSheet(item.target.value);
  }

  changeSheet(item) {
    this.setState({
      data: {
        loaded: false
      },
      sheetName: item
    });

    if (item === "") {
      this.setState({
        data: {
          loaded: true,
          items: [],
          columns: []
        },
        disableButton: true
      });
      return;
    }

    if (this.state.workbook.Sheets[item]['!ref'] != undefined) {
      let range = xlsx__WEBPACK_IMPORTED_MODULE_4___default.a.utils.decode_range(this.state.workbook.Sheets[item]['!ref']);
      console.log(range.e.r);
      if (range.e.r > 5) range.e.r = this.maxDisplayableElement; //TODO : use config instead

      let columns = Object(_services_sheetServices_js__WEBPACK_IMPORTED_MODULE_5__["getHeaderRowWithType"])(this.state.workbook.Sheets[item]);
      let items = Object(_services_sheetServices_js__WEBPACK_IMPORTED_MODULE_5__["formatJSON"])(xlsx__WEBPACK_IMPORTED_MODULE_4___default.a.utils.sheet_to_json(this.state.workbook.Sheets[item], {
        range: range,
        raw: false,
        dateNF: 'YYYY-MM-DD"T"HH:MM:SS'
      }), columns);
      this.setState({
        data: {
          loaded: true,
          items: items,
          columns: columns
        },
        disableButton: false
      });
    } else {
      this.setState({
        data: {
          loaded: true,
          items: [],
          columns: []
        },
        disableButton: true
      });
    }
  }

  onNextClick(e) {
    this.props.nextStep(this.state.fileName, this.state.sheetName, this.state.workbook, this.state.data.items[0], this.state.data.columns);
  }

  render() {
    let sheetDisabled = true;
    let previewTable = null;
    let renderLoading = null;
    if (!(Object.keys(this.state.workbook).length === 0 && this.state.workbook.constructor === Object)) sheetDisabled = false;

    if (this.state.data.loaded) {
      previewTable = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_previewTable_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        items: this.state.data.items,
        columns: this.state.data.columns.map(c => ({
          field: c.name,
          name: c.name,
          truncateText: true
        }))
      });
    }

    if (this.state.loading) {
      renderLoading = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
        justifyContent: "spaceAround"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
        grow: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiLoadingSpinner"], {
        size: "xl"
      })));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
      gutterSize: "l"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFormRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiTitle"], {
      size: "s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Import your xlsx and csv file to ElasticSearch"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFormRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFilePicker"], {
      id: "asdf2",
      initialPromptText: "Select or drag and drop file",
      onChange: file => {
        this.onFileChange(file);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFormRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
      gutterSize: "l",
      alignItems: "flexEnd",
      justifyContent: "spaceBetween",
      style: {
        marginLeft: "0px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFormRow"], {
      label: "Select the sheet to import"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSelect"], {
      options: this.state.selectItem.options,
      disabled: sheetDisabled,
      onChange: item => {
        this.onSheetChange(item);
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFormRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButton"], {
      iconType: "arrowRight",
      disabled: this.state.disableButton,
      onClick: e => {
        this.onNextClick(e);
      }
    }, "Next"))))))), renderLoading, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
      size: "l"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
      gutterSize: "l"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
      grow: false
    }, previewTable)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (StepOne);

/***/ }),

/***/ "./public/components/stepThree.js":
/*!****************************************!*\
  !*** ./public/components/stepThree.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class StepThree extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClickNewImport", () => {
      window.location.reload();
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiForm"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCallOut"], {
      title: "Your file have been imported !",
      color: "success",
      iconType: "check"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
      size: "s"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, this.props.nbDocument, " document(s) have been imported into ", this.props.indexName, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "File name : ", this.props.fileName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Sheet name : ", this.props.sheetName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
      gutterSize: "s",
      alignItems: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonEmpty"], {
      href: "../app/management/opensearch-dashboards/indexPatterns/create",
      size: "s",
      iconType: "arrowRight"
    }, "Create the index pattern")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
      gutterSize: "s",
      alignItems: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonEmpty"], {
      onClick: this.handleClickNewImport,
      size: "s",
      iconType: "arrowRight"
    }, "Import a new file"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (StepThree);

/***/ }),

/***/ "./public/components/stepTwo.js":
/*!**************************************!*\
  !*** ./public/components/stepTwo.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment-timezone */ "moment-timezone");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mappingTable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mappingTable.js */ "./public/components/mappingTable.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_services_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/services.js */ "./public/services/services.js");
/* harmony import */ var _services_sheetServices_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/sheetServices.js */ "./public/services/sheetServices.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class StepTwo extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "addErrorToast", (msg, optionalTips = false) => {
      const toast = {
        id: Object(_services_services_js__WEBPACK_IMPORTED_MODULE_6__["getUID"])(),
        title: "Couldn't complete the import",
        color: "danger",
        iconType: "alert",
        text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, msg), optionalTips && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          style: {
            fontWeight: 'bold'
          }
        }, optionalTips))
      };
      this.setState({
        toasts: this.state.toasts.concat(toast)
      });
    });

    _defineProperty(this, "addMappingToast", () => {
      const toast = {
        id: Object(_services_services_js__WEBPACK_IMPORTED_MODULE_6__["getUID"])(),
        title: "Mapping change detected",
        text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Custom mapping enable.")
      };
      this.setState({
        toasts: this.state.toasts.concat(toast)
      });
    });

    _defineProperty(this, "removeToast", removedToast => {
      this.setState(prevState => ({
        toasts: prevState.toasts.filter(toast => toast.id !== removedToast.id)
      }));
    });

    _defineProperty(this, "removeAllToasts", () => {
      this.setState({
        toasts: []
      });
    });

    this.firstRow = { ...this.props.firstRow,
      _line: "1337",
      _uid: Object(_services_services_js__WEBPACK_IMPORTED_MODULE_6__["getUID"])()
    };
    this.anonOptions = this.props.columns.map(c => ({
      label: c.name
    }));
    this.tzOptions = moment_timezone__WEBPACK_IMPORTED_MODULE_2___default.a.tz.names().map(tz => ({
      label: tz
    }));
    this.state = {
      indexName: Object(_services_sheetServices_js__WEBPACK_IMPORTED_MODULE_7__["setESIndexName"])(this.props.fileName) + '_' + Object(_services_sheetServices_js__WEBPACK_IMPORTED_MODULE_7__["setESIndexName"])(this.props.sheetName),
      indexNameError: false,
      networkError: false,
      selectedAnonOptions: [],
      selectedTzOption: [{
        label: moment_timezone__WEBPACK_IMPORTED_MODULE_2___default.a.tz.guess()
      }],
      osdId: {
        model: "line{_line}-{_uid}",
        preview: Object(_services_services_js__WEBPACK_IMPORTED_MODULE_6__["createOsdCustomId"])("line{_line}-{_uid}", this.firstRow)
      },
      uploadButton: {
        text: "Import",
        loading: false
      },
      customColumns: this.props.columns,
      enableCustomColumns: false,
      pipeline: "",
      enablePipeline: false,
      progress: {
        show: false,
        current: 0,
        color: "secondary"
      },
      toasts: []
    };
    this.indexNameChange = this.indexNameChange.bind(this);
    this.osdIdChange = this.osdIdChange.bind(this);
    this.onChangeAnonColumns = this.onChangeAnonColumns.bind(this);
    this.onToggleCustomColumns = this.onToggleCustomColumns.bind(this);
    this.onTogglePipeline = this.onTogglePipeline.bind(this);
    this.onChangeColumns = this.onChangeColumns.bind(this);
    this.onChangePipeline = this.onChangePipeline.bind(this);
    this.onChangeTimezone = this.onChangeTimezone.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleNextStep = this.handleNextStep.bind(this);
    this.backClick = this.backClick.bind(this);
    this.addErrorToast = this.addErrorToast.bind(this);
    this.addMappingToast = this.addMappingToast.bind(this);
    this.removeToast = this.removeToast.bind(this);
    this.getFilteredColumns = this.getFilteredColumns.bind(this);
    this.http = this.props.http;
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.defaults.headers.post['osd-xsrf'] = "reporting";
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.defaults.headers.delete['osd-xsrf'] = "reporting";
  } // Return the anonymised-filtered items list


  getFilteredColumns() {
    return this.state.customColumns.filter(column => !this.state.selectedAnonOptions.map(a => a.label).includes(column.name));
  }

  indexNameChange(e) {
    if (/[~`!#$%\^&*+=\\[\]\\';,/{}|\\":<>\?]/g.test(e.target.value) || /[A-Z]/.test(e.target.value)) this.setState({
      indexName: e.target.value,
      indexNameError: true
    });else {
      this.setState({
        indexName: e.target.value,
        indexNameError: false
      });
    }
  }

  osdIdChange(e) {
    this.setState({
      osdId: {
        model: e.target.value,
        preview: Object(_services_services_js__WEBPACK_IMPORTED_MODULE_6__["createOsdCustomId"])(e.target.value, this.firstRow)
      }
    });
  }

  onChangeAnonColumns(e) {
    this.setState({
      selectedAnonOptions: e
    });
  }

  onChangeTimezone(e) {
    this.setState({
      selectedTzOption: e
    });
  }

  onToggleCustomColumns(e) {
    this.setState({
      enableCustomColumns: e.target.checked
    });
  }

  onTogglePipeline(e) {
    this.setState({
      enablePipeline: e.target.checked
    });
  }

  onChangeColumns(columns) {
    this.setState({
      customColumns: columns
    });
  }

  onChangePipeline(e) {
    this.setState({
      pipeline: e.target.value
    });
  }

  handleClick(e) {
    this.setState({
      progress: {
        show: true,
        current: 0,
        color: "secondary"
      }
    });
    this.handleNextStep();
  }

  async handleNextStep() {
    try {
      this.setState({
        uploadButton: {
          text: "Initializing index...",
          loading: true
        }
      });
      let customMapping = Object(_mappingTable_js__WEBPACK_IMPORTED_MODULE_3__["getMappingByColumns"])(this.state.customColumns);
      console.log("applying mapping");

      if (this.state.enableCustomColumns) {
        console.log("creating index", this.state.indexName);
        const resIndex = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(`../api/opensearchdashboards_xlsx_import/create/indice/${this.state.indexName}`);
        console.log("resIndex", resIndex);

        if (resIndex.data.message != undefined) {
          throw {
            message: resIndex.data.message.msg,
            tips: "Unable to create the index.",
            skipDelete: true // index probably already exists. don't delete it

          };
        }

        console.log("applying mapping");
        let customMapping = Object(_mappingTable_js__WEBPACK_IMPORTED_MODULE_3__["getMappingByColumns"])(this.state.customColumns);

        if (customMapping === false) {
          throw {
            message: "Invalid JSON syntax in your mapping.",
            tips: "Unable to applying the mapping. Check your configuration."
          };
        }

        const requestMapping = {
          body: customMapping
        };
        const resMap = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(`../api/opensearchdashboards-xlsx-import/${this.state.indexName}/_mapping`, requestMapping);

        if (resMap.data.message != undefined) {
          throw {
            message: resMap.data.message.msg,
            tips: "Unable to applying the mapping. Check your configuration."
          };
        }
      }

      this.setState({
        uploadButton: {
          text: "Reading data...",
          loading: true
        }
      });
      const tz = this.state.selectedTzOption[0].label;
      const ws = this.props.workbook.Sheets[this.props.sheetName];
      const json = Object(_services_sheetServices_js__WEBPACK_IMPORTED_MODULE_7__["formatJSON"])(xlsx__WEBPACK_IMPORTED_MODULE_5___default.a.utils.sheet_to_json(ws, {
        raw: false,
        dateNF: 'YYYY-MM-DD"T"HH:MM:SS'
      }), this.state.customColumns, tz);

      if (this.state.selectedAnonOptions.length > 0) {
        console.log("filtering anonymised fields from json ...");
        const filter = this.state.selectedAnonOptions.map(s => s.label);
        json.map(j => filter.forEach(e => delete j[e]));
      }

      var bulk = Object(_services_services_js__WEBPACK_IMPORTED_MODULE_6__["createBulk"])(json, this.state.indexName, this.state.osdId.model, this.props.bulksize);
      console.log("sending documents to", this.state.indexName);
      this.setState({
        uploadButton: {
          text: "Importing data...",
          loading: true
        }
      });
      let bulkPath = `../api/opensearchdashboards-xlsx-import/${this.state.indexName}/_bulk`;

      if (this.state.enablePipeline && this.state.pipeline) {
        bulkPath += "?pipeline=" + this.state.pipeline;
      }

      for (var i = 0; i < bulk.length; i++) {
        this.setState({
          progress: {
            current: i / bulk.length * 100
          }
        });
        const response = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(bulkPath, bulk[i]);
        console.log("resonse_bulk", response);

        if (response.data.data.errors) {
          const invalidItems = response.data.data.items // parse all items
          .map(item => ({ ...item,
            isInvalid: item.index.status < 200 || item.index.status >= 300
          }) // is the status in error ?
          ).filter(item => item.isInvalid); // filter only the error

          throw {
            reason: "Some lines are invalid according to the mapping index. The import will be aborted. Check browser console for full errors list",
            items: invalidItems,
            fullstack: invalidItems
          };
        } else if (response.data.error) {
          this.setState({
            networkError: true
          });
          throw {
            reason: response.data.error.message,
            fullstack: response.data.error
          };
        } else if (i === bulk.length - 1) {
          break;
        }
      } // finally call the next step


      this.props.nextStep(this.state.indexName, this.props.sheetName, this.props.fileName, json.length);
    } catch (err) {
      console.log("catched error");
      console.log(err);

      if (err.items) {
        err.items.slice(0, 5).forEach(item => {
          // reason for first 5 errors
          let optionalCausedBy = item.index.error && item.index.error.caused_by && item.index.error.caused_by.reason;
          this.addErrorToast(item.index.error.reason, optionalCausedBy);
        });

        if (err.items.length > 5) {
          this.addErrorToast(err.reason);
        }
      } else if (!err.skipToast) {
        this.addErrorToast(err.message || "Something wrong happened, check browser console for more information", err.tips || false);
      }

      console.log(err.fullstack);

      if (!err.skipDelete) {
        axios__WEBPACK_IMPORTED_MODULE_4___default.a.delete(`../api/opensearchdashboards-xlsx-import/${this.state.indexName}`);
      }

      this.setState({
        uploadButton: {
          text: "Import",
          loading: false
        },
        progress: {
          show: false,
          color: "danger"
        }
      });
    }
  }

  backClick(e) {
    window.location.reload();
  }

  render() {
    const errors = ["Index name must be all lowercase and don't contains special characters"];
    let progressBar = null;

    if (this.state.progress.show) {
      progressBar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiProgress"], {
        value: this.state.progress.current,
        max: 100,
        color: "secondary",
        size: "s"
      });
    }

    let mappingTooltipContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Mapping is the process of defining how a document, and the fields it contains, are stored and indexed. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Fields and mapping types do not need to be defined before being used. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "You know more about your data than Elasticsearch can guess, so while dynamic mapping can be useful to get started, at some point you will want to specify your own explicit mappings.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "For instance, use mappings to define:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "- which string fields should be treated as full text fields."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "- which fields contain numbers, dates, or geolocations."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "- the format of date values."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "- custom rules to control the mapping for dynamically added fields.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "See Mapping API section on elastic.co"));
    let pipelineTooltipContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "To pre-process documents before indexing, define a pipeline that specifies a series of processors. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Each processor tranforms the document in some specific way.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "For example, a pipeline might have one processor that concatenate two fields from the document, followed by another processor that renames a field."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "See Pipeline API section on elastic.co"));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiForm"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
      isInvalid: this.state.indexNameError,
      label: "Index name",
      error: errors,
      helpText: "Name the elasticsearch index that will be created. If the index is already existing, " + "documents will be added or updated according to the chosen docID"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFieldText"], {
      isInvalid: this.state.indexNameError,
      id: "indexName",
      value: this.state.indexName,
      onChange: this.indexNameChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
      label: "Custom docID",
      helpText: "Import will provide a unique document identifier linked to the line number " + "of the imported file. You can customize this doc ID using special reserved variables : " + "{_uid} for an auto-generated identifier, {_importedLine} for the current line number, " + "or {<column-name>} to access a value of the imported line."
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
      gutterSize: "s",
      alignItems: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFieldText"], {
      id: "osdID",
      value: this.state.osdId.model,
      onChange: this.osdIdChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        fontSize: "x-small",
        margin: "-10px auto 2px 12px"
      }
    }, "example rendering"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFieldText"], {
      id: "previewOsdID",
      placeholder: "Custom ID preview",
      value: this.state.osdId.preview,
      readOnly: true
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
      label: "Removing columns",
      helpText: "Select the columns you want to remove from the import."
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiComboBox"], {
      options: this.anonOptions,
      selectedOptions: this.state.selectedAnonOptions,
      onChange: this.onChangeAnonColumns
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
      label: "Choose your timezone",
      helpText: "Excel does not manage timezone within date format cells. Define your file content timezone to index its date fields in a correct way."
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiComboBox"], {
      singleSelection: {
        asPlainText: true
      },
      options: this.tzOptions,
      selectedOptions: this.state.selectedTzOption,
      onChange: this.onChangeTimezone,
      isClearable: false
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
      size: "s"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
      fullWidth: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSwitch"], {
      label: "Configure your own mapping",
      checked: this.state.enableCustomColumns,
      onChange: this.onToggleCustomColumns
    }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIconTip"], {
      "aria-label": "Info about mapping",
      position: "right",
      content: mappingTooltipContent
    }))), this.state.enableCustomColumns && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mappingTable_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      items: this.getFilteredColumns(),
      onChangeColumns: this.onChangeColumns
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
      size: "m"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
      fullWidth: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSwitch"], {
      label: "Add ingest pipeline ids",
      checked: this.state.enablePipeline,
      onChange: this.onTogglePipeline
    }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIconTip"], {
      "aria-label": "Info about pipeline",
      position: "right",
      content: pipelineTooltipContent
    }))), this.state.enablePipeline && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], {
      label: "Set pipeline ids",
      helpText: "The pipeline ids to preprocess incoming documents with, comma separated list."
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFieldText"], {
      placeholder: "pipeline1,pipeline2",
      defaultValue: this.state.pipeline,
      onChange: this.onChangePipeline,
      "aria-label": "The pipeline ids to preprocess incoming documents with, comma separated list"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
      size: "m"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
      gutterSize: "s",
      alignItems: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonEmpty"], {
      onClick: this.backClick,
      size: "s",
      iconType: "arrowLeft"
    }, "back")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButton"], {
      fill: true,
      isDisabled: this.state.indexNameError,
      onClick: this.handleNextStep,
      iconType: "importAction",
      isLoading: this.state.uploadButton.loading
    }, this.state.uploadButton.text)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiGlobalToastList"], {
      toasts: this.state.toasts,
      dismissToast: this.removeToast,
      toastLifeTimeMs: 15000
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
      size: "m"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiProgress"], {
      value: this.state.progress.current,
      max: 100,
      color: this.state.progress.color,
      size: "s"
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (StepTwo);

/***/ }),

/***/ "./public/services/services.js":
/*!*************************************!*\
  !*** ./public/services/services.js ***!
  \*************************************/
/*! exports provided: broofa, createBulk, getUID, createOsdCustomId, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "broofa", function() { return broofa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBulk", function() { return createBulk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUID", function() { return getUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOsdCustomId", function() { return createOsdCustomId; });
//import { nanoid } from 'nanoid';
function broofa() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}
function createBulk(json, indexName, osdCustomId = '', BULKSIZE = 1000) {
  var bulk_request = [];
  var bulk_package = [];
  let line = 2; // +2 == (header line + begin from 1 not from 0)

  for (var i = 0; i < json.length; i++) {
    const keys = { // all columns name are usable to create custom document id 
      ...json[i],
      // or special reserved variable
      "_line": line,
      "_uid": broofa() //"_uid": 10000000

    };
    bulk_package.push({
      index: {
        _index: indexName,
        ...(osdCustomId !== '' && {
          _id: createOsdCustomId(osdCustomId, keys)
        })
      }
    });
    bulk_package.push(json[i]);

    if (bulk_package.length >= BULKSIZE) {
      bulk_request.push(bulk_package);
      bulk_package = [];
      if (json[i + 1] === undefined) return bulk_request;
    }

    line++;
  }

  bulk_request.push(bulk_package);
  return bulk_request;
}
function getUID() {
  return broofa();
}
function createOsdCustomId(template, obj) {
  var getFromBetween = {
    results: [],
    string: "",
    getFromBetween: function (sub1, sub2) {
      if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
      var SP = this.string.indexOf(sub1) + sub1.length;
      var string1 = this.string.substr(0, SP);
      var string2 = this.string.substr(SP);
      var TP = string1.length + string2.indexOf(sub2);
      return this.string.substring(SP, TP);
    },
    removeFromBetween: function (sub1, sub2) {
      if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
      var removal = sub1 + this.getFromBetween(sub1, sub2) + sub2;
      this.string = this.string.replace(removal, "");
    },
    getAllResults: function (sub1, sub2) {
      // first check to see if we do have both substrings
      if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return; // find one result

      var result = this.getFromBetween(sub1, sub2); // push it to the results array

      this.results.push(result); // remove the most recently found one from the string

      this.removeFromBetween(sub1, sub2); // if there's more substrings

      if (this.string.indexOf(sub1) > -1 && this.string.indexOf(sub2) > -1) {
        this.getAllResults(sub1, sub2);
      } else return;
    },
    get: function (string, sub1, sub2) {
      this.results = [];
      this.string = string;
      this.getAllResults(sub1, sub2);
      return this.results;
    }
  };
  let keys = getFromBetween.get(template, "{", "}");
  keys.forEach(function (key) {
    if (obj[key] != undefined) template = template.replace('{' + key + '}', obj[key]);else template = template.replace('{' + key + '}', key);
  });
  return template;
}
/* harmony default export */ __webpack_exports__["default"] = ({
  createBulk,
  createOsdCustomId,
  getUID
});

/***/ }),

/***/ "./public/services/sheetServices.js":
/*!******************************************!*\
  !*** ./public/services/sheetServices.js ***!
  \******************************************/
/*! exports provided: getHeaderRowWithType, formatJSON, setESIndexName, getExtension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeaderRowWithType", function() { return getHeaderRowWithType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatJSON", function() { return formatJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setESIndexName", function() { return setESIndexName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtension", function() { return getExtension; });
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment-timezone */ "moment-timezone");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);



 //Recupère le header de la feuille excel

function getHeaderRowWithType(sheet) {
  var headers = [];
  var range = xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.decode_range(sheet['!ref']);
  var C;
  let U = 1;
  var headerCell;
  var firstValueCell;
  const typesMapping = {
    "s": "text",
    "n": "float",
    "d": "date",
    "b": "boolean"
  };
  /* walk every column in the range */

  for (C = range.s.c; C <= range.e.c; ++C) {
    headerCell = sheet[xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.encode_cell({
      c: C,
      r: 0
    })];
    /* find the cell in the first row */

    firstValueCell = sheet[xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.encode_cell({
      c: C,
      r: 1
    })];

    if (headerCell || firstValueCell) {
      if (!headerCell || !xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.format_cell(headerCell).trim()) {
        headerCell = `UNKNOWN_${U}`;
        U++;
      } else {
        headerCell = formatHeader(xlsx__WEBPACK_IMPORTED_MODULE_0___default.a.utils.format_cell(headerCell).trim());
      }

      headers.push({
        name: headerCell,
        type: typesMapping[firstValueCell && firstValueCell.t || 's']
      });
    }
  }

  return headers;
} //Replace all space in json data keys

function formatJSON(json, columns, timezone = false) {
  const dateColumns = columns.filter(c => c.type === "date"); // Iterate over array

  json.forEach(function (e, i) {
    // Iterate over the keys of object
    Object.keys(e).forEach(function (key) {
      // Copy the value
      var val = e[key],
          newKey = key.replace(/\s+/g, '_'); // check date object and manage timezone

      if (timezone && dateColumns.filter(c => newKey === c.name).length > 0) {
        val = moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(val).tz(timezone).format();
      } // Remove key-value from object


      delete json[i][key]; // Add value with new key

      json[i][newKey] = val;
    });
  });
  return json;
} //Transform filename to a valid ES index name

function setESIndexName(name) {
  var name = name.split('.')[0]; //removing extension

  name = name.replace(/\s/g, ''); //removing space

  name = name.replace(/[^a-zA-Z0-9]/g, ""); //removing special characters

  name = name.toLowerCase(); //lowercase

  return name;
} //Replace all space in json header

function formatHeader(header) {
  return header.replace(/ /g, "_");
}

function getExtension(filename) {
  console.log("get extension treatment");
  return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
} //export default { getHeaderRowWithType, formatJSON, setESIndexName, getExtension }

/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=opensearchDashboardXlsxImport.chunk.1.js.map