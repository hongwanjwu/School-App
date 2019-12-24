import axios from 'axios';

const request = {
  getAll: cb => {
    axios.get('/all').then(result => {
      let info = result.data;
      cb(info);
    });
  }
};

export default request;
