export function getConfig(data: object | JSON, method = 'post', url = '/diary/messages'){
    return {
      method: method,
      maxBodyLength: 5000,
      url: url,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    }
}