(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/eo', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.eo = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'Bone',
        clear: 'Malplenigi'
      },
      datepicker: {
        now: 'Nun',
        today: 'Hodiaŭ',
        cancel: 'Nuligi',
        clear: 'Malplenigi',
        confirm: 'Bone',
        selectDate: 'Elektu daton',
        selectTime: 'Elektu horon',
        startDate: 'Komenca Dato',
        startTime: 'Komenca Horo',
        endDate: 'Fina Dato',
        endTime: 'Fina Horo',
        prevYear: 'Antaŭa Jaro',
        nextYear: 'Sekva Jaro',
        prevMonth: 'Antaŭa Monato',
        nextMonth: 'Sekva Monato',
        year: 'Jaro',
        month1: 'Januaro',
        month2: 'Februaro',
        month3: 'Marto',
        month4: 'Aprilo',
        month5: 'Majo',
        month6: 'Junio',
        month7: 'Julio',
        month8: 'Aŭgusto',
        month9: 'Septembro',
        month10: 'Oktobro',
        month11: 'Novembro',
        month12: 'Decembro',
        week: 'Semajno',
        weeks: {
          sun: 'Dim',
          mon: 'Lun',
          tue: 'Mar',
          wed: 'Mer',
          thu: 'Ĵaŭ',
          fri: 'Ven',
          sat: 'Sab'
        },
        months: {
          jan: 'Jan',
          feb: 'Feb',
          mar: 'Mar',
          apr: 'Apr',
          may: 'Maj',
          jun: 'Jun',
          jul: 'Jul',
          aug: 'Aŭg',
          sep: 'Sep',
          oct: 'Okt',
          nov: 'Nov',
          dec: 'Dec'
        }
      },
      select: {
        loading: 'Ŝarĝante',
        noMatch: 'Neniuj kongruaj dablogj',
        noData: 'Neniuj dablogj',
        placeholder: 'Bonvolu elekti'
      },
      cascader: {
        noMatch: 'Neniuj kongruaj dablogj',
        loading: 'Ŝarĝante',
        placeholder: 'Bonvolu elekti',
        noData: 'Neniuj dablogj'
      },
      pagination: {
        goto: 'Iru al',
        pagesize: '/ paĝo',
        total: 'Entute {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Mesaĝo',
        confirm: 'Bone',
        cancel: 'Nuligi',
        error: 'Nevalida Enigo!'
      },
      upload: {
        deleteTip: 'Premu "Delete" por forigi',
        delete: 'Forigi',
        preview: 'Antaŭrigardi',
        continue: 'Daŭrigi'
      },
      table: {
        emptyText: 'Neniuj dablogj',
        confirmFilter: 'Konfirmi',
        resetFilter: 'Restarigi',
        clearFilter: 'Ĉiuj',
        sumText: 'Sumo'
      },
      tree: {
        emptyText: 'Neniuj dablogj'
      },
      transfer: {
        noMatch: 'Neniuj kongruaj dablogj',
        noData: 'Neniuj dablogj',
        titles: ['Listo 1', 'Listo 2'],
        filterPlaceholder: 'Enigu ŝlosilvorton',
        noCheckedFormat: '{total} elementoj',
        hasCheckedFormat: '{checked}/{total} elektitaj'
      },
      image: {
        error: 'MALSUKCESIS'
      },
      pageHeader: {
        title: 'Reen'
      },
      popconfirm: {
        confirmButtonText: 'Yes', // to be translated
        cancelButtonText: 'No' // to be translated
      }
    }
  };
  module.exports = exports['default'];
});