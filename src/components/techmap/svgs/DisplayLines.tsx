import { LatLngBoundsExpression } from 'leaflet'
import { FC } from 'react'
import { SVGOverlay } from 'react-leaflet'
import styles from '../../../styles'

export const frameworkPath = () => {
  return (
    <path
      d="M3969.5 1865.5H2959C2932.49 1865.5 2911 1844.01 2911 1817.5V1726C2911 1699.49 2889.51 1678 2863 1678H2677C2650.49 1678 2629 1656.51 2629 1630V1294C2629 1267.49 2607.51 1246 2581 1246H1606C1588.33 1246 1574 1231.67 1574 1214V823.735C1574 806.062 1588.33 791.735 1606 791.735H1804.5C1826.59 791.735 1844.5 773.827 1844.5 751.735V148C1844.5 121.49 1823.01 100 1796.5 100H1661.5"
      stroke={styles.colors.corporateBlueMedium}
      strokeWidth="24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="blue-line"
      id="blue-line"
    />
  )
}

export const frameworkPathOutline = () => {
  return (
    <path
      d="M1054.5 547H52.6059C34.8915 547 20.5475 532.609 20.6061 514.894L21.8946 124.894C21.9529 107.263 36.2626 93 53.8944 93H253.164C275.579 93 293.619 74.583 293.155 52.1726L292.5 20.5"
      stroke="white"
      strokeWidth="40"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
}

export const toolPathOutline = () => {
  return (
    <path
      d="M20.5 20.5H939C965.51 20.5 987 41.9903 987 68.5V344C987 370.51 965.51 392 939 392H728.5C697.572 392 672.5 417.072 672.5 448V536"
      stroke="white"
      strokeWidth="40"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
}

export const hardwarePath = () => {
  return (
    <path
      d="M4013 126H3672C3645.49 126 3624 147.49 3624 174V314C3624 340.51 3602.51 362 3576 362H3287.01C3260.5 362 3239 383.496 3239.01 410.009L3239.07 715.991C3239.07 742.504 3217.58 764 3191.07 764H2564.16C2537.62 764 2516.11 785.542 2516.16 812.085L2516.94 1253.94C2516.97 1271.64 2502.64 1286 2484.94 1286L1598.49 1285.91C1563.15 1285.91 1534.5 1257.25 1534.5 1221.91V1098.15C1534.5 1076.07 1516.6 1058.16 1494.51 1058.15L963.013 1058.01C936.498 1058.01 915 1079.5 915 1106.01V1278C915 1304.51 893.51 1326 867 1326H502.5C475.99 1326 454.5 1304.51 454.5 1278V1224C454.5 1197.49 433.01 1176 406.5 1176H174"
      stroke={styles.colors.lineHardware}
      strokeWidth="24"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
}

export const programmingPath = () => {
  return (
    <path
      d="M195 1797H662C688.51 1797 710 1775.51 710 1749V1663.5C710 1636.99 731.49 1615.5 758 1615.5H1288C1314.51 1615.5 1336 1594.01 1336 1567.5V1378C1336 1351.49 1357.49 1330 1384 1330H1590C1603.25 1330 1614 1319.25 1614 1306V803.5C1614 776.99 1635.49 755.5 1662 755.5H2448C2474.51 755.5 2496 734.01 2496 707.5V456.5C2496 429.99 2474.51 408.5 2448 408.5H2320C2293.49 408.5 2272 387.01 2272 360.5V134"
      stroke={styles.colors.lineProgramming}
      strokeWidth="24"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
}

export const programmingPathOutline = () => {
  return (
    <path
      d="M20 617V90.5C20 63.9903 41.4903 42.5 68 42.5H860C883.196 42.5 902 23.696 902 0.5V0.5"
      stroke="white"
      strokeWidth="40"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
}

export const toolPath = () => {
  return (
    <path
      d="M243.5 331H816.5C843.01 331 864.5 352.49 864.5 379V583C864.5 609.51 885.99 631 912.5 631H1293.5C1320.01 631 1341.5 652.49 1341.5 679V779.5C1341.5 806.01 1362.99 827.5 1389.5 827.5H2428C2454.51 827.5 2476 848.99 2476 875.5V1175C2476 1188.25 2465.25 1199 2452 1199H2189.5C2158.57 1199 2133.5 1224.07 2133.5 1255V1419C2133.5 1445.51 2112.01 1467 2085.5 1467H1833.5C1806.99 1467 1785.5 1488.49 1785.5 1515V1813.5C1785.5 1840.01 1806.99 1861.5 1833.5 1861.5H2094"
      stroke={styles.colors.lineTools}
      strokeWidth="24"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
}

export const labelProgramming = () => {
  return (
    <>
      <rect x="0.335938" y="0.609375" width="181.875" height="25.875" rx="1.40625" fill="#E60032" />
      <path
        d="M17.1428 11.8073C17.1428 9.5925 16.067 8.55469 13.4345 8.55469H10.03V18.0469H12.1689V14.9588H13.4345C16.0797 14.9588 17.1428 13.807 17.1428 11.8073ZM14.9406 11.7947C14.9406 12.9844 14.485 13.2502 13.4345 13.2502H12.1689V10.3392H13.4345C14.5356 10.3392 14.9406 10.6556 14.9406 11.7947ZM25.4461 11.5036C25.4461 9.47859 24.2691 8.55469 21.915 8.55469H18.4346V18.0469H20.5735V14.5031H21.915L23.573 18.0469H26.0663L23.8514 14.0855C24.8766 13.7691 25.4461 12.8325 25.4461 11.5036ZM23.2186 11.5922C23.2186 12.6173 22.8389 12.9084 21.8897 12.9084H20.5735V10.3266H21.9277C22.8642 10.3266 23.2186 10.6303 23.2186 11.5922ZM34.8876 13.3008C34.8876 9.92156 33.6852 8.40281 30.711 8.40281C27.7495 8.40281 26.5218 9.92156 26.5218 13.3008C26.5218 16.68 27.7874 18.2241 30.711 18.2241C33.6852 18.2241 34.8876 16.7433 34.8876 13.3008ZM32.6601 13.3008C32.6601 15.6928 32.1538 16.313 30.7237 16.313C29.2809 16.313 28.762 15.7055 28.762 13.3008C28.762 10.8961 29.2682 10.3139 30.711 10.3139C32.1665 10.3139 32.6601 10.8961 32.6601 13.3008ZM43.3425 12.9464H41.4568V16.1864C41.153 16.275 40.8113 16.313 40.4443 16.313C38.7863 16.313 38.2294 15.6548 38.2294 13.2881C38.2294 10.9467 38.8116 10.2633 40.6847 10.2633C41.4694 10.2633 42.3174 10.4152 42.9882 10.6683L43.1907 8.82047C42.4693 8.55469 41.4694 8.39016 40.5708 8.39016C37.3688 8.39016 35.9893 9.9975 35.9893 13.3134C35.9893 16.5661 37.2549 18.2241 40.4949 18.2241C41.5327 18.2241 42.6338 18.0216 43.3425 17.6925V12.9464ZM51.8957 11.5036C51.8957 9.47859 50.7187 8.55469 48.3646 8.55469H44.8841V18.0469H47.023V14.5031H48.3646L50.0226 18.0469H52.5159L50.301 14.0855C51.3262 13.7691 51.8957 12.8325 51.8957 11.5036ZM49.6682 11.5922C49.6682 12.6173 49.2885 12.9084 48.3393 12.9084H47.023V10.3266H48.3773C49.3138 10.3266 49.6682 10.6303 49.6682 11.5922ZM59.4222 18.0469H61.8016L58.4856 8.55469H55.9417L52.6638 18.0469H54.9166L55.4481 16.1991H58.8906L59.4222 18.0469ZM57.1821 10.162H57.22L57.4731 11.1619L58.3844 14.4145H55.9671L56.9163 11.1619L57.1821 10.162ZM62.7809 8.55469V18.0469H64.6666V13.2248L64.654 12.1997L64.6793 12.187L65.0337 13.1489L66.9701 18.0469H68.3876L70.3366 13.1363L70.691 12.1744L70.729 12.187L70.7037 13.2122V18.0469H72.6527V8.55469H70.2987L68.0838 14.0981L67.7295 15.0473H67.6915L67.3371 14.0981L65.1349 8.55469H62.7809ZM74.4483 8.55469V18.0469H76.3341V13.2248L76.3215 12.1997L76.3468 12.187L76.7011 13.1489L78.6376 18.0469H80.0551L82.0041 13.1363L82.3585 12.1744L82.3965 12.187L82.3711 13.2122V18.0469H84.3202V8.55469H81.9661L79.7513 14.0981L79.3969 15.0473H79.359L79.0046 14.0981L76.8024 8.55469H74.4483ZM86.255 18.0469H88.4319V8.55469H86.255V18.0469ZM92.5064 16.1864V14.0222H96.0122V12.3263H92.5064V10.4405H96.6703L96.6324 8.55469H90.3675V18.0469H96.8222L96.8728 16.1864H92.5064ZM105.215 11.5036C105.215 9.47859 104.038 8.55469 101.684 8.55469H98.2035V18.0469H100.342V14.5031H101.684L103.342 18.0469H105.835L103.62 14.0855C104.646 13.7691 105.215 12.8325 105.215 11.5036ZM102.988 11.5922C102.988 12.6173 102.608 12.9084 101.659 12.9084H100.342V10.3266H101.697C102.633 10.3266 102.988 10.6303 102.988 11.5922ZM112.856 15.1992C112.856 11.9845 108.489 12.668 108.489 11.1872C108.489 10.6809 108.806 10.2759 109.983 10.2759C110.704 10.2759 111.489 10.4278 112.273 10.6809L112.539 8.88375C111.805 8.58 110.805 8.39016 109.881 8.39016C107.477 8.39016 106.439 9.69375 106.439 11.3011C106.439 14.4778 110.805 13.845 110.805 15.3384C110.805 15.9966 110.35 16.3763 109.312 16.3763C108.375 16.3763 107.515 16.1231 106.679 15.6802L106.401 17.5153C107.223 17.9583 108.236 18.2241 109.337 18.2241C111.552 18.2241 112.856 17.0723 112.856 15.1992ZM121.236 11.8073C121.236 9.5925 120.16 8.55469 117.527 8.55469H114.123V18.0469H116.262V14.9588H117.527C120.172 14.9588 121.236 13.807 121.236 11.8073ZM119.033 11.7947C119.033 12.9844 118.578 13.2502 117.527 13.2502H116.262V10.3392H117.527C118.628 10.3392 119.033 10.6556 119.033 11.7947ZM129.539 11.5036C129.539 9.47859 128.362 8.55469 126.008 8.55469H122.527V18.0469H124.666V14.5031H126.008L127.666 18.0469H130.159L127.944 14.0855C128.969 13.7691 129.539 12.8325 129.539 11.5036ZM127.311 11.5922C127.311 12.6173 126.932 12.9084 125.982 12.9084H124.666V10.3266H126.02C126.957 10.3266 127.311 10.6303 127.311 11.5922ZM137.065 18.0469H139.445L136.129 8.55469H133.585L130.307 18.0469H132.56L133.091 16.1991H136.534L137.065 18.0469ZM134.825 10.162H134.863L135.116 11.1619L136.028 14.4145H133.61L134.559 11.1619L134.825 10.162ZM146.33 8.7825C145.786 8.56734 144.887 8.39016 144.128 8.39016C141.09 8.39016 139.724 10.0734 139.724 13.2375C139.724 16.6294 141.116 18.2241 143.989 18.2241C144.824 18.2241 145.735 18.0089 146.355 17.7052L146.14 15.9713C145.609 16.1991 144.989 16.3383 144.292 16.3383C142.559 16.3383 141.964 15.6295 141.964 13.2502C141.964 10.9973 142.533 10.3012 144.254 10.3012C144.963 10.3012 145.621 10.4278 146.115 10.6177L146.33 8.7825ZM155.211 18.0469V8.55469H153.084V12.2377H149.769V8.55469H147.63V18.0469H149.769V14.1614H153.084V18.0469H155.211ZM159.162 16.1864V14.0222H162.668V12.3263H159.162V10.4405H163.326L163.288 8.55469H157.023V18.0469H163.478L163.528 16.1864H159.162ZM172.516 18.0469V8.55469H170.63V13.2755L170.656 14.288L170.63 14.3006L170.061 13.4527L166.681 8.55469H164.859V18.0469H166.757V13.0603L166.745 12.0352L166.77 12.0225L167.34 12.8705L171.023 18.0469H172.516Z"
        fill="white"
      />
    </>
  )
}

export const labelTools = () => {
  return (
    <>
      <rect x="0.773438" y="0.851501" width="57.875" height="25.875" rx="1.40625" fill="#91C882" />
      <path
        d="M16.7524 10.7206L16.7017 8.79682H9.55097L9.50034 10.7206H12.0442V18.289H14.1958V10.7206H16.7524ZM25.5383 13.5429C25.5383 10.1637 24.3359 8.64495 21.3617 8.64495C18.4002 8.64495 17.1725 10.1637 17.1725 13.5429C17.1725 16.9221 18.4381 18.4662 21.3617 18.4662C24.3359 18.4662 25.5383 16.9854 25.5383 13.5429ZM23.3108 13.5429C23.3108 15.9349 22.8045 16.5551 21.3744 16.5551C19.9316 16.5551 19.4127 15.9476 19.4127 13.5429C19.4127 11.1382 19.9189 10.556 21.3617 10.556C22.8172 10.556 23.3108 11.1382 23.3108 13.5429ZM35.0057 13.5429C35.0057 10.1637 33.8034 8.64495 30.8292 8.64495C27.8676 8.64495 26.64 10.1637 26.64 13.5429C26.64 16.9221 27.9056 18.4662 30.8292 18.4662C33.8034 18.4662 35.0057 16.9854 35.0057 13.5429ZM32.7782 13.5429C32.7782 15.9349 32.272 16.5551 30.8418 16.5551C29.399 16.5551 28.8801 15.9476 28.8801 13.5429C28.8801 11.1382 29.3864 10.556 30.8292 10.556C32.2847 10.556 32.7782 11.1382 32.7782 13.5429ZM38.6134 16.3653V8.79682H36.4618V18.289H42.4735L42.5242 16.3653H38.6134ZM49.7048 15.4414C49.7048 12.2267 45.3384 12.9101 45.3384 11.4293C45.3384 10.9231 45.6548 10.5181 46.8318 10.5181C47.5532 10.5181 48.3379 10.6699 49.1226 10.9231L49.3884 9.12588C48.6543 8.82213 47.6545 8.63229 46.7306 8.63229C44.3259 8.63229 43.2881 9.93588 43.2881 11.5432C43.2881 14.7199 47.6545 14.0871 47.6545 15.5806C47.6545 16.2387 47.1989 16.6184 46.161 16.6184C45.2245 16.6184 44.3639 16.3653 43.5285 15.9223L43.2501 17.7574C44.0728 18.2004 45.0853 18.4662 46.1864 18.4662C48.4012 18.4662 49.7048 17.3145 49.7048 15.4414Z"
        fill="white"
      />
    </>
  )
}

export const labelHardware = () => {
  return (
    <>
      <rect x="0.738281" y="0.156219" width="91.875" height="25.875" rx="1.40625" fill="#41B496" />
      <path
        d="M17.8603 17.5937V8.10153H15.7341V11.7845H12.4181V8.10153H10.2792V17.5937H12.4181V13.7083H15.7341V17.5937H17.8603ZM25.6083 17.5937H27.9877L24.6718 8.10153H22.1279L18.8499 17.5937H21.1027L21.6343 15.7459H25.0768L25.6083 17.5937ZM23.3682 9.70888H23.4061L23.6593 10.7087L24.5705 13.9614H22.1532L23.1024 10.7087L23.3682 9.70888ZM35.9785 11.0504C35.9785 9.02544 34.8015 8.10153 32.4474 8.10153H28.967V17.5937H31.1059V14.05H32.4474L34.1054 17.5937H36.5987L34.3838 13.6323C35.409 13.3159 35.9785 12.3793 35.9785 11.0504ZM33.751 11.139C33.751 12.1642 33.3713 12.4553 32.4221 12.4553H31.1059V9.87341H32.4601C33.3967 9.87341 33.751 10.1772 33.751 11.139ZM45.3908 12.8097C45.3908 9.53169 44.1379 8.10153 41.1257 8.10153H37.5693V17.5937H41.151C43.9607 17.5937 45.3908 16.2395 45.3908 12.8097ZM43.1507 12.797C43.1507 15.227 42.5685 15.6953 41.113 15.6953H39.7082V10.0126H41.1004C42.6065 10.0126 43.1507 10.5442 43.1507 12.797ZM51.1354 8.10153L49.7938 14.5436L49.6166 15.5434H49.5787L49.4141 14.5309L48.2244 8.10153H46.0096L48.2498 17.5937H50.8063L52.0466 11.2529L52.2238 10.2278H52.2618L52.439 11.2403L53.6919 17.5937H56.2485L58.4887 8.10153H56.3751L55.1854 14.4676L55.0208 15.4801H54.9829L54.793 14.4803L53.4515 8.10153H51.1354ZM65.0726 17.5937H67.452L64.136 8.10153H61.5921L58.3141 17.5937H60.567L61.0985 15.7459H64.541L65.0726 17.5937ZM62.8324 9.70888H62.8704L63.1235 10.7087L64.0348 13.9614H61.6174L62.5666 10.7087L62.8324 9.70888ZM75.4428 11.0504C75.4428 9.02544 74.2658 8.10153 71.9117 8.10153H68.4312V17.5937H70.5701V14.05H71.9117L73.5697 17.5937H76.0629L73.8481 13.6323C74.8733 13.3159 75.4428 12.3793 75.4428 11.0504ZM73.2153 11.139C73.2153 12.1642 72.8356 12.4553 71.8864 12.4553H70.5701V9.87341H71.9244C72.8609 9.87341 73.2153 10.1772 73.2153 11.139ZM79.1724 15.7333V13.569H82.6782V11.8731H79.1724V9.98731H83.3363L83.2984 8.10153H77.0335V17.5937H83.4882L83.5388 15.7333H79.1724Z"
        fill="white"
      />
    </>
  )
}

export const labelFrameworks = () => {
  return (
    <>
      <rect x="0.933594" y="0.289062" width="109.875" height="25.875" rx="1.40625" fill="#375AA5" />
      <path
        d="M16.9402 10.1581L16.9023 8.23437H10.6501V17.7266H12.7763V14.0309H16.2188L16.2441 12.2084H12.7763V10.1581H16.9402ZM25.1389 11.1833C25.1389 9.15828 23.9619 8.23437 21.6078 8.23437H18.1273V17.7266H20.2662V14.1828H21.6078L23.2658 17.7266H25.7591L23.5442 13.7652C24.5694 13.4487 25.1389 12.5122 25.1389 11.1833ZM22.9114 11.2719C22.9114 12.297 22.5317 12.5881 21.5825 12.5881H20.2662V10.0063H21.6205C22.557 10.0063 22.9114 10.31 22.9114 11.2719ZM32.6654 17.7266H35.0448L31.7289 8.23437H29.1849L25.907 17.7266H28.1598L28.6914 15.8787H32.1339L32.6654 17.7266ZM30.4253 9.84172H30.4632L30.7164 10.8416L31.6276 14.0942H29.2103L30.1595 10.8416L30.4253 9.84172ZM36.0241 8.23437V17.7266H37.9098V12.9045L37.8972 11.8794L37.9225 11.8667L38.2769 12.8286L40.2133 17.7266H41.6308L43.5798 12.8159L43.9342 11.8541L43.9722 11.8667L43.9469 12.8919V17.7266H45.8959V8.23437H43.5419L41.327 13.7778L40.9727 14.727H40.9347L40.5803 13.7778L38.3781 8.23437H36.0241ZM49.8305 15.8661V13.7019H53.3362V12.0059H49.8305V10.1202H53.9944L53.9564 8.23437H47.6915V17.7266H54.1462L54.1969 15.8661H49.8305ZM60.0835 8.23437L58.7419 14.6764L58.5647 15.6763H58.5268L58.3622 14.6638L57.1726 8.23437H54.9577L57.1979 17.7266H59.7544L60.9947 11.3858L61.1719 10.3606H61.2099L61.3871 11.3731L62.6401 17.7266H65.1966L67.4368 8.23437H65.3232L64.1335 14.6005L63.969 15.613H63.931L63.7412 14.6131L62.3996 8.23437H60.0835ZM76.4177 12.9805C76.4177 9.60125 75.2153 8.0825 72.2411 8.0825C69.2796 8.0825 68.0519 9.60125 68.0519 12.9805C68.0519 16.3597 69.3175 17.9037 72.2411 17.9037C75.2153 17.9037 76.4177 16.423 76.4177 12.9805ZM74.1902 12.9805C74.1902 15.3725 73.6839 15.9927 72.2538 15.9927C70.811 15.9927 70.2921 15.3852 70.2921 12.9805C70.2921 10.5758 70.7983 9.99359 72.2411 9.99359C73.6966 9.99359 74.1902 10.5758 74.1902 12.9805ZM84.8853 11.1833C84.8853 9.15828 83.7083 8.23437 81.3542 8.23437H77.8737V17.7266H80.0126V14.1828H81.3542L83.0122 17.7266H85.5055L83.2906 13.7652C84.3158 13.4487 84.8853 12.5122 84.8853 11.1833ZM82.6578 11.2719C82.6578 12.297 82.2781 12.5881 81.3289 12.5881H80.0126V10.0063H81.3669C82.3034 10.0063 82.6578 10.31 82.6578 11.2719ZM94.5254 17.7266L91.5385 12.74L94.3735 8.23437H91.9309L89.6401 11.9933H88.6149V8.23437H86.476V17.7266H88.6149V13.7272H89.6148L91.9562 17.7266H94.5254ZM101.635 14.8789C101.635 11.6642 97.2684 12.3477 97.2684 10.8669C97.2684 10.3606 97.5848 9.95563 98.7618 9.95563C99.4832 9.95563 100.268 10.1075 101.053 10.3606L101.318 8.56344C100.584 8.25969 99.5844 8.06984 98.6605 8.06984C96.2559 8.06984 95.218 9.37344 95.218 10.9808C95.218 14.1575 99.5844 13.5247 99.5844 15.0181C99.5844 15.6763 99.1288 16.0559 98.091 16.0559C97.1544 16.0559 96.2938 15.8028 95.4585 15.3598L95.1801 17.195C96.0027 17.638 97.0152 17.9037 98.1163 17.9037C100.331 17.9037 101.635 16.752 101.635 14.8789Z"
        fill="white"
      />
    </>
  )
}

const pathes = [
  {
    path: hardwarePath,
    type: 'line',
  },
  {
    path: programmingPathOutline,
    type: 'outline',
    width: '922',
    height: '637',
    viewBox: '-1594 -718 4096 2048',
  },
  {
    path: programmingPath,
    type: 'line',
  },
  {
    path: frameworkPathOutline,
    type: 'outline',
    viewBox: '-1553 -699 4096 2048',
  },
  {
    path: frameworkPath,
    type: 'line',
  },
  {
    path: toolPathOutline,
    type: 'outline',
    viewBox: '-1461 -807 4096 2048',
  },
  {
    path: toolPath,
    type: 'line',
  },
  {
    path: labelProgramming,
    type: 'label',
    viewBox: '-847 -30 1536 768',
  },
  {
    path: labelProgramming,
    type: 'label',
    viewBox: '00 -652 1536 768',
  },
  {
    path: labelHardware,
    type: 'label',
    viewBox: '-1420 -42.5 1536 768',
  },
  {
    path: labelHardware,
    type: 'label',
    viewBox: '-40 -419.5 1536 768',
  },
  {
    path: labelTools,
    type: 'label',
    viewBox: '-760 -676 1536 768',
  },
  {
    path: labelTools,
    type: 'label',
    viewBox: '-50 -102 1536 768',
  },
  {
    path: labelFrameworks,
    type: 'label',
    viewBox: '-1385 -678 1536 768',
  },
  {
    path: labelFrameworks,
    type: 'label',
    viewBox: '-530 -16 1536 768',
  },
]

interface DisplayLinesProps {
  bounds: LatLngBoundsExpression
}

export const DisplayLines: FC<DisplayLinesProps> = ({ bounds }) => {
  return (
    <>
      {pathes.map((path, i) => (
        <SVGOverlay bounds={bounds} key={i}>
          <svg
            viewBox={
              path.viewBox
                ? path.viewBox
                : `${bounds[0][1]} ${bounds[0][0]} ${bounds[1][1]} ${bounds[1][0]}`
            }
            fill="none"
          >
            {path.path()}
          </svg>
        </SVGOverlay>
      ))}
    </>
  )
}
