
export const weatherUtils = {

 getWeatherDescription(weatherCode) {
    let description;
    let icon;
  
    switch (weatherCode) {
        case 200:
        description = "Thunderstorm  ";
        icon = '<svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 48 48"><path fill="#cfff28" d="M13.76 13.204a.75.75 0 0 1 .056 1.059l-1.111 1.236h2.276a.75.75 0 0 1 .587 1.218l-3.212 4.031a.75.75 0 0 1-1.173-.934l2.242-2.815h-2.403a.75.75 0 0 1-.558-1.251L12.7 13.26a.75.75 0 0 1 1.06-.056m-.758-8.195c3.168 0 4.966 2.097 5.227 4.63h.08a3.687 3.687 0 0 1 3.692 3.683a3.687 3.687 0 0 1-3.692 3.682h-1.747c.543-1.113-.252-2.505-1.58-2.505h-.136a1.75 1.75 0 0 0-2.89-1.907l-2.235 2.487a1.73 1.73 0 0 0-.277 1.926h-1.75a3.687 3.687 0 0 1-3.692-3.683a3.687 3.687 0 0 1 3.692-3.683h.08c.263-2.55 2.06-4.63 5.228-4.63M10 2c1.617 0 3.05.815 3.9 2.062a8 8 0 0 0-.898-.053c-2.994 0-5.171 1.677-5.937 4.213l-.068.24l-.058.238l-.206.039a4.68 4.68 0 0 0-3.449 3.045a3.282 3.282 0 0 1 1.812-5.881l.257-.006A4.72 4.72 0 0 1 10 2"/></svg>';
        break;
      case 201:
      case 202:
      case 210:
      case 211:
      case 212:
      case 221:
      case 230:
      case 231:
      case 232:
        description = "Thunderstorm";
        icon = '<svg xmlns="http://www.w3.org/2000/svg" width="8em" height="8em" viewBox="0 0 48 48"><path fill="#cfff28" d="M13.76 13.204a.75.75 0 0 1 .056 1.059l-1.111 1.236h2.276a.75.75 0 0 1 .587 1.218l-3.212 4.031a.75.75 0 0 1-1.173-.934l2.242-2.815h-2.403a.75.75 0 0 1-.558-1.251L12.7 13.26a.75.75 0 0 1 1.06-.056m-.758-8.195c3.168 0 4.966 2.097 5.227 4.63h.08a3.687 3.687 0 0 1 3.692 3.683a3.687 3.687 0 0 1-3.692 3.682h-1.747c.543-1.113-.252-2.505-1.58-2.505h-.136a1.75 1.75 0 0 0-2.89-1.907l-2.235 2.487a1.73 1.73 0 0 0-.277 1.926h-1.75a3.687 3.687 0 0 1-3.692-3.683a3.687 3.687 0 0 1 3.692-3.683h.08c.263-2.55 2.06-4.63 5.228-4.63M10 2c1.617 0 3.05.815 3.9 2.062a8 8 0 0 0-.898-.053c-2.994 0-5.171 1.677-5.937 4.213l-.068.24l-.058.238l-.206.039a4.68 4.68 0 0 0-3.449 3.045a3.282 3.282 0 0 1 1.812-5.881l.257-.006A4.72 4.72 0 0 1 10 2"/></svg>';
        break;
      case 300:
      case 301:
      case 302:
      case 310:
      case 311:
      case 312:
      case 313:
      case 314:
      case 321:
        description = "Drizzle";
        icon = '<svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 48 48"><path fill="#f0aa64" d="M26.002 12c6.337 0 9.932 4.194 10.455 9.26h.16c4.078 0 7.384 3.297 7.384 7.365c0 3.986-3.175 7.233-7.14 7.36l-.313.005l-4.3 7.158a1.75 1.75 0 0 1-3.075-1.661l.075-.14l3.217-5.357h-3.917l-4.3 7.158a1.75 1.75 0 0 1-3.076-1.661l.076-.14l3.217-5.357h-3.917l-4.3 7.158a1.75 1.75 0 0 1-3.076-1.661l.076-.14l3.217-5.357h-1.078c-4.078 0-7.384-3.298-7.384-7.365s3.306-7.365 7.384-7.365h.16c.526-5.1 4.118-9.26 10.455-9.26M7.569 20.19a1.75 1.75 0 0 1-.499 2.3l-.142.09l-1.299.75a1.75 1.75 0 0 1-1.892-2.94l.142-.09l1.3-.75a1.75 1.75 0 0 1 2.39.64m14.14-9.528c-3.801 1.22-6.509 4.09-7.62 7.922l-.094.34l-.116.476l-.412.077a9.3 9.3 0 0 0-3.341 1.43A7.883 7.883 0 0 1 21.71 10.662M5.505 9.978l.132.056l1.36.634a1.75 1.75 0 0 1-1.347 3.227l-.132-.055l-1.36-.634a1.75 1.75 0 0 1 1.347-3.228m19.11-5.762a1.75 1.75 0 0 1 .508 2.317l-.078.12l-.86 1.23a1.75 1.75 0 0 1-2.945-1.887l.078-.121l.86-1.229a1.75 1.75 0 0 1 2.438-.43m-10.291-.419l.065.156l.513 1.41a1.75 1.75 0 0 1-3.224 1.352l-.065-.156l-.513-1.41a1.75 1.75 0 0 1 3.224-1.352"/></svg>';
        break;
      case 500:
      case 501:
      case 502:
      case 503:
      case 504:
      case 511:
      case 520:
      case 521:
      case 522:
      case 531:
        description = "Rain";
        icon = `<svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 48 48"><path fill="#3924fd" d="M23.999 7c6.337 0 9.932 4.195 10.455 9.26h.16c4.078 0 7.384 3.298 7.384 7.365s-3.306 7.365-7.384 7.365h-.067l-4.3 7.159a1.75 1.75 0 0 1-3.075-1.662l.075-.14l3.217-5.357h-3.917l-4.3 7.159a1.75 1.75 0 0 1-3.075-1.662l.075-.14l3.217-5.357h-3.917l-4.3 7.159a1.75 1.75 0 0 1-3.075-1.662l.075-.14l3.217-5.357h-1.08C9.306 30.99 6 27.693 6 23.625s3.306-7.365 7.384-7.365h.16C14.07 11.161 17.662 7 24 7"/></svg>`;
        break;
      case 600:
      case 601:
      case 602:
      case 611:
      case 612:
      case 613:
      case 615:
      case 616:
      case 620:
      case 621:
      case 622:
        description = "Snow";
        icon = '<svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 48 48"><path fill="#ffffff" d="M24.25 3.5c.69 0 1.25.56 1.25 1.25v8.732l5.116-5.116a1.25 1.25 0 0 1 1.768 1.768L25.5 17.018V23h5.982l6.884-6.884a1.25 1.25 0 0 1 1.768 1.768L35.018 23h8.732a1.25 1.25 0 1 1 0 2.5h-8.732l4.866 4.866a1.25 1.25 0 0 1-1.768 1.768L31.482 25.5H25.5v5.982l6.634 6.634a1.25 1.25 0 0 1-1.768 1.768L25.5 35.018v8.732a1.25 1.25 0 1 1-2.5 0v-8.732l-5.116 5.116a1.25 1.25 0 0 1-1.768-1.768L23 31.482V25.5h-5.982l-6.884 6.884a1.25 1.25 0 0 1-1.768-1.768l5.116-5.116H4.75a1.25 1.25 0 1 1 0-2.5h8.732l-5.366-5.366a1.25 1.25 0 0 1 1.768-1.768L17.018 23H23v-5.982l-7.134-7.134a1.25 1.25 0 0 1 1.768-1.768L23 13.482V4.75c0-.69.56-1.25 1.25-1.25"/></svg>';
        break;
      case 701:
      case 711:
      case 721:
      case 731:
      case 741:
      case 751:
      case 761:
      case 762:
      case 771:
      case 781:
        description = "Atmosphere";
        icon = '<svg width="250" height="250" viewBox="0 0 512 512" style="color:currentColor" xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="127px" height="127px" viewBox="0 0 32 32" fill="currentColor" x="192.5" y="192.5" role="img" style="display:inline-block;vertical-align:middle" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path fill="currentColor" d="M2.43 21c0 .25.09.45.27.6c.17.17.37.26.61.26h9.54c.23 0 .43-.08.59-.25c.16-.17.24-.37.24-.61s-.08-.44-.24-.61a.764.764 0 0 0-.59-.25H3.31a.87.87 0 0 0-.62.26c-.17.17-.26.37-.26.6zm2.64-3.03c0 .23.09.42.27.58c.16.16.36.24.6.24h9.55c.24 0 .43-.08.59-.23c.16-.16.23-.35.23-.59s-.08-.44-.24-.6a.764.764 0 0 0-.59-.25H5.94c-.24 0-.44.08-.61.25a.79.79 0 0 0-.26.6zm1.14-2.33c0 .07.07.11.2.11h1.42c.09 0 .16-.05.23-.14c.22-.54.57-.99 1.05-1.35c.47-.36 1-.56 1.58-.6l.54-.07c.12 0 .18-.06.18-.18l.07-.51c.11-1.08.57-1.99 1.38-2.72c.81-.73 1.77-1.1 2.87-1.1s2.06.36 2.87 1.09c.81.72 1.28 1.63 1.39 2.73l.08.57c0 .12.06.19.17.19h1.62c.91 0 1.69.32 2.33.95c.64.63.96 1.39.96 2.29c0 .89-.32 1.65-.96 2.29c-.64.64-1.42.96-2.33.96h-6.91c-.11 0-.17.06-.17.17v1.38c0 .12.06.18.17.18h6.91c.91 0 1.74-.22 2.51-.67c.77-.44 1.37-1.05 1.82-1.81c.45-.76.67-1.59.67-2.49c0-.71-.15-1.37-.44-2.01c.77-1.01 1.15-2.1 1.15-3.29c0-.95-.24-1.83-.71-2.64s-1.11-1.45-1.92-1.92c-.81-.47-1.69-.7-2.64-.7c-1.52 0-2.81.56-3.84 1.67a6.09 6.09 0 0 0-2.72-.62c-.93 0-1.81.2-2.63.59s-1.51.95-2.07 1.66a5.78 5.78 0 0 0-1.13 2.43c-.88.2-1.64.6-2.29 1.2c-.65.6-1.11 1.33-1.36 2.17l-.05.19zm.62 8.45c0 .23.09.43.26.58c.16.16.36.24.6.24h9.56c.24 0 .44-.08.6-.23s.25-.35.25-.59s-.08-.44-.25-.61a.816.816 0 0 0-.6-.25H7.69c-.23 0-.43.09-.6.26c-.17.17-.26.37-.26.6zm13-15.07c.67-.65 1.5-.98 2.47-.98c.99 0 1.83.35 2.52 1.04c.69.69 1.04 1.53 1.04 2.52c0 .63-.16 1.22-.49 1.77c-.98-.96-2.15-1.43-3.52-1.43h-.32c-.23-1.1-.8-2.07-1.7-2.92z"/></g> </svg>';
        break;
      case 800:
        description = "Clear";
        icon = '<svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 48 48"><path fill="#fbf528" d="M23.999 4.001c.69 0 1.25.56 1.25 1.25v2.5a1.25 1.25 0 0 1-2.5 0v-2.5c0-.69.56-1.25 1.25-1.25m10.023 20.046c0 5.509-4.466 9.975-9.975 9.975c-5.51 0-9.976-4.466-9.976-9.975c0-5.51 4.466-9.976 9.976-9.976c5.509 0 9.975 4.466 9.975 9.976m8.728 1.203a1.25 1.25 0 0 0 0-2.5h-2.5a1.25 1.25 0 0 0 0 2.5zM23.999 39c.69 0 1.25.56 1.25 1.25v2.5a1.25 1.25 0 0 1-2.5 0v-2.5c0-.69.56-1.25 1.25-1.25M7.75 25.25a1.25 1.25 0 1 0 0-2.5h-2.5a1.25 1.25 0 0 0 0 2.5zM9.366 9.366a1.25 1.25 0 0 1 1.768 0l2.5 2.5a1.25 1.25 0 1 1-1.768 1.768l-2.5-2.5a1.25 1.25 0 0 1 0-1.768m1.768 29.269a1.25 1.25 0 1 1-1.768-1.768l2.5-2.5a1.25 1.25 0 1 1 1.768 1.768zm27.5-29.269a1.25 1.25 0 0 0-1.767 0l-2.5 2.5a1.25 1.25 0 0 0 1.768 1.768l2.5-2.5a1.25 1.25 0 0 0 0-1.768m-1.767 29.269a1.25 1.25 0 1 0 1.768-1.768l-2.5-2.5a1.25 1.25 0 1 0-1.768 1.768z"/></svg>';
        break;
      case 801:
      case 802:
      case 803:
      case 804:
        description = "Clouds";
        icon = '<svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 48 48"><path fill="#859488" d="M26.003 14.018c6.337 0 9.932 4.194 10.455 9.26h.16c4.078 0 7.384 3.298 7.384 7.365s-3.306 7.365-7.384 7.365h-21.23c-4.078 0-7.384-3.297-7.384-7.365s3.307-7.365 7.385-7.365h.16c.526-5.099 4.117-9.26 10.454-9.26M20 8a9.43 9.43 0 0 1 7.8 4.125a15 15 0 0 0-1.8-.107c-6.078 0-10.476 3.438-11.96 8.615l-.08.289l-.115.475l-.414.077a9.38 9.38 0 0 0-6.905 6.06a6.564 6.564 0 0 1 4.038-11.739h.142A9.44 9.44 0 0 1 20 8"/></svg>';
        break;
      default:
        description = "Unknown weather code";
        icon =  '<svg width="4em" height="4em" viewBox="0 0 512 512" style="color:currentColor" xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="512px" height="512px" viewBox="0 0 32 32" fill="currentColor" x="0" y="0" role="img" style="display:inline-block;vertical-align:middle" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path fill="currentColor" d="M8.75 15.54c-1.12-2.4-.95-4.66.52-6.79c1.03-1.48 2.6-2.39 4.73-2.72c.16-.04.34-.07.54-.08h.63c2.91.09 5.05 1.38 6.4 3.88c.64 1.18.8 2.48.48 3.91c-.26 1.13-.68 2.19-1.28 3.17c-1.29 2.01-2.63 3.64-4 4.88c-.07.07-.17.16-.3.26c-.46.35-.89.53-1.28.54s-.83-.14-1.31-.45a3.37 3.37 0 0 1-.74-.59c-1.96-2-3.43-4-4.39-6.01zm.11-2.21c.02.11.05.25.09.44s.07.32.09.4c.28 1.26.86 2.23 1.73 2.93c.88.7 1.96 1.11 3.26 1.23c.29.03.46.02.51-.03s.08-.23.09-.52c-.01-.08-.03-.21-.05-.39c-.02-.18-.04-.31-.06-.39c-.25-1.34-.88-2.32-1.9-2.93c-.18-.11-.39-.22-.62-.34s-.44-.2-.61-.27c-.17-.07-.4-.16-.69-.27c-.29-.11-.5-.19-.63-.25c-.16-.06-.42-.1-.8-.11c-.32 0-.46.17-.41.5zm6.8 4.4c-.02.31 0 .49.06.56c.07.07.25.08.55.04c.38-.04.78-.12 1.2-.22c1.07-.27 1.94-.84 2.62-1.71c.34-.41.6-.86.77-1.34s.34-1.05.47-1.72c.05-.23.04-.38-.03-.46c-.07-.08-.22-.11-.44-.08c-.59.1-1.12.23-1.59.4c-1.15.43-2.02 1.01-2.62 1.74c-.6.74-.93 1.66-.99 2.79z"/></g></svg></svg>';
    }
  
    return { description, icon };
  }
};