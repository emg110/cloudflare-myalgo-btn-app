;(function () {
  "use strict"

  if (!window.addEventListener) return

  let options = INSTALL_OPTIONS;
  let element;

  function updateElement() {
    element = INSTALL.createElement(options.location, element)
    element.setAttribute("app", "cloudflare-myalgo-btn-app")
    element.setAttribute("data-theme", options.theme)

    const logoContainer = document.createElement("a")
    const imgContainer = document.createElement("div")
    let svg
    logoContainer.className = "logo-container"
    logoContainer.href = "https://wallet.myalgo.com/"
    logoContainer.target = "_blank"

    let width = 140;
    let height = 52;
    if (options.theme === "light" && options.type === "logotext") {
      width = 140;
      height = 42;
    }
    if (options.theme === "dark" && options.type === "logotext") {
      width = 140;
      height = 42;
    }
    if (options.theme === "original" && options.type === "logotext") {
      width = 140;
      height = 42;
    }
    if (options.theme === "light" && options.type === "logo") {
      width = 140;
      height = 42;
    }
    if (options.theme === "dark" && options.type === "logo") {
      width = 140;
      height = 42;
    }
    if (options.theme === "original" && options.type === "logo") {
      width = 140;
      height = 42;
    }

    let viewBoxW =
      options.width && Number(options.width) > 0 ? Number(options.width) : width
    let viewBoxH =
      options.height && Number(options.height) > 0
        ? Number(options.height)
        : height
    let viewBoxStr = `"0 0 ${viewBoxW} ${viewBoxH}"`;
    let srcLogoTextLight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox=${viewBoxStr}>
    <defs>
        <style>
            .cls-1{fill:#000}
        </style>
    </defs>
    <g id="Group_5726" transform="translate(-838.283 -220.034)">
        <g fill="#fff" id="Group_5074" transform="translate(838.441 219.668)">
            <path id="Subtraction_11" d="M15 30A15 15 0 0 1 4.394 4.394a15 15 0 1 1 21.213 21.213A14.9 14.9 0 0 1 15 30zm3.991-19.508l.122.468 2.459 8.91h2L20.216 8.314 20.134 8h-1.745l-.04.063-1.633 2.9-1.674 2.974-.04.071-.019-.071-.2-.764-.572-2.21-.061-.22-.633-2.429L13.432 8h-1.745l-.041.063-1.633 2.9-1.674 2.974L6.675 16.9 5 19.873h2L8.676 16.9l1.674-2.963 1.663-2.974.275-.471.122.471.51 1.958.634 2.439.221.832-.4.707-1.675 2.974h2l.707-1.255 1.228-2.179 1.414-2.5 1.663-2.974.274-.469z" class="cls-1" transform="translate(-.158 .366)"/>
        </g>
        <path fill="#fff" id="MyAlgo" d="M45.177 26.634l3.37-18.266a.549.549 0 0 1 .489-.408h.435a.552.552 0 0 1 .462.3l5.681 13.89h.109l5.654-13.89a.518.518 0 0 1 .462-.3h.435a.549.549 0 0 1 .489.408l3.343 18.266a.463.463 0 0 1-.489.625H63.85a.565.565 0 0 1-.516-.381l-2.011-12.15h-.082l-4.893 12.5a.462.462 0 0 1-.462.3H55.4a.488.488 0 0 1-.462-.3l-4.92-12.5h-.109l-1.959 12.15a.529.529 0 0 1-.489.381h-1.767a.488.488 0 0 1-.517-.625zm26.1.245l-4.73-9.785a.48.48 0 0 1 .462-.707h1.794a.591.591 0 0 1 .462.3l3.37 7.23h.027l3.262-7.23a.547.547 0 0 1 .571-.3h1.549a.466.466 0 0 1 .462.707l-8.313 17.993a.543.543 0 0 1-.462.326H68.1a.487.487 0 0 1-.462-.734zm12.227.381a.48.48 0 0 1-.462-.707L91.39 8.259a.636.636 0 0 1 .462-.3h.272a.636.636 0 0 1 .462.3l8.29 18.293a.48.48 0 0 1-.462.707H98.7a.633.633 0 0 1-.625-.408l-1.685-3.724H87.5c-.544 1.25-1.114 2.474-1.658 3.724a.683.683 0 0 1-.625.408zm5.056-6.469h6.8l-3.343-7.448h-.136zm13.41 5.953V8.748a.535.535 0 0 1 .516-.516h1.549a.535.535 0 0 1 .516.516v17.994a.535.535 0 0 1-.516.516h-1.549a.535.535 0 0 1-.513-.516zm4.385-.136a3.747 3.747 0 0 1 1.93-3.1 4.365 4.365 0 0 1-.843-2.637 4.657 4.657 0 0 1 4.675-4.757h4.757a.5.5 0 0 1 .516.516v.68c0 .19-.109.435-.3.462l-1.495.408a3.638 3.638 0 0 1 1.169 2.908 4.442 4.442 0 0 1-4.621 4.431 8 8 0 0 1-2.365-.435 1.5 1.5 0 0 0-1.114 1.332 1.159 1.159 0 0 0 1.3 1.114h3.7c2.365 0 4.267 1.278 4.267 3.642 0 2.392-2.174 4.512-5.79 4.512-3.833 0-5.382-1.957-5.382-3.724a3 3 0 0 1 1.6-2.555v-.082a2.805 2.805 0 0 1-2.001-2.717zm5.817-3.18a2.289 2.289 0 0 0 2.283-2.5 2.289 2.289 0 0 0-2.283-2.5 2.357 2.357 0 0 0-2.392 2.5 2.357 2.357 0 0 0 2.395 2.498zm-2.881 8.1c0 1.114 1.169 1.93 2.827 1.93s3.1-.843 3.1-2.147c0-.435-.272-1.549-2.039-1.549-.788 0-1.6 0-2.392.054-.161.052-1.493.484-1.493 1.71zm9.2-9.731a5.5 5.5 0 1 1 5.491 5.735 5.623 5.623 0 0 1-5.492-5.732zm2.419 0a3.087 3.087 0 1 0 6.143 0 3.08 3.08 0 1 0-6.143 0z" class="cls-1" transform="translate(827.812 216.575)"/>
    </g>
</svg>`;

    let srcLogoTextDark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox=${viewBoxStr}>
    <defs>
        <style>
            .cls-1{fill:#ffffff}
        </style>
    </defs>
    <g id="Group_5726" transform="translate(-838.283 -220.034)">
        <g id="Group_5074" transform="translate(838.441 219.668)">
            <path id="Subtraction_11" d="M15 30A15 15 0 0 1 4.394 4.394a15 15 0 1 1 21.213 21.213A14.9 14.9 0 0 1 15 30zm3.991-19.508l.122.468 2.459 8.91h2L20.216 8.314 20.134 8h-1.745l-.04.063-1.633 2.9-1.674 2.974-.04.071-.019-.071-.2-.764-.572-2.21-.061-.22-.633-2.429L13.432 8h-1.745l-.041.063-1.633 2.9-1.674 2.974L6.675 16.9 5 19.873h2L8.676 16.9l1.674-2.963 1.663-2.974.275-.471.122.471.51 1.958.634 2.439.221.832-.4.707-1.675 2.974h2l.707-1.255 1.228-2.179 1.414-2.5 1.663-2.974.274-.469z" class="cls-1" transform="translate(-.158 .366)"/>
        </g>
        <path id="MyAlgo" d="M45.177 26.634l3.37-18.266a.549.549 0 0 1 .489-.408h.435a.552.552 0 0 1 .462.3l5.681 13.89h.109l5.654-13.89a.518.518 0 0 1 .462-.3h.435a.549.549 0 0 1 .489.408l3.343 18.266a.463.463 0 0 1-.489.625H63.85a.565.565 0 0 1-.516-.381l-2.011-12.15h-.082l-4.893 12.5a.462.462 0 0 1-.462.3H55.4a.488.488 0 0 1-.462-.3l-4.92-12.5h-.109l-1.959 12.15a.529.529 0 0 1-.489.381h-1.767a.488.488 0 0 1-.517-.625zm26.1.245l-4.73-9.785a.48.48 0 0 1 .462-.707h1.794a.591.591 0 0 1 .462.3l3.37 7.23h.027l3.262-7.23a.547.547 0 0 1 .571-.3h1.549a.466.466 0 0 1 .462.707l-8.313 17.993a.543.543 0 0 1-.462.326H68.1a.487.487 0 0 1-.462-.734zm12.227.381a.48.48 0 0 1-.462-.707L91.39 8.259a.636.636 0 0 1 .462-.3h.272a.636.636 0 0 1 .462.3l8.29 18.293a.48.48 0 0 1-.462.707H98.7a.633.633 0 0 1-.625-.408l-1.685-3.724H87.5c-.544 1.25-1.114 2.474-1.658 3.724a.683.683 0 0 1-.625.408zm5.056-6.469h6.8l-3.343-7.448h-.136zm13.41 5.953V8.748a.535.535 0 0 1 .516-.516h1.549a.535.535 0 0 1 .516.516v17.994a.535.535 0 0 1-.516.516h-1.549a.535.535 0 0 1-.513-.516zm4.385-.136a3.747 3.747 0 0 1 1.93-3.1 4.365 4.365 0 0 1-.843-2.637 4.657 4.657 0 0 1 4.675-4.757h4.757a.5.5 0 0 1 .516.516v.68c0 .19-.109.435-.3.462l-1.495.408a3.638 3.638 0 0 1 1.169 2.908 4.442 4.442 0 0 1-4.621 4.431 8 8 0 0 1-2.365-.435 1.5 1.5 0 0 0-1.114 1.332 1.159 1.159 0 0 0 1.3 1.114h3.7c2.365 0 4.267 1.278 4.267 3.642 0 2.392-2.174 4.512-5.79 4.512-3.833 0-5.382-1.957-5.382-3.724a3 3 0 0 1 1.6-2.555v-.082a2.805 2.805 0 0 1-2.001-2.717zm5.817-3.18a2.289 2.289 0 0 0 2.283-2.5 2.289 2.289 0 0 0-2.283-2.5 2.357 2.357 0 0 0-2.392 2.5 2.357 2.357 0 0 0 2.395 2.498zm-2.881 8.1c0 1.114 1.169 1.93 2.827 1.93s3.1-.843 3.1-2.147c0-.435-.272-1.549-2.039-1.549-.788 0-1.6 0-2.392.054-.161.052-1.493.484-1.493 1.71zm9.2-9.731a5.5 5.5 0 1 1 5.491 5.735 5.623 5.623 0 0 1-5.492-5.732zm2.419 0a3.087 3.087 0 1 0 6.143 0 3.08 3.08 0 1 0-6.143 0z" class="cls-1" transform="translate(827.812 216.575)"/>
    </g>
</svg>`;

    let srcLogoTextBlue = `<svg xmlns="http://www.w3.org/2000/svg" viewBox=${viewBoxStr} style=""><rect id="backgroundrect" width="100%" height="100%" x="0" y="0" fill="none" stroke="none"/>
 <!-- Generator: Sketch 56 (81588) - https://sketch.com -->

 <title>logos/myAlgo-logo-full</title>
 <desc>Created with Sketch.</desc>
 <g style="">
  <title>background</title>
  <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1"/>
 </g>
 <g style="" class="currentLayer">
  <title>Layer 1</title>
  <rect rx="15.760007858276367" height="31.903682708740234" width="31.520017623901367" y="1" x="3.8888330459594727" fill="#245ec7" id="Rectangle-Copy-2" class="" fill-opacity="1"/>
  <polygon fill="#ffffff" points="25.374890618026257,12.171238899230957 25.214440636336803,11.558270454406738 24.853431038558483,12.171238899230957 22.674002937972546,16.039752960205078 20.821980766952038,19.29556655883789 19.213927559554577,22.13035774230957 18.28840570896864,23.76315689086914 15.667743019759655,23.76315689086914 17.860541634261608,19.894643783569336 18.380845360457897,18.97435188293457 18.09182482212782,17.89227867126465 17.26283960789442,14.718463897705078 16.594302468001842,12.171238899230957 16.433854393661022,11.558270454406738 16.072844795882702,12.171238899230957 13.893416695296764,16.039752960205078 11.700618080794811,19.894643783569336 9.507818512618542,23.76315689086914 6.887156777083874,23.76315689086914 9.079955391585827,19.894643783569336 11.259383492171764,16.039752960205078 13.452182106673717,12.171238899230957 15.591498665511608,8.398077011108398 15.644981674849987,8.3163480758667 17.931374840438366,8.3163480758667 18.038340859115124,8.724993705749512 18.867326073348522,11.885187149047852 18.94755106419325,12.171238899230957 19.69631128758192,15.045380592346191 19.9637253805995,16.039752960205078 19.98797159641981,16.13172721862793 20.039969734847546,16.039752960205078 22.23277025669813,12.171238899230957 24.37208490818739,8.398077011108398 24.425568871200085,8.3163480758667 26.71196299046278,8.3163480758667 26.818927101790905,8.724993705749512 31.21642427891493,23.76315689086914 28.595763497054577,23.76315689086914 " id="logo"/>
  <path fill-rule="nonzero" fill="#245ec7" id="MyAlgo" d="m45.176,24.448l2.976,-16.128c0.048,-0.192 0.24,-0.36 0.432,-0.36l0.384,0c0.144,0 0.36,0.12 0.408,0.264l5.016,12.264l0.096,0l4.992,-12.264c0.048,-0.144 0.24,-0.264 0.408,-0.264l0.384,0c0.192,0 0.384,0.168 0.432,0.36l2.952,16.128c0.072,0.336 -0.096,0.552 -0.432,0.552l-1.56,0c-0.216,0 -0.408,-0.168 -0.456,-0.336l-1.776,-10.728l-0.072,0l-4.32,11.04c-0.048,0.144 -0.192,0.264 -0.408,0.264l-0.432,0c-0.192,0 -0.36,-0.12 -0.408,-0.264l-4.344,-11.04l-0.096,0l-1.728,10.728c-0.024,0.168 -0.24,0.336 -0.432,0.336l-1.56,0c-0.336,0 -0.504,-0.216 -0.456,-0.552zm23.0482,0.216l-4.176,-8.64c-0.144,-0.312 0.048,-0.624 0.408,-0.624l1.584,0c0.144,0 0.336,0.12 0.408,0.264l2.976,6.384l0.024,0l2.88,-6.384c0.096,-0.216 0.288,-0.264 0.504,-0.264l1.368,0c0.384,0 0.576,0.312 0.408,0.624l-7.344,15.888c-0.072,0.144 -0.216,0.288 -0.408,0.288l-1.44,0c-0.36,0 -0.576,-0.312 -0.408,-0.648l3.216,-6.888zm10.79639,0.336c-0.36,0 -0.552,-0.312 -0.408,-0.624l7.368,-16.152c0.072,-0.144 0.288,-0.264 0.408,-0.264l0.24,0c0.12,0 0.336,0.12 0.408,0.264l7.32,16.152c0.144,0.312 -0.048,0.624 -0.408,0.624l-1.512,0c-0.288,0 -0.456,-0.144 -0.552,-0.36l-1.488,-3.288l-7.848,0c-0.48,1.104 -0.984,2.184 -1.464,3.288c-0.072,0.168 -0.264,0.36 -0.552,0.36l-1.512,0zm4.464,-5.712l6,0l-2.952,-6.576l-0.12,0l-2.928,6.576zm11.84019,5.256l0,-15.888c0,-0.24 0.216,-0.456 0.456,-0.456l1.368,0c0.24,0 0.456,0.216 0.456,0.456l0,15.888c0,0.24 -0.216,0.456 -0.456,0.456l-1.368,0c-0.24,0 -0.456,-0.216 -0.456,-0.456zm3.8722,-0.12c0,-1.848 1.704,-2.736 1.704,-2.736c0,0 -0.744,-0.888 -0.744,-2.328c0,-2.232 1.67999,-4.2 4.128,-4.2l4.2,0c0.264,0 0.45599,0.192 0.45599,0.456l0,0.6c0,0.168 -0.09599,0.384 -0.264,0.408l-1.31999,0.36c0,0 1.032,0.768 1.032,2.568c0,2.04 -1.58401,3.912 -4.08,3.912c-1.224,0 -1.896,-0.384 -2.08801,-0.384c-0.16799,0 -0.98399,0.408 -0.98399,1.176c0,0.552 0.432,0.984 1.152,0.984l3.26399,0c2.08801,0 3.768,1.128 3.768,3.216c0,2.112 -1.92,3.984 -5.11199,3.984c-3.384,0 -4.752,-1.728 -4.752,-3.288c0,-1.44 1.17599,-2.112 1.416,-2.256l0,-0.072c-0.504,-0.144 -1.776,-0.792 -1.776,-2.4zm5.136,-2.808c1.19999,0 2.01599,-0.912 2.01599,-2.208c0,-1.296 -0.816,-2.208 -2.01599,-2.208c-1.224,0 -2.11201,0.912 -2.11201,2.208c0,1.296 0.88801,2.208 2.11201,2.208zm-2.54401,7.152c0,0.984 1.03201,1.704 2.49601,1.704c1.464,0 2.736,-0.744 2.736,-1.896c0,-0.384 -0.24001,-1.368 -1.80001,-1.368c-0.696,0 -1.416,0 -2.11199,0.048c-0.14401,0.048 -1.32001,0.432 -1.32001,1.512zm8.1202,-8.592c0,-2.712 2.16,-5.016 4.848,-5.016c2.688,0 4.848,2.304 4.848,5.016c0,2.76 -2.16,5.064 -4.848,5.064c-2.688,0 -4.848,-2.304 -4.848,-5.064zm2.136,0c0,1.656 1.2,3 2.712,3c1.512,0 2.712,-1.344 2.712,-3c0,-1.608 -1.2,-2.928 -2.712,-2.928c-1.512,0 -2.712,1.32 -2.712,2.928z" class="" fill-opacity="1"/>
 </g>
</svg>`;

    let srcLogoLight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox=${viewBoxStr}>
    <path id="prefix__Subtraction_11" fill="#000" d="M15 30A15 15 0 0 1 4.392 4.393 15 15 0 1 1 25.6 25.606 14.9 14.9 0 0 1 15 30zm3.991-19.508l.122.468 2.459 8.91h2L20.214 8.314 20.132 8h-1.745l-.04.063-1.633 2.9-1.674 2.974-.04.071-.019-.071-.2-.764-.571-2.21-.061-.22-.633-2.429L13.43 8h-1.745l-.041.063-1.633 2.9-1.673 2.974L6.673 16.9 5 19.873h2L8.674 16.9l1.674-2.963 1.663-2.974.275-.471.122.471.51 1.958.634 2.439.22.832-.4.707-1.672 2.974h2l.707-1.255 1.228-2.179 1.414-2.5 1.663-2.974.274-.469z" data-name="Subtraction 11" transform="translate(.002)"/>
</svg>
`;
    let srcLogoDark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox=${viewBoxStr}>
    <path id="prefix__Subtraction_11" fill="#fff" d="M15 30A15 15 0 0 1 4.392 4.393 15 15 0 1 1 25.6 25.606 14.9 14.9 0 0 1 15 30zm3.991-19.508l.122.468 2.459 8.91h2L20.214 8.314 20.132 8h-1.745l-.04.063-1.633 2.9-1.674 2.974-.04.071-.019-.071-.2-.764-.571-2.21-.061-.22-.633-2.429L13.43 8h-1.745l-.041.063-1.633 2.9-1.673 2.974L6.673 16.9 5 19.873h2L8.674 16.9l1.674-2.963 1.663-2.974.275-.471.122.471.51 1.958.634 2.439.22.832-.4.707-1.672 2.974h2l.707-1.255 1.228-2.179 1.414-2.5 1.663-2.974.274-.469z" data-name="Subtraction 11" transform="translate(.002)"/>
</svg>
`;
    let srcLogoBlue = `<svg xmlns="http://www.w3.org/2000/svg" viewBox=${viewBoxStr}>
    <path id="prefix__Subtraction_11" fill="#245ec7" d="M15 30A15 15 0 0 1 4.392 4.393 15 15 0 1 1 25.6 25.606 14.9 14.9 0 0 1 15 30zm3.991-19.508l.122.468 2.459 8.91h2L20.214 8.314 20.132 8h-1.745l-.04.063-1.633 2.9-1.674 2.974-.04.071-.019-.071-.2-.764-.571-2.21-.061-.22-.633-2.429L13.43 8h-1.745l-.041.063-1.633 2.9-1.673 2.974L6.673 16.9 5 19.873h2L8.674 16.9l1.674-2.963 1.663-2.974.275-.471.122.471.51 1.958.634 2.439.22.832-.4.707-1.672 2.974h2l.707-1.255 1.228-2.179 1.414-2.5 1.663-2.974.274-.469z" data-name="Subtraction 11" transform="translate(.002)"/>
</svg>
`;
    if (options.theme === "light" && options.type === "logotext") {
      svg = srcLogoTextLight;
    }
    if (options.theme === "dark" && options.type === "logotext") {
      svg = srcLogoTextDark;
    }
    if (options.theme === "original" && options.type === "logotext") {
      svg = srcLogoTextBlue;
    }
    if (options.theme === "light" && options.type === "logo") {
      svg = srcLogoLight;
    }
    if (options.theme === "dark" && options.type === "logo") {
      svg = srcLogoDark;
    }
    if (options.theme === "original" && options.type === "logo") {
      svg = srcLogoBlue;
    }

    imgContainer.style = `padding: 5px; margin: 5px; height: auto; width:${viewBoxW}px;`;
    imgContainer.innerHTML = svg;
    logoContainer.appendChild(imgContainer);

    element.appendChild(logoContainer);
  }

  // This code ensures that the app doesn't run before the page is loaded.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateElement);
  } else {
    updateElement();
  }

  // INSTALL_SCOPE is an object that is used to handle option changes without refreshing the page.
  window.INSTALL_SCOPE = {
    setOptions(nextOptions) {
      options = nextOptions;

      updateElement();
    },
  }
})()
