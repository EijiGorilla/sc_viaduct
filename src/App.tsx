/* eslint-disable react/jsx-no-comment-textnodes */
import { useRef, useEffect, useState } from 'react';
import { map, view, basemaps, layerList, timeSlider, start } from './Scene';
import './index.css';
import './App.css';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/components/calcite-list';
import '@esri/calcite-components/dist/components/calcite-list-item';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import '@esri/calcite-components/dist/calcite/calcite.css';
import {
  CalciteShell,
  CalciteShellPanel,
  CalciteActionBar,
  CalciteAction,
  CalciteSwitch,
  CalciteTabs,
  CalcitePanel,
  CalciteList,
  CalciteListItem,
  CalciteSegmentedControl,
  CalciteSegmentedControlItem,
} from '@esri/calcite-components-react';
import Chart from './components/Chart';
import ProgressChart from './components/ProgressChart';
import TimeSlider from './components/TimeSlider';
import { viaductLayer } from './layers';
import { dateUpdate } from './Query';

function App() {
  const [asOfDate, setAsOfDate] = useState<undefined | any | unknown>(null);

  const mapDiv = useRef(null);
  const layerListDiv = useRef<HTMLDivElement | undefined | any>(null);
  const timeSliderDiv = useRef<HTMLDivElement | undefined | any>(null);

  // For Calcite Design
  const calcitePanelBasemaps = useRef<HTMLDivElement | undefined | any>(null);
  const [activeWidget, setActiveWidget] = useState<undefined | any | unknown>(null);
  const [nextWidget, setNextWidget] = useState<undefined | any | unknown>(null);

  // Calcite switch for see-through-ground
  const [underground, setUnderground] = useState<boolean>(false);

  // For dropdown filter
  const [cpValueSelected, setCpValueSelected] = useState<any>('S-01');
  const contractPackage = ['S-01', 'S-02', 'S-03a', 'S-03b', 'S-03c', 'S-04', 'S-05', 'S-06'];

  //
  const [viaductLayerLoaded, setViaductLayerLoaded] = useState<any>();
  useEffect(() => {
    viaductLayer.load().then(() => {
      setViaductLayerLoaded(viaductLayer.loadStatus);
    });
  });

  useEffect(() => {
    if (activeWidget) {
      const actionActiveWidget = document.querySelector(
        `[data-panel-id=${activeWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionActiveWidget.hidden = true;

      if (activeWidget === 'timeslider') {
        timeSlider.timeExtent.end = start;
        view.ui.remove(timeSlider);
        viaductLayer.definitionExpression = "CP = '" + cpValueSelected + "'";
      }
    }

    if (nextWidget !== activeWidget) {
      const actionNextWidget = document.querySelector(
        `[data-panel-id=${nextWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionNextWidget.hidden = false;

      if (nextWidget === 'timeslider') {
        view.ui.add(timeSlider, 'bottom-leading');
      }
    }
  });

  useEffect(() => {
    if (nextWidget === 'timeslider') {
      view.ui.remove(timeSlider);
    }
  }, [cpValueSelected]);

  useEffect(() => {
    map.ground.opacity = underground === true ? 0.7 : 1;
    view.environment.atmosphereEnabled = false;
  }, [underground]);

  useEffect(() => {
    dateUpdate().then((response: any) => {
      setAsOfDate(response);
    });

    if (mapDiv.current) {
      map.ground.navigationConstraint = {
        type: 'none',
      };

      view.container = mapDiv.current;
      view.ui.components = [];
      view.ui.empty('top-left');
      basemaps.container = calcitePanelBasemaps.current;
      layerList.container = layerListDiv.current;
      timeSlider.container = timeSliderDiv.current;
    }
  }, []);

  return (
    <>
      <CalciteShell>
        <CalciteTabs slot="panel-end" style={{ width: '25vw' }}>
          {viaductLayerLoaded === 'loaded' && (
            <Chart contractp={!cpValueSelected ? '' : cpValueSelected} />
          )}
        </CalciteTabs>
        <header
          slot="header"
          id="headerDiv"
          style={{
            display: 'flex',
            width: '100%',
            height: '70px',
            padding: '0 1rem',
            borderStyle: 'solid',
            borderWidth: 1,
          }}
        >
          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/DOTr_Logo_v2.png"
            alt="DOTr Logo"
            height={'55px'}
            width={'55px'}
            style={{ marginBottom: 'auto', marginTop: 'auto' }}
          />
          <b className="headerTitle">SC VIADUCT</b>
          <div className="date">{!asOfDate ? '' : 'As of ' + asOfDate}</div>
          <CalciteSegmentedControl
            style={{ height: '50px', marginTop: 'auto', marginBottom: 'auto' }}
            scale="m"
            onCalciteSegmentedControlChange={(event: any) =>
              setCpValueSelected(event.target.selectedItem.id)
            }
          >
            {cpValueSelected &&
              contractPackage.map((contractp: any, index: any) => {
                return (
                  <CalciteSegmentedControlItem
                    {...(cpValueSelected === contractp ? { checked: true } : {})}
                    key={index}
                    value={contractp}
                    id={contractp}
                  >
                    {contractp}
                  </CalciteSegmentedControlItem>
                );
              })}
          </CalciteSegmentedControl>
          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/GCR LOGO.png"
            alt="GCR Logo"
            height={'50px'}
            width={'60px'}
            style={{
              marginBottom: 'auto',
              marginTop: 'auto',
              marginLeft: 'auto',
              marginRight: '5rem',
            }}
          />
        </header>
        {/* Calcite Action Panel */}
        <CalciteShellPanel
          width-scale="1"
          slot="panel-start"
          position="start"
          id="left-shell-panel"
          displayMode="dock"
        >
          <CalciteActionBar slot="action-bar">
            <CalciteAction
              data-action-id="layers"
              icon="layers"
              text="layers"
              id="layers"
              //textEnabled={true}
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="basemaps"
              icon="basemap"
              text="basemaps"
              id="basemaps"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="charts"
              icon="graph-time-series"
              text="Progress Chart"
              id="charts"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="timeslider"
              icon="clock"
              text="Timeslider"
              id="timeslider"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="information"
              icon="information"
              text="Information"
              id="information"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>
          </CalciteActionBar>

          <CalcitePanel
            heading="Layers"
            height-scale="l"
            width-scale="l"
            data-panel-id="layers"
            style={{ width: '18vw' }}
            hidden
          >
            <CalciteList>
              <CalciteListItem
                label=""
                description=""
                value="land-acquisition"
                ref={layerListDiv}
              ></CalciteListItem>
            </CalciteList>
          </CalcitePanel>

          <CalcitePanel
            heading="Basemaps"
            height-scale="l"
            data-panel-id="basemaps"
            style={{ width: '18vw' }}
            hidden
          >
            <CalciteList>
              <CalciteListItem
                label=""
                description=""
                value="basemaps"
                ref={calcitePanelBasemaps}
              ></CalciteListItem>
            </CalciteList>
          </CalcitePanel>

          <CalcitePanel
            class="timeSeries-panel"
            height-scale="l"
            data-panel-id="charts"
            hidden
          ></CalcitePanel>

          <CalcitePanel
            class="timeslider-panel"
            height-scale="s"
            data-panel-id="timeslider"
            hidden
          ></CalcitePanel>

          <CalcitePanel heading="Description" data-panel-id="information" hidden>
            {nextWidget === 'information' ? (
              <div className="informationDiv">
                <ul>
                  <li>
                    You can <b>filter utility data</b> by contract package, company, and data type:
                    (point or line).
                  </li>
                  <br />
                  <li>
                    <b>Click the bar-chart series</b> to view progress on the respective company and
                    work status over the map.
                  </li>
                  <br />
                  <li>Click/unclick widgets icon for viewing Layer list, legend, and basemaps.</li>
                </ul>
              </div>
            ) : (
              <div className="informationDiv" hidden></div>
            )}
          </CalcitePanel>
        </CalciteShellPanel>
        <div
          className="groundSwitchDiv"
          style={{
            position: 'fixed',
            zIndex: 1,
            bottom: 10,
            right: '23%',
            color: 'white',
            backgroundColor: '#2b2b2b',
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 4,
            paddingBottom: 4,
          }}
        >
          Ground: {''}
          On{' '}
          <CalciteSwitch
            onCalciteSwitchChange={(event: any) => setUnderground(event.target.checked)}
          ></CalciteSwitch>{' '}
          Off
        </div>

        <div className="mapDiv" ref={mapDiv}></div>

        {/* Lot progress chart is loaded ONLY when charts widget is clicked. */}
        {nextWidget === 'charts' && nextWidget !== activeWidget ? (
          <ProgressChart contractp={!cpValueSelected ? '' : cpValueSelected} />
        ) : (
          ''
        )}

        {/* time slider widget */}
        {nextWidget === 'timeslider' && nextWidget !== activeWidget ? (
          <TimeSlider contractp={!cpValueSelected ? '' : cpValueSelected} />
        ) : (
          ''
        )}
      </CalciteShell>
    </>
  );
}

export default App;
