export const locationsList = [
    {
        name: "Dallol",
        country: "NG",
        lat: 10.244667,
        lon: 11.7871911
    },
    {
        name: "Fairbanks",
        country: "US",
        lat: 64.837845,
        lon: -147.716675
    },
    {
        name: "London",
        country: "GB",
        lat: 51.5073219,
        lon: -0.1276474
    },
    {
        name: "Recife",
        country: "BR",
        lat: -8.0584933,
        lon: -34.8848193
    },
    {
        name: "Vancouver",
        country: "CA",
        lat: 49.2608724,
        lon: -123.113952
    },
    {
        name: "Yakutsk",
        country: "RU",
        lat: 62.027287,
        lon: 129.732086
    }
];

export const conditions = {
    condition: {
        day: {
            clean: { primary: '#57cadc', secondary: '#00d4ff' },
            partiallyClean: { primary: '#7aafb8', secondary: '#4da1b3' },
            cloudy: { primary: '#80abb3', secondary: '#60959f' },
            snowing: { primary: '#e6e6e6', secondary: '#c9cecf', main: true },
            raining: { primary: '#595959', secondary: '#808080' },
        },
        night: {
            clean: { primary: '#05162e', secondary: '#0f1824' },
            partiallyClean: { primary: '#2e3238', secondary: '#242b36' },
            cloudy: { primary: '#47494d', secondary: '#525559' },
            snowing: { primary: '#e6e6e6', secondary: '#c9cecf', main: true },
            raining: { primary: '#595959', secondary: '#808080' },
        }
    },
    1000: 'clean',
    1003: 'partiallyClean',
    1006: 'partiallyClean',
    1063: 'partiallyClean',
    1009: 'cloudy',
    1030: 'cloudy',
    1135: 'cloudy',
    1150: 'cloudy',
    1153: 'cloudy',
    1168: 'cloudy',
    1171: 'cloudy',
    1180: 'cloudy',
    1183: 'cloudy',
    1186: 'cloudy',
    1189: 'cloudy',
    1192: 'cloudy',
    1195: 'cloudy',
    1198: 'cloudy',
    1240: 'cloudy',
    1066: 'snowing',
    1069: 'snowing',
    1072: 'snowing',
    1114: 'snowing',
    1117: 'snowing',
    1147: 'snowing',
    1210: 'snowing',
    1213: 'snowing',
    1216: 'snowing',
    1219: 'snowing',
    1222: 'snowing',
    1225: 'snowing',
    1237: 'snowing',
    1252: 'snowing',
    1255: 'snowing',
    1258: 'snowing',
    1264: 'snowing',
    1279: 'snowing',
    1282: 'snowing',
    1087: 'raining',
    1201: 'raining',
    1204: 'raining',
    1207: 'raining',
    1243: 'raining',
    1246: 'raining',
    1261: 'raining',
    1273: 'raining',
    1276: 'raining',
}