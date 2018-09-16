window.jQuery = function(nodeOrSelector){
  let nodes = {}
  nodes.addClass = function(){}
  nodes.html = function(){}
  return nodes
}
window.$ = window.jQuery

window.jQuery.ajax = function({url, method}){
  return new Promise(function(resolve, reject){
    let request = new XMLHttpRequest()
    request.open(method, url) // 配置request
    request.onreadystatechange = ()=>{
      if(request.readyState === 4){
        if(request.status >= 200 && request.status < 300){
          resolve.call(undefined, request.responseText)
        }else if(request.status >= 400){
          reject.call(undefined, request)
        }
      }
    }
    request.send()
  })
}

myButton.addEventListener('click',(e)=>{
  $.ajax({
    url:'/xxx',
    method:'get',
  }).then(
    (responseText)=>{
      console.log(responseText);
      return responseText
    },
    (request)=>{console.log('error');return '已经处理'}
  )
})