
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  (g => {
    var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window;
    b = b[c] || (b[c] = {});
    var d = b.maps || (b.maps = {}),
      r = new Set,
      e = new URLSearchParams,
      u = () => h || (h = new Promise(async (f, n) => {
        await (a = m.createElement("script"));
        e.set("libraries", [...r] + "");
        for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]);
        e.set("callback", c + ".maps." + q);
        a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
        d[q] = f;
        a.onerror = () => h = n(Error(p + " could not load."));
        a.nonce = m.querySelector("script[nonce]")?.nonce || "";
        m.head.append(a);
      }));
    d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n));
  })({
    key: "AIzaSyBfRKVZ08er8Mn_lP7ONimTIaX3lbSS8wk",
    v: "beta"
  });
}
// Initialize and add the map
let map;

(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
    ({key: "AIzaSyBfRKVZ08er8Mn_lP7ONimTIaX3lbSS8wk", v: "beta"});

async function initMap() {
  // The location of festival
  const copenhagen = { lat: 55.6561589050293, lng: 12.578380355834961 };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // Create custom marker icons
    const allEvening = new google.maps.MarkerImage("/media/svg/Marker_Red.svg", null, null, null, new google.maps.Size(50, 50));
    const opningHours = new google.maps.MarkerImage("/media/svg/Marker_blue.svg", null, null, null, new google.maps.Size(50, 50));
    const popUp = new google.maps.MarkerImage("/media/svg/Marker_orange.svg", null, null, null, new google.maps.Size(50, 50));


  // The map, centered at festival
  map = new Map(document.getElementById("map"), {
    zoom: 13,
    center: copenhagen,
    mapId: "Light Festival",
  });

  const locations = [
    {
      position: { lat: 55.656055, lng: 12.526869 },
      title: "INSEKTERNES BLIK",
      who:"Artist",
      time: "TIME: All Evening",
      description: "Description 1",
      imageSrc: "/media/img/artpiece/boelgeland.webp",
      iconName: opningHours
    },
    {
      position: { lat: 55.657652, lng: 12.526905 },
      title: "SUNSET GARDEN",
      who:"Artist",
      time: "TIME: All Evening",
      description: "Description 2",
      imageSrc: "/media/img/artpiece/boelgeland.webp",
      iconName: allEvening,
    },
    {
      position: { lat: 55.658588, lng: 12.531126},
      title: "TRANSCENDING MESSAGES",
      who:"Artist",
      time: "TIME: All Evening",
      description: "Description 3",
      imageSrc: "/media/img/artpiece/boelgeland.webp",
      iconName: allEvening,
    },
    {
      position: { lat: 55.658768, lng: 12.529229 },
      title: "TIME & PLACE",
      who:"Artist",
      time: "TIME: All Evening",
      description: "Description 3",
      imageSrc: "/media/img/artpiece/boelgeland.webp",
      iconName: allEvening,
    },
    {
      position: { lat: 55.6723959457072, lng: 12.57881306808905 },
      title: "VULNUS",
      who:"Artist",
      time: "TIME: 18:00-22:00",
      description: "Description 3",
      imageSrc: "/media/img/artpiece/boelgeland.webp",
      iconName: opningHours,
    },
    {
      position: { lat: 55.671965, lng: 12.578452 },
      title: "HOOK-UP",
      who:"Artist",
      time: "TIME: 18:00-22:00",
      description: "Description 3",
      imageSrc: "/media/img/artpiece/boelgeland.webp",
      iconName: opningHours,
    },
    {
      position: { lat: 55.672187676258005, lng:12.579032826797745},
      title: "PIXEL POETRY",
      who:"Artist",
      time: "TIME: 18:00-22:00",
      description: "Description 3",
      imageSrc: "/media/img/artpiece/boelgeland.webp",
      iconName: opningHours,
    },
    {
      position: { lat: 55.67534982081628, lng:12.57018465528802},
      title: "WHITE BEAMS",
      who:"Artist",
      time: "TIME: All Evening",
      description: "Copenhagen City Hall + 11 other landmarks",
      imageSrc: "/media/img/artpiece/boelgeland.webp",
      iconName: allEvening,
    },
    {
      position: { lat: 55.678709362952034,  lng:12.593046226453039},
      title: "PÅ DEN ANDEN SIDE AF SOLEN",
      who:"Artist",
      time: "TIME: All Evening",
      description: "Copenhagen City Hall + 11 other landmarks",
      imageSrc: "/media/img/artpiece/boelgeland.webp",
      iconName: allEvening,
    },
    {
      position: { lat: 55.67755341491022, lng:12.590033526491277},
      title: "TERRA",
      who:"Artist",
      time: "TIME: All Evening",
      description: "Copenhagen City Hall + 11 other landmarks",
      imageSrc: "/media/img/artpiece/boelgeland.webp",
      iconName: allEvening,
    },
    {
      position: { lat: 55.67596956946815, lng:12.587712082277191},
      title: "WAVES",
      who:"Artist",
      time: "TIME: All Evening",
      description: "Copenhagen City Hall + 11 other landmarks",
      imageSrc: "/media/img/artpiece/boelgeland.webp",
      iconName: allEvening,
    },
    {
      position: { lat: 55.679409796931104, lng:12.59359668591422},
      title: "BLUE EARTH",
      who:"Artist",
      time: "TIME: All Evening",
      description: "Copenhagen City Hall + 11 other landmarks",
      imageSrc: "/media/img/artpiece/boelgeland.webp",
      iconName: allEvening,
    },
    {
      position: { lat: 55.674643996178794, lng:12.587526601249506},
      title: "ACID SUN",
      who:"Artist",
      time: "TIME: All Evening",
      description: "Copenhagen City Hall + 11 other landmarks",
      imageSrc: "/media/img/artpiece/boelgeland.webp",
      iconName: allEvening,
    },
    {
      position: { lat: 55.67255917395498, lng:12.584943439947326},
      title: "NAUTILUS",
      who:"Artist",
      time: "TIME: All Evening",
      description: "Copenhagen City Hall + 11 other landmarks",
      imageSrc: "/media/img/artpiece/boelgeland.webp",
      iconName: allEvening,
    },
    {
      position: { lat: 55.67524465457687,lng:12.576364531861886},
      title: "DANCING ON WATER",
      who:"Artist",
      time: "TIME: All Evening",
      description: "Copenhagen City Hall + 11 other landmarks",
      imageSrc: "/media/img/artpiece/boelgeland.webp",
      iconName: popUp,
    },
    {
      position: { lat: 55.67098707557233,lng:12.58013005224593},
      title: "WATER WALK",
      who:"Artist",
      time: "TIME: All Evening",
      description: "Copenhagen City Hall + 11 other landmarks",
      imageSrc: "/media/img/artpiece/boelgeland.webp",
      iconName: allEvening,
    },
    {
      position: { lat: 55.68002361102619,lng:12.586318297617977},
      title: " LES OISEAUX",
      who:"Artist",
      time: "TIME: All Evening",
      description: "Copenhagen City Hall + 11 other landmarks",
      imageSrc: "/media/img/artpiece/boelgeland.webp",
      iconName: popUp,
    },
  ];

  // Create markers and InfoWindows for each location
  const markers = [];
  const infoWindows = [];

 locations.forEach((locationData) => {
    const marker = new google.maps.Marker({
      position: locationData.position,
      map: map,
      title: locationData.title,
      icon: locationData.iconName,
    });

    const contentString = `
    <div>
      <h2>${locationData.title}</h2>
      <h3>${locationData.who}</h3>
      <h5>${locationData.time}</h5>
      <p>${locationData.description}</p>
      <img src="${locationData.imageSrc}" alt="Image Alt Text" width="200">
    </div>
  `;


    const infoWindow = new google.maps.InfoWindow({
      content: contentString,
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });

    marker.addListener("mouseover", () => {
      infoWindow.open(map, marker);
    });

    marker.addListener("mouseout", () => {
      infoWindow.close();
    });

    markers.push(marker);
    infoWindows.push(infoWindow);
  });
}

initMap();
