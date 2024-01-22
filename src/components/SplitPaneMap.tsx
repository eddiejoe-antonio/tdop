import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { transformToGeoJSON } from '@/utils/transformGeoJSON';
import { useLazyGetBoundaryDataBulkQuery, useLazyGetChartDataBulkQuery } from '@/services/map';
import { DataPointGeneratorName } from '@/types/ChartIds';
import { Map } from 'mapbox-gl';
import ChoroplethMap, { ChoroplethMapProps } from './ui/ChoroplethMap';

interface SplitPaneMapProps {
  leftMapProps: ChoroplethMapProps;
  righMapProps: ChoroplethMapProps;
  width: string | number;
  height: string | number;
}

const SplitPaneMap = ({ leftMapProps, righMapProps, width, height }: SplitPaneMapProps) => {
  const [paneWidths, setPaneWidths] = useState([50, 50]); // Initial widths
  const dividerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [center, setCenter] = useState<[number, number]>();
  const [zoom, setZoom] = useState<number>();

  const handleDragStart: MouseEventHandler = (e) => {
    e.preventDefault();
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
  };

  const handleDragMove: (this: Document, ev: MouseEvent) => any = (e) => {
    if (dividerRef.current && containerRef.current) {
      const dividerRect = dividerRef.current.getBoundingClientRect();
      const totalWidth = containerRef.current.clientWidth;

      const leftPaneWidth = ((e.clientX - dividerRect.width / 2) / totalWidth) * 100;
      if (leftPaneWidth <= 100) {
        const rightPaneWidth = 100 - leftPaneWidth;
        setPaneWidths([leftPaneWidth, rightPaneWidth]);
      }
    }
  };

  const handleDragEnd = () => {
    document.removeEventListener('mousemove', handleDragMove);
    document.removeEventListener('mouseup', handleDragEnd);
  };

  return (
    <div
      className='shadow relative flex justify-around'
      style={{ width, height }}
      ref={containerRef}
    >
      <div
        className='w-full z-10 h-full bg-green-200 overflow-hidden'
        style={{ width: `${paneWidths[0]}%` }}
      >
        <div className='h-full' style={{ width }}>
          <ChoroplethMap
            center={center}
            zoom={zoom}
            onMove={() => {
              if (leftMapProps?.mapRef?.current) {
                setCenter([
                  parseFloat(leftMapProps.mapRef.current.getCenter().lng.toFixed(4)),
                  parseFloat(leftMapProps.mapRef.current.getCenter().lat.toFixed(4)),
                ]);
                setZoom(parseFloat(leftMapProps.mapRef.current.getZoom().toFixed(2)));
              }
            }}
            syncCenterAndZoom={true}
            {...leftMapProps}
          />
        </div>
      </div>
      <div
        className='absolute z-20 w-4 h-full bg-transparent'
        style={{ left: `${paneWidths[0]}%` }}
      >
        <div className='shadow bg-white w-2 h-full relative'>
          <div
            ref={dividerRef}
            onMouseDown={handleDragStart}
            className='caret-container bg-white w-4 h-20 cursor-ew-resize'
            style={{ top: '50%', left: '-50%' }}
          ></div>
        </div>
      </div>
      <div
        className='w-full h-full  bg-red-200 overflow-hidden'
        style={{ width: `${paneWidths[1]}%` }}
      >
        <div className='h-full absolute left-0' style={{ width }}>
          <ChoroplethMap
            center={center}
            zoom={zoom}
            onMove={() => {
              if (righMapProps?.mapRef?.current) {
                setCenter([
                  parseFloat(righMapProps.mapRef.current.getCenter().lng.toFixed(4)),
                  parseFloat(righMapProps.mapRef.current.getCenter().lat.toFixed(4)),
                ]);
                setZoom(parseFloat(righMapProps.mapRef.current.getZoom().toFixed(2)));
              }
            }}
            syncCenterAndZoom={true}
            {...righMapProps}
          />
        </div>
      </div>
    </div>
  );
};

const SplitPaneMapWrapper = () => {
  const leftMap = useRef<Map>();
  const rightMap = useRef<Map>();

  const [geoJsonFeaturesLeft, setGeoJsonFeaturesLeft] = useState<
    GeoJSON.FeatureCollection<GeoJSON.Geometry> | undefined
  >();

  const [geoJsonFeaturesRight, setGeoJsonFeaturesRight] = useState<
    GeoJSON.FeatureCollection<GeoJSON.Geometry> | undefined
  >();

  const [getBoundaries] = useLazyGetBoundaryDataBulkQuery();
  const [getChartData] = useLazyGetChartDataBulkQuery();

  useEffect(() => {
    const init = async () => {
      const boundaryies = await getBoundaries([
        {
          geoId: '48',
          id: '65a6952ca3f05308cc4f280c',
          regionSetup: {
            peers: 'none',
            segments: 'county',
          },
        },
      ]).unwrap();
      const choroplethData = await getChartData([
        {
          geoId: '48',
          id: '65a6952ca3f05308cc4f280c',
          regionSetup: {
            peers: 'none',
            segments: 'county',
          },
        },
      ]).unwrap();

      const geoJsonLeft = transformToGeoJSON(
        boundaryies,
        choroplethData,
        DataPointGeneratorName.hispeedShare,
      );

      const boundaryiesRight = await getBoundaries([
        {
          geoId: '48',
          id: '6582102b903ab0943c07dbf8',
          regionSetup: {
            peers: 'none',
            segments: 'county',
          },
        },
      ]).unwrap();
      const choroplethDataRight = await getChartData([
        {
          geoId: '48',
          id: '6582102b903ab0943c07dbf8',
          regionSetup: {
            peers: 'none',
            segments: 'county',
          },
        },
      ]).unwrap();

      setGeoJsonFeaturesRight(
        transformToGeoJSON(
          boundaryiesRight,
          choroplethDataRight,
          DataPointGeneratorName.noInternetProportion,
        ),
      );
      setGeoJsonFeaturesLeft(geoJsonLeft);
    };

    init();
  }, []);

  return (
    <div className='w-full h-screen p-2'>
      {geoJsonFeaturesLeft && geoJsonFeaturesRight && (
        <SplitPaneMap
          leftMapProps={{
            colorStops: [
              { step: 0.05, color: '#C9DCF7' },
              { step: 0.15, color: '#96AFD3' },
              { step: 0.25, color: '#6481B0' },
              { step: 0.35, color: '#32548C' },
              { step: 0.45, color: '#002768' },
            ],
            geoJSONFeatureCollection: geoJsonFeaturesLeft,
            mapRef: leftMap,
          }}
          righMapProps={{
            colorStops: [
              { step: 0.1, color: '#F7CAC9' },
              { step: 0.3, color: '#E9A5A3' },
              { step: 0.5, color: '#DB6D84' },
              { step: 0.7, color: '#C92C4D' },
              { step: 0.9, color: '#BE0B31' },
            ],
            geoJSONFeatureCollection: geoJsonFeaturesRight,
            mapRef: rightMap,
          }}
          width='600px'
          height='600px'
        />
      )}
    </div>
  );
};

export default SplitPaneMapWrapper;
