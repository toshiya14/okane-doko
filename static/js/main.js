"use strict";

const colorStart = "4b8219";
const colorAlert = "e0970f";
const colorOver = "950000";
const warnline = 0.7;
const headFitRate = 0.4;
const descFitRate = 0.36;
const fullHeadFitRate = 1;
const fullDescFitRate = 2;
const tileGrid = $(".date-grid.tile-grid");
const barGrid = $(".date-grid.bar-grid");

let screenDirection;

const sampleData = {
  year: 2018,
  month: 10,
  monthStartDate: 10,
  monthMaxDate: 31,
  dayLimit: 100,
  monthLimit: 9400,
  display: {
    default: {
      head: "{date} <small>{weekday}</small>",
      custHead: "{name}",
      custDesc: "￥{out:.2f} <small>+ {in:.2f}</small> | ￥{total:.2f}"
    },
    portrait: {
      desc: "￥{out:d}"
    },
    landscape: {
      head: "{month}.{date} <small>{fullweekday}</small>",
      desc: "￥{out:.2f} <small>+ {in:.2f}</small>"
    }
  },
  billings: [{
      createDate: "2018-10-11T15:08:00+08:00",
      title: "Uber Home - Corp",
      cashOut: "33.6",
      type: "Transit",
      payment: "Alipay - Huabei",
      date: {
        year: 2018,
        month: 10,
        day: 10
      }
    },
    {
      createDate: "2018-10-11T15:08:00+08:00",
      title: "DaXiangChang and Choudoufu",
      cashOut: "43",
      type: "Eat",
      payment: "CCB(6968)",
      date: {
        year: 2018,
        month: 10,
        day: 10
      }
    },
    {
      createDate: "2018-10-11T15:08:00+08:00",
      title: "Chuanchuan",
      cashOut: "39.5",
      type: "Eat",
      payment: "Alipay - Huabei",
      date: {
        year: 2018,
        month: 10,
        day: 10
      }
    },
    {
      createDate: "2018-10-11T15:08:00+08:00",
      title: "Gongcha",
      cashOut: "25",
      type: "Eat",
      payment: "Alipay - Huabei",
      date: {
        year: 2018,
        month: 10,
        day: 10
      }
    },
    {
      createDate: "2018-10-11T15:08:00+08:00",
      title: "Nanjing Dapaidang",
      cashOut: "132",
      type: "Eat",
      payment: "Alipay - Huabei",
      date: {
        year: 2018,
        month: 10,
        day: 10
      }
    },
    {
      createDate: "2018-10-11T15:08:00+08:00",
      title: "Cloth",
      cashOut: "1018.58",
      type: "Cloth",
      belongsTo: "others",
      payment: "Alipay - Huabei"
    },
    {
      createDate: "2018-10-11T15:08:00+08:00",
      title: "Uber Home - Corp",
      cashOut: "31.78",
      type: "Transit",
      payment: "Alipay - Huabei",
      date: {
        year: 2018,
        month: 10,
        day: 11
      }
    },
    {
      createDate: "2018-10-12T17:08:00+08:00",
      title: "Changfen",
      cashOut: "28",
      type: "Eat",
      payment: "CCB(6968)",
      date: {
        year: 2018,
        month: 10,
        day: 11
      }
    },
    {
      createDate: "2018-10-12T17:08:00+08:00",
      title: "Douhua",
      cashOut: "15",
      type: "Eat",
      payment: "Alipay - Huabei",
      date: {
        year: 2018,
        month: 10,
        day: 11
      }
    },
    {
      createDate: "2018-10-12T17:08:00+08:00",
      title: "Baodan",
      cashOut: "10",
      type: "Eat",
      payment: "Alipay - Huabei",
      date: {
        year: 2018,
        month: 10,
        day: 11
      }
    },
    {
      createDate: "2018-10-12T17:08:00+08:00",
      title: "Jianfen",
      cashOut: "18",
      type: "Eat",
      payment: "Alipay - Huabei",
      date: {
        year: 2018,
        month: 10,
        day: 11
      }
    },
    {
      createDate: "2018-10-12T17:08:00+08:00",
      title: "Chaoshi",
      cashOut: "9",
      type: "Eat",
      payment: "Alipay - Huabei",
      date: {
        year: 2018,
        month: 10,
        day: 12
      }
    },
    {
      createDate: "2018-10-11T15:08:00+08:00",
      title: "Uber Home - Corp",
      cashOut: "34.44",
      type: "Transit",
      payment: "Alipay - Huabei",
      date: {
        year: 2018,
        month: 10,
        day: 12
      }
    },
    {
      createDate: "2018-10-12T17:08:00+08:00",
      title: "Mutong Sanguo",
      cashOut: "29",
      type: "Eat",
      payment: "Alipay - Huabei",
      date: {
        year: 2018,
        month: 10,
        day: 12
      }
    },
    {
      createDate: "2018-10-12T17:08:00+08:00",
      title: "Xianguo Haji",
      cashOut: "20",
      type: "Eat",
      payment: "Alipay - Huabei",
      date: {
        year: 2018,
        month: 10,
        day: 12
      }
    },
    {
      createDate: "2018-10-12T17:08:00+08:00",
      title: "Laifenqi",
      cashOut: "266.94",
      type: "Eat",
      payment: "CCB(6968)",
      belongsTo: "others"
    },
    {
      createDate: "2018-10-12T17:08:00+08:00",
      title: "Cloth",
      cashOut: "350",
      type: "Eat",
      payment: "CCB(6968)",
      belongsTo: "others"
    },
    {
      createDate: "2018-10-12T17:08:00+08:00",
      title: "Credit Card Back Guangfa",
      cashOut: "320",
      type: "Credit Card",
      payment: "CCB(6968)",
      belongsTo: "others"
    },
    {
      createDate: "2018-10-12T17:08:00+08:00",
      title: "Credit Card Back Zhongxin",
      cashOut: "1000",
      type: "Credit Card",
      payment: "CCB(6968)",
      belongsTo: "others"
    }
  ],
  customCard: [{
      name: "OTHER",
      owner: "others",
      isFull: true,
      limit: "MIN($MONTH_LIMIT-$CASHOUT_TOTAL, 3000)"
    },
    {
      name: "TOTAL",
      isFull: true,
      limit: "$MONTH_LIMIT+$CASHIN_TOTAL",
      cashIn: {
        func: "sum",
        field: "cashIn"
      },
      cashOut: {
        func: "sum",
        field: "cashOut"
      },
      display: {
        head: "TOTAL"
      }
    }
  ]
};

var viewdata = {};
var customdata = {};
var utils = {};
var funcs = {};
var events = {};

utils.calc = function (exp) {
  var MIN = this.MIN;
  var MAX = this.MAX;
  var $MONTH_LIMIT = this.MONTH_LIMIT;
  var $MONTH = this.MONTH;
  var $YEAR = this.YEAR;
  var $START_DATE = this.START_DATE;
  var $MAX_DATE = this.MAX_DATE;
  var $WEEKDAY_NAMES = this.WEEKDAY_NAMES;
  var $WEEKDAY_FULLNAMES = this.WEEKDAY_FULLNAMES;
  var $CASHIN_TOTAL = this.CASHIN_TOTAL;
  var $CASHOUT_TOTAL = this.CASHOUT_TOTAL;
  return eval(exp);
};

utils.pad = function (num) {
  return num < 10 ? "0" + num : "" + num;
};

utils.convertNumber = function (number, format) {
  var num = Number.isNaN(number) ? 0 : number;
  const re = /\{[^:{}]+:?([^:{}]*?)\}/g;
  var m = re.exec(format);
  if (m !== null) {
    var pattern = m[1];
    if (pattern === "d") return parseInt(num);
    var n = /\.(\d+)f/g.exec(m);
    if (n !== null) {
      var decilen = parseInt(n[1]);
      return parseFloat(num).toFixed(decilen);
    }
  }
};

utils.splitDate = function (dateStr) {
  if (typeof dataStr !== "string" || dateStr.length != 8) {
    return [0, 1, 1];
  } else {
    return [
      parseInt(dateStr.substr(0, 4)),
      parseInt(dateStr.substr(4, 2)),
      parseInt(dateStr.substr(6, 2))
    ];
  }
};

funcs.buildCardsData = function (json) {
  var $defs = {};
  $defs.MAX = function (a, b) {
    return a > b ? a : b;
  };
  $defs.MIN = function (a, b) {
    return a < b ? a : b;
  };
  $defs.MONTH_LIMIT = json.monthLimit;
  $defs.MONTH = json.month;
  $defs.YEAR = json.year;
  $defs.START_DATE = json.monthStartDate;
  $defs.MAX_DATE = json.monthMaxDate;
  $defs.WEEKDAY_NAMES = ["日", "月", "火", "水", "木", "金", "土"];
  $defs.WEEKDAY_FULLNAMES = [
    "日曜日",
    "月曜日",
    "火曜日",
    "水曜日",
    "木曜日",
    "金曜日",
    "土曜日"
  ];

  var __ = {
    cards: {},
    display: {
      portrait: Object.assign({}, json.display.default, json.display.portrait),
      landscape: Object.assign({}, json.display.default, json.display.landscape)
    },
    applyTemplate: function (tpl, vd) {
      return tpl
        .replace(/\{year\}/g, vd.date.getFullYear() || 0)
        .replace(/\{month\}/g, vd.date.getMonth() + 1 || 0)
        .replace(
          /\{(week)?day\}/g,
          $defs.WEEKDAY_NAMES[vd.date.getDay()] || "undefined"
        )
        .replace(
          /\{full(week)?day\}/g,
          $defs.WEEKDAY_FULLNAMES[vd.date.getDay()] || "undefined"
        )
        .replace(/\{date\}/g, vd.date.getDate() || "undefined")
        .replace(/\{name\}/, vd.conf.name);
    },
    buildCard: function (key, isCustom, viewdata, firstRecord, isFull = false) {
      var fr = firstRecord || {
        undefined: true
      };
      var limit = utils.calc.call($defs, viewdata.conf.limit);
      return {
        list: fr["undefined"] ? [] : [fr],
        srcKey: key,
        isCustom: isCustom,
        isFull: viewdata.conf.isFull || false,
        cashIn: parseFloat(fr.cashIn) || 0,
        cashOut: parseFloat(fr.cashOut) || 0,
        limit: limit || parseFloat(json.dayLimit) || 0,
        head_port: __.applyTemplate(
          isCustom ? __.display.portrait.custHead : __.display.portrait.head,
          viewdata
        ),
        desc_port: __.applyTemplate(
          isCustom ? __.display.portrait.custDesc : __.display.portrait.desc,
          viewdata
        ),
        head_land: __.applyTemplate(
          isCustom ? __.display.landscape.custHead : __.display.landscape.head,
          viewdata
        ),
        desc_land: __.applyTemplate(
          isCustom ? __.display.landscape.custDesc : __.display.landscape.desc,
          viewdata
        )
      };
    },
    applyFilter: function (filter) {
      var records = JSON.parse(JSON.stringify(json.billings));
      var result = 0;
      if (filter.filters) {
        for (var i in filter.filters) {
          var f = filter.filters[i];
          records = records.filter(function (x) {
            return utils.calc.call(x, f);
          });
        }
      }
      if (filter.func && filter.func === 'sum') {
        if (filter.field) {
          for (var i in records) {
            result += parseFloat(records[i][filter.field]) || 0;
          }
        }
      }
      return result;
    }
  };

  var days = [...Array($defs.MAX_DATE + 1).keys()].splice($defs.START_DATE);
  var days_ = [...Array($defs.START_DATE).keys()].splice(1);
  var keys = days
    .map(function (x) {
      return [$defs.YEAR, $defs.MONTH, x].join("/");
    })
    .concat(
      days_.map(function (x) {
        return [$defs.YEAR, $defs.MONTH + 1, x].join("/");
      })
    );
  for (var i in keys) {
    var key = keys[i];
    var viewdata = {
      conf: {},
      date: new Date(key)
    };
    var c = __.buildCard(key, false, viewdata);
    __.cards[key] = c;
  }

  // Build card viewdata with billings.
  $defs.CASHIN_TOTAL = 0;
  $defs.CASHOUT_TOTAL = 0;
  for (var i in json.billings) {
    var b = json.billings[i];
    var key = "";
    var isCustom = false;
    var viewdata = {};

    viewdata.date = new Date(b.year, b.month - 1, b.day, 0, 0, 0, 0);

    if ("belongsTo" in b) {
      key = b.belongsTo;
      isCustom = true;
      viewdata.conf = json.customCard.find(function (x) {
        return x.owner === key;
      });
    } else if ("date" in b) {
      key = [b.date.year, b.date.month, b.date.day].join("/");
      viewdata.conf = {};
    } else {
      console.log(
        "Skipped a invalid data. a billing record should contains either `belongsTo` or `date`."
      );
      continue;
    }

    $defs.CASHIN_TOTAL = parseFloat(b.cashIn) || 0;
    $defs.CASHOUT_TOTAL = parseFloat(b.cashOut) || 0;
    var ori = __.cards[key];
    if (ori) {
      funcs.insertRecord(__.cards, b);
    } else {
      ori = __.buildCard(key, isCustom, viewdata, b);
      __.cards[key] = ori;
    }
  }

  // Build card viewdata with custom filters.
  for (var i in json.customCard) {
    var cus = JSON.parse(JSON.stringify(json.customCard[i]));
    viewdata.conf = cus;
    if ('owner' in cus) {
      continue;
    }
    var cashInFilter = cus.cashIn;
    var cashOutFilter = cus.cashOut;
    cus.cashIn = __.applyFilter(cashInFilter);
    cus.cashOut = __.applyFilter(cashOutFilter);
    cus.limit = utils.calc.call($defs, cus.limit);
    var card = __.buildCard(cus.name, true, viewdata, {
      cashIn: cus.cashIn,
      cashOut: cus.cashOut
    });
    customdata[cus.name] = card;
  }

  return __.cards;
};

funcs.updateData = function (e, json, conf, type = 'tile') {
  var __ = {};
  var el = $(e);

  if (!json) {
    return;
  }

  if (el.hasClass(".grid-cell")) {
    __.cntel = el;
    el = el.children(".card");
  } else {
    __.cntel = $(el).parents(".grid-cell");
  }

  if (__.cntel.length === 0) {
    var $el = $('<div class="grid-cell"></div>');
    json.isFull ? barGrid.append($el) : tileGrid.append($el);
    __.cntel = $el;
  }
  __.el = __.cntel.children(".card");
  if (__.el.length === 0) {
    var $el = $('<div class="card"></div>');
    __.cntel.append($el);
    if (conf && conf.disabled) {
      $el.addClass("disabled");
    } else if (conf && !conf.disabled) {
      $el.removeClass("disabled");
    }
    __.el = $el;
  }
  __.applyTemplate = function (tpl) {
    var cashIn = parseFloat(json.cashIn) || 0;
    var cashOut = parseFloat(json.cashOut) || 0;
    return tpl
      .replace(/\{in\:?.*?\}/g, function (x) {
        return utils.convertNumber(cashIn, x);
      })
      .replace(/\{out\:?.*?\}/g, function (x) {
        return utils.convertNumber(cashOut, x);
      })
      .replace(/\{total\:?.*?\}/g, function (x) {
        return utils.convertNumber(cashOut - cashIn, x);
      });
  };
  __.el.attr("data-key", json.srcKey);
  __.el.attr("data-limit", json.limit);
  __.el.attr("data-in", json.cashIn);
  __.el.attr("data-out", json.cashOut);
  if (json.isFull) {
    __.cntel.addClass("full");
    __.el.addClass("full");
  }
  __.dir = __.el.attr("data-direction");
  __.disabled = __.el.hasClass("disabled");
  if (__.dir === "|") {
    // use portrait profile.
    __.el.attr("data-head", __.applyTemplate(json.head_port));
    __.el.attr(
      "data-desc",
      __.disabled ? "" : __.applyTemplate(json.desc_port)
    );
  } else if (__.dir === "-") {
    // use landscape profile.
    __.el.attr("data-head", __.applyTemplate(json.head_land));
    __.el.attr(
      "data-desc",
      __.disabled ? "" : __.applyTemplate(json.desc_land)
    );
  }
  __.el.attr("data-changed", "true");
};

funcs.insertRecord = function (carddata, json) {
  var $obj = Object.assign({
      createDate: new Date().toISOString(),
      title: "",
      type: "",
      payment: ""
    },
    json
  );
  let key;
  if ("belongsTo" in $obj) {
    key = $obj.belongsTo;
  } else if ("date" in $obj) {
    key = [$obj.date.year, $obj.date.month, $obj.date.day].join("/");
  } else {
    throw {
      data: {
        desc: "重要な部分`belongsTo`と`date`の中にいずれは必ず指定する。"
      },
      toString: function () {
        return "新しく入力されたレコードは無効なテーターとなっている。";
      }
    };
  }
  var item = carddata[key];
  if (!item) {
    throw {
      data: {
        desc: "カードデーターに" + key + "がキーとなるデーターが存在しない。"
      },
      toString: function () {
        return "新しく入力されたレコードは無効なテーターとなっている。";
      }
    };
  }
  item.list.push($obj);
  item.cashOut += parseFloat($obj.cashOut) || 0;
  item.cashIn += parseFloat($obj.cashIn) || 0;
};

funcs.removeRecord = function (carddata, key, i) {
  var item = carddata[key];
  if (!item) {
    throw {
      data: {
        desc: "カードデーターに" + key + "がキーとなるデーターが存在しない。"
      },
      toString: function () {
        return "削除失敗。";
      }
    };
  }
  var b = item.list[i];
  if (!b) {
    throw {
      data: {
        desc: i + "がインデックスとなるデーターが存在しない。"
      },
      toString: function () {
        return "削除失敗。";
      }
    };
  }
  item.cashOut -= parseFloat(b.cashOut) || 0;
  item.cashIn -= parseFloat(b.cashIn) || 0;
  return carddata[key].list.splice(i, 1);
};

/**
 * FROM: https://stackoverflow.com/a/16360660
 **/
utils.gradient = function (color1, color2, ratio) {
  var hex = function (x) {
    x = x.toString(16);
    return x.length == 1 ? "0" + x : x;
  };
  var r = Math.ceil(
    parseInt(color2.substring(0, 2), 16) * ratio +
    parseInt(color1.substring(0, 2), 16) * (1 - ratio)
  );
  var g = Math.ceil(
    parseInt(color2.substring(2, 4), 16) * ratio +
    parseInt(color1.substring(2, 4), 16) * (1 - ratio)
  );
  var b = Math.ceil(
    parseInt(color2.substring(4, 6), 16) * ratio +
    parseInt(color1.substring(4, 6), 16) * (1 - ratio)
  );
  var middle = hex(r) + hex(g) + hex(b);
  return middle;
};

utils.calcColor = function (ratio) {
  if (ratio < 0) {
    return utils.calcColor(0);
  } else if (ratio > 1) {
    return utils.calcColor(1);
  } else if (ratio < warnline) {
    return (
      "#" + utils.gradient(colorStart, colorStart, (ratio / warnline) * 0.5)
    );
  } else {
    return (
      "#" +
      utils.gradient(
        colorAlert,
        colorOver,
        (ratio - warnline) * (0.5 / (1 - warnline)) * 2
      )
    );
  }
};

utils.meatureCard = function (e) {
  var el = $(e);
  var hig = el.outerHeight();
  var wid = el.outerWidth();
  var predir = el.attr("data-direction");
  el.attr("data-direction", hig * 2 > wid ? "|" : "-");
  var newdir = el.attr("data-direction");
  if (predir !== newdir) {
    events.cardDirectionChanged(el);
  }
};

utils.meatureDoc = function () {
  var wid = $(window).width();
  var hig = $(window).height();
  var newdir = hig > wid ? "|" : "-";
  screenDirection = newdir;
  if (!screenDirection) {
    return;
  }
  events.screenDirectionChanged();
};

events.cardDirectionChanged = function (el) {
  var key = el.attr("data-key");
  var json = viewdata[key];
  funcs.updateData(el, json);
  funcs.updateView(el);
  funcs.updateContent(el);
};

events.screenDirectionChanged = function () {
  var e = $(".doc-wrap");
  if (screenDirection === '-') {
    if (!e.hasClass("landscape")) e.addClass("landscape");
  } else if (screenDirection === '|') {
    e.removeClass("landscape");
  }
}

funcs.updateView = function (el) {
  var el = $(el);
  if (el.hasClass("disabled")) {
    return;
  }
  var cashin = parseFloat(el.attr("data-in")) || 0;
  var cashout = parseFloat(el.attr("data-out")) || 0;
  var value = cashout - cashin || parseInt(el.attr("data-value"));
  if (typeof value !== "number" || isNaN(value)) value = 0;
  var limit = parseInt(el.attr("data-limit"));
  var ratio = value / limit;
  if (ratio > 1) ratio = 1;
  if (ratio < 0) ratio = 0;
  funcs.drawColorBar(el, ratio);
};

funcs.drawColorBar = function (el, ratio) {
  var e = $(el);
  var cb = e.children(".colorbar");
  var rt = parseFloat(cb.attr("data-ratio"));
  var dir = e.attr("data-direction");
  var bardir = cb.attr("data-direction");
  if (ratio === rt && bardir === dir) {
    return;
  }

  if (cb.length == 0) {
    var $cb = $('<div class="colorbar"></div>');
    e.append($cb);
    cb = $cb;
  }
  var color = utils.calcColor(ratio);
  e.css({
    "border-color": color
  });
  e.css({
    "background-color": color
  });
  if (dir == "-") {
    cb.css({
      right: 100 - ratio * 100 + "%",
      top: 0
    });
  } else {
    cb.css({
      top: 100 - ratio * 100 + "%",
      right: 0
    });
  }
  cb.css({
    background: funcs.buildProcessBackground(color, ratio, dir),
    opacity: ratio < 0.9 ? 0.4 : (1 - ratio) * 4
  });
  cb.attr("data-ratio", ratio);
  cb.attr("data-direction", dir);
};

funcs.buildProcessBackground = function (color, ratio, dir) {
  var deg = dir == "|" ? "0deg" : "90deg";
  var gt =
    "linear-gradient(" +
    deg +
    ", rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)";
  return gt;
};

funcs.updateContent = function (el) {
  var card = $(el);
  var isDataUpdated = card.attr("data-changed");
  var isFull = card.hasClass("full");
  if (!isDataUpdated) isDataUpdated = "true";
  if (isDataUpdated.toLowerCase() === "false") {
    return;
  }
  var cashin = parseFloat(card.attr("data-in"));
  var cashout = parseFloat(card.attr("data-out"));
  var value = cashout - cashin;
  var cnt = card.children(".content");
  if (cnt.length == 0) {
    var $cnt = $('<div class="content"></div>');
    card.append($cnt);
    cnt = $cnt;
  }
  var caphead = cnt.children("h5");
  if (caphead.length == 0) {
    var $caphead = $("<h5></h5>");
    cnt.append($caphead);
    caphead = $caphead;
  }
  var captext = card.attr("data-head");
  var oritext = caphead.html();
  captext != oritext && caphead.html(captext);
  caphead.fitText(isFull ? fullHeadFitRate : headFitRate, {
    maxFontSize: "20px"
  });
  var desctext = card.attr("data-desc");
  var desbox = cnt.children("p");
  if (desbox.length == 0) {
    var $desbox = $("<p></p>");
    cnt.append($desbox);
    desbox = $desbox;
  }
  var oridesc = desbox.html();
  desbox != oridesc && desbox.html(desctext);
  desbox.fitText(isFull ? fullDescFitRate : descFitRate, {
    maxFontSize: "24px"
  });
  card.attr("data-changed", "false");
};

$(window).on("resize", function () {
  utils.meatureDoc();
  $(".date-grid .card").each(function () {
    utils.meatureCard(this);
  });
});

$(document).ready(function () {
  var bi = sampleData;
  viewdata = funcs.buildCardsData(bi);
  var dynamicValue = 0;
  var dynamicTick = function () {
    var el = $(".date-grid .card.dynamic");
    el.attr("data-out", dynamicValue);
    dynamicValue += 10;
    if (dynamicValue > 220) {
      dynamicValue = 0;
    }
    funcs.updateView(el);
    funcs.updateContent(el);
    setTimeout(dynamicTick, 1000);
  };

  var days = [...Array(sampleData.monthMaxDate + 1).keys()].splice(
    sampleData.monthStartDate
  );
  var days_ = [...Array(sampleData.monthStartDate).keys()].splice(1);
  var keys = days
    .map(function (x) {
      return [sampleData.year, sampleData.month, x].join("/");
    })
    .concat(
      days_.map(function (x) {
        return [sampleData.year, sampleData.month + 1, x].join("/");
      })
    );
  keys.map(function (x) {
    var json = viewdata[x];
    if (json) {
      funcs.updateData(undefined, json, {
        disabled: new Date(x) > new Date()
      });
    } else {
      funcs.updateData(
        undefined, {
          list: [],
          srcKey: x,
          isCustom: false,
          cashIn: 0,
          cashOut: 0,
          desc_land: "",
          desc_port: "",
          head_land: "",
          head_port: ""
        }, {
          disabled: true
        }
      );
    }
  });
  for (var k in bi.customCard) {
    var e = bi.customCard[k];
    if ('owner' in e) {
      var json = viewdata[e.owner];
      funcs.updateData(undefined, json);
    } else {
      var json = customdata[e.name];
      funcs.updateData(undefined, json);
    }
  }

  utils.meatureDoc();
  $(".date-grid .card").each(function () {
    utils.meatureCard(this);
  });
  setTimeout(dynamicTick, 1000);
});