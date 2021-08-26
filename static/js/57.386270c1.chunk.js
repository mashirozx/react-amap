(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[57],{919:function(n,e,t){"use strict";t.r(e),e.default="Polygon \u591a\u8fb9\u5f62\n===\n\n\u6784\u9020\u591a\u8fb9\u5f62\u5bf9\u8c61\uff0c\u901a\u8fc7 PolygonOptions \u6307\u5b9a\u591a\u8fb9\u5f62\u6837\u5f0f\n\n```jsx\nimport { Polygon } from '@uiw/react-amap';\n// \u6216\u8005\u5355\u72ec\u5b89\u88c5\u4f7f\u7528\nimport { Polygon } from '@uiw/react-amap-polygon';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--rehype:bgWhite=true&noScroll=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport React, { useState, useRef } from 'react';\nimport { Map, APILoader, Polygon } from '@uiw/react-amap';\n\nconst Example = () => {\n  const [show, setShow] = useState(true);\n  // \u591a\u8fb9\u5f62\u8f6e\u5ed3\u7ebf\u7684\u8282\u70b9\u5750\u6807\u6570\u7ec4\n  // const path = [\n  //   new AMap.LngLat(116.368904,39.913423),\n  //   new AMap.LngLat(116.382122,39.901176),\n  //   new AMap.LngLat(116.387271,39.912501),\n  //   new AMap.LngLat(116.398258,39.904600)\n  // ];\n  const path = [\n    [116.403322, 39.920255],\n    [116.410703, 39.897555],\n    [116.402292, 39.892353],\n    [116.389846, 39.891365]\n  ];\n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u9690\u85cf' : '\u663e\u793a'}\n      </button>\n      <div style={{ width: '100%', height: '500px' }}>\n        <Map zoom={14} center={[116.400274, 39.905812]}>\n          {show && (\n\n            <Polygon\n              // visiable={show}\n              path={path}\n              strokeColor=\"#FF33FF\"\n              strokeWeight={6}\n              strokeOpacity={0.2}\n              fillOpacity={0.4}\n              fillColor=\"#1791fc\"\n              zIndex={50}\n            />\n          )}\n        </Map>\n      </div>\n    </>\n  );\n}\n\nReactDOM.render((\n  <APILoader akay=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n    <Example />\n  </APILoader>\n), _mount_);\n```\n\n### Props\n\n[\u66f4\u591a\u53c2\u6570\u8bbe\u7f6e](https://github.com/uiwjs/react-amap/blob/8a8c31afdff68e04097c2b140e9a58200b269aee/src/types/overlay.d.ts#L832-L865)\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| visiable | \u8986\u76d6\u7269\u662f\u5426\u53ef\u89c1\u3002 | `boolean` | - |\n| path | \u591a\u8fb9\u5f62\u8f6e\u5ed3\u7ebf\u7684\u8282\u70b9\u5750\u6807\u6570\u7ec4\uff0c\u5f53\u4e3a\u201c\u73af\u201d\u591a\u8fb9\u5f62\u65f6\uff08\u591a\u8fb9\u5f62\u533a\u57df\u5728\u591a\u8fb9\u5f62\u5185\u663e\u793a\u4e3a\u201c\u5c9b\u201d\uff09\uff0cpath\u4e3a\u4e8c\u7ef4\u6570\u7ec4\uff0c\u6570\u7ec4\u5143\u7d20\u4e3a\u591a\u8fb9\u5f62\u8f6e\u5ed3\u7ebf\u7684\u8282\u70b9\u5750\u6807\u6570\u7ec4, \u201c\u73af\u201d\u591a\u8fb9\u5f62\u65f6\uff0c\u8981\u6c42\u6570\u7ec4\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e3a\u5916\u591a\u8fb9\u5f62\uff0c\u5176\u4f59\u4e3a\u201c\u5c9b\u201d\u591a\u8fb9\u5f62\uff0c\u5916\u591a\u8fb9\u5f62\u9700\u5305\u542b\u201c\u5c9b\u201d\u591a\u8fb9\u5f62\uff0c\u5426\u5219\u7a0b\u5e8f\u4e0d\u4f5c\u5904\u7406 | `Array<LngLat> | Array<Array<LngLat>>` | - |\n\n### \u4e8b\u4ef6\n\n[\u4e8b\u4ef6\u7c7b\u578b\u6587\u6863](https://github.com/uiwjs/react-amap/blob/8a8c31afdff68e04097c2b140e9a58200b269aee/src/types/overlay.d.ts#L867-L893)\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b |\n| ---- | ---- | ---- |\n| onClick | \u9f20\u6807\u5de6\u952e\u5355\u51fb\u4e8b\u4ef6 | `(event: MapsEvent): void;` |\n| onDblClick | \u9f20\u6807\u5de6\u952e\u53cc\u51fb\u4e8b\u4ef6 | `(event:  MapsEvent): void;` |\n| onRightClick | \u53f3\u952e\u5355\u51fb | `(event:  MapsEvent): void;` |\n| onHide | \u9690\u85cf | `(event: { type: string, target: any }): void;` |\n| onShow | \u663e\u793a | `(event: { type: string, target: any }): void;` |\n| onMouseDown | \u9f20\u6807\u6309\u4e0b | `(event: MapsEvent): void;` |\n| onMouseUp | \u9f20\u6807\u62ac\u8d77 | `(event: MapsEvent): void;` |\n| onMouseOver | \u9f20\u6807\u7ecf\u8fc7 | `(event: MapsEvent): void;` |\n| onMouseOut | \u9f20\u6807\u79fb\u51fa | `(event: MapsEvent): void;` |\n| onChange | \u5c5e\u6027\u53d1\u751f\u53d8\u5316\u65f6 | `(): void;` |\n| onTouchStart | \u89e6\u6478\u5f00\u59cb\u65f6\u89e6\u53d1\u4e8b\u4ef6\uff0c\u4ec5\u9002\u7528\u79fb\u52a8\u8bbe\u5907 | `(event: MapsEvent): void;` |\n| onTouchMove | \u89e6\u6478\u79fb\u52a8\u8fdb\u884c\u4e2d\u65f6\u89e6\u53d1\u4e8b\u4ef6\uff0c\u4ec5\u9002\u7528\u79fb\u52a8\u8bbe\u5907 | `(event: MapsEvent): void;` |\n| onTouchEnd | \u89e6\u6478\u7ed3\u675f\u65f6\u89e6\u53d1\u4e8b\u4ef6\uff0c\u4ec5\u9002\u7528\u79fb\u52a8\u8bbe\u5907 | `(event: MapsEvent): void;` |"}}]);
//# sourceMappingURL=57.386270c1.chunk.js.map