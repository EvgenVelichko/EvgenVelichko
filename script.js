let lastRequestTime = 0;
const requestInterval = 5000;

function makeRequest() {
  const currentTime = new Date().getTime();
  if (currentTime - lastRequestTime > requestInterval) {
    
    lastRequestTime = currentTime;
  } else {
    alert("Слишком много запросов. Пожалуйста, подождите.");
  }
}
const ipRequests = {};

function checkIp(ip) {
  const currentTime = new Date().getTime();
  if (!ipRequests[ip]) {
    ipRequests[ip] = [];
  }
  ipRequests[ip].push(currentTime);

  
  ipRequests[ip] = ipRequests[ip].filter(time => currentTime - time < requestInterval);

  if (ipRequests[ip].length > 5) { 
    alert("Ваш IP заблокирован из-за подозрительной активности.");
    return false;
  }
  return true;
}

function makeRequest(ip) {
  if (checkIp(ip)) {
    
    console.log("Запрос выполнен");
  }
}
