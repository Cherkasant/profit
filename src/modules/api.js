const url='http://localhost:9090'

export async function onSubmit(info){
  const response = await fetch(url + '/api/registration',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(info)
  })
  if (response.ok) {
    const data=await response.json();
    return data;
  } else {
    throw new Error(response.statusText);
  }
}

export async function getResponse(){
  const response = await fetch(url + '/api/ping ')
  if (response.ok) {
    const data=await response.json();
    return data;
  } else {
    throw new Error(response.statusText);
  }
}