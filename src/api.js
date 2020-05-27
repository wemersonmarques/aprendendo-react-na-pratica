import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.3.74:8081/job/Pipeline%20test/build',
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});

async function triggerBuild() {
    let data = new FormData();

    data.append('json', JSON.stringify({
      'parameter': [
        {
          'name': 'parametro',
          'value': 'teste'
        }
      ]
    }))

    const response = await api.post('', data);
}

export default api;

