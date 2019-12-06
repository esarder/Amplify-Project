angular.module('amplifyApp').service('playerService', function($http){
	this.token = '';
	this.device_id = '';
	this.ready = false;
	
	this.init = () => {
		window.onSpotifyWebPlaybackSDKReady = async () => {
	    console.log('player going')
	    this.token = (await $http.get('/getSpotifyAuthToken')).data;
	    console.log('auth token', this.token)
	    const player = new Spotify.Player({
	      name: 'Web Playback SDK Quick Start Player',
	      getOAuthToken: cb => { cb(this.token); }
	    });

	    // Error handling
	    player.addListener('initialization_error', ({ message }) => { console.error(message); });
	    player.addListener('authentication_error', ({ message }) => { console.error(message); });
	    player.addListener('account_error', ({ message }) => { console.error(message); });
	    player.addListener('playback_error', ({ message }) => { console.error(message); });

	    // Playback status updates
	    player.addListener('player_state_changed', state => { console.log('state change', state); });

	    // Ready
	    player.addListener('ready', ({ device_id }) => {
	    	this.device_id = device_id
	    	this.ready = true;
	      console.log('Ready with Device ID', device_id);
	      this.setActiveDevice(device_id)
	    });

	    // Not Ready
	    player.addListener('not_ready', ({ device_id }) => {
	    	this.device_id = device_id;
	    	this.ready = false;
	      console.log('Device ID has gone offline', device_id);
	    });

	    // Connect to the player!
	    player.connect();
	  };

	}

	this.playTrack = async (id) => {
    if(!this.token){
	    this.token = (await $http.get('/getSpotifyAuthToken')).data;
    }
    $http.put('https://api.spotify.com/v1/me/player/play', {uris: ['spotify:track:'+id]}, {headers: { 'Authorization': 'Bearer ' + this.token}})
    .catch(async error => {
    	console.log('playTrack error', error)
    	if(error.data.error.reason == 'NO_ACTIVE_DEVICE'){
    		await this.setActiveDevice(this.device_id)
    		this.playTrack(id)
    	}
    })
  }
  this.setActiveDevice = async (device_id) => {
  	console.log('setting active', device_id)
  	if(!this.token){
	    this.token = (await $http.get('/getSpotifyAuthToken')).data;
  	}
  	return new Promise((resolve, reject) => {
  		$http.put('https://api.spotify.com/v1/me/player', {device_ids: [device_id]}, {headers: {'Authorization': 'Bearer ' + this.token}})
  		.then(res => {
  			resolve(res)
  		})
  	})
  }
  this.init()
})