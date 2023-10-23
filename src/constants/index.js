export const options = {
  method: 'GET',
  url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
  params: {
    bl_lat: '51.535872',
    bl_lng: '3.45611',
    tr_lat: '53.442947',
    tr_lng: '6.814157',
    limit: '300'
  },
    headers: {
      'X-RapidAPI-Key': '9ecd4f6dafmsh09b03979e4a681ap1039fcjsne3cdf9f6b019',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };

  export const options2 = {
    headers: {
      'X-RapidAPI-Key': '9ecd4f6dafmsh09b03979e4a681ap1039fcjsne3cdf9f6b019',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };