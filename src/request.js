import axios from 'axios';

const request = {
  getAll: cb => {
    axios.get('/all').then(result => {
      let info = result.data;
      cb(info);
    });
  },
  getStudents: (teacherid, cb) => {
    axios.get('/students', {params: {teacherid}}).then(result => {
      let info = result.data;
      cb(info);
    });
  }
};

export default request;
