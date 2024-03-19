import React from 'react'
import Modal from '../../components/Modal'
import Button from '../../components/Button'

const StartTimerConfirmationModal = ({isOpen, onConfirm}) => {
  const [buttonVisible, setButtonVisible] = React.useState(false);
  const [countDown, setCountDown] = React.useState(20);

  React.useEffect(() => {
    let count = countDown ?? 0;

    let timeIntervelId = setInterval(() => {
        setCountDown(count--);
    }, 1000);


    let timeOutId = setTimeout(() => {
      setButtonVisible(true);
      clearInterval(timeIntervelId)
    }, 22000);

    

    return () => {
      clearTimeout(timeOutId);
      clearInterval(timeIntervelId);
    };
  }, []);

  const text = `<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"><style type="text/css">ol{margin:0;padding:0}table td,table th{padding:0}.c0{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c1{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c2{background-color:#ffffff;max-width:468pt;padding:72pt 72pt 72pt 72pt}.c3{height:11pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style></head><body class="c2 doc-content"><p class="c1"><span class="c0">Do You Understand The Following Things?</span></p><p class="c1"><span class="c0">A. Your job is not to decide what the look and feel of a website will be based on a few reference websites.</span></p><p class="c1"><span class="c0">B. Your job is not to research a theme based on an instruction shared by the PM.</span></p><p class="c1"><span class="c0">C. Your job is not to research a plugin based on a problem shared by PM.</span></p><p class="c1"><span class="c0">D. Your job is not to choose the color scheme of a website.</span></p><p class="c1"><span class="c0">E. Your job is not to talk to the support for example the Shopify support team, theme support, plugin support and any other support for any solution.</span></p><p class="c1"><span class="c0">F. Your job is not to create the training videos for the client after the completion of a project.</span></p><p class="c1"><span class="c0">G. You understand that all your hours have to be logged/tracked, and you will be questioned if you don&rsquo;t log at least 7 hours for any reason.</span></p><p class="c1 c3"><span class="c0"></span></p><p class="c1"><span class="c0">In general, anything that has to do with requirements define (of any sort) has to be done by the project manager. Your job is to execute the work based on the defined requirements.</span></p><p class="c1 c3"><span class="c0"></span></p><p class="c1"><span class="c0">If for any reason, project manager needs your help for any of those things, he will have to create a separate task for each of them and those tasks have to be authorized by the top management mandatorily. Report immediately if you are asked to do any of these and if it wasn&rsquo;t authorized by top management. You should see a text like &ldquo;Authorized by top management&rdquo; on the right side of the task title if it was authorized.</span></p><p class="c1 c3"><span class="c0"></span></p><p class="c1"><span class="c0">In case, you don&rsquo;t report, the extra time taken for these will be considered as your lacking (as they will remain unaccountable) and you will receive negative performance score.&quot;</span></p><p class="c1 c3"><span class="c0"></span></p><p class="c1"><span class="c0">&#2438;&#2474;&#2472;&#2495; &#2453;&#2495; &#2472;&#2495;&#2478;&#2509;&#2472;&#2482;&#2495;&#2454;&#2495;&#2468; &#2476;&#2495;&#2487;&#2479;&#2492;&#2455;&#2497;&#2482;&#2495; &#2476;&#2497;&#2461;&#2503;&#2472;?</span></p><p class="c1 c3"><span class="c0"></span></p><p class="c1"><span class="c0">&#2535;&#2404; &#2453;&#2527;&#2503;&#2453;&#2463;&#2495; &#2480;&#2503;&#2475;&#2494;&#2480;&#2503;&#2472;&#2509;&#2488; &#2451;&#2527;&#2503;&#2476;&#2488;&#2494;&#2439;&#2463;&#2503;&#2480; &#2451;&#2474;&#2480; &#2477;&#2495;&#2468;&#2509;&#2468;&#2495; &#2453;&#2480;&#2503; &#2453;&#2509;&#2482;&#2494;&#2527;&#2503;&#2472;&#2509;&#2463;&#2503;&#2480; &#2451;&#2527;&#2503;&#2476;&#2488;&#2494;&#2439;&#2463;&#2503;&#2480; Look &amp; Feel &#2453;&#2503;&#2478;&#2472; &#2489;&#2476;&#2503; &#2468;&#2494;&#2480; &#2476;&#2495;&#2487;&#2527;&#2503; &#2488;&#2495;&#2470;&#2509;&#2471;&#2494;&#2472;&#2509;&#2468; &#2472;&#2503;&#2527;&#2494; &#2438;&#2474;&#2472;&#2494;&#2480; &#2453;&#2494;&#2460; &#2472;&#2527;&#2404;</span></p><p class="c1"><span class="c0">&#2536;&#2404; &#2474;&#2509;&#2480;&#2507;&#2460;&#2503;&#2453;&#2509;&#2463; &#2478;&#2509;&#2479;&#2494;&#2472;&#2503;&#2460;&#2494;&#2480;&#2503;&#2480; &#2439;&#2472;&#2509;&#2488;&#2463;&#2509;&#2480;&#2494;&#2453;&#2486;&#2472; &#2437;&#2472;&#2497;&#2479;&#2494;&#2527;&#2496; &#2480;&#2495;&#2488;&#2494;&#2480;&#2509;&#2458; &#2453;&#2480;&#2503; &#2469;&#2495;&#2478; &#2454;&#2497;&#2433;&#2460;&#2503; &#2476;&#2503;&#2480; &#2453;&#2480;&#2494; &#2438;&#2474;&#2472;&#2494;&#2480; &#2453;&#2494;&#2460; &#2472;&#2527;&#2404;</span></p><p class="c1"><span class="c0">&#2537;&#2404; &#2474;&#2509;&#2480;&#2507;&#2460;&#2503;&#2453;&#2509;&#2463; &#2478;&#2509;&#2479;&#2494;&#2472;&#2503;&#2460;&#2494;&#2480;&#2503;&#2480; &#2439;&#2472;&#2509;&#2488;&#2463;&#2509;&#2480;&#2494;&#2453;&#2486;&#2472; &#2437;&#2472;&#2497;&#2479;&#2494;&#2527;&#2496; &#2480;&#2495;&#2488;&#2494;&#2480;&#2509;&#2458; &#2453;&#2480;&#2503; &#2474;&#2509;&#2482;&#2494;&#2455;&#2495;&#2472; &#2454;&#2497;&#2433;&#2460;&#2503; &#2476;&#2503;&#2480; &#2453;&#2480;&#2494; &#2438;&#2474;&#2472;&#2494;&#2480; &#2453;&#2494;&#2460; &#2472;&#2527;&#2404;</span></p><p class="c1"><span class="c0">&#2538;&#2404; &#2451;&#2527;&#2503;&#2476;&#2488;&#2494;&#2439;&#2463;&#2503;&#2480; &#2453;&#2494;&#2482;&#2494;&#2480; &#2488;&#2509;&#2453;&#2495;&#2478; &#2453;&#2495; &#2489;&#2476;&#2503; &#2488;&#2503;&#2463;&#2494; &#2474;&#2459;&#2472;&#2509;&#2470; &#2453;&#2480;&#2494; &#2476;&#2494; &#2453;&#2507;&#2472; &#2488;&#2495;&#2470;&#2509;&#2471;&#2494;&#2472;&#2509;&#2468; &#2472;&#2503;&#2527;&#2494; &#2438;&#2474;&#2472;&#2494;&#2480; &#2453;&#2494;&#2460; &#2472;&#2527;&#2404;</span></p><p class="c1"><span class="c0">&#2539;&#2404; &#2453;&#2507;&#2472; &#2471;&#2480;&#2472;&#2503;&#2480; &#2488;&#2478;&#2488;&#2509;&#2479;&#2494;&#2480; &#2488;&#2478;&#2494;&#2471;&#2494;&#2472;&#2503;&#2480; &#2460;&#2472;&#2509;&#2479;&#2503; &#2453;&#2507;&#2472; &#2474;&#2509;&#2480;&#2453;&#2494;&#2480; &#2488;&#2494;&#2474;&#2507;&#2480;&#2509;&#2463; &#2463;&#2495;&#2478;&#2503;&#2480; &#2488;&#2494;&#2469;&#2503; &#2479;&#2507;&#2455;&#2494;&#2479;&#2507;&#2455; &#2453;&#2480;&#2494; (&#2479;&#2503;&#2478;&#2472;, &#2486;&#2474;&#2495;&#2475;&#2494;&#2439; &#2488;&#2494;&#2474;&#2507;&#2480;&#2509;&#2463; &#2463;&#2495;&#2478;, &#2469;&#2495;&#2478; &#2488;&#2494;&#2474;&#2507;&#2480;&#2509;&#2463;, &#2474;&#2509;&#2482;&#2494;&#2455;&#2495;&#2472; &#2488;&#2494;&#2474;&#2507;&#2480;&#2509;&#2463;, &#2447;&#2476;&#2434; &#2437;&#2472;&#2509;&#2479; &#2453;&#2507;&#2472; &#2488;&#2494;&#2474;&#2507;&#2480;&#2509;&#2463; &#2463;&#2495;&#2478;) &#2438;&#2474;&#2472;&#2494;&#2480; &#2453;&#2494;&#2460; &#2472;&#2527;&#2404;</span></p><p class="c1"><span class="c0">&#2540;&#2404; &#2474;&#2509;&#2480;&#2507;&#2460;&#2503;&#2453;&#2509;&#2463; &#2486;&#2503;&#2487; &#2489;&#2476;&#2494;&#2480; &#2474;&#2480;&#2503; &#2453;&#2509;&#2482;&#2494;&#2527;&#2503;&#2472;&#2509;&#2463;&#2503;&#2480; &#2460;&#2472;&#2509;&#2479;&#2503; &#2453;&#2507;&#2472; &#2474;&#2509;&#2480;&#2453;&#2494;&#2480; &#2463;&#2509;&#2480;&#2503;&#2439;&#2472;&#2495;&#2434; &#2477;&#2495;&#2465;&#2495;&#2451; &#2476;&#2494;&#2472;&#2494;&#2472;&#2507; &#2438;&#2474;&#2472;&#2494;&#2480; &#2453;&#2494;&#2460; &#2472;&#2527;&#2404;</span></p><p class="c1"><span class="c0">&#2541;&#2404; &#2438;&#2474;&#2472;&#2495; &#2488;&#2509;&#2476;&#2496;&#2453;&#2494;&#2480; &#2453;&#2480;&#2459;&#2503;&#2472; &#2479;&#2503;, &#2438;&#2474;&#2472;&#2494;&#2453;&#2503; &#2438;&#2474;&#2472;&#2494;&#2480; &#2488;&#2453;&#2482; &#2453;&#2494;&#2460;&#2503;&#2480; &#2488;&#2478;&#2527; Seopage1 &#2447;&#2480; &#2439; &#2438;&#2480; &#2474;&#2495; &#2488;&#2495;&#2488;&#2509;&#2463;&#2503;&#2478;&#2503; &#2463;&#2509;&#2480;&#2509;&#2479;&#2494;&#2453; &#2453;&#2480;&#2468;&#2503; &#2489;&#2476;&#2503; &#2447;&#2476;&#2434; &#2479;&#2470;&#2495; &#2438;&#2474;&#2472;&#2495; &#2453;&#2507;&#2472; &#2453;&#2494;&#2480;&#2467;&#2503; &#2453;&#2478;&#2474;&#2453;&#2509;&#2487;&#2503; 7 &#2456;&#2467;&#2509;&#2463;&#2494; &#2463;&#2509;&#2480;&#2509;&#2479;&#2494;&#2453; &#2472;&#2494; &#2453;&#2480;&#2503;&#2472; &#2468;&#2494;&#2489;&#2482;&#2503; &#2438;&#2474;&#2472;&#2494;&#2453;&#2503; &#2474;&#2509;&#2480;&#2486;&#2509;&#2472; &#2453;&#2480;&#2494; &#2489;&#2476;&#2503;&#2404;</span></p><p class="c1 c3"><span class="c0"></span></p><p class="c1"><span class="c0">&#2488;&#2494;&#2471;&#2494;&#2480;&#2467;&#2477;&#2494;&#2476;&#2503;, &#2479;&#2503;&#2453;&#2507;&#2472;&#2507; &#2471;&#2480;&#2467;&#2503;&#2480; &#2474;&#2509;&#2480;&#2479;&#2492;&#2507;&#2460;&#2472;&#2496;&#2479;&#2492;&#2468;&#2494; &#2476;&#2494; Requirements &#2447;&#2480; &#2476;&#2495;&#2487;&#2527;&#2503; &#2488;&#2495;&#2470;&#2509;&#2471;&#2494;&#2472;&#2509;&#2468; &#2472;&#2503;&#2527;&#2494; (&#2479;&#2503; &#2453;&#2507;&#2472; &#2471;&#2480;&#2467;&#2503;&#2480;) &#2474;&#2509;&#2480;&#2507;&#2460;&#2503;&#2453;&#2509;&#2463; &#2478;&#2509;&#2479;&#2494;&#2472;&#2503;&#2460;&#2494;&#2480;&#2503;&#2480; &#2453;&#2494;&#2460;&#2404; &#2438;&#2474;&#2472;&#2494;&#2480; &#2453;&#2494;&#2460; &#2489;&#2458;&#2509;&#2459;&#2503;, &#2438;&#2474;&#2472;&#2494;&#2480; &#2441;&#2474;&#2480;&#2503; &#2447;&#2488;&#2494;&#2439;&#2472; &#2453;&#2480;&#2494; &#2453;&#2494;&#2460;&#2455;&#2497;&#2482;&#2507;&#2453;&#2503; &#2474;&#2509;&#2480;&#2507;&#2460;&#2503;&#2453;&#2509;&#2463; &#2478;&#2509;&#2479;&#2494;&#2472;&#2503;&#2460;&#2494;&#2480;&#2503;&#2480; &#2470;&#2503;&#2527;&#2494; &#2488;&#2495;&#2470;&#2509;&#2471;&#2494;&#2472;&#2509;&#2468; &#2437;&#2472;&#2509;&#2479;&#2479;&#2494;&#2527;&#2496; &#2476;&#2494;&#2488;&#2509;&#2468;&#2476;&#2494;&#2527;&#2472; &#2453;&#2480;&#2494;&#2404;</span></p><p class="c1 c3"><span class="c0"></span></p><p class="c1"><span class="c0">&#2479;&#2470;&#2495; &#2453;&#2507;&#2472; &#2453;&#2494;&#2480;&#2467;&#2503;, &#2474;&#2509;&#2480;&#2507;&#2460;&#2503;&#2453;&#2509;&#2463; &#2478;&#2509;&#2479;&#2494;&#2472;&#2503;&#2460;&#2494;&#2480; &#2447;&#2439; &#2453;&#2507;&#2472;&#2451; &#2453;&#2494;&#2460;&#2503; &#2438;&#2474;&#2472;&#2494;&#2480; &#2488;&#2494;&#2489;&#2494;&#2479;&#2509;&#2479;&#2503;&#2480; &#2474;&#2509;&#2480;&#2479;&#2492;&#2507;&#2460;&#2472; &#2478;&#2472;&#2503; &#2453;&#2480;&#2503;, &#2468;&#2494;&#2489;&#2482;&#2503; &#2468;&#2495;&#2472;&#2495; &#2488;&#2503;&#2455;&#2497;&#2482;&#2495;&#2480; &#2460;&#2472;&#2509;&#2479; &#2438;&#2482;&#2494;&#2470;&#2494; &#2438;&#2482;&#2494;&#2470;&#2494; &#2476;&#2495;&#2486;&#2503;&#2487; &#2471;&#2480;&#2467;&#2503;&#2480; &#2453;&#2494;&#2460; &#2468;&#2504;&#2480;&#2495; &#2453;&#2480;&#2468;&#2503; &#2489;&#2476;&#2503; &#2447;&#2476;&#2434; &#2448; &#2453;&#2494;&#2460;&#2455;&#2497;&#2482;&#2495; &#2437;&#2476;&#2486;&#2509;&#2479;&#2439; &#2463;&#2474; &#2478;&#2509;&#2479;&#2494;&#2472;&#2503;&#2460;&#2478;&#2503;&#2472;&#2509;&#2463; &#2453;&#2480;&#2509;&#2468;&#2499;&#2453; &#2437;&#2472;&#2497;&#2478;&#2507;&#2470;&#2495;&#2468; &#2489;&#2468;&#2503; &#2489;&#2476;&#2503;&#2404; &#2479;&#2470;&#2495; &#2438;&#2474;&#2472;&#2494;&#2453;&#2503; &#2447;&#2439; &#2471;&#2480;&#2467;&#2503;&#2480; &#2453;&#2507;&#2472;&#2451; &#2453;&#2494;&#2460; &#2453;&#2480;&#2468;&#2503; &#2476;&#2482;&#2494; &#2489;&#2479;&#2492; &#2447;&#2476;&#2434; &#2488;&#2503;&#2439; &#2453;&#2494;&#2460;&#2463;&#2495; &#2479;&#2470;&#2495; &#2463;&#2474; &#2478;&#2509;&#2479;&#2494;&#2472;&#2503;&#2460;&#2478;&#2503;&#2472;&#2509;&#2463; &#2453;&#2480;&#2509;&#2468;&#2499;&#2453; &#2437;&#2472;&#2497;&#2478;&#2507;&#2470;&#2495;&#2468; &#2472;&#2494; &#2489;&#2479;&#2492; &#2468;&#2476;&#2503; &#2468;&#2494; &#2437;&#2476;&#2495;&#2482;&#2478;&#2509;&#2476;&#2503; &#2463;&#2474; &#2478;&#2509;&#2479;&#2494;&#2472;&#2503;&#2460;&#2478;&#2503;&#2472;&#2509;&#2463;&#2503;&#2480; &#2453;&#2494;&#2459;&#2503; &#2480;&#2495;&#2474;&#2507;&#2480;&#2509;&#2463;&#2503;&#2480; &#2478;&#2494;&#2471;&#2509;&#2479;&#2478;&#2503; &#2460;&#2494;&#2472;&#2494;&#2468;&#2503; &#2489;&#2476;&#2503;&#2404; &nbsp;&#2488;&#2494;&#2471;&#2494;&#2480;&#2467;&#2468;, &#2447;&#2439; &#2471;&#2480;&#2467;&#2503;&#2480; &#2453;&#2494;&#2460;&#2503;&#2480; &#2453;&#2509;&#2487;&#2503;&#2468;&#2509;&#2480;&#2503;, &#2488;&#2434;&#2486;&#2509;&#2482;&#2495;&#2487;&#2509;&#2463; &#2474;&#2503;&#2460;&#2503;&#2480; &#2465;&#2494;&#2472; &#2474;&#2494;&#2486;&#2503; &ldquo;Authorized by top management&rdquo; &#2447;&#2439; &#2471;&#2480;&#2467;&#2503;&#2480; &#2447;&#2453;&#2463;&#2495; &#2482;&#2503;&#2454;&#2494; &#2470;&#2503;&#2454;&#2468;&#2503; &#2474;&#2494;&#2480;&#2476;&#2503;&#2472; &#2479;&#2470;&#2495; &#2488;&#2503;&#2463;&#2495; &#2463;&#2474; &#2478;&#2509;&#2479;&#2494;&#2472;&#2503;&#2460;&#2478;&#2503;&#2472;&#2509;&#2463; &#2453;&#2480;&#2509;&#2468;&#2499;&#2453; &#2437;&#2472;&#2497;&#2478;&#2507;&#2470;&#2495;&#2468; &#2489;&#2479;&#2492;&#2404;</span></p><p class="c1 c3"><span class="c0"></span></p><p class="c1"><span class="c0">&#2447;&#2439;&#2471;&#2480;&#2467;&#2503;&#2480; &#2437;&#2472;&#2472;&#2497;&#2478;&#2507;&#2470;&#2495;&#2468; &#2453;&#2494;&#2460;&#2503;&#2480; &#2453;&#2509;&#2487;&#2503;&#2468;&#2509;&#2480;&#2503; &#2438;&#2474;&#2472;&#2495; &#2479;&#2470;&#2495; &#2480;&#2495;&#2474;&#2507;&#2480;&#2509;&#2463; &#2472;&#2494; &#2453;&#2480;&#2503;&#2472;, &#2468;&#2494;&#2489;&#2482;&#2503; &#2488;&#2503;&#2439; &#2453;&#2494;&#2460;&#2503;&#2480; &#2460;&#2472;&#2509;&#2479;&#2503; &#2438;&#2474;&#2472;&#2495; &#2479;&#2503;&#2439; &#2488;&#2478;&#2527; &#2476;&#2509;&#2479;&#2527; &#2453;&#2480;&#2476;&#2503;&#2472; &#2468;&#2494; &#2455;&#2509;&#2480;&#2489;&#2472;&#2479;&#2507;&#2455;&#2509;&#2479; &#2476;&#2482;&#2503; &#2476;&#2495;&#2476;&#2503;&#2458;&#2495;&#2468; &#2489;&#2476;&#2503; &#2472;&#2494; &#2447;&#2476;&#2434; &#2447;&#2439; &#2471;&#2480;&#2467;&#2503;&#2480; &#2437;&#2472;&#2472;&#2497;&#2478;&#2507;&#2470;&#2495;&#2468; &#2453;&#2494;&#2460;&#2503; &#2460;&#2524;&#2495;&#2468; &#2469;&#2494;&#2453;&#2494;&#2480; &#2460;&#2472;&#2509;&#2479;&#2503; &#2438;&#2474;&#2472;&#2494;&#2480; &#2474;&#2494;&#2480;&#2475;&#2480;&#2509;&#2478;&#2503;&#2472;&#2509;&#2488; &#2488;&#2509;&#2453;&#2507;&#2480;&#2503; &#2472;&#2503;&#2455;&#2503;&#2463;&#2495;&#2477; &#2474;&#2527;&#2503;&#2472;&#2509;&#2463; &#2479;&#2507;&#2455; &#2489;&#2476;&#2503;&#2404;</span></p><p class="c1 c3"><span class="c0"></span></p></body></html>`


  return (
    <Modal isOpen={isOpen} className="subtask-timer-confirmation--modal">
        <div className='subtask-timer-confirmation--panel'>
           <div className="subtask-timer-confirmation--content">
            <div dangerouslySetInnerHTML={{__html: text}} />

            
                {/* <h4 className='mb-3'> Do You Understand The Following Things? </h4>
                
                <ol type='A'>
                    <li> Your job is not to decide what the look and feel of a website will be based on a few reference websites. </li>
                    <li>Your job is not to research a theme based on an instruction shared by the PM.</li>
                    <li>Your job is not to research a plugin based on a problem shared by PM.</li>
                    <li>Your job is not to choose the color scheme of a website.</li>
                    <li>Your job is not to talk to the support for example the Shopify support team, theme support, plugin support and any other support for any solution.</li>
                    <li>Your job is not to create the training videos for the client after the completion of a project.</li>
                    <li>You understand that all your hours have to be logged/tracked, and you will be questioned if you don’t log at least 7 hours for any reason.</li>
                </ol>


                <p>In general, anything that has to do with requirements define (of any sort) has to be done by the project manager. Your job is to execute the work based on the defined requirements. </p> 

                <p>If for any reason, project manager needs your help for any of those things, he will have to create a separate task for each of them and those tasks have to be authorized by the top management mandatorily. Report immediately if you are asked to do any of these and if it wasn’t authorized by top management. You should see a text like “Authorized by top management” on the right side of the task title if it was authorized.</p>
                
                <p> In case, you don’t report, the extra time taken for these will be considered as your lacking (as they will remain unaccountable) and you will receive negative performance score.”</p>
                */}
                <div className='d-flex align-items-center'>
                     <Button 
                        onClick={onConfirm} 
                        className='ml-auto'
                        disabled={!buttonVisible}
                      > 
                        Yes, I Fully Understand This {!buttonVisible && `(${countDown})`}
                      </Button> 
                </div> 
           </div>
        </div>
    </Modal>
  )
}

export default StartTimerConfirmationModal