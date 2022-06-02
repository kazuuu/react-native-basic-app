const images = {
    'Clear': require('../../assets/images/clear_sky.jpeg'),
    'Clouds': require('../../assets/images/broken_clouds.jpeg'),
    'Drizzle': require('../../assets/images/shower_rain.jpeg'),
    'Rain': require('../../assets/images/rain.jpeg'),
    'Thunderstorm': require('../../assets/images/thunderstorm.jpeg'),
    'Snow': require('../../assets/images/snow.jpeg'),
    'Mist': require('../../assets/images/mist.jpeg'),
}

export default function getImage(weather) {
    return images[weather];
}