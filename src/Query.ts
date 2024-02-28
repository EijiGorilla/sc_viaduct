import { dateTable, pierNoLayer, viaductLayer, viaductLayerStatus4 } from './layers';
import StatisticDefinition from '@arcgis/core/rest/support/StatisticDefinition';
import { view } from './Scene';

// Updat date
export async function dateUpdate() {
  const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const query = dateTable.createQuery();
  query.where = "project = 'SC'" + ' AND ' + "category = 'Viaduct'";

  return dateTable.queryFeatures(query).then((response: any) => {
    const stats = response.features;
    const dates = stats.map((result: any) => {
      const date = new Date(result.attributes.date);
      const year = date.getFullYear();
      const month = monthList[date.getMonth()];
      const day = date.getDate();
      const final = year < 1990 ? '' : `${month} ${day}, ${year}`;
      return final;
    });
    return dates;
  });
}

// Generate chart data
export const types = [
  {
    category: 'Bored Pile',
    value: 1,
  },
  {
    category: 'Pile Cap',
    value: 2,
  },
  {
    category: 'Pier',
    value: 3,
  },
  {
    category: 'Pier Head',
    value: 4,
  },
  {
    category: 'Precast',
    value: 5,
  },
  {
    category: 'At-Grade',
    value: 7,
  },
];

export async function generateChartData(contractp: any) {
  var total_boredpile_incomp = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (Type = 1 and Status1 = 1) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_boredpile_incomp',
    statisticType: 'sum',
  });

  var total_boredpile_comp = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (Type = 1 and Status1 = 4) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_boredpile_comp',
    statisticType: 'sum',
  });

  var total_boredpile_delay = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (Type = 1 and Status1 = 3) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_boredpile_delay',
    statisticType: 'sum',
  });

  var total_pilecap_incomp = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (Type = 2 and Status1 = 1) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_pilecap_incomp',
    statisticType: 'sum',
  });

  var total_pilecap_comp = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (Type = 2 and Status1 = 4) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_pilecap_comp',
    statisticType: 'sum',
  });

  var total_pilecap_delay = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (Type = 2 and Status1 = 3) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_pilecap_delay',
    statisticType: 'sum',
  });

  var total_pier_incomp = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (Type = 3 and Status1 = 1) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_pier_incomp',
    statisticType: 'sum',
  });

  var total_pier_comp = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (Type = 3 and Status1 = 4) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_pier_comp',
    statisticType: 'sum',
  });

  var total_pier_delay = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (Type = 3 and Status1 = 3) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_pier_delay',
    statisticType: 'sum',
  });

  var total_pierhead_incomp = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (Type = 4 and Status1 = 1) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_pierhead_incomp',
    statisticType: 'sum',
  });

  var total_pierhead_comp = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (Type = 4 and Status1 = 4) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_pierhead_comp',
    statisticType: 'sum',
  });

  var total_pierhead_delay = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (Type = 4 and Status1 = 3) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_pierhead_delay',
    statisticType: 'sum',
  });

  var total_precast_incomp = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (Type = 5 and Status1 = 1) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_precast_incomp',
    statisticType: 'sum',
  });

  var total_precast_comp = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (Type = 5 and Status1 = 4) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_precast_comp',
    statisticType: 'sum',
  });

  var total_precast_delay = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (Type = 5 and Status1 = 3) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_precast_delay',
    statisticType: 'sum',
  });

  var total_atgrade_incomp = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (Type = 7 and Status1 = 1) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_atgrade_incomp',
    statisticType: 'sum',
  });

  var total_atgrade_comp = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (Type = 7 and Status1 = 4) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_atgrade_comp',
    statisticType: 'sum',
  });

  var total_atgrade_delay = new StatisticDefinition({
    onStatisticField: 'CASE WHEN (Type = 7 and Status1 = 3) THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_atgrade_delay',
    statisticType: 'sum',
  });

  // Query
  var query = viaductLayer.createQuery();
  query.outStatistics = [
    total_boredpile_incomp,
    total_boredpile_comp,
    total_boredpile_delay,
    total_pilecap_incomp,
    total_pilecap_delay,
    total_pilecap_comp,
    total_pier_incomp,
    total_pier_delay,
    total_pier_comp,
    total_pierhead_incomp,
    total_pierhead_delay,
    total_pierhead_comp,
    total_precast_incomp,
    total_precast_delay,
    total_precast_comp,
    total_atgrade_incomp,
    total_atgrade_delay,
    total_atgrade_comp,
  ];

  // Query
  const defaultExpression = "CP = 'S-01'";
  const expression = "CP = '" + contractp + "'";
  if (!contractp) {
    pierNoLayer.definitionExpression = defaultExpression;
    viaductLayer.definitionExpression = defaultExpression;
    query.where = defaultExpression;
  } else {
    pierNoLayer.definitionExpression = expression;
    query.where = expression;
    viaductLayer.definitionExpression = expression;
  }

  return viaductLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const pile_incomp = stats.total_boredpile_incomp;
    const pile_delay = stats.total_boredpile_delay;
    const pile_comp = stats.total_boredpile_comp;
    const pilecap_incomp = stats.total_pilecap_incomp;
    const pilecap_delay = stats.total_pilecap_delay;
    const pilecap_comp = stats.total_pilecap_comp;
    const pier_incomp = stats.total_pier_incomp;
    const pier_delay = stats.total_pier_delay;
    const pier_comp = stats.total_pier_comp;
    const pierhead_incomp = stats.total_pierhead_incomp;
    const pierhead_delay = stats.total_pierhead_delay;
    const pierhead_comp = stats.total_pierhead_comp;
    const precast_incomp = stats.total_precast_incomp;
    const precast_delay = stats.total_precast_delay;
    const precast_comp = stats.total_precast_comp;
    const atgrade_incomp = stats.total_atgrade_incomp;
    const atgrade_delay = stats.total_atgrade_delay;
    const atgrade_comp = stats.total_atgrade_comp;

    const data = [
      {
        category: types[0].category,
        comp: pile_comp,
        incomp: pile_incomp,
        delay: pile_delay,
        icon: 'https://EijiGorilla.github.io/Symbols/Viaduct_Images/Viaduct_Pile_Logo.svg',
      },
      {
        category: types[1].category,
        comp: pilecap_comp,
        incomp: pilecap_incomp,
        delay: pilecap_delay,
        icon: 'https://EijiGorilla.github.io/Symbols/Viaduct_Images/Viaduct_Pilecap_Logo.svg',
      },
      {
        category: types[2].category,
        comp: pier_comp,
        incomp: pier_incomp,
        delay: pier_delay,
        icon: 'https://EijiGorilla.github.io/Symbols/Viaduct_Images/Viaduct_Pier_Logo.svg',
      },
      {
        category: types[3].category,
        comp: pierhead_comp,
        incomp: pierhead_incomp,
        delay: pierhead_delay,
        icon: 'https://EijiGorilla.github.io/Symbols/Viaduct_Images/Viaduct_Pierhead_Logo.svg',
      },
      {
        category: types[4].category,
        comp: precast_comp,
        incomp: precast_incomp,
        delay: precast_delay,
        icon: 'https://EijiGorilla.github.io/Symbols/Viaduct_Images/Viaduct_Precast_Logo.svg',
      },
      {
        category: types[5].category,
        comp: atgrade_comp,
        incomp: atgrade_incomp,
        delay: atgrade_delay,
        icon: 'https://EijiGorilla.github.io/Symbols/Viaduct_Images/Viaduct_Precast_Logo.svg',
      },
    ];
    return data;
  });
}

export async function generateTotalProgress(contractp: any) {
  var total_viaduct_number = new StatisticDefinition({
    onStatisticField: 'uniqueID',
    outStatisticFieldName: 'total_viaduct_number',
    statisticType: 'count',
  });

  var total_viaduct_comp = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Status1 = 4 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_viaduct_comp',
    statisticType: 'sum',
  });

  var query = viaductLayer.createQuery();
  const defaultExpression = "CP = 'S-01'";
  const expression = "CP = '" + contractp + "'";

  if (!contractp) {
    query.where = defaultExpression;
  } else {
    query.where = expression;
  }
  query.outStatistics = [total_viaduct_number, total_viaduct_comp];

  return viaductLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const comp = stats.total_viaduct_comp;
    const total = stats.total_viaduct_number;
    const progress = ((comp / total) * 100).toFixed(1);

    return [total, comp, progress];
  });
}

export async function timeSeriesChartData(contractp: any) {
  var total_complete_pile = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Type = 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_complete_pile',
    statisticType: 'sum',
  });

  var total_complete_pilecap = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Type = 2 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_complete_pilecap',
    statisticType: 'sum',
  });

  var total_complete_pier = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Type = 3 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_complete_pier',
    statisticType: 'sum',
  });

  var total_complete_pierhead = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Type = 4 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_complete_pierhead',
    statisticType: 'sum',
  });

  var total_complete_precast = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Type = 5 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_complete_precast',
    statisticType: 'sum',
  });

  var total_complete_atgrade = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Type = 7 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_complete_atgrade',
    statisticType: 'sum',
  });

  var query = viaductLayerStatus4.createQuery();
  // eslint-disable-next-line no-useless-concat

  if (!contractp) {
    // eslint-disable-next-line no-useless-concat
    query.where = 'end_date IS NOT NULL' + ' AND ' + "CP = 'S-01'";
  } else {
    // eslint-disable-next-line no-useless-concat
    query.where = 'end_date IS NOT NULL' + ' AND ' + "CP = '" + contractp + "'";
  }

  query.outStatistics = [
    total_complete_pile,
    total_complete_pilecap,
    total_complete_pier,
    total_complete_pierhead,
    total_complete_precast,
    total_complete_atgrade,
  ];
  query.outFields = ['end_date', 'CP'];
  query.orderByFields = ['end_date'];
  query.groupByFieldsForStatistics = ['end_date'];

  return viaductLayerStatus4.queryFeatures(query).then((response: any) => {
    var stats = response.features;

    // collect all dates for each viaduct type
    const data = stats.map((result: any, index: any) => {
      const attributes = result.attributes;
      const date = attributes.end_date;

      const pileCount = attributes.total_complete_pile;
      const pilecapCount = attributes.total_complete_pilecap;
      const pierCount = attributes.total_complete_pier;
      const pierheadCount = attributes.total_complete_pierhead;
      const precastCount = attributes.total_complete_precast;
      const atgradeCount = attributes.total_complete_atgrade;

      // compile in object
      return Object.assign(
        {},
        {
          date,
          pile: pileCount,
          pilecap: pilecapCount,
          pier: pierCount,
          piearhead: pierheadCount,
          precast: precastCount,
          atgrade: atgradeCount,
        },
      );
    });
    return data;
  });
}

// Thousand separators function
export function thousands_separators(num: any) {
  if (num) {
    var num_parts = num.toString().split('.');
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return num_parts.join('.');
  }
}

export function zoomToLayer(layer: any) {
  return layer.queryExtent().then((response: any) => {
    view
      .goTo(response.extent, {
        //response.extent
        speedFactor: 2,
      })
      .catch(function (error) {
        if (error.name !== 'AbortError') {
          console.error(error);
        }
      });
  });
}
