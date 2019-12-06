angular.module('metrics', []).component('metrics', {
	templateUrl: 'app/components/metrics/metrics.template.html',
	controller: function metricsController($http){
		this.test = 'this is a test';
		
		$http.get('/top-tracks').then(response => {
			console.log('got tracks', response.data.items)
			this.topTracks = response.data.items.slice(0,20);
		})
		$http.get('/top-artists').then(response => {
			this.topArtists = response.data.items.slice(0,20);
		})
		$http.get('/recently-played').then(response => {
			this.recentlyPlayed = response.data.items;
		})
		$http.get('/top-artists50').then(response => {
			this.recentlyPlayed = response.data.items;
		})
		$http.get('/top-tracks50').then(response => {
			console.log('got tracks', response.data.items)
			this.topTracks50 = response.data.items;
		})
		// Load google charts
    
    $http.get('/top-tracks50').then(response => {
      // console.log(response)
      google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    var LowPop = 0;
      var LowMidPop=0;
      var MidPop =0;
      var MidHighPop=0;
      var HighPop = 0;
      response.data.items.forEach(track => {
        if(track.popularity > 80)
        {
          HighPop++;
        }
        else if(track.popularity >60)
        {
          MidHighPop++;
        }
        else if(track.popularity >40)
        {
          MidPop++;
        }
        else if(track.popularity >20)
        {
          LowMidPop++;
        }
        else
        {
          LowPop++;
        }
      })
    // Draw the chart and set the chart values
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Very Popular', 1],
      ['Popular', 1],
      ['Average', 1],
      ['Underground', 1],
      ['Very Underground', 1]
    ]);
      console.log(HighPop);

      // var SingleemployeeTraveld = Number(value.SingleemployeeTraveld);
      // var TwoemployeeTraveld = Number(value.TwoemployeeTraveld);
      // var ThreeemployeeTraveld = Number(value.ThreeemployeeTraveld);
      // var FouremployeeTraveld = Number(value.FouremployeeTraveld);
      // console.log(SingleemployeeTraveld);

      data = google.visualization.arrayToDataTable(
        [

          ['Task', 'Hours per Day'],
          ['Very Popular', Number(HighPop)],
          ['Popular', Number(MidHighPop)],
          ['Average', Number(MidPop)],
          ['Underground', Number(LowMidPop)],
          ['Very Underground', Number(LowPop)]
        ]
      );
  var options = {
        title: 'Track Popularity'
      };

      var chart = new google.visualization.PieChart(document.getElementById('popularity'));

      chart.draw(data, options);
}
      })
    $http.get('/top-tracks50').then(response => {
      // console.log(response)
      google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    var exp=0;
    var clean = 0;
      response.data.items.forEach(track => {
        if(track.explicit == true)
        {
          exp++;
        }
        else
        {
          clean++;
        }
      })
    // Draw the chart and set the chart values
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['explicit', 1],
      ['clean', 1],
    ]);

      // var SingleemployeeTraveld = Number(value.SingleemployeeTraveld);
      // var TwoemployeeTraveld = Number(value.TwoemployeeTraveld);
      // var ThreeemployeeTraveld = Number(value.ThreeemployeeTraveld);
      // var FouremployeeTraveld = Number(value.FouremployeeTraveld);
      // console.log(SingleemployeeTraveld);

      data = google.visualization.arrayToDataTable(
        [

          ['Task', 'Hours per Day'],
          ['explicit', Number(exp)],
          ['clean', Number(clean)]
        ]
      );
  var options = {
        title: 'Explicit or Not?'
      };

      var chart = new google.visualization.PieChart(document.getElementById('expl'));

      chart.draw(data, options);
}
      })
    $http.get('/top-artists50').then(response => {
      // console.log(response)
      google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    var LowPop = 0;
      var LowMidPop=0;
      var MidPop =0;
      var MidHighPop=0;
      var HighPop = 0;
      response.data.items.forEach(artist => {
        if(artist.popularity > 80)
        {
          HighPop++;
        }
        else if(artist.popularity >60)
        {
          MidHighPop++;
        }
        else if(artist.popularity >40)
        {
          MidPop++;
        }
        else if(artist.popularity >20)
        {
          LowMidPop++;
        }
        else
        {
          LowPop++;
        }
      })
    // Draw the chart and set the chart values
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Very Popular', 1],
      ['Popular', 1],
      ['Average', 1],
      ['Underground', 1],
      ['Very Underground', 1]
    ]);

      // var SingleemployeeTraveld = Number(value.SingleemployeeTraveld);
      // var TwoemployeeTraveld = Number(value.TwoemployeeTraveld);
      // var ThreeemployeeTraveld = Number(value.ThreeemployeeTraveld);
      // var FouremployeeTraveld = Number(value.FouremployeeTraveld);
      // console.log(SingleemployeeTraveld);

      data = google.visualization.arrayToDataTable(
        [

          ['Task', 'Hours per Day'],
          ['Very Popular', Number(HighPop)],
          ['Popular', Number(MidHighPop)],
          ['Average', Number(MidPop)],
          ['Underground', Number(LowMidPop)],
          ['Very Underground', Number(LowPop)]
        ]
      );
  var options = {
        title: 'Artist Popularity'
      };

      var chart = new google.visualization.PieChart(document.getElementById('ArtPop'));

      chart.draw(data, options);
}
      })
    $http.get('/top-tracks50').then(response => {
      // console.log(response)
      google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
      var One = 0;
      var Two=0;
      var Three =0;
      var Four=0;
      var Five = 0;
      var Six = 0;
      var Seven = 0;
      var Zero=0;
      response.data.items.forEach(track => {
        if(track.duration_ms > 420000)
        {
          Seven++;
        }
        if(track.duration_ms > 360000)
        {
          Six++;
        }
        if(track.duration_ms > 300000)
        {
          Five++;
        }
        if(track.duration_ms > 240000)
        {
          Four++;
        }
        else if(track.duration_ms >180000)
        {
          Three++;
        }
        else if(track.duration_ms >120000)
        {
          Two++;
        }
        else if(track.duration_ms >60000)
        {
          One++;
        }
        else
        {
          Zero++;
        }
      })
    // Draw the chart and set the chart values
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['>7 minutes', 1],
      ['6 minutes', 1],
      ['5 minutes', 1],
      ['4 minutes', 1],
      ['3 minutes', 1],
      ['2 minutes', 1],
      ['1 minute', 1],
      ['<1 minutes', 1]
    ]);

      // var SingleemployeeTraveld = Number(value.SingleemployeeTraveld);
      // var TwoemployeeTraveld = Number(value.TwoemployeeTraveld);
      // var ThreeemployeeTraveld = Number(value.ThreeemployeeTraveld);
      // var FouremployeeTraveld = Number(value.FouremployeeTraveld);
      // console.log(SingleemployeeTraveld);

      data = google.visualization.arrayToDataTable(
        [

          ['Task', 'Hours per Day'],
          ['>7 minutes', Number(Seven)],
          ['6 minutes', Number(Six)],
          ['5 minutes', Number(Five)],
          ['4 minutes', Number(Four)],
          ['3 minutes', Number(Three)],
          ['2 minutes', Number(Two)],
          ['1 minute', Number(One)],
          ['<1 minutes', Number(Zero)]
        ]
      );
  var options = {
        title: 'Track Length'
      };

      var chart = new google.visualization.PieChart(document.getElementById('length'));

      chart.draw(data, options);
}
      })
        $http.get('/top-artists50').then(response => {
      // console.log(response)
      google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
      var hipHop = 0;
      var indie = 0;
      var rock=0;
      var classical=0;
      var jazz=0;
      var pop=0;
      var country = 0;
      var folk=0;
      var RnB=0;
      var punk=0;
      var dance=0;
      response.data.items.forEach(artist => {
          if(artist.genres[0]){
          var low = artist.genres[0].toLowerCase();
          if((low.search("hip hop") != -1) || (low.search("rap")!=-1))
          {
            hipHop++;
          }
          else if(low.search("indie")!=-1)
          {
            indie++;
          }
          else if(low.search("rock")!=-1)
          {
            rock++;
          }
          else if(low.search("classical")!=-1)
          {
            classical++;
          }
          else if(low.search("jazz")!=-1)
          {
            jazz++;
          }
          else if(low.search("pop")!=-1)
          {
            pop++;
          }
          else if(low.search("country")!=-1)
          {
            country++;
          }
          else if(low.search("folk")!=-1 || low.search("americana") !=-1)
          {
            folk++;
          }
          else if(low.search("r&b")!=-1)
          {
            RnB++;
          }
          else if(low.search("punk")!=-1)
          {
            punk++;
          }
          else if(low.search("dance")!=-1)
          {
            dance++;
          }
          else
          {
            if(artist.genres[1]){
            // console.log("first");
            // console.log(low);
	            low = artist.genres[1].toLowerCase();
	            // console.log("second");
	            // console.log(low);
	            if((low.search("hip hop") != -1) || (low.search("rap")!=-1))
	            {
	              hipHop++;
	            }
	            else if(low.search("indie")!=-1)
	            {
	              indie++;
	            }
	            else if(low.search("rock")!=-1)
	            {
	              rock++;
	            }
	            else if(low.search("classical")!=-1)
	            {
	              classical++;
	            }
	            else if(low.search("jazz")!=-1)
	            {
	              jazz++;
	            }
	            else if(low.search("pop")!=-1)
	            {
	              pop++;
	            }
	            else if(low.search("country")!=-1)
	            {
	              country++;
	            }
	            else if(low.search("folk")!=-1)
	            {
	              folk++;
	            }
	            else if(low.search("r&b")!=-1)
	            {
	              RnB++;
	            }
	            else if(low.search("punk")!=-1)
	            {
	              punk++;
	            }
	            else if(low.search("dance")!=-1)
	            {
	              dance++;
	            }
	            else{
	              console.log("third");
	              console.log(artist.genres[2]);
	            }
	          }
          }
        }
      })
    // Draw the chart and set the chart values
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Indie', 1],
      ['Hip Hop/Rap', 1],
      ['Pop', 1],
      ['Rock', 1],
      ['Jazz', 1],
      ['Classical', 1],
      ['County', 1],
      ['Folk', 1],
      ['R&B', 1],
      ['Punk', 1],
      ['Dance', 1]
    ]);

      // var SingleemployeeTraveld = Number(value.SingleemployeeTraveld);
      // var TwoemployeeTraveld = Number(value.TwoemployeeTraveld);
      // var ThreeemployeeTraveld = Number(value.ThreeemployeeTraveld);
      // var FouremployeeTraveld = Number(value.FouremployeeTraveld);
      // console.log(SingleemployeeTraveld);

      data = google.visualization.arrayToDataTable(
        [

          ['Task', 'Hours per Day'],
          ['Indie', Number(indie)],
          ['Hip Hop/Rap', Number(hipHop)],
          ['Pop', Number(pop)],
          ['Rock', Number(rock)],
          ['Jazz', Number(jazz)],
          ['Classical', Number(classical)],
          ['Country', Number(country)],
          ['Folk', Number(folk)],
          ['R&B', Number(RnB)],
          ['Punk', Number(punk)],
          ['Dance', Number(dance)]
        ]
      );
  var options = {
        title: 'Genres'
      };

      var chart = new google.visualization.PieChart(document.getElementById('Genres'));

      chart.draw(data, options);
}
})
    var tracks = document.getElementById('top-tracks')
    var artists = document.getElementById('top-artists')
    var rec = document.getElementById('recently-played')
    var pop = document.getElementById('popularity-avg')
    var recs = document.getElementById('recent')
    $http.get('/top-artists').then(response => {
      console.log(response);
      var count = 1;
      artistHtml = ''
      response.data.items.forEach(artist => {
        artistHtml += '<li class=\"list-group-item\">';
        artistHtml += '<img src="' + artist.images[2].url + '" alt="album art" width="32" height="32">' +"  ";
        artistHtml += count + ': ' + artist.name;
        // artistHtml += ' Genre: ' + artist.genres[0];
        artistHtml += '</li>';
        count++;
      })
      artists.innerHTML = artistHtml;
    })

    $http.get('/top-tracks').then(response => {
      console.log(response)
      var trackHtml = '';
      var count = 1;
      response.data.items.forEach(track => {
        trackHtml += '<li class=\"list-group-item\">';
        trackHtml+='<img src="' + track.album.images[2].url + '" alt="album art" width="32" height="32">' +"  ";
        trackHtml+= count + ': ' + track.name;
        trackHtml += ' Album: ' + track.album.name;
        trackHtml += ' Artist: ' + track.artists[0].name;
        if(track.artists[1] !==null && track.artists[1] != undefined)
              {
                trackHtml +=", " +track.artists[1];
                if(track.artists[2] !==null && track.artists[2] != undefined)
                {
                  trackHtml +=", " +track.artists[2];
                }
              }
        trackHtml += '</li>';
        count++;
      })
      tracks.innerHTML = trackHtml;

    })
    $http.get('/recently-played').then(response => {

      console.log(response)
      var recHtml = '';
      var count = 1;
      console.log('1', response.data.items)
      response.data.items.sort(function(a,b){
        var nameA = a.played_at.toUpperCase(); // ignore upper and lowercase
        var nameB = b.played_at.toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
      })
        console.log('2', response.data.items)

      response.data.items.forEach(item => {
          recHtml += '<li class=\"list-group-item\">';
          recHtml+='<img src="' + item.track.album.images[2].url + '" alt="album art" width="32" height="32">' +"  ";
          recHtml+= count + ': ' + item.track.name + ": " + item.track.artists[0].name;
          if(item.track.artists[1] !==null && item.track.artists[1] != undefined)
          {
            recHtml +=", " +item.track.artists[1];
            if(item.track.artists[2] !==null && item.track.artists[2] != undefined)
            {
              recHtml +=", " +item.track.artists[2];
            }
          }
          // recHtml += ' Album: ' + item.album.name;
          recHtml += '</li>';
          count++;
      })

      rec.innerHTML = recHtml;
    })
	}
})