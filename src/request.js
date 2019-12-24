import axios from 'axios';

const request = {
  getAll: cb => {
    axios.get('/all').then(result => {
      let info = result.data[0];
      cb(info);
    });
  }
};

export default request;
