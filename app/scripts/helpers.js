((window) => {
  'use strict';

  // window.testData = { "photos": { "page": 1, "pages": "441966", "perpage": 20, "total": "8839319",
  //   "photo": [
  //     { "id": "24182835613", "owner": "47559933@N04", "secret": "4a120de7eb", "server": "1517", "farm": 2, "title": "", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  //     { "id": "24686255032", "owner": "47908475@N02", "secret": "3067db5e5e", "server": "1464", "farm": 2, "title": "", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  //     { "id": "24176710963", "owner": "57802015@N03", "secret": "533e5bf505", "server": "1606", "farm": 2, "title": ".", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  //     { "id": "24683517922", "owner": "30437523@N06", "secret": "c4ffbbdc31", "server": "1531", "farm": 2, "title": "", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  //     { "id": "24433184999", "owner": "74315390@N00", "secret": "e2f9657a89", "server": "1593", "farm": 2, "title": "Citroën HY", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  //     { "id": "24682929852", "owner": "74315390@N00", "secret": "c2c71f080d", "server": "1669", "farm": 2, "title": "Peugeot 203", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  //     { "id": "24504840080", "owner": "7559791@N03", "secret": "4012f2824b", "server": "1464", "farm": 2, "title": "untitled", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  //     { "id": "24764962806", "owner": "116199148@N08", "secret": "7065a94753", "server": "1612", "farm": 2, "title": "(FILM) Three Hour Tour", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  //     { "id": "24781913335", "owner": "92445262@N04", "secret": "1d5914d674", "server": "1669", "farm": 2, "title": "Changes", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  //     { "id": "24662440542", "owner": "74315390@N00", "secret": "d191aa49fe", "server": "1587", "farm": 2, "title": "Terrot", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  //     { "id": "24412513899", "owner": "74315390@N00", "secret": "e7e6f73238", "server": "1712", "farm": 2, "title": "Beetle (II)", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  //     { "id": "24150617833", "owner": "68762388@N05", "secret": "af5a56dd51", "server": "1602", "farm": 2, "title": "[analog] Blick über die Mosel", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  //     { "id": "24475178660", "owner": "93323588@N05", "secret": "a4b37b5d64", "server": "1690", "farm": 2, "title": "Mornings.", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  //     { "id": "24675492291", "owner": "47559933@N04", "secret": "a2e88a58a9", "server": "1698", "farm": 2, "title": "", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  //     { "id": "24136540483", "owner": "49191827@N00", "secret": "984773566b", "server": "1658", "farm": 2, "title": "metropolitan. 2015.", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  //     { "id": "24644290632", "owner": "76015142@N04", "secret": "063ab2f587", "server": "1624", "farm": 2, "title": "La poética en un mar de nubes", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  //     { "id": "24665820051", "owner": "74315390@N00", "secret": "06a5ffec00", "server": "1655", "farm": 2, "title": "Peugeot 404 Cab", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  //     { "id": "24641383372", "owner": "74315390@N00", "secret": "f0e173b1e6", "server": "1451", "farm": 2, "title": "Jaguar XK 150 (III)", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  //     { "id": "24463436770", "owner": "74315390@N00", "secret": "cc4b88df51", "server": "1694", "farm": 2, "title": "Peugeot 302", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
  //     { "id": "24388576899", "owner": "57802015@N03", "secret": "1273a82d30", "server": "1483", "farm": 2, "title": ".", "ispublic": 1, "isfriend": 0, "isfamily": 0 }
  //   ] }, "stat": "ok" };

  window.$on = (target, type, callback, useCapture) => {
      target.addEventListener(type, callback, !!useCapture);
  }

  window.$parent = () => {
    if (!element.parentNode) {
      return;
    }

    if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {
      return element.parentNode;
    }

    return window.$parent(element.parentNode, tagName);
  };

  window.$parseImgResponse = (data) => {

  };

  // takes in data array, returns an object
  window.$reduceImgResponse = (data) => {
    return data.reduce((dataObject, image) => {
      dataObject[image.id] = image;
      dataObject[image.id].src = window.$createImgSource(image);
      return dataObject;
    }, {});
  };


//      { "id": "24182835613", "owner": "47559933@N04", "secret": "4a120de7eb", "server": "1517", "farm": 2, "title": "", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

  // takes in an image object - flickr response
  window.$createImgSource = (image) => {
    return (
      `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`
    )
  };

  /**
   * Lodash-like utility functions, written from scratch
   */
  window.$each = (collection, cb) => {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        cb(collection[i], i, collection);
      }
    } else {
      for (let prop in collection) {
        cb(collection[prop], prop, collection);
      }
    }
  };

  window.$map = (collection, cb) => {
    const result = [];

    window.$each(collection, (el) => {
      result.push(cb(el));
    });

    return result;
  };


})(window);
