import SceneView from '@arcgis/core/views/SceneView';
import Map from '@arcgis/core/Map';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import LayerList from '@arcgis/core/widgets/LayerList';
import Search from '@arcgis/core/widgets/Search';
import Expand from '@arcgis/core/widgets/Expand';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
import TimeSlider from '@arcgis/core/widgets/TimeSlider';

import { chainageLayer, pierNoLayer, stationLayer, prowLayer, viaductLayer } from './layers';
// import { highlightLot } from './Query';

export const map = new Map({
  basemap: 'dark-gray-vector', // "streets-night-vector", basemap
  ground: 'world-elevation',
});

// Group layers //
const alignmentGroupLayer = new GroupLayer({
  title: 'Alignment',
  visible: true,
  visibilityMode: 'independent',
  layers: [pierNoLayer, chainageLayer, prowLayer, stationLayer],
}); //map.add(alignmentGroupLayer, 0);

// Change the layer order by using index numbers in map.add

map.add(alignmentGroupLayer);
map.add(viaductLayer);

export const view = new SceneView({
  container: undefined,
  map,
  camera: {
    position: {
      x: 120.9793,
      y: 14.61,
      z: 500,
    },
    tilt: 65,
  },
  zoom: 13,
  viewingMode: 'local',
  environment: {
    background: {
      type: 'color', // autocasts as new ColorBackground()
      color: [0, 0, 0, 1],
    },
  },
});

export const basemaps = new BasemapGallery({
  view,
  container: undefined,
});

// highlight super urgent
export const layerList = new LayerList({
  view: view,
  selectionEnabled: true,
  container: undefined,
  listItemCreatedFunction: (event) => {
    const item = event.item;
    if (item.layer.type !== 'group') {
      item.panel = {
        content: 'legend',
        open: true,
      };
    }

    item.title === 'Chainage' ? (item.visible = false) : (item.visible = true);
  },
});

const sources = [
  {
    layer: pierNoLayer,
    searchFields: ['PIER'],
    displayField: 'PIER',
    exactMatch: false,
    outFields: ['PIER'],
    name: 'Pier No',
    zoomScale: 1000,
    placeholder: 'example: P-288',
  },
  {
    layer: chainageLayer,
    searchFields: ['KmSpot'],
    displayField: 'KmSpot',
    exactMatch: false,
    outFields: ['*'],
    zoomScale: 1000,
    name: 'Main KM',
    placeholder: 'example: 80+400',
  },
];

const searchWidget = new Search({
  view: view,
  locationEnabled: false,
  allPlaceholder: 'Chainage or pier no',
  includeDefaultSources: false,
  container: undefined,
  sources: sources,
});

const searchExpand = new Expand({
  view: view,
  content: searchWidget,
  expandIconClass: 'esri-icon-search',
  group: 'top-right',
});
view.ui.add(searchExpand, {
  position: 'top-right',
});

export const start = new Date(2021, 8, 1);
export const end = new Date(2026, 8, 1);
interface Props {
  interval: any;
  timeExtent: any;
}

const stops: Props = {
  interval: {
    value: 1,
    unit: 'months',
  },
  timeExtent: { start, end },
};

export const timeSlider = new TimeSlider({
  container: undefined,
  mode: 'cumulative-from-start',
  layout: 'auto',
  fullTimeExtent: {
    start: start,
    end: end,
  },
  stops: stops,
});
