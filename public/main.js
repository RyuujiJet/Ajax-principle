getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', './style.css') // readyState = 1
    request.onreadystatechange = () => {
      // 下载完成，但是有可能是成功（状态码2XX），也有可能是失败（状态码4XX，5XX）
      if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 300) {
          const style = document.createElement('style')
          style.innerHTML = request.response
          document.head.appendChild(style)
          console.log('成功了CSS')
        } else {
          alert('加载 CSS 失败')
        }
      }
    }
    request.send() // readyState = 2
  }
  
  getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', './2.js')
    request.onload = () => {
      const script = document.createElement('script')
      script.innerHTML = request.response
      document.body.appendChild(script)
      console.log('成功了JS')
    }
    request.onerror = () => {
      console.log('失败了JS')
    }
    request.send()
  }
  
  getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', './3.html')
    request.onload = () => {
      const div = document.createElement('div')
      div.innerHTML = request.response
      document.body.appendChild(div)
      console.log('成功了')
    }
    request.onerror = () => {
      console.log('失败了')
    }
    request.send()
  }
  
  getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', './4.xml')
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 300) {
          const dom = request.responseXML
          const text = dom.getElementsByTagName('warning')[0].textContent
          console.log(text.trim())
        } else {
          alert('页面加载失败')
        }
      }
    }
    request.send()
  }
  
  getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', './5.json')
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 300) {
          console.log(request.response)
          const object = JSON.parse(request.response)
          myName.textContent = object.name
        }
      }
    }
    request.send()
  }
  
  let n = 1
  getPAGE.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n + 1}.json`)
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 300) {
          const array = JSON.parse(request.response)
          array.forEach(item => {
            const li = document.createElement('li')
            li.textContent = item.id
            xxx.appendChild(li)
          })
          n += 1
        }
      }
    }
    request.send()
  }