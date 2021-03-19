import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID F_e8thl9w4GO2JbSidISlitc9qlgRcC4OxXEQgwsmS0'
    }
});