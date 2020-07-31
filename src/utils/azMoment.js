import moment from 'moment';

export default moment.defineLocale('az', {
    months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split(
        '_'
    ),
    monthsShort: 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
    weekdays: 'Bazar_Bazar ert\u0259si_\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131_\xc7\u0259r\u015f\u0259nb\u0259_C\xfcm\u0259 ax\u015fam\u0131_C\xfcm\u0259_\u015e\u0259nb\u0259'.split(
        '_'
    ),
    weekdaysShort: 'Baz_BzE_\xc7Ax_\xc7\u0259r_CAx_C\xfcm_\u015e\u0259n'.split(
        '_'
    ),
    weekdaysMin: 'Bz_BE_\xc7A_\xc7\u0259_CA_C\xfc_\u015e\u0259'.split('_'),
    weekdaysParseExact: !0,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[bug\xfcn saat] LT',
        nextDay: '[sabah saat] LT',
        nextWeek: '[g\u0259l\u0259n h\u0259ft\u0259] dddd [saat] LT',
        lastDay: '[d\xfcn\u0259n] LT',
        lastWeek: '[ke\xe7\u0259n h\u0259ft\u0259] dddd [saat] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s sonra',
        past: '%s \u0259vv\u0259l',
        s: 'birne\xe7\u0259 saniy\u0259',
        ss: '%d saniy\u0259',
        m: 'bir d\u0259qiq\u0259',
        mm: '%d d\u0259qiq\u0259',
        h: 'bir saat',
        hh: '%d saat',
        d: 'bir g\xfcn',
        dd: '%d g\xfcn',
        M: 'bir ay',
        MM: '%d ay',
        y: 'bir il',
        yy: '%d il'
    },
    meridiemParse: /gec\u0259|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam/,
    isPM: function(e) {
        return /^(g\xfcnd\xfcz|ax\u015fam)$/.test(e);
    },
    meridiem: function(e, a, t) {
        return e < 4
            ? 'gec\u0259'
            : e < 12
            ? 's\u0259h\u0259r'
            : e < 17
            ? 'g\xfcnd\xfcz'
            : 'ax\u015fam';
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(\u0131nc\u0131|inci|nci|\xfcnc\xfc|nc\u0131|uncu)/,
    week: { dow: 1, doy: 7 }
});
